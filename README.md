# Resume Site

This project is an Astro-based multilingual resume website.

## Data Source Priority

Pages now prioritize **structured data** (not markdown body blocks) for rendering:

- About: `src/pages/[lang]/index.astro`
- Experience: `src/pages/[lang]/experience.astro`
- Education: `src/pages/[lang]/education.astro`
- Publications: `src/pages/[lang]/publications.astro`

## Fast Editing Workflow

You have two edit layers:

1. Base data (full dataset):
- `src/resume-data.ts`

2. Per-language overrides (recommended for daily edits):
- `src/resume-overrides/en.ts`
- `src/resume-overrides/zh.ts`
- `src/resume-overrides/zh-hant.ts`
- `src/resume-overrides/de.ts`
- `src/resume-overrides/fr.ts`
- index aggregator: `src/resume-overrides/index.ts`

Each language file supports partial edits, for example in `src/resume-overrides/fr.ts`:

```ts
export const frOverride = {
	profile: { role: 'Doctorant' },
	education: {
		summary: ['Formation centrée sur ...'],
	},
};
```

Unspecified fields keep base values from `src/resume-data.ts`.

## Commands

- `npm run dev`: run local development server
- `npm run build`: build static site
- `npm run preview`: preview build output
