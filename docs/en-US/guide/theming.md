---
title: Theming
lang: en-US
---

# Custom theme

Element Plus uses BEM-styled CSS so that you can override styles easily. But if
you need to replace styles at a large scale, e.g. change the theme color from
blue to orange or green, maybe overriding them one by one is not a good idea.

We provide four ways to change the style variables.

## Change theme color

These are examples about custom theme.

- Full import: [element-plus-vite-starter](https://github.com/element-plus/element-plus-vite-starter)
- On demand: [unplugin-element-plus/examples/vite](https://github.com/element-plus/unplugin-element-plus)

### By SCSS variables

`theme-chalk` is written in SCSS.
You can find SCSS variables in [`packages/theme-chalk/src/common/var.scss`](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss).

:::warning

We use sass modules ([sass:map](https://sass-lang.com/documentation/values/maps)...) and `@use` to refactor all SCSS variables. And by using `@use` to all SCSS variables, it solves the duplicate output problem caused by `@import`.

> [Introducing Sass Modules | CSS-TRICKS](https://css-tricks.com/introducing-sass-modules/)

For example, We use `$colors` as a map to preserve different types of colors.

`$notification` is a map where all variables of the `notification` component at.

In the future, we will write documentation for variables that can be customized for each component. You can also directly checkout the source [var.scss](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss).

:::

```scss
$colors: () !default;
$colors: map.deep-merge(
  (
    'white': #ffffff,
    'black': #000000,
    'primary': (
      'base': #409eff,
    ),
    'success': (
      'base': #67c23a,
    ),
    'warning': (
      'base': #e6a23c,
    ),
    'danger': (
      'base': #f56c6c,
    ),
    'error': (
      'base': #f56c6c,
    ),
    'info': (
      'base': #909399,
    ),
  ),
  $colors
);
```

### How to override it?

If your project also uses SCSS, you can directly change Element Plus style variables. Create a new style file, e.g. `styles/element/index.scss`:

:::warning

You should use `@use 'xxx.scss' as *;` instead of `@import 'xxx.scss';`.

Because the sass team said they will remove `@import` eventually.

> [Sass: @use](https://sass-lang.com/documentation/at-rules/use) vs [Sass: @import](https://sass-lang.com/documentation/at-rules/import)

:::

```scss [styles/element/index.scss]
/* just override what you need */
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': green,
    ),
  )
);

// If you just import on demand, you can ignore the following content.
// if you want to import all styles:
// @use "element-plus/theme-chalk/src/index.scss" as *;
```

Then in the entry file of your project, import this style file instead of Element's built CSS:

:::tip

Import `element/index.scss` before scss of element-plus to avoid the problem of sass mixed variables, because we need generate light-x by your custom variables.

:::

Create a `element/index.scss` to combine your variables and variables of element-plus. (If you import them in ts, they will not be combined.)

:::tip

In addition, you should distinguish your scss from the element variable scss.
If they are mixed together, each hot update of `element-plus` needs to compile a large number of scss files, resulting in slow speed.

:::

```ts [main.ts]
import { createApp } from 'vue'
import './styles/element/index.scss'
import ElementPlus from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
```

If you are using vite, and you want to custom theme when importing on demand.

Use `scss.additionalData` to compile variables with scss of every component.

```ts [vite.config.ts]
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// You can also use unplugin-vue-components
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// or use unplugin-element-plus
import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    // use unplugin-vue-components
    // Components({
    //   resolvers: [
    //     ElementPlusResolver({
    //       importStyle: "sass",
    //       // directives: true,
    //       // version: "2.1.5",
    //     }),
    //   ],
    // }),
    // or use unplugin-element-plus
    ElementPlus({
      useSource: true,
    }),
  ],
})
```

If you are using webpack, and you want to custom theme when importing on demand.

```js [webpack.config.js]
// use unplugin-element-plus

import ElementPlus from 'unplugin-element-plus/webpack'

export default defineConfig({
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    ElementPlus({
      useSource: true,
    }),
  ],
})
```

### By CSS Variable

CSS Variables is a very useful feature, already supported by almost all browsers. (IE: Wait?)

> Learn more from [Using CSS custom properties (variables) | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

We have used css variables to reconstruct the style system of almost all components.

:::tip

It is compatible with the SCSS variable system. We use the function of SCSS to automatically generate css variables for use.

:::

This means you can dynamically change individual variables inside the component to better customize it without having to modify scss and recompile it.

> In the future, the css variable names and role documentation for each component will be written to each component.

Like this:

```css
:root {
  --el-color-primary: green;
}
```

If you just want to customize a particular component, just add inline styles for certain components individually.

```html
<el-tag style="--el-tag-bg-color: red">Tag</el-tag>
```

For performance reasons, it is more recommended to custom css variables under a class rather than the global `:root`.

```css
.custom-class {
  --el-tag-bg-color: red;
}
```

If you want to control css var by script, try this:

```ts
// document.documentElement is global
const el = document.documentElement
// const el = document.getElementById('xxx')

// get css var
getComputedStyle(el).getPropertyValue(`--el-color-primary`)

// set css var
el.style['--el-color-primary'] = 'red'
```

If you want a more elegant way, check this out.
[useCssVar | VueUse](https://vueuse.org/core/usecssvar/)
