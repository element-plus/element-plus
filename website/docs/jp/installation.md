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
<script src="https://unpkg.com/element-plus/lib/index.js"></script>
```

:::tip
[推奨]CDNを使うときはElementのバージョンを固定することを推奨します。詳しくは[unpkg.com](https://unpkg.com)を御覧ください。
:::

### Hello world
CDNを使う場合、Elementでハローワールドを表示するのは簡単です。 [Online Demo](https://codepen.io/iamkun/pen/YzWMaVr)

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="iamkun" data-slug-hash="YzWMaVr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="YzWMaVr">
  <span>See the Pen <a href="https://codepen.io/iamkun/pen/YzWMaVr">
  YzWMaVr</a> by iamkun (<a href="https://codepen.io/iamkun">@iamkun</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

npmを使っていてwebpackを適用したい場合は、次のページに進んでください。: [Quick Start](/#/jp/component/quickstart).
