# すぐに始められる

ここでは、プロジェクトで ElementPlus を使用する方法について説明します。

## コンポーネントの使用

### すべてのコンポーネントの完全導入

> main.ts

```typescript
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```

### オンデマンドでコンポーネントを導入

`ElementPlus`的な JS 代弁者认为支持基于 ES モジュール的[树揺](https://webpack.js.org/guides/tree-shaking/)。

> App.vue

```html
<template>
  <el-button> 私はElButtonです </el-button>
</template>
<script>
  import { defineComponent } from 'vue'
  import { ElButton } from 'element-plus'

  export default defineComponent({
    name: 'app'
    components: {
      ElButton,
    },
  })
</script>
```

### スタイルの紹介

スタイルの導入は、**完全なスタイルファイルを直接導入することを強くお勧めします**。アプリケーション全体のサイズが大きくなるように見えるかもしれませんが、
これによりパッケージングツールのプラグインを追加で導入する必要がなくなります（負担が少なくなります）。また、
[CDN](https://www.cloudflare.com/learning/cdn/what-is-)を使用することもできます。 a-cdn/)
を使ってスタイルファイルを読み込むことで、アプリケーションの読み込みが速くなります。

JS の方法で紹介されました

```typescript
import 'element-plus/dist/index.css'
```

HTML ヘッダで紹介

```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
</head>
```

スタイルもオンデマンドで導入したい場合は、対応するツールが提供するプラグインを使って参照することができます。 [よくあるご質問](/#/zh-cn/component/quickstart#yokuarugo-zhi-wen)をご覧ください。

## クイックビルドプロジェクトテンプレート

### vue-cli@4.5 をご利用ください。

の新バージョンに対応した vue-cli プラグインを用意しました。
をベースにしたプロジェクトを素早く構築するために使用できる[Element Plus plugins](https://github.com/element-plus/vue-cli-plugin-element-plus)を提供します。
Element Plus プロジェクト。

### スターターキットの使い方

そのまま使える汎用的な[プロジェクトテンプレート](https://github.com/element-plus/element-plus-starter)を提供し、さらには
Vite[テンプレート](https://github.com/element-plus/element-plus-vite-starter)を使用しています。
のために
Laravel をお使いの方は、対応する[テンプレート](https://github.com/element-plus/element-plus-in-laravel-starter)も用意していますので、そのままダウンロードしてお使いいただけます。

## グローバルコンフィギュレーション

Element Plus を導入する際に、グローバルコンフィギュレーションオブジェクトを渡すことができます。 このオブジェクトは現在、`size` と `zIndex`
フィールドをサポートしています。 サイズ
は、コンポーネントのデフォルトサイズを変更するために使用され、`zIndex`は、ポップアップボックスの初期 z-index を設定します（デフォルト値：2000）。
要求に応じて「エレメント・プラス」を以下のように導入します。

ElementPlus を完全紹介。

```js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
```

ElementPlus のオンデマンド導入。

```js
import { createApp } from 'vue'
import { ElButton } from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$ELEMENT = option
app.use(ElButton)
```

上記の設定により、プロジェクト内で`size`プロパティを持つすべてのコンポーネントのデフォルトサイズは「small」となり、ポップアップボックスの初期 z-index は 3000 となります。

## Nuxt.js を使う

また、[Nuxt.js](https://nuxtjs.org)を使って

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>

## スタートアップ

Vue と Element Plus をベースにした開発環境が整ったところで、いよいよコードを書いてみましょう。 各コンポーネントの使用方法については、各コンポーネントのドキュメントを参照してください。

## よくあるご質問

### コンポーネントとスタイルを同時にオンデマンドで導入したいのですが、どのようにすればよいでしょうか？

#### vite でオンデマンドのローディングスタイル

ビルドパッケージングツールとして[vite](https://vitejs.dev)を使用している場合は、オンデマンドでスタイルを読み込むために、まず `vite-plugin-element-plus`
をインストールする必要があります。

```shell
yarn add vite-plugin-element-plus -D
# または
npm install vite-plugin-element-plus -D
```

次に、`vite.config.js`ファイルに以下のコードを追加します。

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginElementPlus from 'vite-plugin-element-plus'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  plugins: [
    vue(),
    VitePluginElementPlus({
      // コンポーネント名].scssのソースファイルを使用する必要がある場合は、以下のようにコメントアウトを解除する必要があります。
      // useSource: true
      // すべてのAPIについては、https://github.com/element-plus/vite-plugin-element-plus のドキュメントノートを参照してください。
      format: mode === 'development' ? 'esm' : 'cjs',
    }),
  ],
})
```

#### webpack によるオンデマンドでのスタイルの読み込み

ビルドパッケージングツールとして webpack を使用している場合は、必要に応じてスタイルを読み込むために、まず`babel-plugin-import`をインストールする必要があります。

```shell
yarn add babel-plugin-import -D
# または
npm install babel-plugin-import -D
```

次に、以下のコードを `babel.config.js` ファイルに追加してください。

> babel.config.js

```javascript
module.exports = {
  plugins: [
    // ...others
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          name = name.slice(3)
          // [name].cssファイルが必要な場合は、次の行を返す必要があります。
          return `element-plus/es/${name}/style/css`
          // [name].scssファイルが必要な場合は、前の行のコードをコメントアウトし、次の行のコードをアンコメントする必要があります。
          // return `element-plus/es/${name}/style`;
        },
      },
    ],
  ],
}

module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        // import component
        customName: (name) => {
          name = name.slice(3)
          return `element-plus/lib/components/${name}`
        },
        // import style
        customStyleName: (name) => {
          name = name.slice(3)
          // [name].scssファイルが必要な場合は、前の行のコードをコメントアウトし、次の行のコードをアンコメントする必要があります。
          // return `element-plus/lib/components/${name}/style`
          // [name].cssファイルが必要な場合は、次の行を返す必要があります。
          return `element-plus/lib/components/${name}/style/css`
        },
      },
    ],
  ],
}
```
