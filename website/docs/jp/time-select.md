## タイムピッカー

時間インプットにはタイムピッカーを使用します。

### 固定タイムピッカー

ユーザーが選択できる固定時間のリストを提供する。

:::demo `el-time-select` ラベルを使用し、開始時刻、終了時刻、タイムステップを `start`, `end`, `step` で指定します。`
```html
<el-time-select
  v-model="value"
  start='08:30'
  step='00:15'
  end='18:30'
  placeholder="Select time">
</el-time-select>

<script>
  export default {
    data() {
      return {
        value: ''
      };
    }
  }
</script>
```
:::

### 固定時間範囲

開始時間が最初に選ばれた場合は、それに応じて終了時間が変更されます。

:::demo
```html
<template>
  <el-time-select
    placeholder="Start time"
    v-model="startTime"
    start='08:30'
  step='00:15'
  end='18:30'>
  </el-time-select>
  <el-time-select
    placeholder="End time"
    v-model="endTime"
    start='08:30'
    step='00:15'
    end='18:30'
    :minTime="startTime">
  </el-time-select>
</template>

<script>
  export default {
    data() {
      return {
        startTime: '',
        endTime: ''
      };
    }
  }
</script>
```
:::

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model-value / v-model | バインディング値 | — | — |
| disabled | タイムピッカーが無効になっているかどうか | boolean | — | false |
| editable | 入力が編集可能かどうか | boolean | — | true |
| clearable | クリアボタンを表示するかどうか | boolean | — | true |
| size | 入力のサイズ | string | medium / small / mini | — |
| placeholder | 非範囲モード時のプレースホルダ | string | — | — |
| name | ネイティブ入力の `name` と同じ | string | — | — |
| prefix-icon | カスタムプレフィックスアイコンクラス | string | — | el-icon-time |
| clear-icon | カスタムクリアアイコンクラス | string | — | el-icon-circle-close |
| start | 開始時刻 | string | — | 09:00 |
| end | 終了時刻 | string | — | 18:00 |
| step | タイムステップ | string | — | 00:30 |
| minTime | 最低時間、それ以前の時間は無効化されます。 | string | — | 00:00 |
| maxTime | 最大時間、この時間以降は無効化されます。 | string | — | — |

### イベント
| Event Name | Description | Parameters |
|---------|--------|---------|
| change | ユーザーが値を確認したときにトリガされます。 | component's binding value |
| blur | インプットがぼやけたときされます | component instance |
| focus | 入力がフォーカスされているときにトリガされます。 | component instance |

### 方法
| Method | Description | Parameters |
| ---- | ---- | ---- |
| focus | インプットコンポーネントにフォーカス | — |
| blur | blur the Input component | — |
