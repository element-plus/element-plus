# 快速上手

本节将介绍如何在项目中使用 ElementPlus。

## 使用组件

### 完整引入所有组件

> main.ts

```typescript
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```

### 按需引入组件

`ElementPlus`的 JS 代码默认支持基于 ES modules 的 [摇树 tree shaking](https://webpack.js.org/guides/tree-shaking/)。

> App.vue

```html
<template>
  <el-button> 我是 ElButton </el-button>
</template>
<script>
  import { defineComponent } from 'vue'
  import { ElButton } from 'element-plus'

  export default defineComponent({
    name: 'app'
    components: {
      ElButton,
    },
  })
</script>
```

### 样式的引入

我们**强烈建议直接引入全部的样式文件**，虽然这看起来会增大整个应用的体积，但这样做可以避免引入额外的打包工具插件（减少负担），你还可以通过 [CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/)
的方式来加载样式文件，从而使得你的应用加载更快。

通过 JS 的方式引入

```typescript
import 'element-plus/dist/index.css'
```

通过 HTML 的头文件引入

```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
</head>
```

如果你想让样式也按需引入，你可以使用对应工具提供的插件来引用。请看[常见问题](/#/zh-CN/component/quickstart#chang-jian-wen-ti)

## 快捷搭建项目模板

### 使用 vue-cli@4.5

我们为新版的 vue-cli 准备了相应的
[Element Plus 插件](https://github.com/element-plus/vue-cli-plugin-element-plus)你可以用它们快速地搭建一个基于
Element Plus 的项目。

### 使用 Starter Kit

我们提供了通用的[项目模板](https://github.com/element-plus/element-plus-starter)，你可以直接使用，另外我们还提供了
Vite [模板](https://github.com/element-plus/element-plus-vite-starter)。对于
Laravel 用户，我们也准备了相应的[模板](https://github.com/element-plus/element-plus-in-laravel-starter)，同样可以直接下载使用。

## 全局配置

在引入 Element Plus 时，可以传入一个全局配置对象。该对象目前支持 `size` 与 `zIndex` 字段。`size`
用于改变组件的默认尺寸，`zIndex` 设置弹框的初始 z-index（默认值：2000）。按需引入 Element Plus 的方式，具体操作如下：

完整引入 ElementPlus：

```js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
```

按需引入 ElementPlus：

```js
import { createApp } from 'vue'
import { ElButton } from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$ELEMENT = option
app.use(ElButton)
```

按照以上设置，项目中所有拥有 `size` 属性的组件的默认尺寸均为 'small'，弹框的初始 z-index 为 3000。

## 使用 Nuxt.js

我们还可以使用 [Nuxt.js](https://nuxtjs.org)：

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>

## 开始使用

至此，一个基于 Vue 和 Element Plus 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。

## 常见问题

### 我想同时按需引入组件和样式，我应该怎么做？

#### 使用 vite 按需加载样式

如果你使用 [vite](https://vitejs.dev) 作为构建打包工具，那么你需要先安装 `vite-plugin-element-plus` 来实现按需加载样式

```shell
yarn add vite-plugin-element-plus -D
# 或
npm install vite-plugin-element-plus -D
```

然后将如下代码添加至 `vite.config.js` 文件中:

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginElementPlus from 'vite-plugin-element-plus'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      VitePluginElementPlus({
        // 如果你需要使用 [component name].scss 源文件，你需要把下面的注释取消掉。
        // 对于所有的 API 你可以参考 https://github.com/element-plus/vite-plugin-element-plus
        // 的文档注释
        // useSource: true
        format: mode === 'development' ? 'esm' : 'cjs',
      }),
    ],
  }
})
```

#### 使用 webpack 按需加载样式

如果你使用 webpack 作为构建打包工具，那么你需要先安装 `babel-plugin-import` 来实现按需加载样式

```shell
yarn add babel-plugin-import -D
# 或
npm install babel-plugin-import -D
```

然后你需要将以下代码加入你的 `babel.config.js` 文件中。

> babel.config.js

```javascript
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        // 引入组件
        customName: (name) => {
          name = name.slice(3)
          return `element-plus/lib/components/${name}`
        },
        // 引入样式
        customStyleName: (name) => {
          name = name.slice(3)
          // 如果你需要引入 [name].scss 文件，你需要用下面这行
          // return `element-plus/lib/components/${name}/style`
          // 引入 [name].css
          return `element-plus/lib/components/${name}/style/css`
        },
      },
    ],
  ],
}
```
