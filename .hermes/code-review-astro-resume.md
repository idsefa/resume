# Claude Code 视角：Astro 简历网站代码审查报告

**审查时间**: 2026-05-18
**项目路径**: /home/h/code/resume
**Astro 版本**: 6.1.8 (static output)
**构建结果**: 26 pages, 1.37s — 构建通过 ✓
**TypeScript 检查**: 14 errors, 0 warnings, 9 hints — 类型检查未通过 ✗

---

## 1. 架构评分

| 维度 | 评分 | 说明 |
|------|------|------|
| 数据流设计 | B+ | DeepPartial + mergeDeep 的 override 体系有设计感，适合多语言+多模式 |
| 多语言方案 | B | 手动翻译键表 + 数据层 override，稍显冗余但可控 |
| 组件化程度 | C+ | 页面模板高度重复，缺少抽象组件 |
| 类型安全 | B- | 内联 script 有 14 个 TS 错误，生产代码本身无运行时错误 |
| CSS 组织 | C- | CSS 散落在 Layout 内联 (979行) 和独立文件 (413行)，有重复定义 |
| 构建产物体积 | 待评估 | 未检查 dist 大小，但无未引用的大型依赖 |

---

## 2. 发现的 Bug / 潜在问题

### CRITICAL: CI 配置与 package.json 引擎要求冲突
- `package.json` 要求 `node >=22.12.0`
- `.github/workflows/deploy.yml` 使用 `node-version: 20`
- CI 流水线将因引擎版本不匹配失败
- **修复**: 统一为 `22`

### TypeScript 错误 (14个) — Layout.astro 内联 \<script\>
`npx astro check` 报出 14 个 TS 错误，全部发生在 Layout.astro 的 `<script>` 块内：
- `document.querySelectorAll(...)` 返回类型为 `NodeListOf<Element>`，非特定的 `HTMLAnchorElement` / `HTMLElement`，导致 `.focus()`, `.style`, `.href`, `.target` 等属性不可访问
- `click` 事件默认类型为 `Event`，缺少 `metaKey`, `ctrlKey`, `shiftKey`, `altKey` 属性
- `keydown` 事件缺少 `key` 属性
- 箭头函数参数 `isOpen`, `state`, `event`, `handleDesktopChange` 缺类型标注
- **影响**: 不影响运行时（浏览器能跑），但会破坏 pre-commit hook / CI 类型检查

### Deprecated API 使用
- `content.config.ts` 中 `z.object()`, `z.string()` 等在 Astro 6.1.8 中已标记为 deprecated
- `Layout.astro:149` 使用 `desktopMedia.addListener()` 已废弃，应使用 `addEventListener('change', ...)`

### 导航页数据绑定问题
- navigator.astro 中 `pageKey="about"` — 语义错误，应为独立 key 或 null，但复用了 about 的 section meta
- 不影响渲染，但若未来对 pageKey 做逻辑判断会出问题

---

## 3. 架构改进点

### 3.1 页面模板高度重复 (DRY 违规)
所有 `[lang]/*.astro` 页面几乎完全相同的结构模式：
```
getStaticPaths → getResumeContent → Layout → article.hero → timeline/pub-section → cta-section
```
- **建议**: 创建一个通用 `PageTemplate.astro` 组件，通过 prop 注入 section content renderer
- 差异仅在于 content 字段路径和 CTA 的目标 URL，约 50%+ 的行可消除

### 3.2 CSS 碎片化
- `Layout.astro` 的 `<style is:global>` 包含 979 行 CSS
- `src/styles/resume-pages.css` 包含 413 行 CSS
- 两处有**重复定义**：
  - `.hero` (Layout:566 vs resume-pages.css:7) — 不同的 grid 布局
  - `.hero-kicker` (Layout:581 vs resume-pages.css:19) — 不同的样式
  - `.hero-title` (Layout:603 vs resume-pages.css:28) — 不同的字号
  - `.arrow-stack`/`.arrow-layer`/`.arrow-line` 在两端都有定义但作用不同
- **建议**: 拆分 Layout 内联 CSS 到专用文件，清除重复定义，使用 CSS 自定义属性做主题化

