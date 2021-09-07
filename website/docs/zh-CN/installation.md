# 安装 ElementPlus

## 环境支持

- 现代浏览器

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge                                                                   | last 2 versions                                                                   | last 2 versions                                                                | last 2 versions                                                                |

> 由于 Vue3 不再支持 IE11，故而 ElementPlus 也不支持 IE11 及之前版本。

## 当前最新版本

ElementPlus 目前还处于快速开发迭代中：

[![ElementPlus version badge](https://img.shields.io/npm/v/element-plus.svg?style=flat-square)](https://www.npmjs.org/package/element-plus)

## 通过 npm 或者 yarn 安装

**我们推荐使用包管理器的方式安装**，它能更好地和 [vite](https://vitejs.dev), [webpack](https://webpack.js.org/)
打包工具配合使用。

```shell
$ npm install element-plus --save
```

```shell
$ yarn add element-plus
```

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm) 或使用 [阿里巴巴镜像](https://registry.npm.taobao.org)

## 浏览器直接引入

通过浏览器 HTML 标签的方式直接引入 ElementPlus, 在全局可以使用 `ElementPlus`

通过 **CDN** 的方式全量引入 `ElementPlus`，根据不同的 **CDN** 提供商有不同的引入方式，我们在这里以
[unpkg](https://unpkg.com) 和[jsdelivr](https://jsdelivr.com) 举例，
你也可以使用其它的 **CDN** 供应商。

## 使用 unpkg

```html
<head>
  <!-- 引入样式 -->
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
  <!-- 引入 Vue -->
  <script src="//unpkg.com/vue@next"></script>
  <!-- 引入组件库 -->
  <script src="//unpkg.com/element-plus"></script>
</head>
```

## 使用 jsDelivr

```html
<head>
  <!-- 引入样式 -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/element-plus/dist/index.css"
  />
  <!-- 引入 Vue -->
  <script src="//cdn.jsdelivr.net/npm/vue@next"></script>
  <!-- 引入组件库 -->
  <script src="//cdn.jsdelivr.net/npm/element-plus"></script>
</head>
```

:::tip
我们建议使用 **CDN** 引入 `ElementPlus` 的用户在链接地址上锁定版本，以免将来 `ElementPlus` 升级时受到非兼容性更新的影响。锁定版本的方法请查看
[unpkg.com](https://unpkg.com)。
:::

## Hello world

通过 **CDN** 的方式我们可以很容易地使用 `ElementPlus` 写出一个 Hello world 页面。[在线演示](https://codepen.io/iamkun/pen/YzWMaVr)

<iframe height="469" style="width: 100%;" scrolling="no" title="YzWMaVr" src="https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun
  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

如果是通过 npm / yarn 安装，并希望配合打包工具使用，请阅读下一节：[快速上手](/#/zh-CN/component/quickstart)。
