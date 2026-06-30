# Final Review Findings

Files reviewed completely:
- `latex-templates/resume-en.tex`
- `latex-templates/resume-zh.tex`

Commands run:
- `pdftotext -layout latex-templates/resume-zh.pdf -`
- `pdftotext -layout latex-templates/resume-en.pdf -`

Actual issues found below. No EN/ZH mismatch was found in dates, GPAs, patent/copyright numbers, or numeric metrics such as 58% to 70%, 8%, 1.342, 20 to 18, 21 sensors, 22 improvements, 4 scenarios, or 5 algorithms.

## 1. Content Consistency

1. Section scope mismatch:
   - EN `resume-en.tex:79`: `Experience`
   - ZH `resume-zh.tex:85`: `实习经历`
   - `实习经历` means internship experience, while the English header is broader. This is inconsistent because the section also includes Research Assistant work (`resume-en.tex:89-94`, `resume-zh.tex:96-101`).

2. AI Engineer Assistant content does not match:
   - ZH `resume-zh.tex:89` includes an Ascend 310B smart piano project, hardware PCB testing, CPLD, STM32, piano motor testing, full-bridge motor driver schematic/layout work, and STM32 firmware development.
   - EN `resume-en.tex:81-85` has no equivalent for that entire hardware/project bullet.

3. AI Engineer Assistant technical details are missing in EN:
   - ZH `resume-zh.tex:90` specifies a camera plus Ascend-chip piano fingering recognition system.
   - EN `resume-en.tex:83` says only `Ascend-based piano fingering recognition system`, omitting the camera component.

4. EN adds a responsibility not present in ZH:
   - EN `resume-en.tex:84`: `procurement`
   - ZH `resume-zh.tex:91` lists Ubuntu server operations, Huawei switch/router configuration, administration, and technical interviews, but not procurement.

5. Skills mismatch:
   - EN `resume-en.tex:130`: `Prompt Eng.`
   - ZH `resume-zh.tex:137`: `Prompt Engineering`
   - The English version abbreviates a skill that the Chinese version spells out.

6. Skills mismatch:
   - EN `resume-en.tex:131`: `Plant Sim.`
   - ZH `resume-zh.tex:138`: `Plant Simulation`
   - The English version abbreviates a tool name that the Chinese version spells out.

7. Tool missing from EN:
   - ZH `resume-zh.tex:139`: `逻辑分析仪`
   - EN `resume-en.tex:132` has no `Logic Analyzer` equivalent.

8. IP status mismatch:
   - EN `resume-en.tex:134`: `Patents:`
   - ZH `resume-zh.tex:141`: `发明专利申请:`
   - The English label changes "invention patent applications" into "patents".

9. Utility model inventors missing from EN:
   - ZH `resume-zh.tex:146`: `发明人：赵翔、何昊程、胡波锋。`
   - EN `resume-en.tex:139-140` lists the utility model title and number but omits these inventors.

10. Software copyright title is incomplete in EN:
    - ZH `resume-zh.tex:148`: `企业财务数据分析软件 V1.0`
    - EN `resume-en.tex:141`: `Enterprise Financial Data Analysis V1.0`
    - The word `Software` from the Chinese title is missing.

## 2. Translation Quality

1. Job title is awkward in English:
   - EN `resume-en.tex:81`: `AI Engineer Assistant`
   - More natural professional English would be `Assistant AI Engineer` or `AI Engineering Assistant`.

2. Wording is awkward in English:
   - EN `resume-en.tex:83`: `helped locate issues`
   - In a technical resume, `helped diagnose issues` or `supported issue diagnosis` is more natural.

3. Patent/application terminology is mistranslated:
   - EN `resume-en.tex:134`: `Patents:`
   - ZH `resume-zh.tex:141`: `发明专利申请:`
   - The English label overstates the status relative to the Chinese source.

4. Abbreviated skill names reduce professional clarity:
   - EN `resume-en.tex:130`: `Prompt Eng.`
   - EN `resume-en.tex:131`: `Plant Sim.`
   - The Chinese version uses the full terms at `resume-zh.tex:137-138`.

5. Software copyright title translation omits a term:
   - EN `resume-en.tex:141`: `Enterprise Financial Data Analysis V1.0`
   - ZH `resume-zh.tex:148`: `企业财务数据分析软件 V1.0`
   - The English title should include `Software`.

## 3. ATS Friendliness

1. English `pdftotext -layout` splits exact keywords with inserted hyphenation:
   - Source `resume-en.tex:120`; extracted EN PDF lines 52-53: `BiL-` / `STM`
   - Source `resume-en.tex:130`; extracted EN PDF lines 55-56: `Work-` / `flows`
   - Source `resume-en.tex:135-136`; extracted EN PDF lines 59-60: `Con-` / `trol`
   - Source `resume-en.tex:141`; extracted EN PDF lines 62-63: `Finan-` / `cial`
   - These tokens are present, but not extracted as contiguous words.

2. Compact Skills formatting merges category labels in extracted text:
   - EN source `resume-en.tex:128-132`; extracted EN PDF lines 55-57 contain `JS/TS ML:` and `ECRS Tools:`
   - ZH source `resume-zh.tex:135-139`; extracted ZH PDF lines 57-59 contain `JS/TS ML：` and `ECRS 工具：`
   - The text is extractable, but category boundaries are not clean in the extracted output.

3. Compact IP formatting merges separate labels in extracted text:
   - EN source `resume-en.tex:139-141`; extracted EN PDF line 62 has `Utility Model: ... Software Copyrights:` on the same extracted line.
   - ZH source `resume-zh.tex:145-147`; extracted ZH PDF lines 65-66 place `软件著作权` immediately after the utility-model inventor sentence.
   - The labels are extractable, but not cleanly separated.

4. Chinese `pdftotext -layout` splits CJK terms across lines:
   - Source `resume-zh.tex:56`; extracted ZH PDF lines 6-9 place punctuation at the start of extracted lines.
   - Source `resume-zh.tex:139`; extracted ZH PDF lines 59-60 split `逻辑分析仪` as `逻` / `辑分析仪`.
   - Source `resume-zh.tex:148`; extracted ZH PDF lines 65-66 split `企业财务数据分析软件`.
   - The affected text is present, but exact Chinese keyword extraction is not clean for these terms.

