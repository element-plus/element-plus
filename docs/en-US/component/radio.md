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

## Radio button group

Suitable for choosing from some mutually exclusive options.

:::demo Combine `el-radio-group` with `el-radio` to display a radio group. Bind a variable with `v-model` of `el-radio-group` element and set label value in `el-radio`. It also provides `change` event with the current value as its parameter.

radio/radio-button-group

:::

## Button style

Radio with button styles.

:::demo You just need to change `el-radio` element into `el-radio-button` element. We also provide `size` attribute.

radio/button-style

:::

## Button style

Radio with button styles.

:::demo You can set the style of the button when it is active by using `fill` and `text-color`.

radio/button-fill-textcolor

:::

## With borders

:::demo The `border` attribute adds a border to Radios.

radio/with-borders

:::

## Radio API

### Radio Attributes

| Name                  | Description                                                            | Type                                     | Default |
| --------------------- | ---------------------------------------------------------------------- | ---------------------------------------- | ------- |
| model-value / v-model | binding value                                                          | ^[string] / ^[number] / ^[boolean]       | —       |
| value ^(2.6.0)        | the value of Radio                                                     | ^[string] / ^[number] / ^[boolean]       | —       |
| label                 | the label of Radio. If there's no `value`, `label` will act as `value` | ^[string] / ^[number] / ^[boolean]       | —       |
| disabled              | whether Radio is disabled                                              | ^[boolean]                               | false   |
| border                | whether to add a border around Radio                                   | ^[boolean]                               | false   |
| size                  | size of the Radio                                                      | ^[enum]`'large' \| 'default' \| 'small'` | —       |
| name                  | native `name` attribute                                                | ^[string]                                | —       |

### Radio Events

| Name   | Description                           | Type                                                      |
| ------ | ------------------------------------- | --------------------------------------------------------- |
| change | triggers when the bound value changes | ^[Function]`(value: string \| number \| boolean) => void` |

### Radio Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

## RadioGroup API

### RadioGroup Attributes

| Name                        | Description                                  | Type                               | Default |
| --------------------------- | -------------------------------------------- | ---------------------------------- | ------- |
| model-value / v-model       | binding value                                | ^[string] / ^[number] / ^[boolean] | —       |
| size                        | the size of radio buttons or bordered radios | ^[string]                          | default |
| disabled                    | whether the nesting radios are disabled      | ^[boolean]                         | false   |
| validate-event              | whether to trigger form validation           | ^[boolean]                         | true    |
| aria-label ^(a11y) ^(2.7.2) | same as `aria-label` in RadioGroup           | ^[string]                          | —       |
| name                        | native `name` attribute                      | ^[string]                          | —       |
| id                          | native `id` attribute                        | ^[string]                          | —       |
| label ^(a11y) ^(deprecated) | same as `aria-label` in RadioGroup           | ^[string]                          | —       |

### RadioGroup Events

| Name   | Description                           | Type                                                      |
| ------ | ------------------------------------- | --------------------------------------------------------- |
| change | triggers when the bound value changes | ^[Function]`(value: string \| number \| boolean) => void` |

### RadioGroup Slots

| Name    | Description               | Subtags             |
| ------- | ------------------------- | ------------------- |
| default | customize default content | Radio / RadioButton |

## RadioButton API

### RadioButton Attributes

| Name           | Description                                                            | Type                               | Default |
| -------------- | ---------------------------------------------------------------------- | ---------------------------------- | ------- |
| value ^(2.6.0) | the value of Radio                                                     | ^[string] / ^[number] / ^[boolean] | —       |
| label          | the label of Radio. If there's no `value`, `label` will act as `value` | ^[string] / ^[number] / ^[boolean] | —       |
| disabled       | whether Radio is disabled                                              | ^[boolean]                         | false   |
| name           | native 'name' attribute                                                | ^[string]                          | —       |
| text-color     | font color when button is active                                       | ^[string]                          | #ffffff |
| fill           | border and background color when button is active                      | ^[string]                          | #409eff |

### RadioButton Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
