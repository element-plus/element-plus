---
title: ColorPickerPanel
lang: en-US
---

# ColorPickerPanel ^(beta)

`ColorPickerPanel` is the core component of `ColorPicker`.

## Basic usage

:::demo ColorPickerPanel requires a string typed variable to be bound to v-model.

color-picker-panel/basic

:::

## Alpha

:::demo ColorPickerPanel supports alpha channel selecting. To activate alpha selecting, just add the `show-alpha` attribute.

color-picker-panel/alpha

:::

## Predefined colors

:::demo ColorPickerPanel supports predefined color options

color-picker-panel/predefined-color

:::

## Border

By default the color-picker-panel is bordered but in some case you don't want it.

:::demo

color-picker-panel/border

:::

## Disabled

The `disabled` attribute determines if the color picker is fully disabled.

:::demo

color-picker-panel/disabled

:::

## API

### Attributes

| Name                       | Description                                | Type                                                                                                  | Default                                                                      |
| -------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| model-value / v-model      | Binding value                              | ^[string]                                                                                             | —                                                                            |
| border                     | Whether the color picker panel is bordered | ^[boolean]                                                                                            | true                                                                         |
| disabled                   | Whether to disable the color picker        | ^[boolean]                                                                                            | false                                                                        |
| show-alpha                 | Whether to display the alpha slider        | ^[boolean]                                                                                            | false                                                                        |
| color-format               | Color format of v-model                    | ^[enum]`'rgb' \| 'prgb' \| 'hex' \| 'hex3' \| 'hex4' \| 'hex6' \| 'hex8' \| 'name' \| 'hsl' \| 'hsv'` | ^[enum]`'hex' (when show-alpha is false) \| 'rgb' (when show-alpha is true)` |
| predefine                  | Predefined color options                   | ^[array]`string[]`                                                                                    | —                                                                            |
| validate-event ^(2.11.7)   | Whether to trigger form validation         | ^[boolean]                                                                                            | true                                                                         |
| hue-slider-class ^(2.13.6) | Class names will be passed to hue-slider   | ^[object]`string \| string[] \| Record<string, boolean>`                                              | —                                                                            |
| hue-slider-style ^(2.13.6) | Styles will be passed to hue-slider        | ^[string] / ^[object]`StyleValue`                                                                     | —                                                                            |

### Slots

| Name   | Description                       |
| ------ | --------------------------------- |
| footer | Content to append after the Input |

### Exposes

| Name             | Description           | Type                     |
| ---------------- | --------------------- | ------------------------ |
| color            | Current color object  | ^[object]`Color`         |
| inputRef         | Custom input ref      | ^[object]`InputInstance` |
| update ^(2.11.4) | Update sub components | ^[Function]`() => void`  |
