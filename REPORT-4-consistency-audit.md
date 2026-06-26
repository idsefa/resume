# Resume Consistency Audit

## ISSUES FOUND

- `src/resume-overrides/zh-hant.ts:10` - Traditional Chinese bio still says `手上也有一些專利`. This is outside the publications section and appears to be a leftover patent claim. Suggested fix: remove the patent sentence or replace it with a non-patent summary of AI/hardware/project work.

- `src/resume-overrides/de.ts:10` - German bio still says `Ein paar Patente dabei entstanden`. This is outside the publications section and appears to be a leftover patent claim. Suggested fix: remove that sentence or replace it with a non-patent accomplishment.

- `src/resume-overrides/fr.ts:10` - French bio still says `Quelques brevets déposés en chemin`. This is outside the publications section and appears to be a leftover patent claim. Suggested fix: remove that sentence or replace it with a non-patent accomplishment.

- `src/resume-overrides/zh.ts:10` - Simplified Chinese bio still says `手上也有一些专利`. This is outside the publications section and appears to be a leftover patent claim. Suggested fix: remove the patent sentence or replace it with a non-patent summary of AI/hardware/project work.

- `src/resume-overrides/en.ts:10` - English bio still says `Filed a few patents along the way`. This is outside the publications section and appears to be a leftover patent claim. Suggested fix: remove that sentence or replace it with a non-patent accomplishment.

- `src/resume-overrides/zh-hant.ts:73` - Wuxian Hongyin experience bullet still says `實習期間出了 2 項專利，一個做流程優化，一個做 AI 排程`. This is directly inside the experience section and should be removed. Suggested fix: delete the bullet or replace it with a verified non-patent Wuxian accomplishment, consistent with the zh/en/de/fr versions.

- `src/resume-overrides/roles/index.ts:405` - AI/Data role variant Traditional Chinese experience summary still says `撰寫專利`. Suggested fix: match the Simplified Chinese summary at line 404 by saying internal tools/workflow/prompt-engineering work instead of patent writing.

- `src/resume-overrides/roles/index.ts:406` - AI/Data role variant German experience summary still says `schrieb Patente`. Suggested fix: replace with internal tools, SDK documentation, or prompt-engineering acceleration.

- `src/resume-overrides/roles/index.ts:407` - AI/Data role variant French experience summary still says `rédigé des brevets`. Suggested fix: replace with internal tools, SDK documentation, or prompt-engineering acceleration.

- `src/resume-overrides/roles/index.ts:444` - Quant role English experience summary says `patent-driven AI projects`. This is outside publications and reintroduces patent framing into experience. Suggested fix: change to `AI deployment projects`, `Huawei Ascend AI projects`, or similar.

## VERIFIED OK

- No remaining `航空工程` matches were found under `src/resume-overrides/` or `latex-templates/`. Chinese education wording uses `民航工程` / `民航工程與營運管理` where applicable.

- `src/resume-overrides/de.ts:33-35`, `src/resume-overrides/fr.ts:33-35`, and `src/resume-overrides/zh-hant.ts:32-35` experience summaries do not mention patents.

- `src/resume-overrides/de.ts:41-46` and `src/resume-overrides/fr.ts:41-46` Wuxian Hongyin experience bullets do not mention patents.

- `src/resume-overrides/de-career.ts:20-28`, `src/resume-overrides/fr-career.ts:20-28`, and `src/resume-overrides/zh-hant-career.ts:20-28` are consistent: their experience summaries do not mention patents, and their education summaries consistently describe the PolyU aviation/civil-aviation master's plus GDUT IE bachelor's and law minor.

- Patent references in publication sections were present and intentionally left as OK, including `src/resume-overrides/de.ts:105-120`, `src/resume-overrides/fr.ts:105-123`, `src/resume-overrides/zh.ts:104-110`, and `src/resume-overrides/zh-hant.ts:106-122`.

- `latex-templates/resume-en.tex` uses correct company/organization names: Shenzhen Wuxian Hongyin at line 73, GDUT with Guangzhou Baiyun Airport at line 83, Midea at line 93, and LiuGong at line 101. No `Supply-Chain Analytics Co.` placeholder was found.

- `latex-templates/resume-zh.tex` uses correct company/organization names: 深圳市五线宏音科技有限公司 at line 79, 广东工业大学（联合广州白云国际机场） at line 88, 美的集团 at line 97, and 广西柳工机械股份有限公司 at line 105. No generic placeholder company names were found.

- Education dates match the requested values in the LaTeX templates: PolyU `Sep 2025 -- Jan 2027` in `latex-templates/resume-en.tex:54`, GDUT `Sep 2021 -- Jun 2025` in `latex-templates/resume-en.tex:60`, PolyU `2025年9月 -- 2027年1月` in `latex-templates/resume-zh.tex:60`, and GDUT `2021年9月 -- 2025年6月` in `latex-templates/resume-zh.tex:66`.

- Education dates also match across the main language override files: `en.ts`, `de.ts`, `fr.ts`, `zh.ts`, and `zh-hant.ts` all use the requested PolyU and GDUT date ranges, localized as appropriate.

## SUMMARY

The main consistency problems are leftover patent claims outside publication sections. The highest-priority issue is `src/resume-overrides/zh-hant.ts:73`, because it is still inside the Wuxian Hongyin experience bullets. German and French base experience summaries are clean, but their bios still mention patents. The AI/Data role variant summaries in Traditional Chinese, German, and French also still mention patent writing, while the English Quant role summary still says `patent-driven AI projects`.

The `航空工程` to `民航工程` Chinese wording change appears complete. The LaTeX templates have correct company names and education dates, with no generic placeholder company names found.
