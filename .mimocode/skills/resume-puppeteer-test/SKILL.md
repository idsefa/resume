---
name: resume-puppeteer-test
description: Visual testing with puppeteer for the Astro resume site. Handles Chrome launch, embedded HTTP server, screenshot capture, element verification, and accessibility checks.
---

# Puppeteer Visual Testing for Resume Site

Reusable workflow for testing the Astro-based resume site locally and on live deployment using puppeteer-core.

## Prerequisites

- puppeteer-core installed at `/tmp/puppeteer-test/node_modules/`
- Chrome at `/home/h/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome`
- Site built: `npm run build` in `/home/h/code/resume/`

## Embedded Server + Puppeteer Pattern

Always embed the HTTP server in the same node process as puppeteer. Background servers get killed between bash invocations.

```js
const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const DIST = '/home/h/code/resume/dist';
const MIME = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.png':'image/png','.svg':'image/svg+xml'};
const PORT = 4370;

const server = http.createServer((req, res) => {
  let fp = path.join(DIST, req.url === '/' ? '/index.html' : req.url);
  if (!fs.existsSync(fp) || fs.statSync(fp).isDirectory()) fp = path.join(fp, 'index.html');
  const ext = path.extname(fp);
  res.writeHead(200, {'Content-Type': MIME[ext] || 'application/octet-stream'});
  fs.createReadStream(fp).pipe(res);
});

server.listen(PORT, async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/home/h/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome',
    args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
  });
  const page = await browser.newPage();
  await page.setViewport({width: 1280, height: 900});
  await page.goto(`http://127.0.0.1:${PORT}/en/`, {waitUntil: 'networkidle0', timeout: 15000});

  // ... test logic here ...

  await browser.close();
  server.close();
});
```

## Testing Live Site (no embedded server needed)

```js
const puppeteer = require('puppeteer-core');
const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: '/home/h/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome',
  args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
});
const page = await browser.newPage();
await page.setViewport({width: 1280, height: 900});
await page.goto('https://cv.idsefa.top/en/', {waitUntil: 'networkidle0', timeout: 20000});
```

## Common Verification Patterns

### Check element exists and is visible
```js
const el = await page.$('.selector');
const box = el && await el.boundingBox();
// box is null if element is hidden or doesn't exist
```

### Check computed styles
```js
const styles = await page.evaluate(() => {
  const el = document.querySelector('.selector');
  return el ? getComputedStyle(el) : null;
});
```

### Accessibility tree snapshot
```js
const snapshot = await page.accessibility.snapshot({interestingOnly: false});
```

### Content overlap diagnosis
```js
const topEl = await page.evaluate((x, y) => {
  const el = document.elementFromPoint(x, y);
  return el ? el.className + ' | ' + el.tagName : null;
}, 500, 300);
```

### Screenshot
```js
await page.screenshot({path: '/tmp/test-screenshot.png', fullPage: true});
```

## Key Selectors for Resume Site

| Element | Selector |
|---------|----------|
| Theme picker | `.theme-picker`, `#theme-toggle` |
| Language menu | `.lang-menu`, `#lang-toggle` |
| Role pills | `.nav-role-pills` |
| Layout switcher | `#layoutSwitcher` |
| PDF export button | `#pdfExportBtn` |
| Sidebar | `.sidebar`, `body.layout-sidebar .sidebar` |
| Timeline items | `article.timeline-item` |
| Timeline bullets | `.timeline-bullets li` |
| Fact cards | `.fact-card` |
| Highlight cards | `.highlight-card` |

## Pitfalls (from MEMORY-frontend.md)

- `--no-sandbox` is required on Linux with AppArmor restrictions
- Background servers get killed between bash invocations — use embedded server pattern
- Browser cache is #1 suspect when "fix deployed but still broken" — check `last-modified` header
- `page.evaluate(() => el.click())` is more reliable than `page.click(selector)` for small elements
- Use `browser.createBrowserContext()` for tests that need clean localStorage state

## Execution

Write the test script to `/tmp/puppeteer-test/test-*.js` and run with:
```bash
cd /tmp/puppeteer-test && node test-*.js
```

Or use inline `node -e "..."` for quick one-off checks.
