---
title: Input
lang: en-US
---

# Input Number

Input numerical values with a customizable range.

## Basic usage

:::demo Bind a variable to `v-model` in `<el-input-number>` element and you are set.

input-number/basic

:::

:::tip

When inputting invalid string to the input box, input value will emit `NaN` to the upper layer as result of error

:::

## Disabled

:::demo The `disabled` attribute accepts a `boolean`, and if the value is `true`, the component is disabled. If you just need to control the value within a range, you can add `min` attribute to set the minimum value and `max` to set the maximum value. By default, the minimum value is `Number.MIN_SAFE_INTEGER`.

input-number/disabled

:::

## Steps

Allows you to define incremental steps.

:::demo Add `step` attribute to set the step.

input-number/steps

:::

## Step strictly

:::demo The `step-strictly` attribute accepts a `boolean`. if this attribute is `true`, input value can only be multiple of step.

input-number/step-strictly

:::

## Precision

:::demo Add `precision` attribute to set the precision of input value.

input-number/precision

:::

:::tip

The value of `precision` must be a non negative integer and should not be less than the decimal places of `step`.

:::

## Size

Use attribute `size` to set additional sizes with `large` or `small`.

:::demo

input-number/size

:::

## Controls Position

:::demo Set `controls-position` to decide the position of control buttons.

input-number/controlled

:::

## Custom Icon ^(2.6.3)

:::demo Use `decrease-icon` and `increase-icon` to set custom icons.

input-number/custom

:::

## With prefix and suffix ^(2.8.4)

:::demo Use the prefix and suffix named slots.

input-number/with-prefix-suffix

:::

:::tip

For precision purposes, the input number is limited from [Number.MIN_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) to [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).

:::

## API

### Attributes

| Name                          | Description                                      | Type                                          | Default                 |
| ----------------------------- | ------------------------------------------------ | --------------------------------------------- | ----------------------- |
| model-value / v-model         | Binding value                                    | ^[number] / ^[null]                           | —                       |
| min                           | The minimum allowed value                        | ^[number]                                     | Number.MIN_SAFE_INTEGER |
| max                           | The maximum allowed value                        | ^[number]                                     | Number.MAX_SAFE_INTEGER |
| step                          | Incremental step                                 | ^[number]                                     | 1                       |
| step-strictly                 | Whether input value can only be multiple of step | ^[boolean]                                    | false                   |
| precision                     | Precision of input value                         | ^[number]                                     | —                       |
| size                          | Size of the component                            | ^[enum]`'large' \| 'default' \| 'small'`      | default                 |
| readonly ^(2.2.16)            | Same as `readonly` in native input               | ^[boolean]                                    | false                   |
| disabled                      | Whether the component is disabled                | ^[boolean]                                    | false                   |
| controls                      | Whether to enable the control buttons            | ^[boolean]                                    | true                    |
| controls-position             | Position of the control buttons                  | ^[enum]`'' \| 'right'`                        | —                       |
| name                          | Same as `name` in native input                   | ^[string]                                     | —                       |
| aria-label ^(a11y) ^(2.7.2)   | Same as `aria-label` in native input             | ^[string]                                     | —                       |
| placeholder                   | Same as `placeholder` in native input            | ^[string]                                     | —                       |
| id                            | Same as `id` in native input                     | ^[string]                                     | —                       |
| value-on-clear ^(2.2.0)       | Value should be set when input box is cleared    | ^[number] / ^[null] / ^[enum]`'min' \| 'max'` | —                       |
| validate-event                | Whether to trigger form validation               | ^[boolean]                                    | true                    |
| label ^(a11y) ^(deprecated)   | Same as `aria-label` in native input             | ^[string]                                     | —                       |
| inputmode ^(2.10.3)           | Same as `inputmode` in native input              | ^[string]                                     | —                       |
| align ^(2.10.5)               | Alignment for the inner input text               | ^[enum]`'left' \| 'center' \| 'right'`        | 'center'                |
| disabled-scientific ^(2.10.5) | Disables input of scientific notation (e.g. 'e') | ^[boolean]                                    | false                   |

### Slots

| Name                   | Description                           |
| ---------------------- | ------------------------------------- |
| decrease-icon ^(2.6.3) | Custom input box button decrease icon |
| increase-icon ^(2.6.3) | Custom input box button increase icon |
| prefix ^(2.8.4)        | Content as Input prefix               |
| suffix ^(2.8.4)        | Content as Input suffix               |

### Events

| Name   | Description                     | Type                                                                                    |
| ------ | ------------------------------- | --------------------------------------------------------------------------------------- |
| change | Triggers when the value changes | ^[Function]`(currentValue: number \| undefined, oldValue: number \| undefined) => void` |
| blur   | Triggers when Input blurs       | ^[Function]`(event: FocusEvent) => void`                                                |
| focus  | Triggers when Input focuses     | ^[Function]`(event: FocusEvent) => void`                                                |

### Exposes

| Name  | Description                      | Type                    |
| ----- | -------------------------------- | ----------------------- |
| focus | Get focus the input component    | ^[Function]`() => void` |
| blur  | Remove focus the input component | ^[Function]`() => void` |
