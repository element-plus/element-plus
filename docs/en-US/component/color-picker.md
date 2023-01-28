---
title: ColorPicker
lang: en-US
---

# ColorPicker

ColorPicker is a color selector supporting multiple color formats.

:::tip

This component requires the `<client-only></client-only>` wrap when used in SSR (eg: [Nuxt](https://nuxt.com/v3)) and SSG (eg: [VitePress](https://vitepress.vuejs.org/)).

:::

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

| Name                  | Description                                  | Type                                                                                                             | Default |
| --------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| model-value / v-model | binding value                                | ^[string]                                                                                                        | —       |
| disabled              | whether to disable the ColorPicker           | ^[boolean]                                                                                                       | false   |
| size                  | size of ColorPicker                          | ^[enum]`'large' \| 'default' \| 'small'`                                                                         | —       |
| show-alpha            | whether to display the alpha slider          | ^[boolean]                                                                                                       | false   |
| color-format          | color format of v-model                      | ^[enum]`'hsl' \| 'hsv' \| 'hex' \| 'rgb' \| 'hex' (when show-alpha is false) \| 'rgb' (when show-alpha is true)` | —       |
| popper-class          | custom class name for ColorPicker's dropdown | ^[string]                                                                                                        | —       |
| predefine             | predefined color options                     | ^[object]`string[]`                                                                                              | —       |
| validate-event        | whether to trigger form validation           | ^[boolean]                                                                                                       | true    |
| tabindex              | ColorPicker tabindex                         | ^[string] / ^[number]                                                                                            | 0       |
| label<A11yTag/>       | ColorPicker aria-label                       | ^[string]                                                                                                        | —       |
| id                    | ColorPicker id                               | ^[string]                                                                                                        | —       |

### Events

| Name          | Description                                    | Type                                 |
| ------------- | ---------------------------------------------- | ------------------------------------ |
| change        | triggers when input value changes              | ^[Function]`(value: string) => void` |
| active-change | triggers when the current active color changes | ^[Function]`(value: string) => void` |

### Exposes

| Name  | Description          | Type             |
| ----- | -------------------- | ---------------- |
| color | current color object | ^[object]`Color` |
