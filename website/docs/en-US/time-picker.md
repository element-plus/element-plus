## TimePicker

Use Time Picker for time input.

### Arbitrary time picker

Can pick an arbitrary time.

:::demo Use `el-time-picker` label, and you can limit the time range by specifying `disabledHours` `disabledMinutes` and `disabledSeconds`. By default, you can scroll the mouse wheel to pick time, alternatively you can use the control arrows when the `arrow-control` attribute is set.

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
| model-value / v-model | binding value | Date | — | — |
| readonly | whether TimePicker is read only | boolean | — | false |
| disabled | whether TimePicker is disabled | boolean | — | false |
| editable | whether the input is editable | boolean | — | true |
| clearable | whether to show clear button | boolean | — | true |
| size | size of Input | string | medium / small / mini | — |
| placeholder | placeholder in non-range mode | string | — | — |
| start-placeholder | placeholder for the start time in range mode | string | — | — |
| end-placeholder | placeholder for the end time in range mode | string | — | — |
| is-range | whether to pick a time range | boolean | — | false |
| arrow-control | whether to pick time using arrow buttons | boolean | — | false |
| align | alignment | left / center / right | left |
| popper-class | custom class name for TimePicker's dropdown | string | — | — |
| range-separator | range separator | string | — | '-' |
| format | format of the displayed value in the input box | string | see [date formats](#/en-US/component/date-picker#date-formats) | HH:mm:ss |
| default-value | optional, default date of the calendar | Date for TimePicker, string for TimeSelect | anything accepted by `new Date()` for TimePicker, selectable value for TimeSelect | — |
| name | same as `name` in native input | string | — | — |
| prefix-icon | Custom prefix icon class | string | — | el-icon-time |
| clear-icon | Custom clear icon class | string | — | el-icon-circle-close |
| disabledHours | To specify the array of hours that cannot be selected | function | — | — |
| disabledMinutes | To specify the array of minutes that cannot be selected | function(selectedHour) | — | — |
| disabledSeconds | To specify the array of seconds that cannot be selected | function(selectedHour, selectedMinute) | — | — |

### Events
| Event Name | Description | Parameters |
|---------|--------|---------|
| change | triggers when user confirms the value | component's binding value |
| blur | triggers when Input blurs | component instance |
| focus | triggers when Input focuses | component instance |

### Methods
| Method | Description | Parameters |
| ---- | ---- | ---- |
| focus | focus the Input component | — |
| blur | blur the Input component | — |
