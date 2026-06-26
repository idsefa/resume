# REPORT-2: Code and Security Review

Scope: all `src/**/*.ts` and `src/**/*.astro` files.

Validation run:
- `npx astro check`: 0 errors; reported unused-symbol warnings and Astro inline-script hints.
- `npm run build`: passed; generated 31 static pages including all 5 locales (`en`, `zh`, `zh-hant`, `de`, `fr`).
- `npm audit --audit-level=low`: failed with 5 vulnerabilities.

## CODE_ISSUES

1. `src/layouts/Layout.astro:282-638` contains a large inline client script that owns theme, language menu, sidebar, PDF, role switching, and layout switching. Astro reports this as effectively `is:inline` because of `define:vars`, so it is not processed like a normal bundled script. This reduces type checking, reuse, and CSP compatibility.

2. `src/components/ThemeEffects.astro:7-573` contains a second very large client script. It is maintainable today only because it is self-contained, but it should be split into a typed client module for cursor, parallax, reveal, and card-drag effects.

3. `src/layouts/Layout.astro:16` imports `ROLE_THEME_MAP` but never uses it. The same map is duplicated inside the inline script at `src/layouts/Layout.astro:294-304`, creating drift risk from the exported source of truth at `src/config/themes.ts:29-38`.

4. Dead or unused exports/config:
   - `src/config.ts:37-38` exports `RESUME_ROLES` and `ResumeRole`, but no source file consumes them.
   - `src/resume.config.ts:12` exports `SECTION_ORDER`, but no source file consumes it.
   - `src/resume-overrides/roles/index.ts:659` exports `ROLE_IDS`, but no source file consumes it.
   - `src/config/themes.ts:14` defines `countUp` in `ThemeEffects`; it is set in every theme but no runtime code uses it.

5. Astro/TypeScript checker warnings:
   - `src/components/ThemeToggle.astro:5` imports unused `DEFAULT_THEME` and `STORAGE_KEY`.
   - `src/components/ThemeEffects.astro:125` declares `glitchActive` but only writes it; no read path exists.
   - `src/components/ThemeEffects.astro:346` declares `isActive` and never uses it.
   - `src/layouts/Layout.astro:422` declares unused callback parameter `i`.

6. `mergeDeep` at `src/resume-data.ts:71-92` works for the current override model, including full-array replacement. I did not find a current data-breaking merge bug. Risks to document or harden:
   - Arrays are always replaced wholesale at `src/resume-data.ts:76-78`; partial array-item overrides are impossible.
   - It accepts unknown object keys and assigns them into a plain object at `src/resume-data.ts:83-87`; this is fine for trusted TS literals but should not be reused for untrusted JSON without key validation/prototype-pollution guards.
   - It returns original object/array references when no override is present at `src/resume-data.ts:72-73`, so callers must treat merged data as immutable.

7. i18n data coverage is mostly type-safe: `LANGUAGES` covers 5 locales at `src/config.ts:14`, and `Record<Lang, ...>` is used for UI, section metadata, content overrides, and generated paths. The renderer still has non-localized control text:
   - `src/layouts/Layout.astro:165-180` hard-codes layout labels and PDF text in English.
   - `src/layouts/Layout.astro:226` and `src/layouts/Layout.astro:240` hard-code sidebar labels `"Navigation"` and `"Links"`.
   - `src/components/PageShell.astro:105` hard-codes `"Scroll"`.
   - `src/pages/[lang]/pdf.astro:41` hard-codes `"Resume"` in the title and `src/pages/[lang]/pdf.astro:110` hard-codes `"Print / Save as PDF"`.
   - `src/components/ThemeToggle.astro:31` only supports English and Chinese theme labels; German/French fall back to English because `Theme` only has `label` and `labelZh`.

8. Role switcher i18n ignores existing German/French role data:
   - Initial selected label only handles Chinese vs English at `src/layouts/Layout.astro:151`.
   - Role menu options only handle Chinese vs English at `src/layouts/Layout.astro:157`.
   - Runtime selected role label ignores `labelDe` and `labelFr` at `src/layouts/Layout.astro:418`, despite data existing in `src/resume-overrides/roles/index.ts:5-6` and populated from `src/resume-overrides/roles/index.ts:42-43`.

9. Several internal links ignore `import.meta.env.BASE_URL`, unlike the main nav. This will break if deployed under a subpath:
   - Root redirect uses `/en/` at `src/pages/index.astro:8-13`.
   - CTAs use absolute `/${lang}/...` at `src/pages/[lang]/index.astro:40`, `src/pages/[lang]/experience.astro:36`, `src/pages/[lang]/education.astro:36`, and `src/pages/[lang]/publications.astro:36`.
   - PDF export opens `/${lang}/pdf` at `src/layouts/Layout.astro:373-374`.

## SECURITY_ISSUES

1. `npm audit --audit-level=low` reports 5 vulnerabilities:
   - `astro <=7.0.0-beta.6`: high severity advisories including server island replay, reflected XSS via slot name, XSS via spread prop attribute names, and host-header SSRF in prerendered error-page fetch.
   - `devalue 5.6.3 - 5.8.0`: high severity DoS via sparse array deserialization.
   - `vite 7.0.0 - 7.3.3`: high severity Windows-related NTLM hash disclosure and `server.fs.deny` bypass.
   - `js-yaml <=4.1.1`: moderate severity quadratic-complexity DoS.
   - `esbuild 0.27.3 - 0.28.0`: audit reports a low-severity dev-server arbitrary file-read advisory on Windows.

