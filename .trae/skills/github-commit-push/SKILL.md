---
name: github-commit-push
description: 把当前项目的改动提交到 git 并推送到 GitHub 远程仓库（git@github.com:xyt0604/yt.git，SSH 公钥已配置）。当用户要求提交代码到 GitHub、推送到 yt 仓库、commit 并 push 到 GitHub 时使用。不用于 Gitee 仓库。
---

# GitHub Commit Push

将当前工作区的改动提交并推送到 GitHub 远程仓库（`github` remote → `git@github.com:xyt0604/yt.git`，SSH 认证）。

1. 运行 `git status` 和 `git diff --stat`，确认有哪些改动。
2. 运行 `git remote -v`，确认存在指向 GitHub 的远程（`github`）。如果没有，执行 `git remote add github git@github.com:xyt0604/yt.git` 添加。
3. 用 `git add <具体文件名>` 暂存改动文件，不要使用 `git add .` 或 `git add -A`；zip 压缩包等临时产物不提交。
4. 用中文写一句简短的提交信息（说明做了什么），执行 `git commit`。
5. 执行 `git push github <分支名>`（通常为 master）；首次推送加 `-u` 设置上游。
6. 推送失败时，报告错误信息，不要强制推送；若因远端有 README 等初始提交被拒绝，先 `git pull github <分支名> --allow-unrelated-histories` 再推送。
