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

## Types

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

## Mask

Use the `mask` prop to hide the input characters.

:::demo

input-otp/mask

:::

## Separator

Customize the separator between OTP fields.

:::demo

input-otp/separator

:::

## Custom Validation

Set the `validator` prop to validate the input character, and use `inputmode` to specify the keyboard type.

:::demo

input-otp/validator

:::

## API

### Attributes

| Name                  | Description                                                                                                                                | Type                                                      | Default    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- | ---------- |
| model-value / v-model | the value of the OTP fields. Since numbers must not have leading zeros, `modelValue` is allowed to be a number only during initialization. | ^[string] / ^[number]                                     | undefined  |
| length                |the OTP fields length                                                                                                                      | ^[number]                                                 | 6          |
| validator             |custom validator function                                                                                                                  | ^[Function]`(char: string, index: number) => boolean`     | () => true |
| inputmode             |native `inputmode` attribute                                                                                                               | ^[string]                                                 | —          |
| type                  |the type of the OTP fields                                                                                                                 | ^[enum]`'outlined' \| 'filled' \| 'underlined'`           | 'outlined' |
| size                  |the size of the OTP fields                                                                                                                 | ^[enum]`'large' \| 'default' \| 'small'`                  | 'default'  |
| mask                  |whether to enable password mode                                                                                                            | ^[boolean]                                                | —          |
| disabled              |whether the OTP fields are disabled                                                                                                        | ^[boolean]                                                | undefined  |
| separator             |the separator between OTP fields                                                                                                           | ^[string] / ^[VNode] / ^[Function]`() => string \| VNode` | —          |
| validate-event        |whether to trigger form validation                                                                                                         | ^[boolean]                                                | true       |
| readonly              |same as `readonly` in native input                                                                                                         | ^[boolean]                                                | false      |
| id                    |native `id` attribute                                                                                                                      | ^[string]                                                 | —          |
| aria-label ^(a11y)    |native `aria-label` attribute                                                                                                              | ^[string]                                                 | —          |

### Events

| Name              | Description                                      | Type                                     |
| ----------------- | ------------------------------------------------ | ---------------------------------------- |
| update:modelValue |triggers when value updates                      | ^[Function]`(value: string) => void`     |
| change            | triggers when the value changes after input blur | ^[Function]`(value: string) => void`     |
| finish            |fires when all fields have been filled           | ^[Function]`(value: string) => void`     |
| focus             |triggers when input is focused                   | ^[Function]`(event: FocusEvent) => void` |
| blur              |triggers when input is blurred                   | ^[Function]`(event: FocusEvent) => void` |

### Slots

| Name      | Description                      | Type                         |
| --------- | -------------------------------- | ---------------------------- |
| separator | the separator between OTP fields | ^[object]`{ index: number }` |

### Exposes

| Name      | Description                      | Type                                              |
| --------- | -------------------------------- | ------------------------------------------------- |
| inputRefs | HTML input elements array        | ^[object]`Ref<(HTMLInputElement \| undefined)[]>` |
| focus     |focus an OTP input field         | ^[Function]`(index?: number) => void`             |
| blur      | blur the focused OTP input field | ^[Function]`() => void`                           |