### 3.3 content/cv/*.md 死代码
- `src/content/cv/{lang}/*.md` 共 20 个文件，完全未被页面模板使用
- `src/content.config.ts` 定义了 `cv` collection 但无消费方
- 构建时仍会扫描和生成类型定义
- **建议**: 删除整个 `content/` 目录及 `content.config.ts`

### 3.4 astro.config.mjs 占位符
```js
site: 'https://YOUR_USERNAME.github.io',
```
- 占位符未替换，但 GitHub Actions deploy 依赖正确的 `site` 值来生成 sitemap/robots/canonical
- **建议**: 替换为实际域名

---

## 4. 性能

| 问题 | 影响 | 建议 |
|------|------|------|
| `rAF` 循环持续运行自定义光标动画 | 每次指针移动都会触发，虽无阻塞但增加了不必要的帧开销 | 考虑 idle callback 或限制帧率 |
| 980 行内联 CSS 注入每个 HTML 页面 | 每个页面都包含完整 CSS 而非按需加载 | Astro 的 `<style>` 在 static output 中会被提取为外部文件，不严重 |
| `window.setTimeout(() => { window.location.href = ... }, 250)` 导航器自动跳转 | SEO 可能被处罚，用户体验突兀 | 移除自动跳转，保留按钮点击跳转 |
| 26 个静态页面在 1.37s 构建完毕 | ✅ 非常好 | 无需优化 |

---

## 5. 无障碍 (A11y)

| 问题 | 严重度 | 说明 |
|------|--------|------|
| 缺少 Skip-to-content 链接 | 中 | 键盘用户需要不断 Tab 经过导航才能到内容 |
| 移动端导航无焦点捕获 | 中 | 打开移动菜单后，Tab 仍可跳到菜单外元素 |
| 语言切换菜单 | 低 | `aria-haspopup="menu"` 语义不完全对，正确的角色可能是 `listbox` 或 `menu` |
| 自定义光标 | 低 | 已处理 `prefers-reduced-motion` 和 `pointer: fine` 检测，但 `system-cursor-mode` 类未考虑聚焦状态 |
| 导航器页面自动跳转 | 高 | 键盘用户和屏幕阅读器用户无法提前阻止自动跳转，也没有倒计时提示 |
| 颜色对比度 | 待评估 | `color-mix(in srgb, var(--color-text) 60%, white)` 可能会降低对比度，需实际测试 |

---

## 6. 安全

| 问题 | 严重度 | 说明 |
|------|--------|------|
| 无 Content Security Policy | 中 | 内联 `<script is:inline>` 在没有 CSP 的情况下不受限制 |
| navigator.astro 自动重定向 | 中 | 可以用于跳转到外部 URL，应验证目标域名白名单 |
| 外部链接 `rel="noopener noreferrer"` | ✅ 好 | SOCIAL_LINKS 和 publications 链接正确使用了安全属性 |

---

## 7. 下一步改进优先级

### P0 (必须修)
1. **CI 引擎版本不匹配** — `deploy.yml` 的 node-version 需改为 22
2. **`astro.config.mjs` site 占位符** — 替换为实际域名
3. **导航器自动跳转** — 移除或增加倒计时+可取消

### P1 (强烈建议)
4. **TypeScript 修复** — 修复 Layout.astro 的 14 个 TS 错误（加类型断言或转为 `.ts` 模块）
5. **删除 content/cv/*.md 死代码** — 减少构建噪音和歧义
6. **统一 CSS 组织** — 清除重复定义，拆分 979 行内联 CSS

### P2 (值得做)
7. **页面模板抽象** — 提取公共骨架组件，消除 50%+ 重复代码
8. **`content.config.ts` deprecated API 修复**
9. **CSS 响应式断点对齐** — Layout 用 `900px` / `640px`，resume-pages.css 用 `768px` / `600px`，可能产生 gap
10. **添加 Skip-to-content 链接**
11. **考虑 CSP** 或移除非必要的内联 script

### P3 (锦上添花)
12. **`heroSummary` 语义化** — 不再用 `highlights[0]?.description`，加专用字段
13. **页面过渡动画退化检测** — 当 `navigator.connection?.saveData` 为 true 时也应简化动画
14. **添加构建大小分析** — 确保 dist 体积可控
