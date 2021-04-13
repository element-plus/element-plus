## インストール

### npm
npmでインストールが推奨されており、[webpack](https://webpack.js.org/) でシームレスに動作します。

```shell
npm install element-plus --save
```

### CDN

[unpkg.com/element-plus](https://unpkg.com/element-plus/) から最新版を手に入れ、ページに JavascriptとCSSファイルをインポートすれば動作します。

```html
<!-- import CSS -->
<link rel="stylesheet" href="https://unpkg.com/element-plus/lib/theme-chalk/index.css">
<!-- import JavaScript -->
<script src="https://unpkg.com/element-plus/lib/index.full.js"></script>
```

:::tip
[推奨]CDNを使うときはElementのバージョンを固定することを推奨します。詳しくは[unpkg.com](https://unpkg.com)を御覧ください。
:::

### Hello world
CDNを使う場合、Elementでハローワールドを表示するのは簡単です。 [Online Demo](https://codepen.io/iamkun/pen/YzWMaVr)

<iframe height="469" style="width: 100%;" scrolling="no" title="YzWMaVr" src="https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun
  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

npmを使っていてwebpackを適用したい場合は、次のページに進んでください。: [Quick Start](/#/jp/component/quickstart).
