## 安装

### npm/yarn 安装

推荐使用 npm 的方式安装，它能更好地和 [Vite](https://vitejs.dev), [webpack](https://webpack.js.org/) 打包工具配合使用。

#### Npm
```shell
npm install element-plus --save
```

#### Yarn
```shell
yarn add element-plus
```

### CDN

你也可以通过 **CDN** 的方式全量引入 ElementPlus，根据不同的 **CDN** 提供商有不同的引入方式，我们在这里以 [unpkg](https://unpkg.com) 和 [jsdelivr](https://jsdelivr.com) 举例，
你也可以使用其它的 **CDN** 供应商。

通过在你的入口文件的 **head** 标签上添加资源引用 ElementPlus
#### 使用 Unpkg

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css">
<!-- 引入 Vue -->
<script src="//unpkg.com/vue@next"></script>
<!-- 引入组件库 -->
<script src="//unpkg.com/element-plus"></script>
```

#### 使用 JsDelivr

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/element-plus/dist/index.css">
<!-- 引入 Vue -->
<script src="//cdn.jsdelivr.net/npm/vue@next"></script>
<!-- 引入组件库 -->
<script src="//cdn.jsdelivr.net/npm/element-plus"></script>
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

如果是通过 npm 安装，并希望配合打包工具使用，请阅读下一节：[快速上手](/#/zh-CN/component/quickstart)。
