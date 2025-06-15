---
title: Checkbox
lang: en-US
---

# Checkbox

A group of options for multiple choices.

:::warning

`label` act as `value` has been **deprecated**, `label` is used only as display text, this action **will be** removed in ^(3.0.0), consider switching to new API.

:::

:::tip

New API `value` has been added in ^(2.6.0), the examples in the document all use the `value`.
If you are using a version **less than** ^(2.6.0) and using `checkbox-group`, please refer to:

:::

```vue
<template>
  <el-checkbox-group v-model="checkList">
    <!-- works when >=2.6.0, recommended ✔️ value not work when <2.6.0 ❌ -->
    <el-checkbox label="Option 1" value="Value 1" />
    <!-- works when <2.6.0, deprecated act as value when >=3.0.0 -->
    <el-checkbox label="Option 2 & Value 2" />
  </el-checkbox-group>
</template>
```

## Basic usage

Checkbox can be used alone to switch between two states.

:::demo Define `v-model`(bind variable) in `el-checkbox`. The default value is a `Boolean` for single `checkbox`, and it becomes `true` when selected. Content inside the `el-checkbox` tag will become the description following the button of the checkbox.

checkbox/basic

:::

## Disabled State

Disabled state for checkbox.

:::demo Set the `disabled` attribute.

checkbox/disabled

:::

## Checkbox group

It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by checking if it is checked.

:::demo `checkbox-group` element can manage multiple checkboxes in one group by using `v-model` which is bound as an `Array`. Inside the `el-checkbox` element, `value` is the value of the checkbox. If no content is nested in that tag, `label` will be rendered as the description following the button of the checkbox. `value` also corresponds with the element values in the array. It is selected if the specified value exists in the array, and vice versa.

checkbox/grouping

:::

## Indeterminate

The `indeterminate` property can help you to achieve a 'check all' effect.

:::demo

checkbox/intermediate

:::

## Minimum / Maximum items checked

The `min` and `max` properties can help you to limit the number of checked items.

:::demo

checkbox/limitation

:::

## Button style

Checkbox with button styles.

:::demo You just need to change `el-checkbox` element into `el-checkbox-button` element. We also provide `size` attribute.

checkbox/button-style

:::

## With borders

:::demo The `border` attribute adds a border to Checkboxes.

checkbox/with-border

:::

## Checkbox API

### Checkbox Attributes

| Name                           | Description                                                                                                                                                    | Type                                           | Default |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------- |
| model-value / v-model          | binding value                                                                                                                                                  | ^[string] / ^[number] / ^[boolean]             | —       |
| value ^(2.6.0)                 | value of the Checkbox when used inside a `checkbox-group`                                                                                                      | ^[string] / ^[number] / ^[boolean] / ^[object] | —       |
| label                          | label of the Checkbox when used inside a `checkbox-group`. If there's no value, `label` will act as `value`                                                    | ^[string] / ^[number] / ^[boolean] / ^[object] | —       |
| true-value ^(2.6.0)            | value of the Checkbox if it's checked                                                                                                                          | ^[string] / ^[number]                          | —       |
| false-value ^(2.6.0)           | value of the Checkbox if it's not checked                                                                                                                      | ^[string] / ^[number]                          | —       |
| disabled                       | whether the Checkbox is disabled                                                                                                                               | ^[boolean]                                     | false   |
| border                         | whether to add a border around Checkbox                                                                                                                        | ^[boolean]                                     | false   |
| size                           | size of the Checkbox                                                                                                                                           | ^[enum]`'large' \| 'default' \| 'small'`       | —       |
| name                           | native 'name' attribute                                                                                                                                        | ^[string]                                      | —       |
| checked                        | if the Checkbox is checked                                                                                                                                     | ^[boolean]                                     | false   |
| indeterminate                  | Set indeterminate state, only responsible for style control                                                                                                    | ^[boolean]                                     | false   |
| validate-event                 | whether to trigger form validation                                                                                                                             | ^[boolean]                                     | true    |
| tabindex                       | input tabindex                                                                                                                                                 | ^[string] / ^[number]                          | —       |
| id                             | input id                                                                                                                                                       | ^[string]                                      | —       |
| aria-controls ^(a11y) ^(2.7.2) | same as [aria-controls](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls), takes effect when `indeterminate` is `true` | ^[string]                                      | —       |
| true-label ^(deprecated)       | value of the Checkbox if it's checked                                                                                                                          | ^[string] / ^[number]                          | —       |
| false-label ^(deprecated)      | value of the Checkbox if it's not checked                                                                                                                      | ^[string] / ^[number]                          | —       |
| controls ^(a11y) ^(deprecated) | same as [aria-controls](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls), takes effect when `indeterminate` is `true` | ^[string]                                      | —       |

