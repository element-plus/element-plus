## Button

広く使われている button です。

### 基本的な使い方

:::demo Button のスタイルを定義するには `type`, `plain`, `round`, `circle` を使います。

```html
<el-row>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</el-row>

<el-row>
  <el-button plain>Plain</el-button>
  <el-button type="primary" plain>Primary</el-button>
  <el-button type="success" plain>Success</el-button>
  <el-button type="info" plain>Info</el-button>
  <el-button type="warning" plain>Warning</el-button>
  <el-button type="danger" plain>Danger</el-button>
</el-row>

<el-row>
  <el-button round>Round</el-button>
  <el-button type="primary" round>Primary</el-button>
  <el-button type="success" round>Success</el-button>
  <el-button type="info" round>Info</el-button>
  <el-button type="warning" round>Warning</el-button>
  <el-button type="danger" round>Danger</el-button>
</el-row>

<el-row>
  <el-button icon="el-icon-search" circle></el-button>
  <el-button type="primary" icon="el-icon-edit" circle></el-button>
  <el-button type="success" icon="el-icon-check" circle></el-button>
  <el-button type="info" icon="el-icon-message" circle></el-button>
  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
  <el-button type="danger" icon="el-icon-delete" circle></el-button>
</el-row>
```

:::

### 無効化 button

`disabled` 属性は button が無効になっているかどうかを判定します。

:::demo button が無効になっているかどうかを判断するには `disabled` 属性を用いる。これは `Boolean` 値を受け取ります。

```html
<el-row>
  <el-button disabled>Default</el-button>
  <el-button type="primary" disabled>Primary</el-button>
  <el-button type="success" disabled>Success</el-button>
  <el-button type="info" disabled>Info</el-button>
  <el-button type="warning" disabled>Warning</el-button>
  <el-button type="danger" disabled>Danger</el-button>
</el-row>

<el-row>
  <el-button plain disabled>Plain</el-button>
  <el-button type="primary" plain disabled>Primary</el-button>
  <el-button type="success" plain disabled>Success</el-button>
  <el-button type="info" plain disabled>Info</el-button>
  <el-button type="warning" plain disabled>Warning</el-button>
  <el-button type="danger" plain disabled>Danger</el-button>
</el-row>
```

:::

### テキスト button

枠線と背景のない button です。

:::demo

```html
<el-button type="text">Text Button</el-button>
<el-button type="text" disabled>Text Button</el-button>
```

:::

### アイコン button

アイコンを使って Button にさらに意味を持たせましょう。アイコンだけでスペースを確保したり、テキストと一緒に使うこともできます。

:::demo アイコンを追加するには `icon` 属性を使います。アイコンのリストは要素のアイコンコンポーネントにあります。テキストの右側にアイコンを追加するには、`<i>` タグを使用します。カスタムアイコンも使用できます。

```html
<el-button type="primary" icon="el-icon-edit"></el-button>
<el-button type="primary" icon="el-icon-share"></el-button>
<el-button type="primary" icon="el-icon-delete"></el-button>
<el-button type="primary" icon="el-icon-search">Search</el-button>
<el-button type="primary"
  >Upload<i class="el-icon-upload el-icon-right"></i
></el-button>
```

:::

### button グループ

button グループとして表示され、同じよう操作をグループ化することができます。

:::demo button をグループ化するにはタグ `<el-button-group>` を使用します。

```html
<el-button-group>
  <el-button type="primary" icon="el-icon-arrow-left">Previous Page</el-button>
  <el-button type="primary"
    >Next Page<i class="el-icon-arrow-right el-icon-right"></i
  ></el-button>
</el-button-group>
<el-button-group>
  <el-button type="primary" icon="el-icon-edit"></el-button>
  <el-button type="primary" icon="el-icon-share"></el-button>
  <el-button type="primary" icon="el-icon-delete"></el-button>
</el-button-group>
```

:::

### 読み込み button

button をクリックしてデータを読み込むと、読み込み状態が表示されます。

:::demo ロード状態を表示するために `loading` 属性を `true` に設定します。

```html
<el-button type="primary" :loading="true">Loading</el-button>
```

:::

### サイズ

Button コンポーネントにはデフォルトサイズの他に、3 つの追加サイズが用意されており、異なるシナリオの中から選択することができます。

:::demo 追加のサイズを `medium`, `small`, `mini` で設定するには、属性 `size` を使用します。

```html
<el-row>
  <el-button>Default</el-button>
  <el-button size="medium">Medium</el-button>
  <el-button size="small">Small</el-button>
  <el-button size="mini">Mini</el-button>
</el-row>
<el-row>
  <el-button round>Default</el-button>
  <el-button size="medium" round>Medium</el-button>
  <el-button size="small" round>Small</el-button>
  <el-button size="mini" round>Mini</el-button>
</el-row>
<el-row>
  <el-button icon="el-icon-search" circle></el-button>
  <el-button icon="el-icon-search" size="medium" circle></el-button>
  <el-button icon="el-icon-search" size="small" circle></el-button>
  <el-button icon="el-icon-search" size="mini" circle></el-button>
</el-row>
```

:::

### 属性

| Attribute   | Description                                    | Type    | Accepted values                                    | Default |
| ----------- | ---------------------------------------------- | ------- | -------------------------------------------------- | ------- |
| size        | button サイズ                                  | string  | medium / small / mini                              | —       |
| type        | button タイプ                                  | string  | primary / success / warning / danger / info / text | —       |
| plain       | プレーン button か判定する                     | boolean | —                                                  | false   |
| round       | ラウンド(丸みを持った)button か判定する        | boolean | —                                                  | false   |
| circle      | サークル(丸)button か判定する                  | boolean | —                                                  | false   |
| loading     | 読み込み中か判定する                           | boolean | —                                                  | false   |
| disabled    | button を無効化する                            | boolean | —                                                  | false   |
| icon        | アイコンクラス名                               | string  | —                                                  | —       |
| autofocus   | ネイティブ button の `オートフォーカス` と同じ | boolean | —                                                  | false   |
| native-type | ネイティブ button の `タイプ` と同じ           | string  | button / submit / reset                            | button  |
