# Resume — 何昊程 / Haocheng He

Multilingual resume website + LaTeX resume templates.

## Project Structure

```
├── src/                          # Astro website
│   ├── resume-data.ts            # Base resume data (template)
│   ├── resume-overrides/         # Per-language content overrides
│   │   ├── en.ts                 # English
│   │   ├── zh.ts                 # 简体中文
│   │   ├── zh-hant.ts            # 繁體中文
│   │   ├── de.ts                 # Deutsch
│   │   └── fr.ts                 # Français
│   ├── pages/                    # Astro pages
│   ├── components/               # UI components
│   └── config.ts                 # Site config
├── latex-templates/              # LaTeX resume (ATS-friendly)
│   ├── resume-en.tex             # English resume
│   ├── resume-zh.tex             # 中文简历
│   ├── compile.sh                # Build script (XeLaTeX)
│   ├── resume-en.pdf             # Compiled English PDF
│   └── resume-zh.pdf             # 编译后的中文 PDF
└── README.md
```

## Quick Start

### Website

```bash
npm install
npm run dev          # Local dev server
npm run build        # Build static site
npm run preview      # Preview build output
```

### LaTeX Resume

```bash
bash latex-templates/compile.sh   # Compile both resumes (requires XeLaTeX + Noto CJK fonts)
```

**Dependencies:** XeLaTeX, fontspec, xeCJK, Noto Serif/Sans CJK SC, Liberation fonts.

## Editing Content

### Website (recommended: per-language overrides)

Edit the override files in `src/resume-overrides/`:

- `zh.ts` — 简体中文
- `en.ts` — English
- `zh-hant.ts` — 繁體中文
- `de.ts` — Deutsch
- `fr.ts` — Français

Each file supports partial edits — unspecified fields inherit from `src/resume-data.ts`.

### LaTeX Resume

Edit `latex-templates/resume-zh.tex` (中文, primary) and `latex-templates/resume-en.tex` (English). Keep both in sync.

## Languages

| Language | Website | LaTeX |
|----------|---------|-------|
| 简体中文 | ✅ | ✅ |
| English | ✅ | ✅ |
| 繁體中文 | ✅ | — |
| Deutsch | ✅ | — |
| Français | ✅ | — |

## License

Private — not for distribution.