### Checkbox Events

| Name   | Description                             | Type                                                      |
| ------ | --------------------------------------- | --------------------------------------------------------- |
| change | triggers when the binding value changes | ^[Function]`(value: string \| number \| boolean) => void` |

### Checkbox Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

## CheckboxGroup API

### CheckboxGroup Attributes

| Name                        | Description                                       | Type                                     | Default |
| --------------------------- | ------------------------------------------------- | ---------------------------------------- | ------- |
| model-value / v-model       | binding value                                     | ^[object]`string[] \| number[]`          | []      |
| size                        | size of checkbox                                  | ^[enum]`'large' \| 'default' \| 'small'` | —       |
| disabled                    | whether the nesting checkboxes are disabled       | ^[boolean]                               | false   |
| min                         | minimum number of checkbox checked                | ^[number]                                | —       |
| max                         | maximum number of checkbox checked                | ^[number]                                | —       |
| aria-label ^(a11y) ^(2.7.2) | native `aria-label` attribute                     | ^[string]                                | —       |
| text-color                  | font color when button is active                  | ^[string]                                | #ffffff |
| fill                        | border and background color when button is active | ^[string]                                | #409eff |
| tag                         | element tag of the checkbox group                 | ^[string]                                | div     |
| validate-event              | whether to trigger form validation                | ^[boolean]                               | true    |
| label ^(a11y) ^(deprecated) | native `aria-label` attribute                     | ^[string]                                | —       |

### CheckboxGroup Events

| Name   | Description                             | Type                                               |
| ------ | --------------------------------------- | -------------------------------------------------- |
| change | triggers when the binding value changes | ^[Function]`(value: string[] \| number[]) => void` |

### CheckboxGroup Slots

| Name    | Description               | Subtags                    |
| ------- | ------------------------- | -------------------------- |
| default | customize default content | Checkbox / Checkbox-button |

## CheckboxButton API

### CheckboxButton Attributes

| Name                      | Description                                                                                                 | Type                                           | Default |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------- |
| value ^(2.6.0)            | value of the checkbox when used inside a `checkbox-group`                                                   | ^[string] / ^[number] / ^[boolean] / ^[object] | —       |
| label                     | label of the checkbox when used inside a `checkbox-group`. If there's no value, `label` will act as `value` | ^[string] / ^[number] / ^[boolean] / ^[object] | —       |
| true-value ^(2.6.0)       | value of the checkbox if it's checked                                                                       | ^[string] / ^[number]                          | —       |
| false-value ^(2.6.0)      | value of the checkbox if it's not checked                                                                   | ^[string] / ^[number]                          | —       |
| disabled                  | whether the checkbox is disabled                                                                            | ^[boolean]                                     | false   |
| name                      | native 'name' attribute                                                                                     | ^[string]                                      | —       |
| checked                   | if the checkbox is checked                                                                                  | ^[boolean]                                     | false   |
| true-label ^(deprecated)  | value of the checkbox if it's checked                                                                       | ^[string] / ^[number]                          | —       |
| false-label ^(deprecated) | value of the checkbox if it's not checked                                                                   | ^[string] / ^[number]                          | —       |

### CheckboxButton Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
