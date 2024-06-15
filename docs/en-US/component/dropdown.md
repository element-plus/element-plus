---
title: Dropdown
lang: en-US
---

# Dropdown

Toggleable menu for displaying lists of links and actions.

:::tip

This component requires the `<client-only></client-only>` wrap when used in SSR (eg: [Nuxt](https://nuxt.com/v3)) and SSG (eg: [VitePress](https://vitepress.vuejs.org/)).

:::

## Basic usage

Hover on the dropdown menu to unfold it for more actions.

:::demo The triggering element is rendered by the default `slot`, and the dropdown part is rendered by the `slot` named `dropdown`. By default, dropdown list shows when you hover on the triggering element without having to click it.

dropdown/basic-usage

:::

## Triggering element

Use the button to trigger the dropdown list.

:::demo Use `split-button` to split the triggering element into a button group with the left button being a normal button and right one the actual triggering target. If you wanna insert a separator line between item three and item four, just add a class `divider` to item four.

dropdown/triggering-element

:::

## How to trigger

Click the triggering element or hover on it.

:::demo Use the attribute `trigger`. By default, it is `hover`.

dropdown/how-to-trigger

:::

## Menu hiding behavior

Use `hide-on-click` to define if menu closes on clicking.

:::demo By default menu will close when you click on menu items, and it can be turned off by setting hide-on-click to false.

dropdown/menu-hiding-behavior

:::

## Command event

Clicking each dropdown item fires an event whose parameter is assigned by each item.

:::demo

dropdown/command-event

:::

## Dropdown methods

You can open or close the dropdown menu by manually use `handleOpen` or `handleClose`

:::demo

dropdown/dropdown-methods

:::

## Sizes

Besides default size, Dropdown component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `large`, `default` or `small`.

dropdown/sizes

:::

## Dropdown Attributes

| Name                 | Description                                                                                                           | Type            | Accepted Values                                          | Default                                                                    |
| -------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------- | -------------------------------------------------------- | -------------------------------------------------------------------------- |
| type                 | menu button type, refer to `Button` Component, only works when `split-button` is true                                 | string          | —                                                        | —                                                                          |
| size                 | menu size, also works on the split button                                                                             | string          | large / default / small                                  | default                                                                    |
| max-height           | the max height of menu                                                                                                | string / number | —                                                        | —                                                                          |
| split-button         | whether a button group is displayed                                                                                   | boolean         | —                                                        | false                                                                      |
| disabled             | Whether to disable                                                                                                    | boolean         | —                                                        | false                                                                      |
| placement            | placement of pop menu                                                                                                 | string          | top/top-start/top-end/bottom/bottom-start/bottom-end     | bottom                                                                     |
| trigger              | how to trigger                                                                                                        | string          | hover/click/contextmenu                                  | hover                                                                      |
| hide-on-click        | whether to hide menu after clicking menu-item                                                                         | boolean         | —                                                        | true                                                                       |
| show-timeout         | Delay time before show a dropdown (only works when trigger is `hover`)                                                | number          | —                                                        | 150                                                                        |
| hide-timeout         | Delay time before hide a dropdown (only works when trigger is `hover`)                                                | number          | —                                                        | 150                                                                        |
| role                 | The ARIA role attribute for the dropdown menu. Depending on the use case, you may want to change this to 'navigation' | string          | —                                                        | 'menu'                                                                     |
| tabindex             | [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Dropdown                  | number          | —                                                        | 0                                                                          |
| popper-class         | custom class name for Dropdown's dropdown                                                                             | string          | —                                                        | —                                                                          |
| popper-options       | [popper.js](https://popper.js.org/docs/v2/) parameters                                                                | Object          | refer to [popper.js](https://popper.js.org/docs/v2/) doc | `{modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]}` |
| teleported ^(2.2.20) | whether the dropdown popup is teleported to the body                                                                  | boolean         | —                                                        | true                                                                       |

## Dropdown Slots

| Name     | Description                                                                                                                                   | Subtags       |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| —        | content of Dropdown. Notice: Must be a valid html dom element (ex. `<span>, <button> etc.`) or `el-component`, to attach the trigger listener | —             |
| dropdown | content of the Dropdown Menu, usually a `<el-dropdown-menu>` element                                                                          | Dropdown-Menu |

## Dropdown Events

| Name           | Description                                                       | Parameters                                    |
| -------------- | ----------------------------------------------------------------- | --------------------------------------------- |
| click          | if `split-button` is `true`, triggers when left button is clicked | —                                             |
| command        | triggers when a dropdown item is clicked                          | the command dispatched from the dropdown item |
| visible-change | triggers when the dropdown appears/disappears                     | true when it appears, and false otherwise     |

## Dropdown Methods

| Method      | Description             | Parameters |
| ----------- | ----------------------- | ---------- |
| handleOpen  | open the dropdown menu  | —          |
| handleClose | close the dropdown menu | —          |

## Dropdown-Menu Slots

| Name | Description              | Subtags       |
| ---- | ------------------------ | ------------- |
| —    | content of Dropdown Menu | Dropdown-Item |

## Dropdown-Item Attributes

| Name     | Description                                                 | Type                  | Accepted Values | Default |
| -------- | ----------------------------------------------------------- | --------------------- | --------------- | ------- |
| command  | a command to be dispatched to Dropdown's `command` callback | string/number/object  | —               | —       |
| disabled | whether the item is disabled                                | boolean               | —               | false   |
| divided  | whether a divider is displayed                              | boolean               | —               | false   |
| icon     | custom icon                                                 | `string \| Component` | —               | —       |

## Dropdown-Item Slots

| Name | Description                |
| ---- | -------------------------- |
| —    | customize of Dropdown Item |
