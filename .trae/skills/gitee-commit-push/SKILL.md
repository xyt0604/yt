---
name: gitee-commit-push
description: 把当前项目的改动提交到 git 并推送到 Gitee 远程仓库。当用户要求提交代码到 Gitee、推送作业到码云、git commit 并 push 时使用。不用于 GitHub 仓库或不涉及推送的普通提交。
---

# Gitee Commit Push

将当前工作区的改动提交并推送到 Gitee 远程仓库。

1. 运行 `git status` 和 `git diff --stat`，确认有哪些改动。
2. 运行 `git remote -v`，确认远程仓库是 Gitee（gitee.com）。如果没有远程仓库，停下来告知用户并提供添加远程仓库的命令。
3. 用 `git add <具体文件名>` 暂存改动文件，不要使用 `git add .` 或 `git add -A`。
4. 用中文写一句简短的提交信息（说明做了什么），执行 `git commit`。
5. 执行 `git push`，如果当前分支没有上游分支，使用 `git push -u origin <分支名>`。
6. 推送失败时，报告错误信息，不要强制推送。
