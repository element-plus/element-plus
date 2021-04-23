## 安装

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
npm install element-plus --save
```

### CDN

目前可以通过 [unpkg.com/element-plus](https://unpkg.com/element-plus/) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

:::warning
cdn方式使用`element-plus`时，请确保同时引用了`vue3`的cdn文件且必须置于`element-plus`之前，否则会得到`Cannot read property 'defineComponent' of undefined`的TypeError.
:::

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-plus/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-plus/lib/index.full.js"></script>
```

也可以使用[cdnjs](https://cdnjs.com/libraries/element-plus)或者基于cdnjs的[staticfile](https://staticfile.org/)、[75cdn](https://cdn.baomitu.com/)等中国国内cdn来获取资源，用法同上。

```html
<!-- 以staticfile为例 -->
<!-- 引入样式 -->
<link rel="stylesheet" href="https://cdn.staticfile.org/element-plus/1.0.2-beta.40/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://cdn.staticfile.org/element-plus/1.0.2-beta.40/index.full.js"></script>
```

:::tip
我们建议使用 CDN 引入 Element Plus 的用户在链接地址上锁定版本，以免将来 Element Plus 升级时受到非兼容性更新的影响。锁定版本的方法请查看 [unpkg.com](https://unpkg.com)。
:::

### Hello world

通过 CDN 的方式我们可以很容易地使用 Element Plus 写出一个 Hello world 页面。[在线演示](https://codepen.io/iamkun/pen/YzWMaVr)

<iframe height="469" style="width: 100%;" scrolling="no" title="YzWMaVr" src="https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun
  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：[快速上手](/#/zh-CN/component/quickstart)。
