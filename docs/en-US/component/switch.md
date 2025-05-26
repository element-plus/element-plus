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

Use the `active-icon` and `inactive-icon` attribute to add icon. You can pass either string for the component name (registered in advance) or the component itself which is a SVG Vue component. Element Plus has provided a set of icon that you can find at [icon](/en-US/component/icon)

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

:::demo You can add `active-action-icon` and `inactive-active-icon` attribute to show icons.

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
| model-value / v-model         | binding value, it should be equivalent to either `active-value` or `inactive-value`, by default it's `boolean` type                             | ^[boolean] / ^[string] / ^[number]             | false   |
| disabled                      | whether Switch is disabled                                                                                                                      | ^[boolean]                                     | false   |
| loading                       | whether Switch is in loading state                                                                                                              | ^[boolean]                                     | false   |
| size                          | size of Switch                                                                                                                                  | ^[enum]`'' \| 'large' \| 'default' \| 'small'` | ''      |
| width                         | width of Switch                                                                                                                                 | ^[number] / ^[string]                          | ''      |
| inline-prompt                 | whether icon or text is displayed inside dot, only the first character will be rendered for text                                                | ^[boolean]                                     | false   |
| active-icon                   | component of the icon displayed when in `on` state, overrides `active-text`                                                                     | ^[string] / ^[Component]                       | —       |
| inactive-icon                 | component of the icon displayed when in `off` state, overrides `inactive-text`                                                                  | ^[string] / ^[Component]                       | —       |
| active-action-icon ^(2.3.9)   | component of the icon displayed in action when in `on` state                                                                                    | ^[string] / ^[Component]                       | —       |
| inactive-action-icon ^(2.3.9) | component of the icon displayed in action when in `off` state                                                                                   | ^[string] / ^[Component]                       | —       |
| active-text                   | text displayed when in `on` state                                                                                                               | ^[string]                                      | ''      |
| inactive-text                 | text displayed when in `off` state                                                                                                              | ^[string]                                      | ''      |
| active-value                  | switch value when in `on` state                                                                                                                 | ^[boolean] / ^[string] / ^[number]             | true    |
| inactive-value                | switch value when in `off` state                                                                                                                | ^[boolean] / ^[string] / ^[number]             | false   |
| name                          | input name of Switch                                                                                                                            | ^[string]                                      | ''      |
| validate-event                | whether to trigger form validation                                                                                                              | ^[boolean]                                     | true    |
| before-change                 | before-change hook before the switch state changes. If `false` is returned or a `Promise` is returned and then is rejected, will stop switching | ^[Function]`() => Promise<boolean> \| boolen`  | —       |
| id                            | id for input                                                                                                                                    | ^[string]                                      | —       |
| tabindex                      | tabindex for input                                                                                                                              | ^[string] / ^[number]                          | —       |
| aria-label ^(a11y) ^(2.7.2)   | same as `aria-label` in native input                                                                                                            | ^[string]                                      | —       |
| active-color ^(deprecated)    | background color when in `on` state ( use CSS var `--el-switch-on-color` instead )                                                              | ^[string]                                      | ''      |
| inactive-color ^(deprecated)  | background color when in `off` state ( use CSS var `--el-switch-off-color` instead )                                                            | ^[string]                                      | ''      |
| border-color ^(deprecated)    | border color of the switch ( use CSS var `--el-switch-border-color` instead )                                                                   | ^[string]                                      | ''      |
| label ^(a11y) ^(deprecated)   | same as `aria-label` in native input                                                                                                            | ^[string]                                      | —       |

### Events

| Name   | Description                 | Type                                                    |
| ------ | --------------------------- | ------------------------------------------------------- |
| change | triggers when value changes | ^[Function]`(val: boolean \| string \| number) => void` |

### Switch Slots

| Name                     | Description               |
| ------------------------ | ------------------------- |
| active-action ^(2.4.4)   | customize active action   |
| inactive-action ^(2.4.4) | customize inactive action |

### Exposes

| Method | Description                          | Type                    |
| ------ | ------------------------------------ | ----------------------- |
| focus  | manual focus to the switch component | ^[Function]`() => void` |
