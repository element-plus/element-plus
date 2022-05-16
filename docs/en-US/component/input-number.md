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

## Attributes

| Attribute             | Description                                      | Type                   | Accepted Values | Default     |
| --------------------- | ------------------------------------------------ | ---------------------- | --------------- | ----------- |
| model-value / v-model | binding value                                    | number / undefined     | —               | —           |
| min                   | the minimum allowed value                        | number                 | —               | `-Infinity` |
| max                   | the maximum allowed value                        | number                 | —               | `Infinity`  |
| step                  | incremental step                                 | number                 | —               | 1           |
| step-strictly         | whether input value can only be multiple of step | boolean                | —               | false       |
| precision             | precision of input value                         | number                 | —               | —           |
| size                  | size of the component                            | string                 | large/small     | default     |
| disabled              | whether the component is disabled                | boolean                | —               | false       |
| controls              | whether to enable the control buttons            | boolean                | —               | true        |
| controls-position     | position of the control buttons                  | string                 | right           | -           |
| name                  | same as `name` in native input                   | string                 | —               | —           |
| label                 | label text                                       | string                 | —               | —           |
| placeholder           | placeholder in input                             | string                 | -               | -           |
| value-on-clear        | value should be set when input box is cleared    | string / number / null | min/max         | -           |

## Events

| Event Name | Description                     | Parameters                                             |
| ---------- | ------------------------------- | ------------------------------------------------------ |
| change     | triggers when the value changes | (currentValue: number \| NaN, oldValue: number \| NaN) |
| blur       | triggers when Input blurs       | (event: Event)                                         |
| focus      | triggers when Input focuses     | (event: Event)                                         |

## Methods

| Method | Description                      | Parameters |
| ------ | -------------------------------- | ---------- |
| focus  | get focus the input component    | -          |
| blur   | remove focus the input component | —          |
