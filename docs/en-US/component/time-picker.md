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

## API

### Attributes

| Name                         | Description                                                                                                          | Type                                                                                            | Default                            |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------- |
| model-value / v-model        | Binding value, if it is an array, the length should be 2                                                             | ^[number] / ^[string] / ^[object]`Date \| [Date, Date] \| [number, number] \| [string, string]` | ''                                 |
| readonly                     | Whether TimePicker is read only                                                                                      | ^[boolean]                                                                                      | false                              |
| disabled                     | Whether TimePicker is disabled                                                                                       | ^[boolean]                                                                                      | false                              |
| editable                     | Whether the input is editable                                                                                        | ^[boolean]                                                                                      | true                               |
| clearable                    | Whether to show clear button                                                                                         | ^[boolean]                                                                                      | true                               |
| size                         | Size of Input                                                                                                        | ^[enum]`'large' \| 'default' \| 'small'`                                                        | —                                  |
| placeholder                  | Placeholder in non-range mode                                                                                        | ^[string]                                                                                       | ''                                 |
| start-placeholder            | Placeholder for the start time in range mode                                                                         | ^[string]                                                                                       | —                                  |
| end-placeholder              | Placeholder for the end time in range mode                                                                           | ^[string]                                                                                       | —                                  |
| is-range                     | Whether to pick a time range                                                                                         | ^[boolean]                                                                                      | false                              |
| arrow-control                | Whether to pick time using arrow buttons                                                                             | ^[boolean]                                                                                      | false                              |
| popper-class                 | Custom class name for TimePicker's dropdown                                                                          | ^[string]                                                                                       | ''                                 |
| popper-style                 | Custom style for TimePicker's dropdown                                                                               | ^[string] / ^[object]                                                                           | —                                  |
| popper-options               | Customized popper option see more at [popper.js](https://popper.js.org/docs/v2/)                                     | ^[object]`Partial<PopperOptions>`                                                               | {}                                 |
| fallback-placements ^(2.8.4) | List of possible positions for Tooltip [popper.js](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements) | ^[array]`Placement[]`                                                                           | ['bottom', 'top', 'right', 'left'] |
| placement ^(2.8.4)           | Position of dropdown                                                                                                 | `Placement`                                                                                     | bottom                             |
| range-separator              | Range separator                                                                                                      | ^[string]                                                                                       | '-'                                |
| format                       | Format of the displayed value in the input box                                                                       | ^[string] see [date formats](./date-picker.md#date-formats)                                     | —                                  |
| default-value                | Optional, default date of the calendar                                                                               | ^[Date] / ^[array]`[Date, Date]`                                                                | —                                  |
| value-format                 | Optional, format of binding value. If not specified, the binding value will be a Date object                         | ^[string] see [date formats](./date-picker.md#date-formats)                                     | —                                  |
| id                           | Same as `id` in native input                                                                                         | ^[string] / ^[array]`[string, string]`                                                          | —                                  |
| name                         | Same as `name` in native input                                                                                       | ^[string]                                                                                       | ''                                 |
| aria-label ^(a11y) ^(2.7.2)  | Same as `aria-label` in native input                                                                                 | ^[string]                                                                                       | —                                  |
| prefix-icon                  | Custom prefix icon component                                                                                         | ^[string] / ^[Component]                                                                        | Clock                              |
| clear-icon                   | Custom clear icon component                                                                                          | ^[string] / ^[Component]                                                                        | CircleClose                        |
| disabled-hours               | To specify the array of hours that cannot be selected                                                                | ^[Function]`(role: string, comparingDate?: Dayjs) => number[]`                                  | —                                  |
| disabled-minutes             | To specify the array of minutes that cannot be selected                                                              | ^[Function]`(hour: number, role: string, comparingDate?: Dayjs) => number[]`                    | —                                  |
| disabled-seconds             | To specify the array of seconds that cannot be selected                                                              | ^[Function]`(hour: number, minute: number, role: string, comparingDate?: Dayjs) => number[]`    | —                                  |
| teleported                   | Whether time-picker dropdown is teleported to the body                                                               | ^[boolean]                                                                                      | true                               |
| tabindex                     | Input tabindex                                                                                                       | ^[string] / ^[number]                                                                           | 0                                  |
| empty-values ^(2.7.0)        | Empty values of component, [see config-provider](./config-provider.md#empty-values-configurations)                   | ^[array]                                                                                        | —                                  |
| value-on-clear ^(2.7.0)      | Clear return value, [see config-provider](./config-provider.md#empty-values-configurations)                          | ^[string] / ^[number] / ^[boolean] / ^[Function]                                                | —                                  |
| save-on-blur ^(2.13.4)       | Whether to auto-fill the input with the current time on focus when no value is selected                              | ^[boolean]                                                                                      | true                               |
| label ^(a11y) ^(deprecated)  | Same as `aria-label` in native input                                                                                 | ^[string]                                                                                       | —                                  |

### Events

| Name           | Description                                                       | Type                                                                                                         |
| -------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| change         | Triggers when user confirms the value                             | ^[Function]`(val: number \| string \| Date \| [number, number] \| [string, string] \| [Date, Date]) => void` |
| blur           | Triggers when Input blurs                                         | ^[Function]`(e: FocusEvent) => void`                                                                         |
| focus          | Triggers when Input focuses                                       | ^[Function]`(e: FocusEvent) => void`                                                                         |
| clear ^(2.7.7) | Triggers when the clear icon is clicked in a clearable TimePicker | ^[Function]`() => void`                                                                                      |
| visible-change | Triggers when the TimePicker's dropdown appears/disappears        | ^[Function]`(visibility: boolean) => void`                                                                   |

### Exposes

| Name                  | Description                    | Type                    |
| --------------------- | ------------------------------ | ----------------------- |
| focus                 | Focus the TimePicker component | ^[Function]`() => void` |
| blur                  | Blur the TimePicker component  | ^[Function]`() => void` |
| handleOpen ^(2.2.16)  | Open the TimePicker popper     | ^[Function]`() => void` |
| handleClose ^(2.2.16) | Close the TimePicker popper    | ^[Function]`() => void` |

## Type Declarations

<details>
  <summary>Show declarations</summary>

```ts
type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'
```

</details>
