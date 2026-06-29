# Second-Pass Review: LaTeX Resumes for Haocheng He

Scope: I read both files completely: `latex-templates/resume-en.tex` and `latex-templates/resume-zh.tex`. I also compiled them with `latex-templates/compile.sh` and checked text extraction from the generated PDFs.

I am not re-listing first-round issues that now appear fixed in these two LaTeX files: no English-only "3 AI tools / 30% response-time" claim, no "airport team now uses the model" claim, and no experience-section "filed patents from this work" claim.

## 1. Remaining EN/ZH Content Discrepancies

1. No remaining date, company-name, GPA, core metric, or job-title mismatch found. Contact details, education dates, GPA values, experience dates, company names, Midea metrics, LiuGong metrics, project metrics, patent numbers, registration numbers, and inventor/author lists now generally match across EN and ZH.

2. Summary scope is not fully equivalent. `resume-en.tex:50` says "time-series RUL prediction project" and "data modeling"; `resume-zh.tex:55` says only "机器学习课程项目经验" and adds "能够适应必要加班和高强度工作节奏". The Chinese version contains an extra overtime/high-intensity-work positioning claim not present in English, while the English version is more specific about RUL/time-series/data modeling.

3. Wuxian first bullet has a responsibility-strength mismatch. `resume-en.tex:82` says "Participated ... covering PCB hardware tests"; `resume-zh.tex:88` says "负责硬件PCB测试...绘制...开发", which reads as direct ownership. If the intended scope is "participated/supported", the Chinese should be softened; if it was ownership, the English should say so.

4. Wuxian operations bullet omits procurement in Chinese. `resume-en.tex:84` includes "procurement, administration, and technical interviews"; `resume-zh.tex:90` includes server/network operations, administration, and technical interviews, but does not mention procurement/采购.

5. AI skills do not match. `resume-en.tex:129` lists Claude Code, Codex, Hermes, ChatGPT, Prompt Engineering, Loop Engineering, Harness Engineering, AI Agent workflows, and model deployment/evaluation. `resume-zh.tex:135` omits ChatGPT, AI Agent workflows, and model deployment/evaluation. This is the largest remaining skills discrepancy.

6. First invention patent title is not exactly equivalent. `resume-en.tex:142` says "MCMC Sampling-Based Motion Control Method for a PI Coating Machine"; `resume-zh.tex:148` says "PI 涂布机控制器的运动控制方法". The English title omits "controller" (`控制器`).

7. Second software copyright title is shortened in English. `resume-en.tex:159` says "Urban Flood Emergency Dispatch System V1.0"; `resume-zh.tex:165` says "城市防汛智能移动应急指挥调度系统 V1.0". The English omits "intelligent mobile command" (`智能移动...指挥`), so the title is not a faithful match.

## 2. LaTeX Issues

1. Both files compile successfully with XeLaTeX; I found no fatal errors or package conflicts.

2. English overfull box remains. Compilation reports `Overfull \hbox (20.18369pt too wide)` at `resume-en.tex:83-84`, caused by the long "camera- and Ascend-based..." bullet. This is visible risk for margin overflow and should be shortened or made more breakable.

3. Underfull boxes remain but are low severity. English reports an underfull box at `resume-en.tex:117-119`; Chinese reports one at `resume-zh.tex:123-125`. These are around project heading/title lines and are layout polish issues, not blockers.

4. Page breaks are awkward. The English PDF breaks inside the Midea bullet at `resume-en.tex:101`, splitting "from 58% to 70%" from "reducing headcount...". The Chinese PDF leaves the LiuGong header at the bottom of page 1 and moves its bullets to page 2 (`resume-zh.tex:112-115`). The entry macro at `resume-en.tex:28-31` / `resume-zh.tex:33-36` has no keep-together control such as `needspace` or a same-page wrapper.

5. Chinese font fallback should be checked. `resume-zh.tex:13` requests `Noto Serif CJK SC`, but the build log reports it cannot resolve the italic face `Noto Serif CJK SC/I`; `pdffonts` shows embedded `NotoSerifCJKjp-*` subsets. This does not break the current PDF, but it is a portability/glyph-variant risk if more italic CJK text is added or if strict SC glyph shapes are required.

## 3. Language And Grammar Issues

1. `resume-en.tex:50`: "Industrial Engineering graduate ..., with a minor bachelor's degree in Law, and currently pursuing..." is grammatically awkward. "Minor bachelor's degree" is also unusual phrasing in English; "minor in Law" or "minor degree in Law" is cleaner if accurate.

2. `resume-en.tex:50`: first-person wording ("I learn quickly...") is less conventional for an English resume summary. It reads more like a cover letter than a resume.

3. `resume-en.tex:71` and `resume-zh.tex:77`: "Bachelor of Laws (Minor Degree in Law)" / "法学 法学学士（辅修学位）" both read awkwardly. The Chinese extracts as "法学法学学士", which looks duplicated.

