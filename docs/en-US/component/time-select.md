---
title: TimeSelect
lang: en-US
---

# TimeSelect

Use Time Select for time input.

The available time range is 00:00 to 23:59

## Fixed time picker

Provide a list of fixed time for users to choose.

:::demo Use `el-time-select` label, then assign start time, end time and time step with `start`, `end` and `step`.

time-select/basic

:::

## Time Formats

Use `format` to control format of time(hours and minutes).

Check the list [here](https://day.js.org/docs/en/display/format#list-of-all-available-formats) of all available formats of Day.js.

:::warning

Pay attention to capitalization

:::

:::demo

time-select/time-formats

:::

## Fixed time range

If start( end ) time is picked at first, then the status of end( start ) time's options will change accordingly.

:::demo

time-select/time-range

:::

## API

### Attributes

| Name                      | Description                                                                                        | Type                                                                                             | Default     |
| ------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ----------- |
| model-value / v-model     | Binding value                                                                                      | ^[string]                                                                                        | —           |
| disabled                  | Whether TimeSelect is disabled                                                                     | ^[boolean]                                                                                       | false       |
| editable                  | Whether the input is editable                                                                      | ^[boolean]                                                                                       | true        |
| clearable                 | Whether to show clear button                                                                       | ^[boolean]                                                                                       | true        |
| include-end-time ^(2.9.3) | Whether `end` is included in options                                                               | ^[boolean]                                                                                       | false       |
| size                      | Size of Input                                                                                      | ^[enum]`'large' \| 'default' \| 'small'`                                                         | default     |
| placeholder               | Placeholder in non-range mode                                                                      | ^[string]                                                                                        | —           |
| name ^(2.13.3)            | Same as `name` in native input                                                                     | ^[string]                                                                                        | —           |
| effect                    | Tooltip theme, built-in theme: `dark` / `light`                                                    | ^[string] / ^[enum]`'dark' \| 'light'`                                                           | light       |
| prefix-icon               | Custom prefix icon component                                                                       | ^[string] / ^[Component]                                                                         | Clock       |
| clear-icon                | Custom clear icon component                                                                        | ^[string] / ^[Component]                                                                         | CircleClose |
| start                     | Start time                                                                                         | ^[string]                                                                                        | 09:00       |
| end                       | End time                                                                                           | ^[string]                                                                                        | 18:00       |
| step                      | Time step                                                                                          | ^[string]                                                                                        | 00:30       |
| min-time                  | Minimum time, any time before this time will be disabled                                           | ^[string]                                                                                        | —           |
| max-time                  | Maximum time, any time after this time will be disabled                                            | ^[string]                                                                                        | —           |
| format                    | Set format of time                                                                                 | ^[string] see [formats](https://day.js.org/docs/en/display/format#list-of-all-available-formats) | HH:mm       |
| empty-values ^(2.7.0)     | Empty values of component, [see config-provider](./config-provider.md#empty-values-configurations) | ^[array]                                                                                         | —           |
| value-on-clear ^(2.7.0)   | Clear return value, [see config-provider](./config-provider.md#empty-values-configurations)        | ^[string] / ^[number] / ^[boolean] / ^[Function]                                                 | —           |
| popper-class ^(2.11.4)    | Custom class name for TimeSelect's dropdown                                                        | ^[string]                                                                                        | ''          |
| popper-style ^(2.11.4)    | Custom style for TimeSelect's dropdown                                                             | ^[string] / ^[object]                                                                            | —           |

### Events

| Name           | Description                                                       | Type                                     |
| -------------- | ----------------------------------------------------------------- | ---------------------------------------- |
| change         | Triggers when user confirms the value                             | ^[Function]`(value: string) => void`     |
| blur           | Triggers when Input blurs                                         | ^[Function]`(event: FocusEvent) => void` |
| focus          | Triggers when Input focuses                                       | ^[Function]`(event: FocusEvent) => void` |
| clear ^(2.7.7) | Triggers when the clear icon is clicked in a clearable TimeSelect | ^[Function]`() => void`                  |

### Exposes

| Method | Description               | Type                    |
| ------ | ------------------------- | ----------------------- |
| focus  | Focus the Input component | ^[Function]`() => void` |
| blur   | Blur the Input component  | ^[Function]`() => void` |
