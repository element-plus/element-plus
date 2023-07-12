---
title: TimePicker
lang: en-US
---

# TimePicker

Use Time Picker for time input.

:::tip

This component requires the `<client-only></client-only>` wrap when used in SSR (eg: [Nuxt](https://nuxt.com/v3)) and SSG (eg: [VitePress](https://vitepress.vuejs.org/)).

:::

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

## API

### Attributes

| Name                  | Description                                              | Type                                                                                            | Default     |
| --------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------- |
| model-value / v-model | binding value, if it is an array, the length should be 2 | ^[number] / ^[string] / ^[object]`Date \| [Date, Date] \| [number, number] \| [string, string]` | ''          |
| readonly              | whether TimePicker is read only                          | ^[boolean]                                                                                      | false       |
| disabled              | whether TimePicker is disabled                           | ^[boolean]                                                                                      | false       |
| editable              | whether the input is editable                            | ^[boolean]                                                                                      | true        |
| clearable             | whether to show clear button                             | ^[boolean]                                                                                      | true        |
| size                  | size of Input                                            | ^[enum]`'large' \| 'default' \| 'small'`                                                        | —           |
| placeholder           | placeholder in non-range mode                            | ^[string]                                                                                       | ''          |
| start-placeholder     | placeholder for the start time in range mode             | ^[string]                                                                                       | —           |
| end-placeholder       | placeholder for the end time in range mode               | ^[string]                                                                                       | —           |
| is-range              | whether to pick a time range                             | ^[boolean]                                                                                      | false       |
| arrow-control         | whether to pick time using arrow buttons                 | ^[boolean]                                                                                      | false       |
| popper-class          | custom class name for TimePicker's dropdown              | ^[string]                                                                                       | ''          |
| range-separator       | range separator                                          | ^[string]                                                                                       | '-'         |
| format                | format of the displayed value in the input box           | ^[string] see [date formats](/en-US/component/date-picker#date-formats)                         | —           |
| default-value         | optional, default date of the calendar                   | ^[Date] / ^[object]`[Date, Date]`                                                               | —           |
| id                    | same as `id` in native input                             | ^[string] / ^[object]`[string, string]`                                                         | —           |
| name                  | same as `name` in native input                           | ^[string]                                                                                       | ''          |
| label ^(a11y)         | same as `aria-label` in native input                     | ^[string]                                                                                       | —           |
| prefix-icon           | Custom prefix icon component                             | ^[string] / ^[Component]                                                                        | Clock       |
| clear-icon            | Custom clear icon component                              | ^[string] / ^[Component]                                                                        | CircleClose |
| disabled-hours        | To specify the array of hours that cannot be selected    | ^[Function]`(role: string, comparingDate?: Dayjs) => number[]`                                  | —           |
| disabled-minutes      | To specify the array of minutes that cannot be selected  | ^[Function]`(hour: number, role: string, comparingDate?: Dayjs) => number[]`                    | —           |
| disabled-seconds      | To specify the array of seconds that cannot be selected  | ^[Function]`(hour: number, minute: number, role: string, comparingDate?: Dayjs) => number[]`    | —           |
| teleported            | whether time-picker dropdown is teleported to the body   | ^[boolean]                                                                                      | true        |
| tabindex              | input tabindex                                           | ^[string] / ^[number]                                                                           | 0           |

### Events

| Name           | Description                                                | Type                                                                                                         |
| -------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| change         | triggers when user confirms the value                      | ^[Function]`(val: number \| string \| Date \| [number, number] \| [string, string] \| [Date, Date]) => void` |
| blur           | triggers when Input blurs                                  | ^[Function]`(e: FocusEvent) => void`                                                                         |
| focus          | triggers when Input focuses                                | ^[Function]`(e: FocusEvent) => void`                                                                         |
| visible-change | triggers when the TimePicker's dropdown appears/disappears | ^[Function]`(visibility: boolean) => void`                                                                   |

### Exposes

| Name        | Description                 | Type                                              |
| ----------- | --------------------------- | ------------------------------------------------- |
| focus       | focus the Input component   | ^[Function]`(e: FocusEvent \| undefined) => void` |
| blur        | blur the Input component    | ^[Function]`(e: FocusEvent \| undefined) => void` |
| handleOpen  | open the TimePicker popper  | ^[Function]`() => void`                           |
| handleClose | close the TimePicker popper | ^[Function]`() => void`                           |
