---
title: TimeSelect
lang: en-US
---

# TimeSelect

Use Time Select for time input.

The available time range is 00:00 to 23:59

:::tip

This component requires the `<client-only></client-only>` wrap when used in SSR (eg: [Nuxt](https://nuxt.com/v3)) and SSG (eg: [VitePress](https://vitepress.vuejs.org/)).

:::

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

## Attributes

| Name                  | Description                                              | Type                  | Accepted Values                                                                        | Default     |
| --------------------- | -------------------------------------------------------- | --------------------- | -------------------------------------------------------------------------------------- | ----------- |
| model-value / v-model | binding value                                            | string                | —                                                                                      | —           |
| disabled              | whether TimeSelect is disabled                           | boolean               | —                                                                                      | false       |
| editable              | whether the input is editable                            | boolean               | —                                                                                      | true        |
| clearable             | whether to show clear button                             | boolean               | —                                                                                      | true        |
| size                  | size of Input                                            | string                | large / default / small                                                                | default     |
| placeholder           | placeholder in non-range mode                            | string                | —                                                                                      | —           |
| name                  | same as `name` in native input                           | string                | —                                                                                      | —           |
| effect                | Tooltip theme, built-in theme: `dark` / `light`          | string                | string                                                                                 | light       |
| prefix-icon           | Custom prefix icon component                             | `string \| Component` | —                                                                                      | Clock       |
| clear-icon            | Custom clear icon component                              | `string \| Component` | —                                                                                      | CircleClose |
| start                 | start time                                               | string                | —                                                                                      | 09:00       |
| end                   | end time                                                 | string                | —                                                                                      | 18:00       |
| step                  | time step                                                | string                | —                                                                                      | 00:30       |
| min-time              | minimum time, any time before this time will be disabled | string                | —                                                                                      | 00:00       |
| max-time              | maximum time, any time after this time will be disabled  | string                | —                                                                                      | —           |
| format                | set format of time                                       | string                | see [formats](https://day.js.org/docs/en/display/format#list-of-all-available-formats) | HH:mm       |

## Events

| Name   | Description                           | Parameters                |
| ------ | ------------------------------------- | ------------------------- |
| change | triggers when user confirms the value | component's binding value |
| blur   | triggers when Input blurs             | (event: FocusEvent)       |
| focus  | triggers when Input focuses           | (event: FocusEvent)       |

## Methods

| Method | Description               | Parameters |
| ------ | ------------------------- | ---------- |
| focus  | focus the Input component | —          |
| blur   | blur the Input component  | —          |
