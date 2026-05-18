# Resume Site — 三视角 Code Review 综合报告

审查日期: 2026-05-18
审查模型: CC (Claude Code) + CX (Codex) + Gemini
项目: /home/h/code/resume/ (Astro 6.x 多语言简历站)

---

## 综合评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 架构设计 | 7/10 | 数据层 override 模式巧妙，但模板/真实数据混用 |
| 代码质量 | 6/10 | 14 TS 错误，碎片化 CSS，重复代码 |
| 内容策略 | 4/10 | Career 模式显示模板占位数据 —— P0 问题 |
| 国际化 | 5/10 | 法语缺失全部重音符，德语质量可，中繁中区分好 |
| 性能 | 8/10 | 构建 1.5s/420K，可再优化内联 JS/SVG |
| 无障碍 | 6/10 | 基础 aria 正确，但缺少键盘导航/focus-visible |
| SEO | 3/10 | 无 sitemap/hreflang/OG/结构化数据 |

---

## P0 — 必须修复

### 1. Career 模式下大量内容显示模板占位数据

**发现者:** Gemini (CC/CX 也确认)

**问题:** `RESUME_MODE='career'` 时，`experience.items`、`education.items`、`publications.sections`、`profile`、`about.facts` 全部回退到 `resume-data.ts` 中的模板文本：
- 名字: "He Haocheng" ✓
- 职位: "Researcher / Engineer" ✗ (模板)
- 经历: "Job Title / Company Name" ✗ (模板)
- 教育: "Ph.D. in Your Field" ✗ (模板)
- 发表: "Your Paper Title" ✗ (模板)

**根因:** Career override 只覆盖了 about.highlights 和 summary，其余字段 fallback 到基础数据（模板），而非 `en.ts` 中的真实数据。

**修复方案:** 在 `resume-data.ts` 的 getResumeContent 中，让 `en` 的 base 使用真实数据（直接从 en.ts 搬过来），或者让 career override 继承 personal override 的数据链。

---

## P1 — 高优先级

### 2. CI 配置与 package.json 引擎冲突

**发现者:** CC

`.github/workflows/deploy.yml` 使用 `node-version: 20`，但 `package.json` 要求 `>=22.12.0`。CI 会直接失败。

### 3. 法文翻译缺失所有重音符和撇号

**发现者:** Gemini

`fr.ts` 和 `fr-career.ts` 中：Étudiant→Etudiant, Ingénierie→ingenierie, l'aéroport→l aeroport 等。屏幕阅读器发音错误，影响简历可信度。

### 4. 缺少 SEO 基础设施

**发现者:** Gemini/CX

- 无 `@astrojs/sitemap`
- 无 hreflang 标签（5 语言站关键 SEO 信号）
- 无 Open Graph / Twitter Card meta
- 无 JSON-LD Person structured data
- site URL 仍是占位符 `YOUR_USERNAME.github.io`

### 5. 14 个 TypeScript 错误

**发现者:** CC

全部在 Layout.astro 的 `<script>` 内联 JS 中，`Element` 类型推断问题。`npx astro check` 可复现。

---

## P2 — 中等优先级

### 6. 内联 JS/SVG 在 26 页面间重复（不可缓存）

**发现者:** CX

每页 ~3KB JS + ~3.8KB SVG = ~7KB 重复。26 页 × 7KB = ~182KB 冗余 HTML 体积。

**修复:** 提取 `src/scripts/main.ts`，SVG 外部化到独立组件。

### 7. 20 个死代码文件

**发现者:** CC

`src/content/cv/` 下 4 语言 × 5 文件 = 20 个 .md 文件 + `content.config.ts` 完全废弃。页面全部由 resume-data 驱动。

### 8. Navigator 自动跳转的问题

**发现者:** CC/CX/Gemini

- 250ms 太激进，屏幕阅读器用户来不及感知
- `is:inline` 脚本不兼容 CSP
- 应改用 `<meta http-equiv="refresh">` 或增加 delay

### 9. 页面过渡实现不可靠

**发现者:** CX

`beforeunload` + anchor 劫持方案在 Safari/Firefox 行为不一致，浏览器后退按钮无过渡效果。

### 10. `<dt>`/`<dd>` 在 `<div>` 中破坏语义

**发现者:** CX

`index.astro` 中 facts-grid 使用 `<dt>`/`<dd>` 但不在 `<dl>` 中，破坏屏幕阅读器列表语义。

---

## P3 — 低优先级 / 锦上添花

| # | 问题 | 发现者 |
|---|---|---|
| 11 | CSS 碎片化（979 行内联 + 413 行独立文件） | CC/CX |
| 12 | DeepPartial 对 Date/Map 无保护 | CX |
| 13 | 自定义光标实用性存疑，只排除 .lang-menu | CX/Gemini |
| 14 | 页面模板 50%+ 重复代码，可抽象公共组件 | CC |
| 15 | 缺少 focus-visible / skip-to-content / 键盘导航 | Gemini |
| 16 | `config.summary.split(' ')[0]` 奇怪的派生逻辑 | Gemini |
| 17 | deprecated `z.object()` / `addListener` 使用 | CC |
| 18 | Hero summary 用 `highlights[0]?.description` 脆弱 | Gemini |
| 19 | 可以添加 astro-compress | CX |
| 20 | Language switcher 缺少 aria-activedescendant | Gemini |

---

## 下一步改进方向（按优先级）

### Phase 1 — 数据层修复（~30min）
1. 修复 career 模式数据回退问题
2. 更新 astro.config.mjs site URL
3. 修复 CI node 版本
4. 修复 TypeScript 错误

### Phase 2 — 内容完善（~1h）
5. 修复法文重音符/撇号
6. 清理死代码 content/cv/\*.md
7. 确认 zh-hant/de/fr 翻译质量

### Phase 3 — SEO + 基础设施（~1h）
8. 添加 @astrojs/sitemap
9. 添加 hreflang / OG / JSON-LD
10. 提取内联 JS 到独立文件

### Phase 4 — 体验打磨（~2h）
11. 改进 Navigator 自动跳转
12. 抽象公共页面模板组件
13. 拆分 CSS
14. 添加无障碍改进
