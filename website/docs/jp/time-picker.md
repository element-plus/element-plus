## タイムピッカー

時間インプットにはタイムピッカーを使用します。

### 任意のタイムピッカー

任意の時間を選ぶことができます。

:::demo ラベルに `el-time-picker` を用い、`disabledHours` `disabledMinutes` and `disabledSeconds` を指定することで時間範囲を制限することができます。デフォルトでは、マウスホイールをスクロールして時間を選ぶことができますが、代わりに `arrow-control` 属性が設定されている場合は矢印を使って時間を選ぶこともできます。

```html
<template>
  <el-time-picker
    v-model="value1"
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds"
    placeholder="Arbitrary time">
  </el-time-picker>
  <el-time-picker
    arrow-control
    v-model="value2"
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds"
    placeholder="Arbitrary time">
  </el-time-picker>
</template>

<script>
  const makeRange = (start, end) => {
    const result = []
    for (let i = start; i <= end; i++) {
      result.push(i)
    }
    return result
  }
  export default {
    data() {
      return {
        value1: new Date(2016, 9, 10, 18, 40),
        value2: new Date(2016, 9, 10, 18, 40)
      };
    },
    methods: {
      // e.g. allow 17:30:00 - 18:30:00
      disabledHours() {
        return makeRange(0, 16).concat(makeRange(19, 23))
      },
      disabledMinutes (hour) {
        if (hour === 17) {
          return makeRange(0, 29)
        }
        if (hour === 18) {
          return makeRange(31, 59)
        }
      },
      disabledSeconds(hour, minute) {
        if (hour === 18 && minute === 30) {
          return makeRange(1, 59)
        }
      },
    },
  }
</script>
```
:::

### 任意の時間範囲

任意の時間範囲を選択することができます。

:::demo 範囲を指定するには、`is-range` 属性を追加する。また、範囲モードでは `arrow-control` がサポートされている。
```html
<template>
  <el-time-picker
    is-range
    v-model="value1"
    range-separator="To"
    start-placeholder="Start time"
    end-placeholder="End time">
  </el-time-picker>
  <el-time-picker
    is-range
    arrow-control
    v-model="value2"
    range-separator="To"
    start-placeholder="Start time"
    end-placeholder="End time">
  </el-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      };
    }
  }
</script>
```
:::

### 属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model-value / v-model | バインディング値 | date | - | - |
| readonly | タイムピッカーが読み取り専用かどうか | boolean | — | false |
| disabled | タイムピッカーが無効になっているかどうか | boolean | — | false |
| editable | 入力が編集可能かどうか | boolean | — | true |
| clearable | クリアボタンを表示するかどうか | boolean | — | true |
| size | 入力のサイズ | string | medium / small / mini | — |
| placeholder | 非範囲モード時のプレースホルダ | string | — | — |
| start-placeholder | 範囲モードの開始時刻のプレースホルダ | string | — | — |
| end-placeholder | 範囲モード終了時のプレースホルダ | string | — | — |
| is-range | 時間範囲を選択するかどうか | boolean | — | false |
| arrow-control | 矢印ボタンを使って時間を選択するかどうか| boolean | — | false |
| align | 整列 | left / center / right | left |
| popper-class | タイムピッカーのドロップダウンのカスタムクラス名 | string | — | — |
| range-separator | 範囲セパレータ | string | - | '-' |
| format | format of the displayed value in the input box | string | see [date formats](#/en-US/component/date-picker#date-formats) | HH:mm:ss |
| default-value | オプション、カレンダーのデフォルトの日付 | Date for TimePicker, string for TimeSelect | anything accepted by `new Date()` for TimePicker, selectable value for TimeSelect | — |
| name | ネイティブ入力の `name` と同じ | string | — | — |
| prefix-icon | カスタムプレフィックスアイコンクラス | string | — | el-icon-time |
| clear-icon | カスタムクリアアイコンクラス | string | — | el-icon-circle-close |
| disabledHours | To specify the array of hours that cannot be selected | function | — | - |
| disabledMinutes | To specify the array of minutes that cannot be selected | function(selectedHour) | — | - |
| disabledSeconds | To specify the array of seconds that cannot be selected | function(selectedHour, selectedMinute) | — | - |


### イベント
| Event Name | Description | Parameters |
|---------|--------|---------|
| change | ユーザーが値を確認したときにトリガされます。 | component's binding value |
| blur | インプットがぼやけたときされます | component instance |
| focus | 入力がフォーカスされているときにトリガされます。 | component instance |

### 方法
| Method | Description | Parameters |
| ---- | ---- | ---- |
| focus | インプットコンポーネントにフォーカス | - |
