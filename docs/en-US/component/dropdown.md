---
title: Dropdown
lang: en-US
---

# Dropdown

Toggleable menu for displaying lists of links and actions.

## Basic usage

Hover on the dropdown menu to unfold it for more actions.

:::demo The triggering element is rendered by the default `slot`, and the dropdown part is rendered by the `slot` named `dropdown`. By default, dropdown list shows when you hover on the triggering element without having to click it.

dropdown/basic-usage

:::

## Placement

Support 6 placements.

:::demo Set `placement` property to make dropdown appear in different locations.

dropdown/placements

:::

## Triggering element

Use the button to trigger the dropdown list.

:::demo Use `split-button` to split the triggering element into a button group with the left button being a normal button and right one the actual triggering target. If you wanna insert a separator line between item three and item four, just add the `divided` attribute to item four.

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

## Dropdown API

### Dropdown Attributes

| Name                 | Description                                                                                                           | Type                                                                                                         | Default                                                                    |
| -------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| type                 | menu button type, refer to `Button` Component, only works when `split-button` is true                                 | ^[enum]`'' \| 'default' \| 'primary' \| 'success' \| 'warning' \| 'info' \| 'danger' \| 'text' (deprecated)` | ''                                                                         |
| size                 | menu size, also works on the split button                                                                             | ^[enum]`'' \| 'large' \| 'default' \| 'small'`                                                               | ''                                                                         |
| button-props         | props for the button component, refer to [Button Attributes](./button.html#button-attributes)                         | ^[object]                                                                                                    | —                                                                          |
| max-height           | the max height of menu                                                                                                | ^[string] / ^[number]                                                                                        | ''                                                                         |
| split-button         | whether a button group is displayed                                                                                   | ^[boolean]                                                                                                   | false                                                                      |
| disabled             | whether to disable                                                                                                    | ^[boolean]                                                                                                   | false                                                                      |
| placement            | placement of pop menu                                                                                                 | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end'`                     | bottom                                                                     |
| trigger              | how to trigger                                                                                                        | ^[enum]`'hover' \| 'click' \| 'contextmenu'`                                                                 | hover                                                                      |
| triggerKeys ^(2.9.1) | specify which keys on the keyboard can trigger when pressed                                                           | ^[array]`string[]`                                                                                           | `['Enter', 'Space', 'ArrowDown', 'NumpadEnter']`                           |
| hide-on-click        | whether to hide menu after clicking menu-item                                                                         | ^[boolean]                                                                                                   | true                                                                       |
| show-timeout         | delay time before show a dropdown (only works when trigger is `hover`)                                                | ^[number]                                                                                                    | 150                                                                        |
| hide-timeout         | delay time before hide a dropdown (only works when trigger is `hover`)                                                | ^[number]                                                                                                    | 150                                                                        |
| role                 | the ARIA role attribute for the dropdown menu. Depending on the use case, you may want to change this to 'navigation' | ^[enum]`'dialog' \| 'grid' \| 'group' \| 'listbox' \| 'menu' \| 'navigation' \| 'tooltip' \| 'tree'`         | menu                                                                       |
| tabindex             | [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Dropdown                  | ^[number] / ^[string]                                                                                        | 0                                                                          |
| popper-class         | custom class name for Dropdown's dropdown                                                                             | ^[string]                                                                                                    | ''                                                                         |
| popper-options       | [popper.js](https://popper.js.org/docs/v2/) parameters                                                                | ^[object]                                                                                                    | `{modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]}` |
| teleported ^(2.2.20) | whether the dropdown popup is teleported to the body                                                                  | ^[boolean]                                                                                                   | true                                                                       |
| persistent ^(2.9.5)  | when dropdown inactive and `persistent` is `false` , dropdown menu will be destroyed                                  | ^[boolean]                                                                                                   | true                                                                       |

### Dropdown Slots

| Name     | Description                                                                                                                                   | Subtags       |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| default  | content of Dropdown. Notice: Must be a valid html dom element (ex. `<span>, <button> etc.`) or `el-component`, to attach the trigger listener | —             |
| dropdown | content of the Dropdown Menu, usually a `<el-dropdown-menu>` element                                                                          | Dropdown-Menu |

### Dropdown Events

| Name           | Description                                                                                               | Type                                  |
| -------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| click          | if `split-button` is `true`, triggers when left button is clicked                                         | ^[Function]`(e: MouseEvent) => void`  |
| command        | triggers when a dropdown item is clicked, the parameters is the command dispatched from the dropdown item | ^[Function]`(...args: any[]) => void` |
| visible-change | triggers when the dropdown appears/disappears, the param is true when it appears, and false otherwise     | ^[Function]`(val: boolean) => void`   |

### Dropdown Exposes

| Method      | Description             | Type                    |
| ----------- | ----------------------- | ----------------------- |
| handleOpen  | open the dropdown menu  | ^[Function]`() => void` |
| handleClose | close the dropdown menu | ^[Function]`() => void` |

## Dropdown-Menu API

### Dropdown-Menu Slots

| Name    | Description              | Subtags       |
| ------- | ------------------------ | ------------- |
| default | content of Dropdown Menu | Dropdown-Item |

## Dropdown-Item API

### Dropdown-Item Attributes

| Name     | Description                                                 | Type                              | Default |
| -------- | ----------------------------------------------------------- | --------------------------------- | ------- |
| command  | a command to be dispatched to Dropdown's `command` callback | ^[string] / ^[number] / ^[object] | —       |
| disabled | whether the item is disabled                                | ^[boolean]                        | false   |
| divided  | whether a divider is displayed                              | ^[boolean]                        | false   |
| icon     | custom icon                                                 | ^[string] / ^[Component]          | —       |

### Dropdown-Item Slots

| Name    | Description                |
| ------- | -------------------------- |
| default | customize of Dropdown Item |
