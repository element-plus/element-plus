---
title: Checkbox
lang: en-US
---

# Checkbox

A group of options for multiple choices.

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

:::demo `checkbox-group` element can manage multiple checkboxes in one group by using `v-model` which is bound as an `Array`. Inside the `el-checkbox` element, `label` is the value of the checkbox. If no content is nested in that tag, `label` will be rendered as the description following the button of the checkbox. `label` also corresponds with the element values in the array. It is selected if the specified value exists in the array, and vice versa.

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

## Checkbox Attributes

| Attribute             | Description                                               | Type                               | Accepted Values        | Default |
| --------------------- | --------------------------------------------------------- | ---------------------------------- | ---------------------- | ------- |
| model-value / v-model | binding value                                             | string / number / boolean          | —                      | —       |
| label                 | value of the Checkbox when used inside a `checkbox-group` | string / number / boolean / object | —                      | —       |
| true-label            | value of the Checkbox if it's checked                     | string / number                    | —                      | —       |
| false-label           | value of the Checkbox if it's not checked                 | string / number                    | —                      | —       |
| disabled              | whether the Checkbox is disabled                          | boolean                            | —                      | false   |
| border                | whether to add a border around Checkbox                   | boolean                            | —                      | false   |
| size                  | size of the Checkbox                                      | string                             | large / default /small | —       |
| name                  | native 'name' attribute                                   | string                             | —                      | —       |
| checked               | if the Checkbox is checked                                | boolean                            | —                      | false   |
| indeterminate         | same as `indeterminate` in native checkbox                | boolean                            | —                      | false   |
| validate-event        | whether to trigger form validation                        | boolean                            | -                      | true    |

## Checkbox Events

| Event Name | Description                             | Parameters        |
| ---------- | --------------------------------------- | ----------------- |
| change     | triggers when the binding value changes | the updated value |

## Checkbox Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |

## Checkbox-group Attributes

| Attribute             | Description                                       | Type    | Accepted Values        | Default |
| --------------------- | ------------------------------------------------- | ------- | ---------------------- | ------- |
| model-value / v-model | binding value                                     | array   | —                      | []      |
| size                  | size of checkbox                                  | string  | large / default /small | —       |
| disabled              | whether the nesting checkboxes are disabled       | boolean | —                      | false   |
| min                   | minimum number of checkbox checked                | number  | —                      | —       |
| max                   | maximum number of checkbox checked                | number  | —                      | —       |
| label                 | label for screen reader                           | string  | —                      | —       |
| text-color            | font color when button is active                  | string  | —                      | #ffffff |
| fill                  | border and background color when button is active | string  | —                      | #409EFF |
| validate-event        | whether to trigger form validation                | boolean | -                      | true    |

## Checkbox-group Events

| Event Name | Description                             | Parameters        |
| ---------- | --------------------------------------- | ----------------- |
| change     | triggers when the binding value changes | the updated value |

## Checkbox-group Slots

| Name | Description               | Subtags                    |
| ---- | ------------------------- | -------------------------- |
| -    | customize default content | Checkbox / Checkbox-button |

## Checkbox-button Attributes

| Attribute   | Description                                               | Type                               | Accepted Values | Default |
| ----------- | --------------------------------------------------------- | ---------------------------------- | --------------- | ------- |
| label       | value of the checkbox when used inside a `checkbox-group` | string / number / boolean / object | —               | —       |
| true-label  | value of the checkbox if it's checked                     | string / number                    | —               | —       |
| false-label | value of the checkbox if it's not checked                 | string / number                    | —               | —       |
| disabled    | whether the checkbox is disabled                          | boolean                            | —               | false   |
| name        | native 'name' attribute                                   | string                             | —               | —       |
| checked     | if the checkbox is checked                                | boolean                            | —               | false   |

## Checkbox-button Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |
