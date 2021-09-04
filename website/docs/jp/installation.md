# インストール

## 環境対応

- モダンブラウザ

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge                                                                   | last 2 versions                                                                   | last 2 versions                                                                | last 2 versions                                                                |

> IE11 は Vue3 でサポートされていないため、ElementPlus も IE11 以前のバージョンをサポートしていません。

## 現在のバージョン

ElementPlus は現在、急速に開発が進められています。

[![ElementPlus version badge](https://img.shields.io/npm/v/element-plus.svg?style=flat-square)](https://www.npmjs.org/package/element-plus)

## npm または yarn によるインストール

**パッケージマネージャー方式でのインストールを推奨します**。
[vite](https://vitejs.dev)、[webpack](https://webpack.js.org/)との相性が良いパッケージマネージャー方式でのインストールをお勧めします。
パッケージングツールです。

```shell
$ npm install element-plus --save
```

```shell
$ yarn add element-plus
```

ネットワーク環境が悪い場合は、ミラーリポジトリの利用をお勧めします

## ダイレクトブラウザ導入

ElementPlus は、ブラウザの HTML タグによって直接導入され、`ElementPlus`はグローバルに使用することができます。

**CDN**による`ElementPlus`の本格的な導入は、**CDN**の提供者によって異なりますが、ここでは[unpkg](https://unpkg.com)と[jsdelivr](https://jsdelivr.com)を例に挙げます。
また、他の**CDN**プロバイダーを利用することもできます。

## unpkg の使用

```html
<head>
  <!-- スタイルの紹介 -->
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
  <!-- Vueの紹介 -->
  <script src="//unpkg.com/vue@next"></script>
  <!-- ElementPlusの紹介 -->
  <script src="//unpkg.com/element-plus"></script>
</head>
```

## jsDelivr の使用

```html
<head>
  <!-- スタイルの紹介 -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/element-plus/dist/index.css"
  />
  <!-- Vueの紹介 -->
  <script src="//cdn.jsdelivr.net/npm/vue@next"></script>
  <!-- ElementPlusの紹介 -->
  <script src="//cdn.jsdelivr.net/npm/element-plus"></script>
</head>
```

:::tip
**CDN**を使用して`ElementPlus`を導入したユーザーは、今後の`ElementPlus`のアップグレードが互換性のないアップデートの影響を受けないように、リンク先のアドレスでバージョンをロックすることを推奨します。
バージョンをロックするには、以下を参照してください。
[unpkg.com](https://unpkg.com)。
:::

## Hello world

CDN\*\*のアプローチでは、`ElementPlus`を使って Hello world ページを簡単に書くことができます。[オンラインデモ](https://codepen.io/iamkun/pen/YzWMaVr)

<iframe height="469" style="width: 100%;" scrolling="no" title="YzWMaVr" src="https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun
  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

npm / yarn 経由でインストールし、パッケージングツールで使用したい場合は、次のセクションをお読みください：【クイックスタート】。(/#/jp/component/quickstart)。
