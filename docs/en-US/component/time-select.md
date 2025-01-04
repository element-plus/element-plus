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

| Name                      | Description                                                                                                    | Type                                                                                             | Default     |
| ------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ----------- |
| model-value / v-model     | binding value                                                                                                  | ^[string]                                                                                        | —           |
| disabled                  | whether TimeSelect is disabled                                                                                 | ^[boolean]                                                                                       | false       |
| editable                  | whether the input is editable                                                                                  | ^[boolean]                                                                                       | true        |
| clearable                 | whether to show clear button                                                                                   | ^[boolean]                                                                                       | true        |
| include-end-time ^(2.9.3) | whether `end` is included in options                                                                           | ^[boolean]                                                                                       | false       |
| size                      | size of Input                                                                                                  | ^[enum]`'large' \| 'default' \| 'small'`                                                         | default     |
| placeholder               | placeholder in non-range mode                                                                                  | ^[string]                                                                                        | —           |
| name                      | same as `name` in native input                                                                                 | ^[string]                                                                                        | —           |
| effect                    | Tooltip theme, built-in theme: `dark` / `light`                                                                | ^[string] / ^[enum]`'dark' \| 'light'`                                                           | light       |
| prefix-icon               | custom prefix icon component                                                                                   | ^[string] / ^[Component]                                                                         | Clock       |
| clear-icon                | custom clear icon component                                                                                    | ^[string] / ^[Component]                                                                         | CircleClose |
| start                     | start time                                                                                                     | ^[string]                                                                                        | 09:00       |
| end                       | end time                                                                                                       | ^[string]                                                                                        | 18:00       |
| step                      | time step                                                                                                      | ^[string]                                                                                        | 00:30       |
| min-time                  | minimum time, any time before this time will be disabled                                                       | ^[string]                                                                                        | —           |
| max-time                  | maximum time, any time after this time will be disabled                                                        | ^[string]                                                                                        | —           |
| format                    | set format of time                                                                                             | ^[string] see [formats](https://day.js.org/docs/en/display/format#list-of-all-available-formats) | HH:mm       |
| empty-values ^(2.7.0)     | empty values of component, [see config-provider](/en-US/component/config-provider#empty-values-configurations) | ^[array]                                                                                         | —           |
| value-on-clear ^(2.7.0)   | clear return value, [see config-provider](/en-US/component/config-provider#empty-values-configurations)        | ^[string] / ^[number] / ^[boolean] / ^[Function]                                                 | —           |

### Events

| Name           | Description                                                       | Type                                     |
| -------------- | ----------------------------------------------------------------- | ---------------------------------------- |
| change         | triggers when user confirms the value                             | ^[Function]`(value: string) => void`     |
| blur           | triggers when Input blurs                                         | ^[Function]`(event: FocusEvent) => void` |
| focus          | triggers when Input focuses                                       | ^[Function]`(event: FocusEvent) => void` |
| clear ^(2.7.7) | triggers when the clear icon is clicked in a clearable TimeSelect | ^[Function]`() => void`                  |

### Exposes

| Method | Description               | Type                    |
| ------ | ------------------------- | ----------------------- |
| focus  | focus the Input component | ^[Function]`() => void` |
| blur   | blur the Input component  | ^[Function]`() => void` |
