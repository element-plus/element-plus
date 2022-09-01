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

## Attributes

| Attribute             | Description                                  | Type    | Accepted Values        | Default                                                       |
| --------------------- | -------------------------------------------- | ------- | ---------------------- | ------------------------------------------------------------- |
| model-value / v-model | binding value                                | string  | —                      | —                                                             |
| disabled              | whether to disable the ColorPicker           | boolean | —                      | false                                                         |
| size                  | size of ColorPicker                          | string  | large / default /small | —                                                             |
| show-alpha            | whether to display the alpha slider          | boolean | —                      | false                                                         |
| color-format          | color format of v-model                      | string  | hsl / hsv / hex / rgb  | hex (when show-alpha is false)/ rgb (when show-alpha is true) |
| popper-class          | custom class name for ColorPicker's dropdown | string  | —                      | —                                                             |
| predefine             | predefined color options                     | array   | —                      | —                                                             |
| validate-event        | whether to trigger form validation           | boolean | -                      | true                                                          |

## Events

| Event Name    | Description                                    | Parameters         |
| ------------- | ---------------------------------------------- | ------------------ |
| change        | triggers when input value changes              | color value        |
| active-change | triggers when the current active color changes | active color value |
