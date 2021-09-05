## Popconfirm

要素のクリック操作の簡単な確認ダイアログです。

### 基本的な使い方

popconfirm は ポップオーバー と似ています。そのため、重複する属性については ポップオーバー のドキュメントを参照してください。

:::demo popconfirm では `title` 属性のみが利用可能で、`content` 属性は無視されます。

```html
<template>
  <el-popconfirm title="Are you sure to delete this?">
    <template #reference>
      <el-button>Delete</el-button>
    </template>
  </el-popconfirm>
</template>
```

:::

### カスタマイズ

popconfirm は以下のようにカスタマイズすることができます。:
:::demo

```html
<template>
  <el-popconfirm
    confirmButtonText="OK"
    cancelButtonText="No, Thanks"
    icon="el-icon-info"
    iconColor="red"
    title="Are you sure to delete this?"
  >
    <template #reference>
      <el-button>Delete</el-button>
    </template>
  </el-popconfirm>
</template>
```

:::

### トリガーイベント

ボタンをクリックしてイベントを起動します。

:::demo

```html
<template>
  <el-popconfirm
    confirmButtonText="Yes"
    cancelButtonText="No"
    icon="el-icon-info"
    iconColor="red"
    title="Are you sure to delete this?"
    @confirm="confirmEvent"
    @cancel="cancelEvent"
  >
    <template #reference>
      <el-button>Delete</el-button>
    </template>
  </el-popconfirm>
</template>

<script>
  export default {
    methods: {
      confirmEvent() {
        console.log('confirm!')
      },
      cancelEvent() {
        console.log('cancel!')
      },
    },
  }
</script>
```

:::

### 属性

| Attribute         | Description                | Type    | Accepted Values | Default          |
| ----------------- | -------------------------- | ------- | --------------- | ---------------- |
| title             | タイトル                   | String  | —               | —                |
| confirmButtonText | 確認ボタンのテキスト       | String  | —               | —                |
| cancelButtonText  | キャンセルボタンのテキスト | String  | —               | —                |
| confirmButtonType | 確認ボタンの種類           | String  | —               | Primary          |
| cancelButtonType  | キャンセルボタンの種類     | String  | —               | Text             |
| icon              | アイコン                   | String  | —               | el-icon-question |
| iconColor         | アイコンカラー             | String  | —               | #f90             |
| hideIcon          | アイコンを隠すか           | Boolean | —               | false            |

### スロット

| Name      | Description                           |
| --------- | ------------------------------------- |
| reference | Popconfirm をトリガーとする HTML 要素 |

### イベント

| Event Name | Description                                  | Parameters |
| ---------- | -------------------------------------------- | ---------- |
| onConfirm  | 確認ボタンをクリックするときのトリガー       | —          |
| onCancel   | キャンセルボタンをクリックするときのトリガー | —          |