4. `resume-en.tex:80`: "AI Engineer Assistant" is understandable but less idiomatic than "AI Engineering Assistant" or "Assistant AI Engineer".

5. `resume-en.tex:83`: "Supported partial module integration" is unnatural. "Supported integration of selected modules" would read more naturally.

6. `resume-en.tex:89`: "Guangzhou Baiyun Int'l Airport" is informal. Use "Guangzhou Baiyun International Airport" in a formal resume.

7. `resume-en.tex:100`: "over-cycle steps" is not very natural for general readers. "steps exceeding takt time" or "operations exceeding cycle time" is clearer.

8. `resume-zh.tex:55`: "热爱技术，喜欢钻研，知识面较丰富，自学能力较强..." is soft self-evaluation and generic. "期待...实现个人成长" is also candidate-centered rather than employer-centered.

9. `resume-zh.tex:88`: "硬件PCB测试（CPLD，STM32）" should be spaced/punctuated more cleanly, e.g. "硬件 PCB 测试（CPLD/STM32）" or "硬件 PCB 测试（CPLD、STM32）".

10. `resume-zh.tex:90`: "兼管...行政及技术面试" is awkward and can be misread. "参与采购、行政支持及候选人技术面试" would be clearer if it reflects the actual scope.

11. `resume-zh.tex:97`: "航空器落地及异常情况下消防车出动场景" is awkward. "航空器着陆及异常事件下的消防车出动场景" is more natural.

12. `resume-zh.tex:135`: "LLM工作流" should be "LLM 工作流" for consistent Chinese-English spacing.

## 4. ATS Risks

1. The basic structure is ATS-friendly: single column, no tables, no images, visible URL, and text extraction works for both PDFs.

2. English PDF text extraction still contains line-break hyphenation that can hurt keyword matching. Examples come from `resume-en.tex:50` ("manufac-\nturing"), `resume-en.tex:84` ("tech-\nnical"), `resume-en.tex:109` ("rec-\nommendations"), `resume-en.tex:119` ("operating-\ncondition"), and `resume-en.tex:142-144` ("Uni-\nversity", "Guang-\ndong"). Consider disabling hyphenation or shortening long lines.

3. Page-break placement can hurt parsing continuity. The Midea result bullet is split across pages in English (`resume-en.tex:101`), and the LiuGong header is separated from its bullets in Chinese (`resume-zh.tex:112-115`).

4. Chinese PDF extraction inserts awkward punctuation/spacing around some mixed CJK/Latin fragments, especially `resume-zh.tex:88-90`, `resume-zh.tex:125-126`, and `resume-zh.tex:148-165`. It does not fully break extraction, but it can reduce parser cleanliness.

5. The PDFs are not tagged (`pdfinfo` reports `Tagged: no`). This is common for LaTeX resumes and not usually fatal for ATS, but semantic/accessibility parsers get less structure than they would from a tagged PDF.

## 5. Strategic Issues

1. Positioning is still broad. `resume-en.tex:50` / `resume-zh.tex:55` combine industrial engineering, law, aviation, AI hardware, airport simulation, manufacturing, assembly-line optimization, and RUL prediction without naming a target role. This may dilute fit unless the resume is meant as a general master version.

2. "Four internships" is debatable. `resume-en.tex:50` / `resume-zh.tex:55` say four internships, but the Experience section includes "Research Assistant" and "AI Engineer Assistant" alongside two explicit intern roles (`resume-en.tex:80,89,98,106`; `resume-zh.tex:86,95,104,112`). If a reviewer reads strictly, the count looks inflated or imprecise.

3. Wuxian bullets are task-heavy and outcome-light. `resume-en.tex:82-84` / `resume-zh.tex:88-90` list many responsibilities but no scale, deliverable status, issue types resolved, or measurable engineering result. This weakens the top experience.

4. The RUL project needs a clearer metric. `resume-en.tex:120` / `resume-zh.tex:126` say final error was about 8% from about 50%, but do not name the metric, validation setup, or baseline definition. For ML roles, "8% error" is too ambiguous.

5. Skills have nonstandard AI labels that may not land with recruiters. `resume-en.tex:129` / `resume-zh.tex:135` include "Loop Engineering" and "Harness Engineering"; these may be meaningful internally but are not common ATS/recruiter keywords. If targeting AI/data roles, consider pairing them with more standard terms that are truthful, such as agent evaluation, workflow automation, prompt evaluation, or model evaluation.

6. The Intellectual Property / 发表成果 section is long relative to the experience depth (`resume-en.tex:138-160`; `resume-zh.tex:144-165`). For non-IP or non-research roles, it consumes page 2 space that could otherwise strengthen the top experience or project outcomes.
