---
description: Build the resume site, push to trigger GitHub Pages deploy, poll for completion, and verify the live site has expected elements.
---

# Deploy & Verify

Build the Astro resume site, push to main, poll GitHub Actions for deployment completion, and verify the live site.

## Steps

1. Build locally:
   ```bash
   cd /home/h/code/resume && npm run build 2>&1 | tail -10
   ```
   If build fails, stop and fix errors before proceeding.

2. Commit and push (if there are uncommitted changes):
   ```bash
   git add -A && git commit -m "$ARGUMENTS" && git push
   ```
   Follow project rules: conventional commit format, English, no emoji.

3. Wait for GitHub Actions deployment (poll every 10-15s):
   ```bash
   sleep 15 && curl --noproxy '*' -sL "https://api.github.com/repos/idsefa/resume/actions/runs?per_page=1" 2>&1 | python3 -c "
   import sys, json
   data = json.loads(sys.stdin.read())
   run = data['workflow_runs'][0]
   print(f'Status: {run[\"status\"]}, Conclusion: {run.get(\"conclusion\", \"pending\")}')
   "
   ```
   Repeat until `status: completed` and `conclusion: success`. If `conclusion: failure`, check the run URL for errors.

4. Verify live site has expected CSS hash (confirms new deployment):
   ```bash
   sleep 10 && curl --noproxy '*' -sL https://cv.idsefa.top/en/ 2>&1 | grep -oP 'href="/_astro/resume-pages[^"]*"' | head -1
   ```

5. Verify live site has key elements:
   ```bash
   sleep 5 && curl --noproxy '*' -sL https://cv.idsefa.top/en/ 2>&1 | grep -oE '(lang-menu|lang-toggle|theme-picker|theme-toggle|nav-role-pills|layoutSwitcher|pdfExportBtn)' | sort -u
   ```

6. (Optional) Run puppeteer visual check — see `resume-puppeteer-test` skill.

## Notes

- GitHub Pages deploy can fail transiently — trigger redeploy with: `git commit --allow-empty -m "chore: trigger redeploy" && git push`
- Live site domain: `cv.idsefa.top`
- GitHub Actions API: `https://api.github.com/repos/idsefa/resume/actions/runs`
- Use `--noproxy '*'` on all curl commands (local proxy env var may interfere)
- CSS hash changes on every build — if hash is the same as before push, deployment hasn't updated yet
