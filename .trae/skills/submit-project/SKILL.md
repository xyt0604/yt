---
name: submit-project
description: 把当前网页设计项目打包成 zip 文件用于作业提交。当用户要求提交作业、打包项目、导出网站文件时使用。不用于部署网站或上传远程服务器。
---

# Submit Project

把当前项目打包成 zip 文件，方便提交课程作业。

1. 确认要打包的内容：`index.html`、所有编号练习页（如 `1.html`、`2-1.html`）、`styles.css`、`script.js`，以及 `img`、`font`、`cdn` 等资源文件夹（存在的才包含）。
2. 排除以下内容：`.git`、`.idea`、`.trae`、`.opencode`、`四级项目html`（除非用户明确要求包含）。
3. 用 PowerShell 的 `Compress-Archive` 打包，zip 文件命名为 `项目名-日期.zip`（日期格式 yyyyMMdd），保存到项目根目录。
4. 打包完成后，列出 zip 文件路径和大小，提醒用户检查是否遗漏页面。
