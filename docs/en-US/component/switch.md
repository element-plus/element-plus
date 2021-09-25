# Switch

Switch is used for switching between two opposing states.

## Basic usage

:::demo Bind `v-model` to a `Boolean` typed variable. The `active-color` and `inactive-color` attribute decides the background color in two states.

switch/basic

:::

## Text description

:::demo You can add `active-text` and `inactive-text` attribute to show texts.

switch/text-description

:::

## Extended value types

:::demo You can set `active-value` and `inactive-value` attributes. They both receive a `Boolean`, `String` or `Number` typed value.

switch/extended-value-types

:::

## Disabled

:::demo Adding the `disabled` attribute disables Switch.

switch/disabled

:::

## Loading

:::demo Setting the `loading` attribute to `true` indicates a loading state on the Switch.

switch/loading

:::

## prevent switching

:::demo set the `before-change` property, If `false` is returned or a `Promise` is returned and then is rejected, will stop switching.

switch/prevent-switching

:::

## Attributes

| Attribute             | Description                                                                                                                                     | Type                      | Accepted Values | Default |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | --------------- | ------- |
| model-value / v-model | binding value, it should be equivalent to either `active-value` or `inactive-value`, by default it's `boolean` type                             | boolean / string / number | —               | —       |
| disabled              | whether Switch is disabled                                                                                                                      | boolean                   | —               | false   |
| loading               | whether Switch is in loading state                                                                                                              | boolean                   | —               | false   |
| width                 | width of Switch                                                                                                                                 | number                    | —               | 40      |
| active-icon-class     | class name of the icon displayed when in `on` state, overrides `active-text`                                                                    | string                    | —               | —       |
| inactive-icon-class   | class name of the icon displayed when in `off` state, overrides `inactive-text`                                                                 | string                    | —               | —       |
| active-text           | text displayed when in `on` state                                                                                                               | string                    | —               | —       |
| inactive-text         | text displayed when in `off` state                                                                                                              | string                    | —               | —       |
| active-value          | switch value when in `on` state                                                                                                                 | boolean / string / number | —               | true    |
| inactive-value        | switch value when in `off` state                                                                                                                | boolean / string / number | —               | false   |
| active-color          | background color when in `on` state                                                                                                             | string                    | —               | #409EFF |
| inactive-color        | background color when in `off` state                                                                                                            | string                    | —               | #C0CCDA |
| border-color          | border color of the switch                                                                                                                      | string                    | —               | —       |
| name                  | input name of Switch                                                                                                                            | string                    | —               | —       |
| validate-event        | whether to trigger form validation                                                                                                              | boolean                   | —               | true    |
| before-change         | before-change hook before the switch state changes. If `false` is returned or a `Promise` is returned and then is rejected, will stop switching | function                  | —               | —       |

## Events

| Event Name | Description                 | Parameters           |
| ---------- | --------------------------- | -------------------- |
| change     | triggers when value changes | value after changing |

## Methods

| Method | Description                | Parameters |
| ------ | -------------------------- | ---------- |
| focus  | focus the Switch component | —          |
