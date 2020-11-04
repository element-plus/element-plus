## TimePicker

Use Time Picker for time input.

### Arbitrary time picker

Can pick an arbitrary time.

:::demo Use `el-time-picker` label, and you can limit the time range by specifying `selectableRange`. By default, you can scroll the mouse wheel to pick time, alternatively you can use the control arrows when the `arrow-control` attribute is set.

```html
<template>
  <el-time-picker
    v-model="value1"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="Arbitrary time">
  </el-time-picker>
  <el-time-picker
    arrow-control
    v-model="value2"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="Arbitrary time">
  </el-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value1: new Date(2016, 9, 10, 18, 40),
        value2: new Date(2016, 9, 10, 18, 40)
      };
    }
  }
</script>
```
:::

### Arbitrary time range

Can pick an arbitrary time range.

:::demo We can pick a time range by adding an `is-range` attribute. Also, `arrow-control` is supported in range mode.
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

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | binding value | date(TimePicker) / string(TimeSelect) | - | - |
| readonly | whether TimePicker is read only | boolean | — | false |
| disabled | whether TimePicker is disabled | boolean | — | false |
| editable | whether the input is editable | boolean | — | true |
| clearable | whether to show clear button | boolean | — | true |
| size | size of Input | string | medium / small / mini | — |
| placeholder | placeholder in non-range mode | string | — | — |
| start-placeholder | placeholder for the start time in range mode | string | — | — |
| end-placeholder | placeholder for the end time in range mode | string | — | — |
| is-range | whether to pick a time range, only works with `<el-time-picker>` | boolean | — | false |
| arrow-control | whether to pick time using arrow buttons, only works with `<el-time-picker>` | boolean | — | false |
| align | alignment | left / center / right | left |
| popper-class | custom class name for TimePicker's dropdown | string | — | — |
| picker-options | additional options, check the table below | object | — | {} |
| range-separator | range separator | string | - | '-' |
| default-value | optional, default date of the calendar | Date for TimePicker, string for TimeSelect | anything accepted by `new Date()` for TimePicker, selectable value for TimeSelect | — |
| value-format | optional, only for TimePicker, format of binding value. If not specified, the binding value will be a Date object | string | see [date formats](#/en-US/component/date-picker#date-formats) | — |
| name | same as `name` in native input | string | — | — |
| prefix-icon | Custom prefix icon class | string | — | el-icon-time |
| clear-icon | Custom clear icon class | string | — | el-icon-circle-close |

### Time Picker Options
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| selectableRange | available time range, e.g.`'18:30:00 - 20:30:00'`or`['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']` | string / array | — | — |
| format | format of the picker | string | hour `HH`, minute `mm`, second `ss`, AM/PM `A` | HH:mm:ss |

### Events
| Event Name | Description | Parameters |
|---------|--------|---------|
| change | triggers when user confirms the value | component's binding value |
| blur | triggers when Input blurs | component instance |
| focus | triggers when Input focuses | component instance |

### Methods
| Method | Description | Parameters |
| ---- | ---- | ---- |
| focus | focus the Input component | - |
