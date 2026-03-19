---
title: Switch
lang: en-US
---

# Switch

Switch is used for switching between two opposing states.

## Basic usage

:::demo Bind `v-model` to a `Boolean` typed variable. The `--el-switch-on-color` and `--el-switch-off-color` CSS variables decides the background color in two states.

switch/basic

:::

## Sizes

:::demo

switch/sizes

:::

## Text description

You can add `active-text` and `inactive-text` attribute to show texts. use `inline-prompt` attribute to control text is displayed inside dot.

:::demo You can add `active-text` and `inactive-text` attribute to show texts.

switch/text-description

:::

## Display custom icons

:::tip

Use the `active-icon` and `inactive-icon` attribute to add icon. You can pass either string for the component name (registered in advance) or the component itself which is a SVG Vue component. Element Plus has provided a set of icon that you can find at [icon](./icon.md)

:::

:::demo You can add `active-icon` and `inactive-icon` attribute to show icons. use `inline-prompt` attribute to control icon is displayed inside dot.

switch/custom-icons

:::

## Extended value types

:::demo You can set `active-value` and `inactive-value` attributes. They both receive a `Boolean`, `String` or `Number` typed value.

switch/extended-value-types

:::

## Disabled

:::demo Adding the `disabled` attribute disables Switch.

switch/disabled

:::

## Loading

:::demo Setting the `loading` attribute to `true` indicates a loading state on the Switch.

switch/loading

:::

## Prevent switching

:::demo set the `before-change` property, If `false` is returned or a `Promise` is returned and then is rejected, will stop switching.

switch/prevent-switching

:::

## Custom action icon ^(2.3.9)

:::demo You can add `active-action-icon` and `inactive-action-icon` attribute to show icons.

switch/custom-action-icon

:::

## Custom action slot ^(2.4.4)

:::demo You can use `active-action` and `inactive-action` slot to customize action.

switch/custom-action-slot

:::

## API

### Attributes

| Name                          | Description                                                                                                                                     | Type                                           | Default |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------- |
| model-value / v-model         | Binding value, it should be equivalent to either `active-value` or `inactive-value`, by default it's `boolean` type                             | ^[boolean] / ^[string] / ^[number]             | false   |
| disabled                      | Whether Switch is disabled                                                                                                                      | ^[boolean]                                     | false   |
| loading                       | Whether Switch is in loading state                                                                                                              | ^[boolean]                                     | false   |
| size                          | Size of Switch                                                                                                                                  | ^[enum]`'' \| 'large' \| 'default' \| 'small'` | ''      |
| width                         | Width of Switch                                                                                                                                 | ^[number] / ^[string]                          | ''      |
| inline-prompt                 | Whether icon or text is displayed inside dot, only the first character will be rendered for text                                                | ^[boolean]                                     | false   |
| active-icon                   | Component of the icon displayed when in `on` state, overrides `active-text`                                                                     | ^[string] / ^[Component]                       | —       |
| inactive-icon                 | Component of the icon displayed when in `off` state, overrides `inactive-text`                                                                  | ^[string] / ^[Component]                       | —       |
| active-action-icon ^(2.3.9)   | Component of the icon displayed in action when in `on` state                                                                                    | ^[string] / ^[Component]                       | —       |
| inactive-action-icon ^(2.3.9) | Component of the icon displayed in action when in `off` state                                                                                   | ^[string] / ^[Component]                       | —       |
| active-text                   | Text displayed when in `on` state                                                                                                               | ^[string]                                      | ''      |
| inactive-text                 | Text displayed when in `off` state                                                                                                              | ^[string]                                      | ''      |
| active-value                  | Switch value when in `on` state                                                                                                                 | ^[boolean] / ^[string] / ^[number]             | true    |
| inactive-value                | Switch value when in `off` state                                                                                                                | ^[boolean] / ^[string] / ^[number]             | false   |
| name                          | Input name of Switch                                                                                                                            | ^[string]                                      | ''      |
| validate-event                | Whether to trigger form validation                                                                                                              | ^[boolean]                                     | true    |
| before-change                 | Before-change hook before the switch state changes. If `false` is returned or a `Promise` is returned and then is rejected, will stop switching | ^[Function]`() => Promise<boolean> \| boolean` | —       |
| id                            | Id for input                                                                                                                                    | ^[string]                                      | —       |
| tabindex                      | Tabindex for input                                                                                                                              | ^[string] / ^[number]                          | —       |
| aria-label ^(a11y) ^(2.7.2)   | Same as `aria-label` in native input                                                                                                            | ^[string]                                      | —       |
| active-color ^(deprecated)    | Background color when in `on` state ( use CSS var `--el-switch-on-color` instead )                                                              | ^[string]                                      | ''      |
| inactive-color ^(deprecated)  | Background color when in `off` state ( use CSS var `--el-switch-off-color` instead )                                                            | ^[string]                                      | ''      |
| border-color ^(deprecated)    | Border color of the switch ( use CSS var `--el-switch-border-color` instead )                                                                   | ^[string]                                      | ''      |
| label ^(a11y) ^(deprecated)   | Same as `aria-label` in native input                                                                                                            | ^[string]                                      | —       |

### Events

| Name   | Description                 | Type                                                    |
| ------ | --------------------------- | ------------------------------------------------------- |
| change | Triggers when value changes | ^[Function]`(val: boolean \| string \| number) => void` |

### Switch Slots

| Name                     | Description                |
| ------------------------ | -------------------------- |
| active-action ^(2.4.4)   | Customize active action    |
| inactive-action ^(2.4.4) | Customize inactive action  |
| active ^(2.13.0)         | Customize active content   |
| inactive ^(2.13.0)       | Customize inactive content |

### Exposes

| Method | Description                          | Type                    |
| ------ | ------------------------------------ | ----------------------- |
| focus  | Manual focus to the switch component | ^[Function]`() => void` |
