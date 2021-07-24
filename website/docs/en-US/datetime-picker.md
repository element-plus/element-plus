## DateTimePicker

Select date and time in one picker.

:::tip
DateTimePicker is derived from DatePicker and TimePicker. For a more detailed explanation on attributes, you can refer to DatePicker and TimePicker.
:::

###  Date and time

:::demo You can select date and time in one picker at the same time by setting `type` to `datetime`. The way to use shortcuts is the same as Date Picker.

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

### Date and time range

:::demo You can select date and time range by setting `type` to `datetimerange`.

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

###  Default time value for start date and end date

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

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model-value / v-model | binding value | date(DateTimePicker) / array(DateTimeRangePicker) | — | — |
| readonly | whether DatePicker is read only | boolean | — | false |
| disabled | whether DatePicker is disabled | boolean | — | false |
| editable | whether the input is editable | boolean | — | true |
| clearable | whether to show clear button | boolean | — | true |
|size | size of Input | string | large/medium/small/mini  | large |
| placeholder | placeholder in non-range mode | string | — | — |
| start-placeholder | placeholder for the start date in range mode | string | — | — |
| end-placeholder | placeholder for the end date in range mode | string | — | — |
| time-arrow-control | whether to pick time using arrow buttons | boolean | — | false |
| type | type of the picker | string | year/month/date/datetime/ week/datetimerange/daterange | date |
| format | format of the displayed value in the input box | string | see [date formats](#/en-US/component/date-picker#date-formats) | YYYY-MM-DD HH:mm:ss |
| popper-class | custom class name for DateTimePicker's dropdown | string | — | — |
| range-separator | range separator | string | - | '-' |
| default-value | optional, default date of the calendar | Date | anything accepted by `new Date()` | — |
| default-time | the default time value after picking a date | non-range: Date / range: Date[] | non-range: a Date object, range: array of two Date objects, and the first item is for the start date and second for the end date. Time `00:00:00` will be used if not specified | — |
| name | same as `name` in native input | string | — | — |
| unlink-panels | unllink two date-panels in range-picker | boolean | — | false |
| prefix-icon | Custom prefix icon class | string | — | el-icon-date |
| clear-icon | Custom clear icon class | string | — | el-icon-circle-close |
| shortcuts | an object array to set shortcut options | object[{ text: string, value: date / function }] | — | — |
| disabledDate | a function determining if a date is disabled with that date as its parameter. Should return a Boolean | function | — | — |
| cellClassName | set custom className | Function(Date) | — | — |

### Events
| Event Name | Description | Parameters |
|---------|--------|---------|
| change | triggers when user confirms the value | component's binding value |
| blur | triggers when Input blurs | component instance |
| focus | triggers when Input focuses | component instance |

### Methods
| Method | Description | Parameters |
|------|--------|-------|
| focus | focus the Input component | — |
