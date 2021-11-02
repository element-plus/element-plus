---
title: Dropdown
lang: en-US
---

# Dropdown

Toggleable menu for displaying lists of links and actions.

<style lang="scss" >

.example-showcase {
  .el-dropdown {
    & + .el-dropdown {
      margin-left: 15px;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
  }
.el-icon--right {
  font-size: 12px;
  vertical-align: middle;
}
}

.block-col-2 {
  margin: -24px;

  .el-col {
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid var(--el-border-color-base);

    &:last-child {
      border-right: 0;
    }
  }
}

.example-showcase .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>

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

## Sizes

Besides default size, Dropdown component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.

dropdown/sizes

:::

## Dropdown Attributes

| Attribute     | Description                                                                                          | Type            | Accepted Values                                      | Default |
| ------------- | ---------------------------------------------------------------------------------------------------- | --------------- | ---------------------------------------------------- | ------- |
| type          | menu button type, refer to `Button` Component, only works when `split-button` is true                | string          | —                                                    | —       |
| size          | menu size, also works on the split button                                                            | string          | medium / small / mini                                | —       |
| max-height    | the max height of menu                                                                               | string / number | —                                                    | —       |
| split-button  | whether a button group is displayed                                                                  | boolean         | —                                                    | false   |
| disabled      | Whether to disable                                                                                   | boolean         | —                                                    | false   |
| placement     | placement of pop menu                                                                                | string          | top/top-start/top-end/bottom/bottom-start/bottom-end | bottom  |
| trigger       | how to trigger                                                                                       | string          | hover/click/contextmenu                              | hover   |
| hide-on-click | whether to hide menu after clicking menu-item                                                        | boolean         | —                                                    | true    |
| show-timeout  | Delay time before show a dropdown (only works when trigger is `hover`)                               | number          | —                                                    | 250     |
| hide-timeout  | Delay time before hide a dropdown (only works when trigger is `hover`)                               | number          | —                                                    | 150     |
| tabindex      | [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Dropdown | number          | —                                                    | 0       |

## Dropdown Slots

| Name     | Description                                                                                                                                   | Subtags       |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| —        | content of Dropdown. Notice: Must be a valid html dom element (ex. `<span>, <button> etc.`) or `el-component`, to attach the trigger listener | —             |
| dropdown | content of the Dropdown Menu, usually a `<el-dropdown-menu>` element                                                                          | Dropdown-Menu |

## Dropdown Events

| Event Name     | Description                                                       | Parameters                                    |
| -------------- | ----------------------------------------------------------------- | --------------------------------------------- |
| click          | if `split-button` is `true`, triggers when left button is clicked | —                                             |
| command        | triggers when a dropdown item is clicked                          | the command dispatched from the dropdown item |
| visible-change | triggers when the dropdown appears/disappears                     | true when it appears, and false otherwise     |

## Dropdown-Menu Slots

| Name | Description              | Subtags       |
| ---- | ------------------------ | ------------- |
| —    | content of Dropdown Menu | Dropdown-Item |

## Dropdown-Item Attributes

| Attribute | Description                                                 | Type                 | Accepted Values | Default |
| --------- | ----------------------------------------------------------- | -------------------- | --------------- | ------- |
| command   | a command to be dispatched to Dropdown's `command` callback | string/number/object | —               | —       |
| disabled  | whether the item is disabled                                | boolean              | —               | false   |
| divided   | whether a divider is displayed                              | boolean              | —               | false   |
| icon      | icon class name                                             | string               | —               | —       |

## Dropdown-Item Slots

| Name | Description                |
| ---- | -------------------------- |
| —    | customize of Dropdown Item |
