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

| Name                       | Description                                | Type                                                                                                             | Default |
| -------------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- | ------- |
| model-value / v-model      | binding value                              | ^[string]                                                                                                        | —       |
| border                     | whether the color picker panel is bordered | ^[boolean]                                                                                                       | true    |
| disabled                   | whether to disable the color picker        | ^[boolean]                                                                                                       | false   |
| show-alpha                 | whether to display the alpha slider        | ^[boolean]                                                                                                       | false   |
| color-format               | color format of v-model                    | ^[enum]`'hsl' \| 'hsv' \| 'hex' \| 'rgb' \| 'hex' (when show-alpha is false) \| 'rgb' (when show-alpha is true)` | —       |
| predefine                  | predefined color options                   | ^[array]`string[]`                                                                                               | —       |
| validate-event ^(2.11.7)   | whether to trigger form validation         | ^[boolean]                                                                                                       | true    |
| hue-slider-class ^(2.13.2) | class names will append to hue-slider      | ^[object]`string \|string[] \| Record<string, boolean>`                                                          | —       |
| hue-slider-style ^(2.13.2) | styles will append to hue-slider           | ^[string] / ^[object]`StyleValue`                                                                                | —       |

### Slots

| Name   | Description                    |
| ------ | ------------------------------ |
| footer | content append after the Input |

### Exposes

| Name             | Description           | Type                     |
| ---------------- | --------------------- | ------------------------ |
| color            | current color object  | ^[object]`Color`         |
| inputRef         | custom input ref      | ^[object]`InputInstance` |
| update ^(2.11.4) | update sub components | ^[Function]`() => void`  |
