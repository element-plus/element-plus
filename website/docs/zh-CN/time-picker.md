## TimePicker 时间选择器

 用于选择或输入日期

### 任意时间点

可以选择任意时间

:::demo 使用 el-time-picker 标签，通过 `disabledHours` `disabledMinutes` 和 `disabledSeconds` 限制可选时间范围。提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开`arrow-control`属性则通过界面上的箭头进行选择。
```html
<template>
  <el-time-picker
    v-model="value1"
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds"
    placeholder="任意时间点">
  </el-time-picker>
  <el-time-picker
    arrow-control
    v-model="value2"
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds"
    placeholder="任意时间点">
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
      // 如允许 17:30:00 - 18:30:00
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

### 任意时间范围

可选择任意的时间范围

:::demo 添加`is-range`属性即可选择时间范围，同样支持`arrow-control`属性。
```html
<template>
  <el-time-picker
    is-range
    v-model="value1"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围">
  </el-time-picker>
  <el-time-picker
    is-range
    arrow-control
    v-model="value2"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围">
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
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model-value / v-model | 绑定值 | date | — | — |
| readonly | 完全只读 | boolean | — | false |
| disabled | 禁用 | boolean | — | false |
| editable | 文本框可输入 | boolean | — | true |
| clearable | 是否显示清除按钮 | boolean | — | true |
| size          | 输入框尺寸     | string          | medium / small / mini  | — |
| placeholder | 非范围选择时的占位内容 | string | — | — |
| start-placeholder | 范围选择时开始日期的占位内容 | string | — | — |
| end-placeholder | 范围选择时开始日期的占位内容 | string | — | — |
| is-range | 是否为时间范围选择 | boolean | — | false |
| arrow-control | 是否使用箭头进行时间选择 | boolean | — | false |
| align | 对齐方式 | string | left / center / right | left |
| popper-class | TimePicker 下拉框的类名 | string | — | — |
| range-separator | 选择范围时的分隔符 | string | - | '-' |
| format | 显示在输入框中的格式 | string | 见[日期格式](#/zh-CN/component/date-picker#ri-qi-ge-shi) | HH:mm:ss |
| default-value | 可选，选择器打开时默认显示的时间 | Date(TimePicker) / string(TimeSelect) | 可被`new Date()`解析(TimePicker) / 可选值(TimeSelect) | — |
| name | 原生属性 | string | — | — |
| prefix-icon | 自定义头部图标的类名 | string | — | el-icon-time |
| clear-icon | 自定义清空图标的类名 | string | — | el-icon-circle-close |
| disabledHours | 禁止选择部分小时选项 | function | — | - |
| disabledMinutes | 禁止选择部分分钟选项 | function(selectedHour) | — | - |
| disabledSeconds | 禁止选择部分秒选项 | function(selectedHour, selectedMinute) | — | - |

### Events
| 事件名 | 说明 | 参数 |
|---------|--------|---------|
| change | 用户确认选定的值时触发 | 组件绑定值 |
| blur | 当 input 失去焦点时触发 | 组件实例 |
| focus | 当 input 获得焦点时触发 | 组件实例 |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | - |
