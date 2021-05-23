## Date-picker(date-picker)

日付の入力にはdate-pickerを使用します。

###  日付の入力

'日'で計測する基本的なdate-picker。

:::demo 測定は `type` 属性で決定されます。You can enable quick options via `shortcuts` property。無効な日付は関数 `disabledDate` で設定する。

```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a day">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Picker with quick options</span>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="Pick a day"
      :disabled-date="disabledDate"
      :shortcuts="shortcuts">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: 'Today',
          value: new Date(),
        }, {
          text: 'Yesterday',
          value: (() => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          })(),
        }, {
          text: 'A week ago',
          value: (() => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          })(),
        }],
        value1: '',
        value2: '',
      };
    }
  };
</script>
```
:::

### その他の測定

標準のdate-pickerコンポーネントを拡張することで、週、月、年、または複数の日付を選択することができます。

:::demo

```html
<div class="container">
  <div class="block">
    <span class="demonstration">Week</span>
    <el-date-picker
      v-model="value1"
      type="week"
      format="Week WW"
      placeholder="Pick a week">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Month</span>
    <el-date-picker
      v-model="value2"
      type="month"
      placeholder="Pick a month">
    </el-date-picker>
  </div>
</div>
<div class="container">
  <div class="block">
    <span class="demonstration">Year</span>
    <el-date-picker
      v-model="value3"
      type="year"
      placeholder="Pick a year">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Dates</span>
    <el-date-picker
      type="dates"
      v-model="value4"
      placeholder="Pick one or more dates">
    </el-date-picker>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: ''
      };
    }
  };
</script>
```

:::

###  日付範囲

日付範囲のピックに対応しています。

:::demo 範囲モードの場合、デフォルトでは左右のパネルはリンクされています。2つのパネルを独立して現在の月を切り替えたい場合は、`unlink-panels` 属性を使うことができます。

```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With quick options</span>
    <el-date-picker
      v-model="value2"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      :shortcuts="shortcuts">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shortcuts: [{
          text: 'Last week',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
          })(),
        }, {
          text: 'Last month',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
          })(),
        }, {
          text: 'Last 3 months',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
          })(),
        }],
        value1: '',
        value2: ''
      };
    }
  };
</script>
```

:::

### 月の範囲

月の範囲のピッキングに対応しています。

:::demo 範囲モードの場合、デフォルトでは左右のパネルはリンクされています。2つのパネルを独立して現在の年を切り替えたい場合は、`unlink-panels` 属性を使うことができます。
```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="monthrange"
      range-separator="To"
      start-placeholder="Start month"
      end-placeholder="End month">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With quick options</span>
    <el-date-picker
      v-model="value2"
      type="monthrange"
      align="right"
      unlink-panels
      range-separator="To"
      start-placeholder="Start month"
      end-placeholder="End month"
      :shortcuts="shortcuts">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shortcuts: [{
          text: 'This month',
          value: [new Date(), new Date()],
        }, {
          text: 'This year',
          value: (() => {
            const end = new Date()
            const start = new Date(new Date().getFullYear(), 0)
            return [start, end]
          })(),
        }, {
          text: 'Last 6 months',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setMonth(start.getMonth() - 6)
            return [start, end]
          })(),
        }],
        value1: '',
        value2: ''
      };
    }
  };
</script>
```
:::

###  デフォルト値

ユーザが日付を指定していない場合は、デフォルトで今日のカレンダーを表示する。別の日付を設定するには `default-value` を用いることができる。その値は `new Date()` で解析可能でなければならない。

型が `daterange` の場合、`default-value` は左側のカレンダーを設定する。

:::demo
```html
<template>
  <div class="block">
    <span class="demonstration">date</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a date"
      default-value="2010-10-01">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">daterange</span>
    <el-date-picker
      v-model="value2"
      type="daterange"
      align="right"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      default-value="2010-10-01">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: ''
      };
    }
  };
</script>
```
:::

###  日付のフォーマット
入力ボックスに表示されるテキストの書式を制御するには `format` を用いる。