2. `_blank` link checks:
   - `src/layouts/Layout.astro:198`, `src/layouts/Layout.astro:245`, and `src/layouts/Layout.astro:269` correctly use `rel="noopener noreferrer"`.
   - `src/pages/[lang]/publications.astro:56` uses `target="_blank" rel="noreferrer"` but not explicit `noopener`. Modern browsers generally treat `noreferrer` as opener protection, but add `noopener` for policy consistency and static checker compatibility.
   - `src/layouts/Layout.astro:374` calls `window.open(..., '_blank')` without a `noopener` feature string. It is same-origin today, but should still use `window.open(url, '_blank', 'noopener')` or an anchor with `rel`.

3. `set:html` check:
   - The only `set:html` is JSON-LD at `src/layouts/Layout.astro:111-116`.
   - Current inputs are static `SITE` values and generated URLs, so I did not find a direct user-controlled XSS path.
   - It still creates inline script surface area and Astro reports the script as inline; a future change that includes untrusted profile data here should escape/serialize defensively and keep JSON-LD data constrained.

4. `JSON.parse` check:
   - `src/layouts/Layout.astro:378` parses `roleVariantsJson` without `try/catch` or shape validation. The value is build-generated, so exploitability is low, but parse failure would stop all subsequent role/layout script logic.

5. CSP check:
   - No Content Security Policy was found in `astro.config.mjs`, `public/`, `.github/`, or source meta tags.
   - The app currently relies on inline scripts at `src/pages/index.astro:13`, `src/pages/[lang]/navigator.astro:33-39`, `src/layouts/Layout.astro:111-116`, and `src/layouts/Layout.astro:282-638`, plus Google Fonts at `src/layouts/Layout.astro:93-95`. A strict CSP would require moving scripts to bundled modules or adding hashes/nonces and explicit `font-src`/`style-src` rules.

## FUNCTIONALITY

1. Role-specific bullet overrides can miss the visible timeline copy. `PageShell` renders the slot into multiple variant wrappers at `src/components/PageShell.astro:148-152`. The role script then selects all `.timeline-item` nodes at `src/layouts/Layout.astro:495`, computes `origIdx` from the global NodeList index at `src/layouts/Layout.astro:498`, and only checks whether the item is hidden later at `src/layouts/Layout.astro:501-511`. If hidden timeline copies appear before the visible copy, visible items can map to `undefined` role bullets and remain unchanged.

2. Language switching drops the current page. The language menu always links to `${base}${code}/` at `src/layouts/Layout.astro:188`; switching from `/fr/experience` to German sends the user to `/de/` instead of `/de/experience`.

3. Canonical and alternate links can be wrong for non-section pages:
   - `src/layouts/Layout.astro:97-101` builds URLs from `pageKey`, not the actual route.
   - `src/pages/[lang]/navigator.astro:23` passes `pageKey="about"`, so the navigator page canonical/alternates point to the localized home page instead of `/navigator`.
   - `src/layouts/Layout.astro:101` sets `x-default` to the current language URL instead of the default locale URL.

4. `src/config.ts:6` sets `NAVIGATION_SITE_URL` to `https://nav.example.com`. This affects the social navigation link at `src/config.ts:11` and the auto-redirect in `src/pages/[lang]/navigator.astro:32-38`; if this is not intentional, production users will be sent to a placeholder domain.

5. The root redirect at `src/pages/index.astro:8-13` uses absolute `/en/`, so it ignores `BASE_URL`. This is fine for root-domain hosting, but inconsistent with the rest of the Astro config.

6. Build functionality is otherwise healthy: `npm run build` generated all `en`, `zh`, `zh-hant`, `de`, and `fr` pages for home, education, experience, navigator, PDF, and publications.

## RECOMMENDATIONS (P0/P1/P2)

P0:
- None found. I did not identify an immediate source-level XSS with current trusted data, and the site builds successfully.

P1:
- Run `npm audit fix` or manually upgrade `astro`, `vite`, `devalue`, `js-yaml`, and `esbuild` to patched versions; rerun `npm audit --audit-level=low`.
- Fix role bullet updates by processing each visible `.timeline` independently, or by filtering hidden wrappers before calculating role bullet indices.
- Replace `NAVIGATION_SITE_URL = 'https://nav.example.com'` with the real navigation URL or remove the redirect page/link until configured.
- Add explicit `noopener` to `src/pages/[lang]/publications.astro:56` and use `noopener` with the PDF `window.open` call.
- Add a CSP deployment strategy. The practical first step is to move inline behavior into bundled scripts, then add CSP headers via the hosting platform.

P2:
- Split `Layout.astro` and `ThemeEffects.astro` client logic into typed modules. Keep Astro components focused on markup and data serialization.
- Use one source of truth for role-to-theme mapping; remove the duplicate inline `ROLE_THEME_MAP`.
- Remove unused exports/imports and dead state flagged by `astro check`.
- Complete i18n for role labels, layout controls, sidebar labels, PDF controls, and theme labels across `en`, `zh`, `zh-hant`, `de`, and `fr`.
- Preserve current path when switching languages and correct canonical/hreflang generation, including `x-default`.
- Use `import.meta.env.BASE_URL` consistently for root redirects, CTAs, and PDF export.
- Document `mergeDeep` semantics or harden it if it will ever merge untrusted data.
