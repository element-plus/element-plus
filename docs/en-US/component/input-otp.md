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

## Type

There are three types available: `outlined` (default), `filled`, and `underlined`.

:::demo

input-otp/types

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

## Custom Validation

You can set the `validate` prop to validate the input character, and use `inputmode` to specify the keyboard type.

:::demo

input-otp/validate

:::

## API

### InputOtp Attributes

| Name                  | Description                                                                                                                                | Type                                                  | Default    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- | ---------- |
| model-value / v-model | The value of the OTP fields. Since numbers must not have leading zeros, `modelValue` is allowed to be a number only during initialization. | ^[string] / ^[number]                                 | undefined  |
| length                | The OTP fields length, range [4, 8]                                                                                                        | ^[number]                                             | 6          |
| validate              | Custom validator function                                                                                                                  | ^[Function]`(char: string, index: number) => boolean` | () => true |
| inputmode             | Native `inputmode` attribute                                                                                                               | ^[string]                                             | —          |
| type                  | The type of the OTP fields                                                                                                                 | ^[enum]`'outlined' \| 'filled' \| 'underlined'`       | 'outlined' |
| size                  | The size of the OTP fields                                                                                                                 | ^[enum]`'large' \| 'default' \| 'small'`              | 'default'  |
| disabled              | Whether the OTP fields are disabled                                                                                                        | ^[boolean]                                            | undefined  |
| validate-event        | Whether to trigger form validation                                                                                                         | ^[boolean]                                            | true       |
| readonly              | Same as `readonly` in native input                                                                                                         | ^[boolean]                                            | false      |
| id                    | Native `id` attribute                                                                                                                      | ^[string]                                             | —          |
| aria-label ^(a11y)    | Native `aria-label` attribute                                                                                                              | ^[string]                                             | —          |

### InputOtp Events

| Name              | Description                       | Type                                                    |
| ----------------- | --------------------------------- | ------------------------------------------------------- |
| update:modelValue | triggers when value updates       | ^[Function]`(value: string) => void`                    |
| change            | triggers when the value changes   | ^[Function]`(value: string) => void`                    |
| input             | triggers when input value changes | ^[Function]`(value: string[]) => void`                  |
| focus             | triggers when input is focused    | ^[Function]`(event: FocusEvent, index: number) => void` |
| blur              | triggers when input is blurred    | ^[Function]`(event: FocusEvent, index: number) => void` |

### Exposes

| Name      | Description               | Type                             |
| --------- | ------------------------- | -------------------------------- |
| inputRefs | HTML input elements array | ^[object]`Ref<HTMLInputElement>` |
