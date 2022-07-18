---
title: TimePicker
lang: en-US
---

# TimePicker

Use Time Picker for time input.

## Arbitrary time picker

Can pick an arbitrary time.

:::demo By default, you can scroll the mouse wheel to pick time, alternatively you can use the control arrows when the `arrow-control` attribute is set.

time-picker/basic

:::

## Limit the time range

You can also limit the time range.

:::demo Limit the time range by specifying `disabledHours` `disabledMinutes` and `disabledSeconds`.

time-picker/basic-range

:::

## Arbitrary time range

Can pick an arbitrary time range.

:::demo We can pick a time range by adding an `is-range` attribute. Also, `arrow-control` is supported in range mode.

time-picker/range

:::

## Attributes

| Attribute             | Description                                             | Type                                       | Accepted Values                                                                     | Default     |
| --------------------- | ------------------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------- | ----------- |
| model-value / v-model | binding value                                           | Date                                       | —                                                                                   | —           |
| readonly              | whether TimePicker is read only                         | boolean                                    | —                                                                                   | false       |
| disabled              | whether TimePicker is disabled                          | boolean                                    | —                                                                                   | false       |
| editable              | whether the input is editable                           | boolean                                    | —                                                                                   | true        |
| clearable             | whether to show clear button                            | boolean                                    | —                                                                                   | true        |
| size                  | size of Input                                           | string                                     | large / default / small                                                             | —           |
| placeholder           | placeholder in non-range mode                           | string                                     | —                                                                                   | —           |
| start-placeholder     | placeholder for the start time in range mode            | string                                     | —                                                                                   | —           |
| end-placeholder       | placeholder for the end time in range mode              | string                                     | —                                                                                   | —           |
| is-range              | whether to pick a time range                            | boolean                                    | —                                                                                   | false       |
| arrow-control         | whether to pick time using arrow buttons                | boolean                                    | —                                                                                   | false       |
| popper-class          | custom class name for TimePicker's dropdown             | string                                     | —                                                                                   | —           |
| range-separator       | range separator                                         | string                                     | —                                                                                   | '-'         |
| format                | format of the displayed value in the input box          | string                                     | see [date formats](/en-US/component/date-picker#date-formats)                       | HH:mm:ss    |
| default-value         | optional, default date of the calendar                  | Date for TimePicker, string for TimeSelect | anything accepted by `new Date()` for TimePicker, selectable value for TimeSelect   | —           |
| id                    | same as `id` in native input                            | string / array(string)                     | String `id="my-time"` or array `:id="['my-range-start', 'my-range-end']"` for range | -           |
| name                  | same as `name` in native input                          | string                                     | —                                                                                   | —           |
| prefix-icon           | Custom prefix icon component                            | string / Component                         | —                                                                                   | Clock       |
| clear-icon            | Custom clear icon component                             | string / Component                         | —                                                                                   | CircleClose |
| disabled-hours        | To specify the array of hours that cannot be selected   | function                                   | —                                                                                   | —           |
| disabled-minutes      | To specify the array of minutes that cannot be selected | function(selectedHour)                     | —                                                                                   | —           |
| disabled-seconds      | To specify the array of seconds that cannot be selected | function(selectedHour, selectedMinute)     | —                                                                                   | —           |
| teleported            | whether time-picker dropdown is teleported to the body  | boolean                                    | true / false                                                                        | true        |

## Events

| Event Name     | Description                                                | Parameters              |
| -------------- | ---------------------------------------------------------- | ----------------------- |
| change         | triggers when user confirms the value                      | `(val: typeof v-model)` |
| blur           | triggers when Input blurs                                  | `(e: FocusEvent)`       |
| focus          | triggers when Input focuses                                | `(e: FocusEvent)`       |
| visible-change | triggers when the TimePicker's dropdown appears/disappears | `(visibility: boolean)` |

## Methods

| Method | Description               | Parameters |
| ------ | ------------------------- | ---------- |
| focus  | focus the Input component | —          |
| blur   | blur the Input component  | —          |
