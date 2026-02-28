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
| model-value / v-model | The value of the OTP fields. Since numbers must not have leading zeros, `modelValue` is allowed to be a number only during initialization. | ^[string] / ^[number]                                     | undefined  |
| length                | The OTP fields length, range [4, 8]                                                                                                        | ^[number]                                                 | 6          |
| validator             | Custom validator function                                                                                                                  | ^[Function]`(char: string, index: number) => boolean`     | () => true |
| inputmode             | Native `inputmode` attribute                                                                                                               | ^[string]                                                 | —          |
| type                  | The type of the OTP fields                                                                                                                 | ^[enum]`'outlined' \| 'filled' \| 'underlined'`           | 'outlined' |
| size                  | The size of the OTP fields                                                                                                                 | ^[enum]`'large' \| 'default' \| 'small'`                  | 'default'  |
| mask                  | Whether to enable password mode                                                                                                            | ^[boolean]                                                | —          |
| disabled              | Whether the OTP fields are disabled                                                                                                        | ^[boolean]                                                | undefined  |
| validate-event        | Whether to trigger form validation                                                                                                         | ^[boolean]                                                | true       |
| readonly              | Same as `readonly` in native input                                                                                                         | ^[boolean]                                                | false      |
| id                    | Native `id` attribute                                                                                                                      | ^[string]                                                 | —          |
| aria-label ^(a11y)    | Native `aria-label` attribute                                                                                                              | ^[string]                                                 | —          |
| separator             | The separator between OTP fields                                                                                                           | ^[string] / ^[VNode] / ^[Function]`() => string \| VNode` | —          |

### Events

| Name              | Description                                      | Type                                     |
| ----------------- | ------------------------------------------------ | ---------------------------------------- |
| update:modelValue | Triggers when value updates                      | ^[Function]`(value: string) => void`     |
| change            | Triggers when the value changes after input blur | ^[Function]`(value: string) => void`     |
| finish            | Fires when all fields have been filled           | ^[Function]`(value: string) => void`     |
| focus             | Triggers when input is focused                   | ^[Function]`(event: FocusEvent) => void` |
| blur              | Triggers when input is blurred                   | ^[Function]`(event: FocusEvent) => void` |

### Slots

| Name      | Description                      | Type                         |
| --------- | -------------------------------- | ---------------------------- |
| separator | The separator between OTP fields | ^[object]`{ index: number }` |

### Exposes

| Name      | Description               | Type                               |
| --------- | ------------------------- | ---------------------------------- |
| inputRefs | HTML input elements array | ^[object]`Ref<HTMLInputElement[]>` |
