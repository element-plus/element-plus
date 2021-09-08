# Installing ElementPlus

## Environment

- Modern browser

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge                                                                   | last 2 versions                                                                   | last 2 versions                                                                | last 2 versions                                                                |

> Since Vue3 no longer supports IE11, ElementPlus does not support IE11 and previous
> versions.

## Current latest version

ElementPlus is currently in a rapid development iteration:

[![ElementPlus version badge](https://img.shields.io/npm/v/element-plus.svg?style=flat-square)](https://www.npmjs.org/package/element-plus)

## Install via npm or yarn

**We recommend using the package manager to install ElementPlus**,
so that you can utilize bundlers like [vite](https://vitejs.dev) and
[webpack](https://webpack.js.org/).

```shell
$ npm install element-plus --save
```

```shell
$ yarn add element-plus
```

If your network environment is not good, it is recommended to use a mirror registry

## Browser direct introducing

Directly import ElementPlus through browser HTML tags, and use `ElementPlus` globally

Introduce `ElementPlus` in full through **CDN**. According to different **CDN**
providers, there are different introduction methods. Here we use
[unpkg](https://unpkg.com) and[jsdelivr](https://jsdelivr.com) For example,
You can also use other **CDN** providers.

## Use unpkg

```html
<head>
  <!-- Introduce style -->
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
  <!-- Introduce Vue -->
  <script src="//unpkg.com/vue@next"></script>
  <!-- Introduce component library -->
  <script src="//unpkg.com/element-plus"></script>
</head>
```

## Use jsDelivr

```html
<head>
  <!-- Introduce style -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/element-plus/dist/index.css"
  />
  <!-- Introduce Vue -->
  <script src="//cdn.jsdelivr.net/npm/vue@next"></script>
  <!-- Introduce component library -->
  <script src="//cdn.jsdelivr.net/npm/element-plus"></script>
</head>
```

:::tip
We recommend using **CDN** to introduce `ElementPlus` users to lock the version
on the link address, so as not to be affected by incompatible updates when `ElementPlus`
is upgraded in the future. Please check [unpkg.com](https://unpkg.com) for
the method to lock the version.
:::

## Hello world

With **CDN**, we can easily use `ElementPlus` to
write a Hello world page. [Online Demo](https://codepen.io/iamkun/pen/YzWMaVr)

<iframe height="469" style="width: 100%;" scrolling="no" title="YzWMaVr" src="https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default -tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun
  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

If you are installing via npm / yarn and want to use it with
a packaging tool, please read the
next section: [Quick Start](/#/en-US/component/quickstart).
