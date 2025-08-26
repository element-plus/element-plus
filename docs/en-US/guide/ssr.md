---
title: SSR
lang: en-US
---

# Server-Side Rendering (SSR)

When using Element Plus for SSR development, you need to carry out special handling during SSR to avoid hydrate errors.

:::tip

For Nuxt users, we provide a [Nuxt module](https://github.com/element-plus/element-plus-nuxt) that contains these special processes. You only need to install it.

:::

## Provide an ID

The provided value is used to generate the unique ID in Element Plus.
Because the different IDs are prone to hydrate errors in SSR, in order to ensure that the server side and client side generate the same ID, we need to inject the `ID_injection_key` into Vue.

```ts [main.ts]
// irrelevant code omitted
import { createApp } from 'vue'
import { ID_INJECTION_KEY } from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.provide(ID_INJECTION_KEY, {
  prefix: 1024,
  current: 0,
})
```

## Provide ZIndex

When you using SSR for development, you may encounter hydration errors caused by `z-index`. In this case, we recommend injecting an initial value to avoid such errors.

```ts [main.ts]
// irrelevant code omitted
import { createApp } from 'vue'
import { ZINDEX_INJECTION_KEY } from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.provide(ZINDEX_INJECTION_KEY, { current: 0 })
```

## Teleports

[Teleport](https://vuejs.org/guide/scaling-up/ssr.html#teleports) is used internally by multiple components in Element Plus (eg. ElDialog, ElDrawer, ElTooltip, ElDropdown, ElSelect, ElDatePicker ...), so special handling is required during SSR.

### Render the Teleport on the mount

An easier solution is to conditionally render the Teleport on the mount.

For example, use the `ClientOnly` component in Nuxt.

```html
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

Another way is to inject the teleport markup into the correct location in your final page HTML.

You need to inject the teleport markup close to the `<body>` tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
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

:::tip

If you modify the [Namespace](./namespace.md) or `append-to` attribute, you need to adjust the `#el-popper-container-` value.

:::

```js [src/entry-server.js]
// irrelevant code omitted
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

```js [server.js or prerender.js]
// irrelevant code omitted
const [appHtml, preloadLinks, teleports] = await render(url, manifest)

const html = template
  .replace('<!--preload-links-->', preloadLinks)
  .replace('<!--app-html-->', appHtml)
  .replace(/(\n|\r\n)\s*<!--app-teleports-->/, teleports)
```
