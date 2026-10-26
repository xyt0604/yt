# AGENTS.md

## Project type

Static HTML/CSS/JS student portfolio — no build step, no package manager, no dependencies.

## Running

Open `index.html` directly in a browser. No dev server or install needed.

## Structure

- `index.html` — self-contained landing page (inline styles, no external CSS/JS) linking to all 18 exercise pages.
- Numbered HTML files (`1.html` … `10-4.html`) — individual classroom exercises. Filenames contain Chinese characters and spaces (URL-encoded with `%20` in links).
- `script.js` + `styles.css` — standalone particle-background animation snippet. Not currently wired into any page; to integrate, add `<canvas id="bg">` as the first child of `<body>`, then include both files.
- `四级项目html/` — separate project directory.

## Conventions

- No linter, formatter, or test runner configured.
- Exercise pages use inline `<style>` blocks, not external stylesheets.
- 所有 JS 变量名、CSS 类名、id 名称都必须以 `xyt_` 开头（如 `xyt_card`、`xyt_userName`）。
- 所有 HTML 页面 `<body>` 开头必须包含注释：`<!-- 徐玥桐 | 建立时间：<日期> | 使用大模型：<模型名> | 功能：<功能名称> -->`（新建页面时必填）。
- 每次根据用户提示词完成工作后，必须把该条提示词按格式（日期、模型、提示词原文）追加记录到 `xu_prompt.md`。
- 只使用原生 HTML、CSS 和 JavaScript，禁止使用第三方库和 CDN 外链资源。
- 图标统一使用 `font/` 目录下的 iconfont 字体图标（引入 `font/iconfont.css`，用 `<i class="iconfont icon-xxx">`）。
- 获取服务器端数据统一使用原生 `fetch`。
