---
title: ColorPicker
lang: en-US
---

# ColorPicker

ColorPicker is a color selector supporting multiple color formats.

## Basic usage

:::demo ColorPicker requires a string typed variable to be bound to v-model.

color-picker/basic

:::

## Alpha

:::demo ColorPicker supports alpha channel selecting. To activate alpha selecting, just add the `show-alpha` attribute.

color-picker/alpha

:::

## Predefined colors

:::demo ColorPicker supports predefined color options

color-picker/predefined-color

:::

## Sizes

:::demo

color-picker/sizes

:::

## API

### Attributes

| Name                        | Description                                                                                        | Type                                                                                                  | Default                                                                      |
| --------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| model-value / v-model       | Binding value                                                                                      | ^[string]                                                                                             | —                                                                            |
| disabled                    | Whether to disable the ColorPicker                                                                 | ^[boolean]                                                                                            | false                                                                        |
| clearable ^(2.13.1)         | Whether to show clear button                                                                       | ^[boolean]                                                                                            | true                                                                         |
| size                        | Size of ColorPicker                                                                                | ^[enum]`'large' \| 'default' \| 'small'`                                                              | —                                                                            |
| show-alpha                  | Whether to display the alpha slider                                                                | ^[boolean]                                                                                            | false                                                                        |
| color-format                | Color format of v-model                                                                            | ^[enum]`'rgb' \| 'prgb' \| 'hex' \| 'hex3' \| 'hex4' \| 'hex6' \| 'hex8' \| 'name' \| 'hsl' \| 'hsv'` | ^[enum]`'hex' (when show-alpha is false) \| 'rgb' (when show-alpha is true)` |
| popper-class                | Custom class name for ColorPicker's dropdown                                                       | ^[string] / ^[object]                                                                                 | ''                                                                           |
| popper-style ^(2.11.4)      | Custom style for ColorPicker's dropdown                                                            | ^[string] / ^[object]                                                                                 | —                                                                            |
| predefine                   | Predefined color options                                                                           | ^[array]`string[]`                                                                                    | —                                                                            |
| validate-event              | Whether to trigger form validation                                                                 | ^[boolean]                                                                                            | true                                                                         |
| tabindex                    | ColorPicker tabindex                                                                               | ^[string] / ^[number]                                                                                 | 0                                                                            |
| aria-label ^(a11y) ^(2.7.2) | ColorPicker aria-label                                                                             | ^[string]                                                                                             | —                                                                            |
| empty-values ^(2.10.3)      | Empty values of component, [see config-provider](./config-provider.md#empty-values-configurations) | ^[array]                                                                                              | —                                                                            |
| value-on-clear ^(2.10.3)    | Clear return value, [see config-provider](./config-provider.md#empty-values-configurations)        | ^[string] / ^[number] / ^[boolean] / ^[Function]                                                      | —                                                                            |
| id                          | ColorPicker id                                                                                     | ^[string]                                                                                             | —                                                                            |
| teleported ^(2.7.2)         | Whether color-picker popper is teleported to the body                                              | ^[boolean]                                                                                            | true                                                                         |
| label ^(a11y) ^(deprecated) | ColorPicker aria-label                                                                             | ^[string]                                                                                             | —                                                                            |
| persistent ^(2.10.5)        | When color-picker inactive and persistent is false, the color panel will be destroyed              | ^[boolean]                                                                                            | true                                                                         |
| append-to ^(2.10.5)         | Which element the color-picker panel appends to                                                    | ^[CSSSelector] / ^[HTMLElement]                                                                       | -                                                                            |

### Events

| Name            | Description                                    | Type                                     |
| --------------- | ---------------------------------------------- | ---------------------------------------- |
| change          | Triggers when input value changes              | ^[Function]`(value: string) => void`     |
| active-change   | Triggers when the current active color changes | ^[Function]`(value: string) => void`     |
| focus ^(2.4.0)  | Triggers when Component focuses                | ^[Function]`(event: FocusEvent) => void` |
| blur ^(2.4.0)   | Triggers when Component blurs                  | ^[Function]`(event: FocusEvent) => void` |
| clear ^(2.13.1) | Triggers when the clear button is clicked      | ^[Function]`() => void`                  |

### Exposes

| Name            | Description               | Type                    |
| --------------- | ------------------------- | ----------------------- |
| color           | Current color object      | ^[object]`Color`        |
| show ^(2.3.3)   | Manually show ColorPicker | ^[Function]`() => void` |
| hide ^(2.3.3)   | Manually hide ColorPicker | ^[Function]`() => void` |
| focus ^(2.3.13) | Focus the picker element  | ^[Function]`() => void` |
| blur ^(2.3.13)  | Blur the picker element   | ^[Function]`() => void` |
