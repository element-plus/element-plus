---
title: Installation
lang: en-US
---

# Installation

## Using Package Manager

**We recommend using the package manager (NPM, [Yarn](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io/)) to install Element Plus**,
so that you can utilize bundlers like [Vite](https://vitejs.dev) and
[webpack](https://webpack.js.org/).

Choose a package manager you like.

::: code-group

```shell [npm]
$ npm install element-plus --save
```

```shell [yarn]
$ yarn add element-plus
```

```shell [pnpm]
$ pnpm install element-plus
```

:::

If your network environment is not good, it is recommended to use a mirror registry [cnpm](https://github.com/cnpm/cnpm) or [npmmirror](https://npmmirror.com/).

```shell
npm config set registry https://registry.npmmirror.com
```

## Import in Browser

Import Element Plus through browser HTML tags directly, and use global variable `ElementPlus`.

According to different CDN providers, there are different introduction methods.
Here we use [unpkg](https://unpkg.com) and [jsDelivr](https://jsdelivr.com) as example.
You can also use other CDN providers.

### unpkg

```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="//unpkg.com/element-plus"></script>
</head>
```

### jsDelivr

```html
<head>
  <!-- Import style -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/element-plus/dist/index.css"
  />
  <!-- Import Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- Import component library -->
  <script src="//cdn.jsdelivr.net/npm/element-plus"></script>
</head>
```

:::tip

We recommend using CDN to import Element Plus users to lock the version
on the link address, so as not to be affected by incompatible updates when Element Plus
is upgraded in the future. Please check [unpkg.com](https://unpkg.com) for
the method to lock the version.

Due to the limitations of native HTML parsing behavior, single-closed tags may cause some exceptions, so please use double-closed tags, [reference](https://vuejs.org/guide/essentials/component-basics.html#in-dom-template-parsing-caveats)

```html
<!-- examples -->
<el-table>
  <el-table-column></el-table-column>
  <el-table-column></el-table-column>
</el-table>
```

:::

## Hello World

With CDN, we can easily use Element Plus to
write a Hello World page. [Online Demo](https://codepen.io/iamkun/pen/YzWMaVr)

<iframe height="469" style="width: 100%;" scrolling="no" title="YzWMaVr" src="https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun
  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

If you are installing via package manager and want to use it with
a packaging tool, please read the
next section: [Quick Start](/en-US/guide/quickstart).
