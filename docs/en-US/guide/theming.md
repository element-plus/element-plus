---
title: Theming
lang: en-US
---

# Custom theme

Element Plus uses BEM-styled CSS so that you can override styles easily. But if
you need to replace styles at a large scale, e.g. change the theme color from
blue to orange or green, maybe overriding them one by one is not a good idea. We
provide four ways to change the style variables.

## Change theme color <el-tag type="success" style="vertical-align: middle;">since 1.1.0-beta.1</el-tag>

These are examples about custom theme.

- Full import: [element-plus-vite-starter](https://github.com/element-plus/element-plus-vite-starter)
- On demand: [unplugin-element-plus/examples/vite](https://github.com/element-plus/unplugin-element-plus)

### By SCSS variables

`theme-chalk` is written in SCSS.
You can find SCSS variables in [`packages/theme-chalk/src/common/var.scss`](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss).

::: warning

We use sass modules ([sass:map](https://sass-lang.com/documentation/values/maps)...) to refactor all SCSS variables.

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

```scss
// styles/element/index.scss
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

::: tip

Import `element/index.scss` before scss of element-plus to avoid the problem of sass mixed variables, because we need generate light-x by your custom variables.

:::

Create a `element/index.scss` to combine your variables and variables of element-plus. (If you import them in ts, they will not be combined.)

::: tip

In addition, you should distinguish your scss from the element variable scss.
If they are mixed together, each hot update of `element-plus` needs to compile a large number of scss files, resulting in slow speed.

:::

```ts
import Vue from 'vue'

import './styles/element/index.scss'
import ElementPlus from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
```

If you are using vite, and you want to custom theme when importing on demand.

Use `scss.additionalData` to compile variables with scss of every component.

```ts
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// You can also use unplugin-vue-components
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// or use unplugin-element-plus
import ElementPlus from 'unplugin-element-plus/vite'

// vite.config.ts
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
    //       // version: "1.2.0-beta.1",
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

### By CSS Variable

CSS Variables is a very useful feature, already supported by almost all browsers. (IE: Wait?)

> Learn more from [Using CSS custom properties (variables) | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

We have used css variables to reconstruct the style system of almost all components. (Since `1.0.2-beta-70` [#2242](https://github.com/element-plus/element-plus/issues/2242))

::: tip

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

## Change theme color <el-tag type="error" style="vertical-align: middle;">Deprecated since 1.1.0-beta.1</el-tag>

If you just want to change the theme color of Element Plus, the
[theme preview website](https://element-plus.github.io/theme-chalk-preview/#/en-US)
is recommended.
The theme color of Element Plus is bright and friendly blue. By changing it, you
can make Element Plus more visually connected to specific projects.

The above website enables you to preview theme of a new theme color in real-time,
and it can generate a complete style package based on the new theme color for you
to download directly (to import new style files in your project, please refer to
the 'Import custom theme' or 'Import component theme on demand' part of this section).

### Update SCSS variables in your project

`theme-chalk` is written in SCSS. If your project also uses SCSS, you can directly
change Element Plus style variables. Create a new style file, e.g. `element-variables.scss`:

```scss
/* theme color */
$--color-primary: teal; /* icon font path, required */
$--font-path: '~element-plus/lib/theme-chalk/fonts';
@use '~element-plus/packages/theme-chalk/src/index';
```

Then in the entry file of your project, import this style file instead of Element's
built CSS:

```ts
import Vue from 'vue'
import ElementPlus from 'element-plus'
import './element-variables.scss'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
```

:::tip

Note that it is required to override icon font path to the relative path of
Element's font files.

:::

### CLI theme tool

If you project doesn't use SCSS, you can customize themes with our CLI theme tool:

#### Installation

First install the theme generator globally or locally. Local install is
recommended because in this way, when others clone your project, npm will
automatically install it for them.

```shell
npm i element-theme -g
```

Then install the chalk theme from npm or GitHub.

```shell
# from npm
npm i element-theme-chalk -D

# from GitHub
npm i https://github.com/ElementUI/theme-chalk -D
```

#### Initialize variable file

After successfully installing the above packages, a command named `et` is
available in CLI (if the packages are installed locally, use `node_modules/.bin/et`
instead).
Run `-i` to initialize the variable file which outputs to `element-variables.scss`
by default. And you can specify its output directory as you will.

```shell
et -i [custom output file]

> ✅ Generator variables file
```

In `element-variables.scss` you can find all the variables we used to style
Element Plus and they are defined in SCSS format. Here's a snippet:

```css
$--color-primary: #409EFF !default;
$--color-primary-light-1: mix($--color-white, $--color-primary, 10%) !default; /* 53a8ff */
$--color-primary-light-2: mix($--color-white, $--color-primary, 20%) !default; /* 66b1ff */
$--color-primary-light-3: mix($--color-white, $--color-primary, 30%) !default; /* 79bbff */
$--color-primary-light-4: mix($--color-white, $--color-primary, 40%) !default; /* 8cc5ff */
$--color-primary-light-5: mix($--color-white, $--color-primary, 50%) !default; /* a0cfff */
$--color-primary-light-6: mix($--color-white, $--color-primary, 60%) !default; /* b3d8ff */
$--color-primary-light-7: mix($--color-white, $--color-primary, 70%) !default; /* c6e2ff */
$--color-primary-light-8: mix($--color-white, $--color-primary, 80%) !default; /* d9ecff */
$--color-primary-light-9: mix($--color-white, $--color-primary, 90%) !default; /* ecf5ff */

$--color-success: #67c23a !default;
$--color-warning: #e6a23c !default;
$--color-danger: #f56c6c !default;
$--color-info: #909399 !default;

...
```

#### Modify variables

Just edit `element-variables.scss`, e.g. changing the theme color to red:

```CSS
$--color-primary: red;
```

#### Build theme

After saving the variable file, use `et` to build your theme. You can activate
`watch` mode by adding a parameter `-w`. And if you customized the variable
file's output, you need to add a parameter `-c` and variable file's name. By
default the build theme file is placed inside `./theme`. You can specify its
output directory with parameter `-o`.

```shell
et

> ✅ build theme font
> ✅ build element theme
```

### Use custom theme

We will cover how to use your customized theme in your project in this section

#### Import custom theme

Importing your own theme is just like importing the default theme, only
this time you import the file built from "Online Theme Roller" or "CLI tool":

```javascript
import { createApp } from 'vue'
import '../theme/index.css'
import ElementPlus from 'element-plus'

createApp(App).use(ElementPlus)
```

#### Import component theme on demand

If you are using `babel-plugin-component` for on-demand import, just modify
`.babelrc` and specify `styleLibraryName` to the path where your custom theme
is located relative to `.babelrc`. Note that `~` is required:

```json
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-plus",
        "styleLibraryName": "~theme"
      }
    ]
  ]
}
```

If you are unfamiliar with `babel-plugin-component`, please refer to [Quick Start](/en-US/guide/quickstart.html).
For more details, check out the [project repository](https://github.com/ElementUI/element-theme)
of `element-theme`.
