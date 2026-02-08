---
title: InputOtp
lang: en-US
---

# InputOtp ^(beta)

Used to enter a one-time password (OTP).

## Basic Usage

:::demo

input-otp/basic

:::

## Custom Length

The length of the input fields can be customized by setting the `length` prop.

:::demo

input-otp/custom-length

:::

## Variants

There are three variants available: `outlined` (default), `filled`, and `underlined`.

:::demo

input-otp/variants

:::

## Sizes

There are three sizes available: `large`, `default`, and `small`.

:::demo

input-otp/sizes

:::

## Disabled & Readonly

Disabled and readonly states are supported.

:::demo

input-otp/disabled

:::

## Number Input

You can set the `type` prop to `number` to allow only numeric input.

:::demo

input-otp/number

:::

## API

### InputOtp Attributes

| Name                  | Description                                                                                                                                | Type                                            | Default    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- | ---------- |
| model-value / v-model | The value of the OTP fields. Since numbers must not have leading zeros, `modelValue` is allowed to be a number only during initialization. | ^[string] / ^[number]                           | undefined  |
| length                | The OTP fields length                                                                                                                      | ^[number]                                       | 6          |
| type                  | The type of the OTP fields                                                                                                                 | ^[enum]`'text' \| 'number'`                     | 'text'     |
| variant               | The variant of the OTP fields                                                                                                              | ^[enum]`'outlined' \| 'filled' \| 'underlined'` | 'outlined' |
| size                  | The size of the OTP fields                                                                                                                 | ^[enum]`'large' \| 'default' \| 'small'`        | 'default'  |
| disabled              | Whether the OTP fields are disabled                                                                                                        | ^[boolean]                                      | undefined  |
| readonly              | Same as `readonly` in native input                                                                                                         | ^[boolean]                                      | false      |
| id                    | Same as `id` in native input                                                                                                               | ^[string]                                       | —          |
| validate-event        | Whether to trigger form validation                                                                                                         | ^[boolean]                                      | true       |

### InputOtp Events

| Name              | Description                       | Type                                   |
| ----------------- | --------------------------------- | -------------------------------------- |
| update:modelValue | triggers when value updates       | ^[Function]`(value: string) => void`   |
| change            | triggers when the value changes   | ^[Function]`(value: string) => void`   |
| input             | triggers when input value changes | ^[Function]`(value: string[]) => void` |
