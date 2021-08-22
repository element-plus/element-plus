# Install ElementPlus

## Environment Support

- Modern browsers

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions |

> ElementPlus **will not support IE11 since Vue3 dropped support for IE 11**

## Current version

ElementPlus is still under fast iteration, the current version is:

[![ElementPlus version badge](https://img.shields.io/npm/v/element-plus.svg?style=flat-square)](https://www.npmjs.org/package/element-plus)

### installation via npm or yarn

**It is recommended to install ElementPlus via package managers**，therefor it can be integrated with [vite](https://vitejs.dev) and [webpack](https://webpack.js.org/)

```shell
$ npm install element-plus --save
```

```shell
$ yarn add element-plus
```

if you are experiencing bad network, it is recommended using a mirror registry.

### Using directly in browsers

By importing ElementPlus via HTML tag, you can access the global variable `ElementPlus`

You can import `ElementPlus` via **CDN** with different ways based on your **CDN** vendor, we will use
[unpkg](https://unpkg.com) and [jsdelivr](https://jsdelivr.com) as examples, you can also choose other **CDN** vendors per your needs.

### Using unpkg

```html
<head>
  <!-- import ElementPlus style sheets -->
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css">
  <!-- import Vue -->
  <script src="//unpkg.com/vue@next"></script>
  <!-- import ElementPlus -->
  <script src="//unpkg.com/element-plus"></script>
</head>
```

### Using jsDelivr

```html
<head>
  <!-- import ElementPlus style sheets -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/element-plus/dist/index.css">
  <!-- import Vue -->
  <script src="//cdn.jsdelivr.net/npm/vue@next"></script>
  <!-- import ElementPlus -->
  <script src="//cdn.jsdelivr.net/npm/element-plus"></script>
</head>
```

:::tip
It is recommended that to import `ElementPlus` with a specific version to avoid breaking change if you are using **CDN**, you can checkout how to lock the version in your **CDN** providers manual page.
:::

## Hello world

With **CDN** we can easily write a **Hello world** page with `ElementPlus`. [Online demo](https://codepen.io/iamkun/pen/YzWMaVr)

<iframe height="469" style="width: 100%;" scrolling="no" title="YzWMaVr" src="https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun
  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

If you are using **npm/yarn**, and you wish to use `ElementPlus` with bundler, please read the next chapter [quick start](/#/en-US/component/quickstart).
