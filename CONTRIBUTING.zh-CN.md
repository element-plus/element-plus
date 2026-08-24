# 如何贡献

<p align="center">
  <a href="./CONTRIBUTING.md">English</a> | 简体中文
</p>

## 提交 Issue

- 提交 Issue 前，请先搜索相关关键字，确认你遇到的问题是否已经有人报告。🙏

- Issue 应通过 [Issue 模板](https://issue.element-plus.org/) 提交，并在表单中填写足以复现问题的信息，以便我们的开发者帮助你验证和修复问题。

**信息不足的 Issue 将被直接关闭，因为我们无法复现问题。**

- 功能请求应提交到 [RFCs](https://github.com/element-plus/rfcs/issues)，这有助于我们更高效地管理功能请求。

以下内容面向希望参与 Element Plus 开发的贡献者。

## 环境要求

你需要安装：

Node.js >= 22.13.0

pnpm >= 11

Git > 2.20

部分编译代码依赖 Node.js >= 22.13.0 中引入的功能，因此你需要安装该版本或更高版本。

## 克隆仓库

1. 在 [仓库主页](https://github.com/element-plus/element-plus) 右上角点击 Fork 按钮。
2. 将项目下载到本地。
3. 运行以下命令初始化项目。

```shell
cd $THE_PROJECT_PATH_YOU_DOWNLOADED
# 如果尚未安装依赖
pnpm install
```

## 验证安装

接下来可以运行以下命令验证安装是否成功。

```shell
pnpm t
pnpm format
```

## 开始开发

正确安装代码后，你可以选择以下开发方式：

### 修改和更新文档站点

```shell
# 如果你想修改 https://element-plus.org 的网站源代码
# 该网站使用 [VitePress](https://vitepress.vuejs.org) 构建
pnpm docs:gen-locale # 为本地开发生成多语言文件
pnpm docs:dev
```

### 修改组件而非网站

```shell
# 如果你想运行本地演练场，针对某个特定组件测试改动
pnpm dev
```

你可以按照 [本地开发指南](https://element-plus.org/zh-CN/guide/dev-guide.html) 进行开发，以提高效率。

### 编译源代码

如果你想在本地编译本项目：

```shell
# 这一行命令会开始编译将发布到 https://npmjs.com 的代码
pnpm build
```

### 编译文档网站

如果你想在本地编译网站代码：

```shell
pnpm docs:build
```

## Pull Request

完成开发任务后，请注意：

1. 更新测试，覆盖所有相关情况。
2. 如果修改了 API，请更新对应文档。
3. 编写完整清晰的提交信息。
4. 将本地改动推送到你的远程仓库，然后向上游仓库提交 Pull Request。
5. 你可以在描述中补充更多改动信息，帮助审查者更好地理解相关背景。

## 文档格式规范

更新文档 API 表格时，请保持描述一致：

1. 属性和 prop 名称使用小写字母。
2. 英文 API 描述以大写字母开头。
3. 保留用反引号包裹的代码术语，例如 `slot`、`Tooltip` 和 `Popover`。
4. 避免进行与当前文档更新无关的大范围格式调整。

## 提交信息模板

我们准备了一份提交信息模板供你参考，你也可以按照 CLI 工具的提示直观地生成提交信息。

1. 使用以下命令：

```bash
pnpm cz
```

2. 你也可以手动编写提交信息，但请确保提交信息符合规范。

我们提供了 [提交信息示例](https://element-plus.org/zh-CN/guide/commit-examples.html)。

注意：
**格式不符合要求的提交信息将不被接受。**

以上就是全部内容，感谢你的贡献！🤩
