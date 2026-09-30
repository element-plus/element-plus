# AirCAS Theme 开发与接入

AirCAS Theme 是覆盖在 Element Plus 官方样式之上的主题。它先定义独立的 `--aircas-*` Design Token，再通过 `variables.scss` 映射到当前 Element Plus 使用的 `--el-*` CSS 变量；只有无法通过变量处理的差异才放在 `components/` 中。

当前阶段的统一入口是 [`index.scss`](./index.scss)。仓库中的官方 docs 已在 `docs/.vitepress/vitepress/index.ts` 中按「Element Plus 官方样式 → 官方暗色变量 → AirCAS Theme」的顺序全局导入它。

## 在本仓库启动与验证

在仓库根目录安装依赖后运行：

```bash
pnpm install
pnpm docs:dev
```

打开终端显示的本地地址（默认 `http://localhost:2000/`），进入官方组件文档。使用页面右上角现有的暗色开关检查 Light / Dark；无需修改或复制官方 Demo。修改 `common/` 中的 Token 或 `themes/` 中的主题值后，VitePress 会通过 HMR 更新页面。

重点检查 Button、Input、Select、Table 和 Dialog，并抽查 Checkbox、Radio、Switch、Pagination、Tabs、Tag、Alert、Progress、Drawer、Tooltip、Popover、DatePicker、Tree、Menu、Dropdown、Message、Notification。两套主题都要检查默认、悬停、激活、焦点、禁用、选中、加载、错误、成功、空状态及弹层。遇到异常时先检查 Token 与 `--el-*` 映射，再考虑组件覆盖。

提交前至少运行：

```bash
pnpm build:theme
pnpm docs:build
```

`build:theme` 目前只编译 `packages/theme-chalk/src/*.scss` 和官方暗色入口，**不会生成独立的 AirCAS CSS 文件**；AirCAS 的 Sass 编译和 docs 集成由 `docs:dev`、`docs:build` 验证。`build:theme` 用于确认原有主题构建未受影响。

## 修改流程与规范

| 层级         | 文件                                    | 职责                                                      |
| ------------ | --------------------------------------- | --------------------------------------------------------- |
| Design Token | `common/_*.scss`                        | 维护颜色、字号、尺寸、间距、圆角、阴影的原始值            |
| Light / Dark | `themes/light.scss`、`themes/dark.scss` | 输出`--aircas-*`；使用 `:root:not(.dark)` 和 `:root.dark` |
| 变量适配     | `variables.scss`                        | 将 AirCAS 语义映射到当前版本真实存在的`--el-*` 变量       |
| 组件覆盖     | `components/*.scss`                     | 处理固定 Sass 尺寸或组件局部变量等无法由根变量解决的差异  |
| 统一入口     | `index.scss`                            | 控制以上各层的加载顺序                                    |

1. 配色优先修改 `common/_color.scss` 的 `$light`、`$dark` 映射；其他 Token 在对应的 `common/_*.scss` 中维护。确保两套主题都有对应值，设计值不要散落在组件覆盖中。状态色的 RGB 变量由颜色映射统一生成，不要手工单独修改 `--el-*-rgb`。
2. 若 Element Plus 组件未继承主题，先查 `packages/theme-chalk/src/var.scss`、`dark/css-vars.scss` 和该组件的 SCSS，确认其实际 CSS 变量及声明位置，再修改 `variables.scss`。
3. 只有变量映射无法解决时才在 `components/` 中写最小覆盖；不要复制官方组件 SCSS，也不要修改 `packages/components/**` 的逻辑、Props、DOM 或事件。
4. 在官方 docs 中检查 Light / Dark 和交互状态，确认 Token 改动可通过 HMR 反映到组件。保持 Sass `@use` 写法，只改与主题相关的文件。

docs 的开关给 `<html>` 添加或移除 `.dark`。AirCAS 不使用 `theme="light"` / `theme="dark"` 属性；新项目也应沿用同一 `.dark` 状态。

## 应用到通过 npm 安装 Element Plus 的新项目

**当前不能只通过 `npm install element-plus` 获得 AirCAS Theme。**官方 npm 包提供 Element Plus 样式，但 AirCAS 源码目前只在此分支中，也没有独立发布的 npm 包或由 `build:theme` 生成的 AirCAS CSS。需要把 AirCAS 样式作为项目资源引入；以下两种方式任选其一。

### 方式一：编译并复制一份 CSS

先确保新项目的 `src/styles/` 目录存在，再在本仓库根目录执行（目标路径改为新项目的实际路径）：

```bash
packages/theme-chalk/node_modules/.bin/sass --no-source-map \
  packages/theme-chalk/src/aircas/index.scss \
  /path/to/new-project/src/styles/aircas-theme.css
```

此命令只编译 AirCAS 覆盖层，不包含 Element Plus 官方组件 CSS。然后在新项目的入口（以 Vite + Vue 的 `src/main.ts` 为例）按顺序导入：

```ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/aircas-theme.css'
import App from './App.vue'

createApp(App).use(ElementPlus).mount('#app')
```

这是无需在新项目安装 Sass 的接入方式。后续修改 AirCAS Token 时，重新编译并替换该 CSS 文件。

### 方式二：复制源码，由新项目编译 SCSS

将本目录完整复制到新项目的 `src/styles/aircas/`，安装项目构建工具支持的 Sass 实现（Vite 项目可用 `npm install -D sass-embedded`）。入口改为最后导入 `./styles/aircas/index.scss`：

```ts
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/aircas/index.scss'
```

这种方式可以直接修改新项目中的 AirCAS Token，并使用项目的样式 HMR。复制时保留整个目录和相对路径；不要只复制 `index.scss`。

两种方式都用 `<html class="dark">` 启用暗色，移除 `dark` 类恢复浅色。例如：

```ts
function setDarkMode(enabled: boolean) {
  document.documentElement.classList.toggle('dark', enabled)
}
```

**接入检查：**确认最终加载顺序为官方组件 CSS → 官方 dark 变量 CSS → AirCAS 覆盖层；检查 Button 主色、Input 焦点、Select 弹层、Table 表头与行、Dialog 遮罩在 Light / Dark 下的表现。若项目使用按需自动导入组件 CSS，也要确认这些样式没有在 AirCAS 之后覆盖它。适配层依据本仓库当前 Element Plus 源码编写；外部项目升级 Element Plus 版本时，应重新核对实际 `--el-*` 变量并回归验证组件状态。
