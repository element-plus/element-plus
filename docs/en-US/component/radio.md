---
title: Radio
lang: en-US
---

# Radio

Single selection among multiple options.

:::warning

`label` act as `value` has been **deprecated**, `label` is used only as display text, this action **will be** removed in ^(3.0.0), consider switching to new API.

:::

:::tip

New API `value` has been added in ^(2.6.0), the examples in the document all use the `value`.
If you are using a version **less than** ^(2.6.0), please refer to:

:::

```vue
<template>
  <el-radio-group v-model="radio1">
    <!-- works when >=2.6.0, recommended ✔️ not work when <2.6.0 ❌ -->
    <el-radio value="Value 1">Option 1</el-radio>
    <!-- works when <2.6.0, deprecated act as value when >=3.0.0 -->
    <el-radio label="Label 2 & Value 2">Option 2</el-radio>
  </el-radio-group>
</template>
```

## Basic usage

Radio should not have too many options. Otherwise, use the Select component instead.

:::demo Creating a radio component is easy, you just need to bind a variable to Radio's `v-model`. It equals to the value of `value` of the chosen radio. The type of `value` is `String`, `Number` or `Boolean`.

radio/basic-usage

:::

## Disabled

`disabled` attribute is used to disable the radio.

:::demo You just need to add the `disabled` attribute.

radio/disabled

:::

## Radio Group

Suitable for choosing from some mutually exclusive options.

:::demo Combine `el-radio-group` with `el-radio` to display a radio group. Bind a variable with `v-model` of `el-radio-group` element and set label value in `el-radio`. It also provides `change` event with the current value as its parameter.

radio/radio-group

:::

## With borders

:::demo The `border` attribute adds a border to Radios.

radio/with-borders

:::

## Options attribute ^(2.11.2)

:::demo Shortcut from basic `el-radio-group` usage. You can customize the alias of the `options` through the `props` attribute.

radio/options

:::

## Radio Button

Radio with button group visual effect.

:::demo You just need to change `el-radio` element into `el-radio-button` element. You can also set the style of the button when it is active by using `fill` and `text-color`.

radio/radio-button

:::

## Radio API

### Radio Attributes

| Name                  | Description                                                            | Type                                     | Default |
| --------------------- | ---------------------------------------------------------------------- | ---------------------------------------- | ------- |
| model-value / v-model | Binding value                                                          | ^[string] / ^[number] / ^[boolean]       | —       |
| value ^(2.6.0)        | The value of Radio                                                     | ^[string] / ^[number] / ^[boolean]       | —       |
| label                 | The label of Radio. If there's no `value`, `label` will act as `value` | ^[string] / ^[number] / ^[boolean]       | —       |
| disabled              | Whether Radio is disabled                                              | ^[boolean]                               | false   |
| border                | Whether to add a border around Radio                                   | ^[boolean]                               | false   |
| size                  | Size of the Radio                                                      | ^[enum]`'large' \| 'default' \| 'small'` | —       |
| name                  | Native `name` attribute                                                | ^[string]                                | —       |

### Radio Events

| Name   | Description                           | Type                                                      |
| ------ | ------------------------------------- | --------------------------------------------------------- |
| change | Triggers when the bound value changes | ^[Function]`(value: string \| number \| boolean) => void` |

### Radio Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | Customize default content |

## RadioGroup API

### RadioGroup Attributes

| Name                        | Description                                                                                    | Type                                                            | Default                                                  |
| --------------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------- |
| model-value / v-model       | Binding value                                                                                  | ^[string] / ^[number] / ^[boolean]                              | —                                                        |
| size                        | The size of radio buttons or bordered radios                                                   | ^[string]                                                       | default                                                  |
| disabled                    | Whether the nesting radios are disabled                                                        | ^[boolean]                                                      | false                                                    |
| validate-event              | Whether to trigger form validation                                                             | ^[boolean]                                                      | true                                                     |
| text-color                  | Font color when button is active                                                               | ^[string]                                                       | #ffffff                                                  |
| fill                        | Border and background color when button is active                                              | ^[string]                                                       | #409eff                                                  |
| aria-label ^(a11y) ^(2.7.2) | Same as `aria-label` in RadioGroup                                                             | ^[string]                                                       | —                                                        |
| name                        | Native `name` attribute                                                                        | ^[string]                                                       | —                                                        |
| id                          | Native `id` attribute                                                                          | ^[string]                                                       | —                                                        |
| label ^(a11y) ^(deprecated) | Same as `aria-label` in RadioGroup                                                             | ^[string]                                                       | —                                                        |
| options ^(2.11.2)           | Data of the options, the key of `value` and `label` and `disabled` can be customize by `props` | ^[array]`Array<{[key: string]: any}>`                           | —                                                        |
| props ^(2.11.2)             | Configuration options                                                                          | ^[object]`{ value?: string, label?: string, disabled?: string}` | `{value: 'value', label: 'label', disabled: 'disabled'}` |
| type ^(2.11.5)              | Component type to render options (e.g. `'button'`)                                             | ^[enum]`'radio' \| 'button'`                                    | 'radio'                                                  |

### RadioGroup Events

| Name   | Description                           | Type                                                      |
| ------ | ------------------------------------- | --------------------------------------------------------- |
| change | Triggers when the bound value changes | ^[Function]`(value: string \| number \| boolean) => void` |

### RadioGroup Slots

| Name    | Description               | Subtags             |
| ------- | ------------------------- | ------------------- |
| default | Customize default content | Radio / RadioButton |

## RadioButton API

### RadioButton Attributes

| Name           | Description                                                            | Type                               | Default |
| -------------- | ---------------------------------------------------------------------- | ---------------------------------- | ------- |
| value ^(2.6.0) | The value of Radio                                                     | ^[string] / ^[number] / ^[boolean] | —       |
| label          | The label of Radio. If there's no `value`, `label` will act as `value` | ^[string] / ^[number] / ^[boolean] | —       |
| disabled       | Whether Radio is disabled                                              | ^[boolean]                         | false   |
| name           | Native 'name' attribute                                                | ^[string]                          | —       |

### RadioButton Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | Customize default content |
