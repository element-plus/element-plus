---
title: Custom Namespace
lang: en-US
---

## Custom namespace ^(2.2.0)

:::tip

We provide a example in [element-plus-vite-starter](https://github.com/element-plus/element-plus-vite-starter).
Just check it.

:::

Default namespace is `el`.
In special cases, we may need to customize its namespace.

Since we use sass to write styles, if you want to customize all namespaces.
We have to assume that you already use sass.

You must set `ElConfigProvider` and scss `$namespace` at the same time.

### Set `ElConfigProvider`

Use `ElConfigProvider` wrap your root component.

```vue [App.vue]
<template>
  <el-config-provider namespace="ep">
    <!-- ... -->
  </el-config-provider>
</template>
```

### Set Scss & Css Vars

Create `styles/element/index.scss`:

```scss [styles/element/index.scss]
// we can add this to custom namespace, default is 'el'
@forward 'element-plus/theme-chalk/src/mixins/config.scss' with (
  $namespace: 'ep'
);
// ...
```

Import `styles/element/index.scss` in `vite.config.ts`:

> The same is true for webpack, which needs to be set in `preprocessorOptions`.

```ts [vite.config.ts]
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  // ...
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
  // ...
})
```

That's all.
