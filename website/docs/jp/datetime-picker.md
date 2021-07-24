## DateTimePicker

1つのピッカーで日時を選択します。

:::tip
DateTimePickerはDatePickerとTimePickerから派生したものです。属性についての詳しい説明は、DatePickerとTimePickerを参照してください。
:::

###  日付と時間

:::demo `type`を`datetime`に設定することで、1つのピッカーで日付と時刻を同時に選択することができます。ショートカットの使い方は日付ピッカーと同じです。

```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="Select date and time">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With shortcuts</span>
    <el-date-picker
      v-model="value2"
      type="datetime"
      placeholder="Select date and time"
      :shortcuts="shortcuts">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With default time</span>
    <el-date-picker
      v-model="value3"
      type="datetime"
      placeholder="Select date and time"
      :default-time="defaultTime">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shortcuts: [{
          text: 'Today',
          value: new Date(),
        }, {
          text: 'Yesterday',
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            return date
          },
        }, {
          text: 'A week ago',
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            return date
          },
        }],
        value1: '',
        value2: '',
        value3: '',
        defaultTime: new Date(2000, 1, 1, 12, 0, 0) // '12:00:00'
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        shortcuts: [
          {
            text: 'Today',
            value: new Date(),
          },
          {
            text: 'Yesterday',
            value: () => {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              return date;
            },
          },
          {
            text: 'A week ago',
            value: () => {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              return date;
            },
          },
        ],
        value1: '',
        value2: '',
        value3: '',
        defaultTime: new Date(2000, 1, 1, 12, 0, 0), // '12:00:00'
      });

      return {
        ...toRefs(state),
      };
    },
  });

</setup>
-->
```
:::

### 日付と時間の範囲

:::demo `type`を`datetimerange`に設定することで、日付と時間の範囲を選択することができる。

```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With shortcuts</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      :shortcuts="shortcuts"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shortcuts: [{
          text: 'Last week',
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end]
          }
        }, {
          text: 'Last month',
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end]
          }
        }, {
          text: 'Last 3 months',
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end]
          }
        }],
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: ''
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        shortcuts: [
          {
            text: 'Last week',
            value: () => {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            },
          },
          {
            text: 'Last month',
            value: () => {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            },
          },
          {
            text: 'Last 3 months',
            value: () => {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              return [start, end];
            },
          },
        ],
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: '',
      });

      return {
        ...toRefs(state),
      };
    },
  });

</setup>
-->
```
:::

###  開始日と終了日のデフォルトの時間値

:::demo When picking date range on the date panel with type `datetimerange`, `00:00:00` will be used as the default time value for start and end date. We can control it with the `default-time` attribute. `default-time` accepts an array of up to two Date objects. The first item controls time value of the start date and the second item controls time value of the end date.
```html
<template>
  <div class="block">
    <span class="demonstration">Start date time 12:00:00</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="defaultTime1">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Start date time 12:00:00, end date time 08:00:00</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="defaultTime2">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        defaultTime1: [
          new Date(2000, 1, 1, 12, 0, 0),
        ], // '12:00:00'
        defaultTime2: [
          new Date(2000, 1, 1, 12, 0, 0),
          new Date(2000, 2, 1, 8, 0, 0)
        ] // '12:00:00', '08:00:00'
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        value1: '',
        value2: '',
        defaultTime1: [new Date(2000, 1, 1, 12, 0, 0)], // '12:00:00'
        defaultTime2: [
          new Date(2000, 1, 1, 12, 0, 0),
          new Date(2000, 2, 1, 8, 0, 0),
        ], // '12:00:00', '08:00:00'
      });

      return {
        ...toRefs(state),
      };
    },
  });

</setup>
-->
```
:::

### 属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model-value / v-model | バインディング値 | date(DateTimePicker) / array(DateTimeRangePicker) | — | — |
| readonly | DatePicker が読み取り専用かどうか | boolean | — | false |
| disabled | DatePicker が無効かどうか | boolean | — | false |
| editable | DatePicker が編集可能かどうか | boolean | — | true |
| clearable | クリアボタンを表示するかどうか | boolean | — | true |
|size | インプットサイズ | string | large/small/mini | — |
| placeholder | 非範囲モード時のプレースホルダ | string | — | — |
| start-placeholder | 範囲モードでの開始日のプレースホルダ | string | — | — |
| end-placeholder | 範囲終了日のプレースホルダ | string | — | — |
| time-arrow-control | 矢印ボタンで時間を選ぶかどうか | boolean | — | false |
| type | ピッカーのタイプ | string | year/month/date/datetime/ week/datetimerange/daterange | date |
| format | インプットボックスの表示値のフォーマット | string | see [date formats](#/en-US/component/date-picker#date-formats) | YYYY-MM-DD HH:mm:ss |
| popper-class | DateTimePickerのドロップダウンのカスタムクラス名 | string | — | — |
| range-separator | レンジセパレータ | string | - | '-' |
| default-value | オプション、カレンダーのデフォルトの日付 | Date | anything accepted by `new Date()` | — |
| default-time | the default time value after picking a date | non-range: Date / range: Date[] | non-range: a Date object, range: array of two Date objects, and the first item is for the start date and second for the end date. Time `00:00:00` will be used if not specified | — |
| name | ネイティブインプットの `name` と同じ | string | — | — |
| unlink-panels | レンジピッカーで2つのデータパネルのリンクを解除する | boolean | — | false |
| prefix-icon | カスタムプレフィックスアイコンクラス | string | — | el-icon-date |
| clear-icon | カスタムクリアアイコンクラス | string | — | el-icon-circle-close |
| shortcuts | an object array to set shortcut options | object[{ text: string, value: date / function }] | — | — |
| disabledDate | a function determining if a date is disabled with that date as its parameter. Should return a Boolean | function | — | — |
| cellClassName | set custom className | Function(Date) | — | — |


### イベント
| Event Name | Description | Parameters |
|---------|--------|---------|
| change | triggers when user confirms the value | component's binding value |
| blur | triggers when Input blurs | component instance |
| focus | triggers when Input focuses | component instance |

### メソッド
| Method | Description | Parameters |
|------|--------|-------|
| focus | focus the Input component | — |
