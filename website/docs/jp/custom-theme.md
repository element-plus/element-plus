## カスタムテーマ

要素は BEM スタイルの CSS を使用しているので、スタイルを簡単に上書きすることができます。しかし、テーマの色を青からオレンジや緑に変更するなど、大規模にスタイルを置き換える必要がある場合は、1 つずつオーバーライドするのはあまり良いアイデアではないかもしれません。スタイル変数を変更する方法を 4 つ用意しています。

### テーマカラーの変更

Element Plus のテーマカラーを変更したいなら、[テーマプレビューサイト](https://element-plus.github.io/theme-chalk-preview/#/en-US)がおすすめです。Element Plus のテーマカラーは、明るくて親しみやすいブルーです。これを変更することで、Element Plus をより視覚的に特定のプロジェクトに結びつけることができます。

上記のウェブサイトでは、リアルタイムで新しいテーマカラーのテーマをプレビューすることができ、あなたが直接ダウンロードするために新しいテーマカラーに基づいた完全なスタイルパッケージを生成することができます（あなたのプロジェクトで新しいスタイルファイルをインポートするには、このセクションの `カスタムテーマをインポート` または `コンポーネントテーマをオンデマンドでインポート` の部分を参照してください）。

### プロジェクト内の SCSS 変数を更新する

`theme-chalk` は SCSS で書かれています。プロジェクトでも SCSS を使用している場合は、Element Plus のスタイル変数を直接変更することができます。例えば `element-variables.scss` のように、新しいスタイルファイルを作成します :

```html
/* theme color */ $--color-primary: teal; /* icon font path, required */
$--font-path: '~element-plus/lib/theme-chalk/fonts'; @import
"~element-plus/packages/theme-chalk/src/index";
```

そして、プロジェクトのエントリーファイルで、Element Plus の内蔵 CSS の代わりにこのスタイルファイルをインポートします。:

```JS
import Vue from 'vue'
import ElementPlus from 'element-plus'
import './element-variables.scss'
import App from './App.vue';

const app = createApp(App)
app.use(ElementPlus)
```

:::tip
アイコンのフォントパスを Element のフォントファイルの相対パスにオーバーライドする必要があるので注意してください。
:::

### CLI テーマツール

プロジェクトが SCSS を使用していない場合は、CLI テーマツールを使用してテーマをカスタマイズすることができます:

#### <strong>インストール</strong>

はじめにテーマジェネレータをグローバルまたはローカルにインストールします。ローカルにインストールすることをお勧めします。なぜなら、他の人があなたのプロジェクトをクローンしたときに npm が自動的にインストールしてくれるからです。

```shell
npm i element-theme -g
```

そして、npm や GitHub から chalk テーマをインストールします。

```shell
# from npm
npm i element-theme-chalk -D

# from GitHub
npm i https://github.com/ElementUI/theme-chalk -D
```

#### <strong>変数ファイルの初期化</strong>

上記のパッケージのインストールに成功すると、CLI で `et` というコマンドが利用できます(ローカルにインストールされている場合は、代わりに `node_modules/.bin/et` を利用してください)。デフォルトで `element-variables.scss` に出力される変数ファイルを初期化するために `-i` を実行してください。初期化されたファイルはデフォルトで `element-variables.scss` に出力されます。

```shell
et -i [custom output file]

> ✔ Generator variables file
```

`element-variables.scss` の中には、Element Plus のスタイル設定に使用したすべての変数があり、SCSS 形式で定義されています。以下はその一部です。:

```css
$--color-primary: #409EFF !default;
$--color-primary-light-1: mix($--color-white, $--color-primary, 10%) !default; /* 53a8ff */
$--color-primary-light-2: mix($--color-white, $--color-primary, 20%) !default; /* 66b1ff */
$--color-primary-light-3: mix($--color-white, $--color-primary, 30%) !default; /* 79bbff */
$--color-primary-light-4: mix($--color-white, $--color-primary, 40%) !default; /* 8cc5ff */
$--color-primary-light-5: mix($--color-white, $--color-primary, 50%) !default; /* a0cfff */
$--color-primary-light-6: mix($--color-white, $--color-primary, 60%) !default; /* b3d8ff */
$--color-primary-light-7: mix($--color-white, $--color-primary, 70%) !default; /* c6e2ff */
$--color-primary-light-8: mix($--color-white, $--color-primary, 80%) !default; /* d9ecff */
$--color-primary-light-9: mix($--color-white, $--color-primary, 90%) !default; /* ecf5ff */

$--color-success: #67c23a !default;
$--color-warning: #e6a23c !default;
$--color-danger: #f56c6c !default;
$--color-info: #909399 !default;

...
```

#### <strong>変数の変更</strong>

`element-variables.scss`を編集するだけです。例えば、テーマの色を赤に変更するは以下の通りです:

```CSS
$--color-primary: red;
```

#### <strong>ビルドテーマ</strong>

変数ファイルを保存したら、`et` を使って自分のテーマを構築してください。 パラメータ `-w` を追加することで、`watch` モードを有効にすることができます。また、変数ファイルの出力をカスタマイズした場合は、パラメータ `-c` と変数ファイル名を追加する必要があります。デフォルトでは、ビルドテーマファイルは `./theme` 内に置かれます。パラメータ `-o` で出力ディレクトリを指定することができます。

```shell
et

> ✔ build theme font
> ✔ build element theme
```

### カスタムテーマを使用する

#### <strong>カスタムテーマをインポートする</strong>

独自のテーマをインポートすることは、デフォルトのテーマをインポートするのと同じですが、今回は `オンラインテーマローラー` または`CLIツール` からビルドされたファイルをインポートします。

```javascript
import { createApp } from 'vue'
import '../theme/index.css'
import ElementPlus from 'element-plus'

createApp(App).use(ElementPlus)
```

#### <strong>コンポーネントテーマをオンデマンドでインポート</strong>

オンデマンドインポートに `babel-plugin-component` を使用している場合は、`.babelrc` を修正し、`styleLibraryName` を `.babelrc` からの相対パスにカスタムテーマが置かれているパスに指定するだけです。 `~` は必須であることに注意してください。

```json
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-plus",
        "styleLibraryName": "~theme"
      }
    ]
  ]
}
```

もし、`babel-plugin-component`に慣れていない場合は、<a href="./#/en-US/component/quickstart">クイックスタート</a>を参照してください。詳細は `element-theme` の [project repository](https://github.com/ElementUI/element-theme) を参照してください。
