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

:::demo The `disabled` attribute accepts a `boolean`, and if the value is `true`, the component is disabled. If you just need to control the value within a range, you can add `min` attribute to set the minimum value and `max` to set the maximum value. By default, the minimum value is `0`.

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

## API

### Attributes

| Name                        | Description                                      | Type                                          | Default   |
| --------------------------- | ------------------------------------------------ | --------------------------------------------- | --------- |
| model-value / v-model       | binding value                                    | ^[number] / ^[null]                           | —         |
| min                         | the minimum allowed value                        | ^[number]                                     | -Infinity |
| max                         | the maximum allowed value                        | ^[number]                                     | Infinity  |
| step                        | incremental step                                 | ^[number]                                     | 1         |
| step-strictly               | whether input value can only be multiple of step | ^[boolean]                                    | false     |
| precision                   | precision of input value                         | ^[number]                                     | —         |
| size                        | size of the component                            | ^[enum]`'large' \| 'default' \| 'small'`      | default   |
| readonly ^(2.2.16)          | same as `readonly` in native input               | ^[boolean]                                    | false     |
| disabled                    | whether the component is disabled                | ^[boolean]                                    | false     |
| controls                    | whether to enable the control buttons            | ^[boolean]                                    | true      |
| controls-position           | position of the control buttons                  | ^[enum]`'' \| 'right'`                        | —         |
| name                        | same as `name` in native input                   | ^[string]                                     | —         |
| aria-label ^(a11y) ^(2.7.2) | same as `aria-label` in native input             | ^[string]                                     | —         |
| placeholder                 | same as `placeholder` in native input            | ^[string]                                     | —         |
| id                          | same as `id` in native input                     | ^[string]                                     | —         |
| value-on-clear ^(2.2.0)     | value should be set when input box is cleared    | ^[number] / ^[null] / ^[enum]`'min' \| 'max'` | —         |
| validate-event              | whether to trigger form validation               | ^[boolean]                                    | true      |
| label ^(a11y) ^(deprecated) | same as `aria-label` in native input             | ^[string]                                     | —         |

### Slots

| Name                   | Description                           |
| ---------------------- | ------------------------------------- |
| decrease-icon ^(2.6.3) | custom input box button decrease icon |
| increase-icon ^(2.6.3) | custom input box button increase icon |
| prefix ^(2.8.4)        | content as Input prefix               |
| suffix ^(2.8.4)        | content as Input suffix               |

### Events

| Name   | Description                     | Type                                                                                    |
| ------ | ------------------------------- | --------------------------------------------------------------------------------------- |
| change | triggers when the value changes | ^[Function]`(currentValue: number \| undefined, oldValue: number \| undefined) => void` |
| blur   | triggers when Input blurs       | ^[Function]`(event: FocusEvent) => void`                                                |
| focus  | triggers when Input focuses     | ^[Function]`(event: FocusEvent) => void`                                                |

### Exposes

| Name  | Description                      | Type                    |
| ----- | -------------------------------- | ----------------------- |
| focus | get focus the input component    | ^[Function]`() => void` |
| blur  | remove focus the input component | ^[Function]`() => void` |
