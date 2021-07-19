## TimeSelect

Use Time Select for time input.

### Fixed time picker

Provide a list of fixed time for users to choose.

:::demo Use `el-time-select` label, then assign start time, end time and time step with `start`, `end` and `step`.
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

### Fixed time range

If start time is picked at first, then the end time will change accordingly.

:::demo
```html
<template>
  <el-time-select
    placeholder="Start time"
    v-model="startTime"
    start='08:30'
    step='00:15'
    end='18:30'
  >
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
| model-value / v-model | binding value | string | — | — |
| disabled | whether TimeSelect is disabled | boolean | — | false |
| editable | whether the input is editable | boolean | — | true |
| clearable | whether to show clear button | boolean | — | true |
| size | size of Input | string | medium / small / mini | — |
| placeholder | placeholder in non-range mode | string | — | — |
| name | same as `name` in native input | string | — | — |
| prefix-icon | Custom prefix icon class | string | — | el-icon-time |
| clear-icon | Custom clear icon class | string | — | el-icon-circle-close |
| start | start time | string | — | 09:00 |
| end | end time | string | — | 18:00 |
| step | time step | string | — | 00:30 |
| minTime | minimum time, any time before this time will be disabled | string | — | 00:00 |
| maxTime | maximum time, any time after this time will be disabled | string | — | — |


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
