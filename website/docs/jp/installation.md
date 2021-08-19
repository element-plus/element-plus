## インストール

### npm/yarn
npmでインストールが推奨されており、[Vite](https://vitejs.dev)、[webpack](https://webpack.js.org/) でシームレスに動作します。

#### Npm
```shell
npm install element-plus --save
```
#### Yarn
```shell
yarn add element-plus
```

### CDN

ElementPlusを**CDN**経由でフルに持ち込むこともできますが、**CDN**のプロバイダーによって異なります。ここでは[unpkg](https://unpkg.com)と[jsdelivr](https://jsdelivr.com)を例に挙げています。また、他の**CDN**プロバイダーを利用することもできます。

エントリーファイルの**head**タグにElementPlusへのリソース参照を追加することで
#### Unpkgの使用

```html
<!-- スタイルの紹介 -->
<link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css">
<!-- Vueの紹介 -->
<script src="//unpkg.com/vue@next"></script>
<!-- ElementPlusの紹介 -->
<script src="//unpkg.com/element-plus"></script>
```

#### JsDelivrの使用

```html
<!-- スタイルの紹介 -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/element-plus/dist/index.css">
<!-- Vueの紹介 -->
<script src="//cdn.jsdelivr.net/npm/vue@next"></script>
<!-- ElementPlusの紹介 -->
<script src="//cdn.jsdelivr.net/npm/element-plus"></script>
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

npmを使っていてバンドルを適用したい場合は、次のページに進んでください。: [Quick Start](/#/jp/component/quickstart).
