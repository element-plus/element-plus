# Quick start

This section describes how to use ElementPlus in your project.

## Using components

### Full import

> main.ts

```typescript
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```

### Import on demand

`ElementPlus` provides out of box [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
functionalities based on ES Module.

> App.vue

```html
<template>
  <el-button> I am ElButton </el-button>
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

### Import stylesheets

It is **strongly recommended** that you import the **bundled stylesheet file**, even
though this could increase the final output bundle size, but it requires no
packaging plugins for bundling, you can use
[CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) to load your stylesheet
which would be much more faster than hosting the file on your own server.

Import via JavaScript

```typescript
import 'element-plus/dist/index.css'
```

Import via HTML `head` tag.

```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
</head>
```

If you also want the style to be imported on demand, you need to use co-responding
plugins based on your bundler, read more: [FAQs](/#/en-US/component/quickstart#faqs)

## Starter templates

### Using vue-cli@4.5

We prepared a plugin [Element Plus VueCLI plugin](https://github.com/element-plus/vue-cli-plugin-element-plus),
for new version [vue-cli](https://cli.vuejs.org/), you can setup a project based
on ElementPlus easily.

### Using Starter Kit

We provide a general [Project Template](https://github.com/element-plus/element-plus-starter),
also a [Vite Template](https://github.com/element-plus/element-plus-vite-starter).
For Laravel users we have a [Laravel Template](https://github.com/element-plus/element-plus-in-laravel-starter).

## Global configuration

When registering ElementPlus, you can pass a global config object with `size` and
`zIndex` to set the default `size` for form components, and `zIndex` for
popup components, the default value for `zIndex` is **2000**

Full import:

```js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
```

On demand:

```js
import { createApp } from 'vue'
import { ElButton } from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$ELEMENT = option
app.use(ElButton)
```

## Using Nuxt.js

We can also use [Nuxt.js](https://nuxtjs.org)：

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>

## Let's get started

You can bootstrap your project from now on, for each components usage, please
refer to individual component documentation.

## FAQs

### I'd like to import both components and style at the same time

You can achieve that based on the bundler you are currently using, with
ElementPlus supported plugins.

#### Using vite

If you are using [vite](https://vitejs.dev) as your bundler, then you need to install
`vite-plugin-element-plus` in order to get it work.

```shell
yarn add vite-plugin-element-plus -D
# or
npm install vite-plugin-element-plus -D
```

Then you need to add the code below into your `vite.config.[t]js` file.

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
        // if you need to use the *.scss source file, you need to uncomment this comment
        // useSource: true
        format: mode === 'development' ? 'esm' : 'cjs',
      }),
    ],
  }
})
```

For all public API, you can refer to [vite-plugin-element-plus](https://github.com/element-plus/vite-plugin-element-plus)

#### Using webpack

If you are using webpack as your bundler, then you need to install
[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) in
order to get it work.

```shell
yarn add babel-plugin-import -D
# or
npm install babel-plugin-import -D
```

Then you need to add the code below into your `babel.config.js` file.

> babel.config.js

```javascript
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        // import component
        customName: (name) => {
          name = name.slice(3)
          return `element-plus/lib/components/${name}`
        },
        // import style
        customStyleName: (name) => {
          name = name.slice(3)
          // if you need [name].scss source file, you need to uncomment this line
          // return `element-plus/lib/components/${name}/style`
          // import [name].css
          return `element-plus/lib/components/${name}/style/css`
        },
      },
    ],
  ],
}
```
