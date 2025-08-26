# Element Plus 贡献指南

Hi! 首先感谢你使用 Element Plus。

Element Plus 是一套为开发者、设计师和产品经理准备的开源组件库，旨在快速搭建页面。它基于 Vue 3 开发，并提供了配套的设计资源，充分满足可定制化的需求。

Element Plus 的成长离不开大家的支持，如果你愿意为 Element Plus 贡献代码或提供建议，请阅读以下内容。

## Issue 规范

- issue 仅用于提交 Bug 或 Feature 以及设计相关的内容，其它内容可能会被直接关闭。如果你在使用时产生了疑问，请到 Slack 或 [Discord](https://discord.com/invite/gXK9XNzW3X) 里咨询。

- 在提交 issue 之前，请搜索相关内容是否已被提出。

- 请说明 Element Plus 和 Vue 的版本号，并提供操作系统和浏览器信息。推荐使用 [Playground](https://element-plus.run/) 生成在线 demo，这能够更直观地重现问题。

## Pull Request 规范

- 请先 fork 一份到自己的项目下，不要直接在仓库下建分支。

- commit 信息要以 `type(scope): 描述信息` 的形式填写，例如 `fix(components): [scrollbar] fix xxx bug`。

  1. type: 必须是 build, chore, ci, docs, feat, fix, perf, refactor, revert, release, style, test, improvement 其中的一个。

  2. scope: 必须是 components, directives, element-plus, hooks, locale, test-utils, theme-chalk, tokens, utils, project, core, style, docs, ci, dev, build, deploy, other, typography, color, border, var 其中的一个。

  3. header: 描述信息不要超过 72 个字符。

- **不要提交** `lib` 里面打包的文件。

- 执行 `npm run build` 后可以正确打包文件。

- 提交 PR 前请 rebase，确保 commit 记录的整洁。

- 确保 PR 是提交到 `dev` 分支，而不是 `master` 分支。

- 如果是修复 bug，请在 PR 中给出描述信息。

- 合并代码需要两名维护人员参与：一人进行 review 后 approve，另一人再次 review，通过后即可合并。