デフォルトでは、コンポーネントは `Date` オブジェクトを受け入れて出力します。

Check the list [here](https://day.js.org/docs/en/display/format#list-of-all-available-formats) of all available formats of Day.js.

:::warning
大文字化に注意
:::

:::demo
```html
<template>
  <div class="block">
    <span class="demonstration">Emits Date object</span>
    <div class="demonstration">Value: {{ value1 }}</div>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a Date"
      format="yyyy/MM/dd">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: ''
      };
    }
  };
</script>
```
:::

###  開始日と終了日のデフォルト時刻

日付範囲を選択する際に、開始日と終了日に時間部分を割り当てることができます。

:::demo By default, the time part of start date and end date are both `00:00:00`. Setting `default-time` can change their time respectively. It accepts an array of up to two Date objects. The first string sets the time for the start date, and the second for the end date.
```html
<template>
  <div class="block">
    <p>Component value：{{ value }}</p>
    <el-date-picker
      v-model="value"
      type="daterange"
      start-placeholder="Start date"
      end-placeholder="End date"
      :default-time="defaultTime"
    ></el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        defaultTime: [
          new Date(2000, 1, 1, 0, 0, 0),
          new Date(2000, 2, 1, 23, 59, 59)
        ] // '00:00:00', '23:59:59'
      };
    }
  };
</script>
```
:::

### Localization

The default locale of is English, if you need to use other languages, please check [Internationalization](#/jp/component/i18n)

Note, date time locale (month name, first day of the week ...) are also configed in localization.

### 属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model-value / v-model | バインディング値 | date(DatePicker) / array(DateRangePicker) | — | — |
| readonly | date-pickerが読み取り専用かどうか | boolean | — | false |
| disabled | date-pickerが無効かどうか | boolean | — | false |
| size | インプットサイズ | string | large/small/mini | — |
| editable | 入力は編集可能かどうか | boolean | — | true |
| clearable | クリアボタンをみせるかどうか | boolean | — | true |
| placeholder | 非範囲モード時のプレースホルダ | string | — | — |
| start-placeholder | 範囲モードでの開始日のプレースホルダ | string | — | — |
| end-placeholder | 範囲終了日のプレースホルダ | string | — | — |
| type | ピッカーのタイプ | string | year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange | date |
| format | 入力ボックスの表示値のフォーマット | string | see [date formats](#/jp/component/date-picker#date-formats) | YYYY-MM-DD |
| align | アライメント | left/center/right | left |
| popper-class | date-pickerのドロップダウン用カスタムクラス名 | string | — | — |
| range-separator | 範囲セパレータ | string | — | '-' |
| default-value | オプション、カレンダーのデフォルトの日付 | Date | anything accepted by `new Date()` | — |
| default-time | optional, the time value to use when selecting date range | Date[] | Array with length 2, each item is a Date. The first item for the start date and then second item for the end date | — |
| name | ネイティブ入力の `name` と同じ  | string | — | — |
| unlink-panels | 範囲ピッカーで2つのデータパネルのリンクを解除する | boolean | — | false |
| prefix-icon | カスタムプレフィックスアイコン | string | — | el-icon-date |
| clear-icon | カスタムクリアアイコンクラス | string | — | el-icon-circle-close |
| validate-event | フォームバリデーションをトリガするかどうか | boolean | - | true |
| shortcuts | an object array to set shortcut options | object[{ text: string, value: Date }] | — | — |
| disabledDate | 日付をパラメータとして、その日付が無効化されているかどうかを判断する関数です。ブーリアンを返す必要があります。 | function | — | — |


### イベント
| Event Name | Description | Parameters |
|---------|--------|---------|
| change | ユーザーが値を確認したときにトリガされます。 | component's binding value |
| blur | インプットがぼやけたときされます | component instance |
| focus | 入力がフォーカスされているときにトリガされます。 | component instance |

### 方法
| Method | Description | Parameters |
|------|--------|-------|
| focus | インプットコンポーネントにフォーカス | — |

### スロット
| Name    | Description |
|---------|-------------|
| range-separator  | カスタム範囲区切りコンテンツ |
