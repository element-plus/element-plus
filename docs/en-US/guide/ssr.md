---
title: SSR
lang: en-US
---

# Server-Side Rendering (SSR)

You need to carry out special handling during SSR to avoid hydrate errors.

## Provide a id

You need to inject the same id value into the server-side and client-side.

### Native SSR

```ts
// src/main.js (irrelevant code omitted)
import { createApp } from 'vue'
import { ID_INJECTION_KEY } from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.provide(ID_INJECTION_KEY, {
  prefix: 1024,
  current: 0,
})
```

### Nuxt

```vue
// app.vue (irrelevant code omitted)
<script setup>
import { ID_INJECTION_KEY } from 'element-plus'

provide(ID_INJECTION_KEY, {
  prefix: 1024,
  current: 0,
})
</script>
```

## Teleports

[Teleport](https://vuejs.org/guide/scaling-up/ssr.html#teleports) is used internally by multiple components in Element Plus (eg. ElDialog, ElDrawer, ElTooltip, ElDropdown, ElSelect, ElDatePicker ...), so special handling is require during SSR.

### Render the Teleport on mount

An easier solution is to conditionally render the Teleport on mount. For example, use the ClientOnly component in Nuxt.

```vue
<client-only>
  <el-tooltip content="the tooltip content">
    <el-button>tooltip</el-button>
  </el-tooltip>
</client-only>
```

or

```vue
<script setup>
import { ref } from 'vue'

const isClient = ref(false)

onMounted(() => {
  isClient.value = true
})
</script>

<template>
  <el-tooltip v-if="isClient" content="the tooltip content">
    <el-button>tooltip</el-button>
  </el-tooltip>
</template>
```

### Inject the teleport markup

Another way is inject the teleport markup into the correct location in your final page HTML.

::: warning Warning

There may be some [SSR problems about teleport](https://github.com/vuejs/core/issues?q=is%3Aissue+is%3Aopen+ssr+teleport+), so you should pay attention to the following precautions.

1. The `treported` attribute in all components based on ElTooltip should be consistent, it is recommended to use the default value.
2. The `append-to-body` attribute value of ElDialog and ElDrawer should be consistent, it is recommended to enable the `append-to-body`.
3. When the ElSubMenu has multi layer popup, It is recommended to enable the `popper-append-to-body`

:::

#### Native SSR

You need to inject the teleport markup close to `<body>` tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Element Plus</title>
    <!--preload-links-->
  </head>
  <body>
    <!--app-teleports-->
    <div id="app"><!--app-html--></div>
    <script type="module" src="/src/entry-client.js"></script>
  </body>
</html>
```

::: tip Tip

If you modify the [Namespace](./namespace.md) or `append-to` attribute, you need to adjust the `#el-popper-container-` value.

:::

```js
// src/entry-server.js (irrelevant code omitted)
import { renderToString } from 'vue/server-renderer'
import { createApp } from './main'

export async function render(url, manifest) {
  // ...
  const ctx = {}
  const html = await renderToString(app, ctx)
  const preloadLinks = renderPreloadLinks(ctx.modules, manifest)
  const teleports = renderTeleports(ctx.teleports)

  return [html, preloadLinks, teleports]
}

function renderTeleports(teleports) {
  if (!teleports) return ''
  return Object.entries(teleports).reduce((all, [key, value]) => {
    if (key.startsWith('#el-popper-container-')) {
      return `${all}<div id="${key.slice(1)}">${value}</div>`
    }
    return all
  }, teleports.body || '')
}
```

```js
// server.js or prerender.js (irrelevant code omitted)
const [appHtml, preloadLinks, teleports] = await render(url, manifest)

const html = template
  .replace('<!--preload-links-->', preloadLinks)
  .replace('<!--app-html-->', appHtml)
  .replace(/\n?<!--app-teleports-->/, teleports)
```

#### Nuxt

For Nuxt users, you need to create a plugin.

::: tip Tip

If you modify the [Namespace](./namespace.md) or `append-to` attribute, you need to adjust the `#el-popper-container-` value.

:::

```js
// plugins/element-plus.js
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:rendered', (ctx) => {
    if (ctx.ssrContext?.teleports) {
      ctx.ssrContext.teleports = renderTeleports(ctx.ssrContext.teleports)
    }
  })
})

function renderTeleports(teleports) {
  const body = Object.entries(teleports).reduce((all, [key, value]) => {
    if (key.startsWith('#el-popper-container-')) {
      return `${all}<div id="${key.slice(1)}">${value}</div>`
    }
    return all
  }, teleports.body || '')

  return { body }
}
```
