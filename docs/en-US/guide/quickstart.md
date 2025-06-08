---
title: Quick Start
lang: en-US
---

# Quick Start

This section describes how to use Element Plus in your project.

## Usage

### Full Import

If you don’t care about the bundle size so much, it’s more convenient to use full import.

```ts [main.ts]
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```

#### Volar support

If you use volar, please add the global component type definition to `compilerOptions.types` in `tsconfig.json`.

```json [tsconfig.json]
{
  "compilerOptions": {
    // ...
    "types": ["element-plus/global"]
  }
}
```

### On-demand Import

You need to use an additional plugin to import components you used.

#### Auto import <el-tag type="primary" style="vertical-align: middle;" effect="dark" size="small">Recommend</el-tag>

First you need to install `unplugin-vue-components` and `unplugin-auto-import`.

```shell
npm install -D unplugin-vue-components unplugin-auto-import
```

Then add the code below into your `Vite` or `Webpack` config file.

##### Vite

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

##### Webpack

```js [webpack.config.js]
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
```

For more bundlers ([Rollup](https://rollupjs.org/), [Vue CLI](https://cli.vuejs.org/)) and configs please reference [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components#installation) and [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#install).

#### Nuxt

For Nuxt users, you only need to install `@element-plus/nuxt`.

```shell
npm install -D @element-plus/nuxt
```

Then add the code below into your config file.

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@element-plus/nuxt'],
})
```

Refer to the [docs](https://github.com/element-plus/element-plus-nuxt#readme) for how to configure it.

### Manually import

Element Plus provides out of box [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
functionalities based on ES Module.

But you need install [unplugin-element-plus](https://github.com/element-plus/unplugin-element-plus) for style import.
And refer to the [docs](https://github.com/element-plus/unplugin-element-plus#readme) for how to configure it.

```vue [App.vue]
<template>
  <el-button>I am ElButton</el-button>
</template>

<script>
import { ElButton } from 'element-plus'
export default {
  components: { ElButton },
}
</script>
```

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig({
  // ...
  plugins: [ElementPlus()],
})
```

## Starter Template

We provide a [Vite Template](https://github.com/element-plus/element-plus-vite-starter).

For Nuxt users we have a [Nuxt Template](https://github.com/element-plus/element-plus-nuxt-starter).

For Laravel users we have a [Laravel Template](https://github.com/element-plus/element-plus-in-laravel-starter).

## Global Configuration

When registering Element Plus, you can pass a global config object with `size` and
`zIndex` to set the default `size` for form components, and `zIndex` for
popup components, the default value for `zIndex` is `2000`.

Full import:

```ts [main.ts]
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
```

On-demand:

```vue [App.vue]
<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <app />
  </el-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      zIndex: 3000,
      size: 'small',
    }
  },
})
</script>
```

## Using Nuxt.js

We can also use [Nuxt.js](https://nuxt.com):

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/edit/#!/element-plus-nuxt-starter?path=components%2FExamples.vue%3A1%3A0" alt="nuxt-element-plus on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>

## Let's Get Started

You can bootstrap your project from now on. For each components usage, please
refer to [the individual component documentation](https://element-plus.org/en-US/component/button.html).
