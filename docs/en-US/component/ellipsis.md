---
title: Ellipsis lang: en-US
---

# Ellipsis

A component that handles Text ellipsis scenes.

## Basic Usage

You can define your ellipsis position and the text to be displayed.

:::demo Determine the number of characters you want to omit by passing in the `ellipsis` attribute. The `text` attribute is the original text you want to display, while the `content` attribute will be passed to the `el-tooltip` component.

ellipsis/basic

:::

## placement

The `ellipsis` component provides three omitted positions for you to choose from.

:::demo Select your omitted position by passing in the `placement` attribute.

ellipsis/placement

:::

## lineClamp and expandTrigger

The `ellipsis` component provides multi line ellipsis based on `-webkit-line-clamp`.
Compatibility reference [caniuse](https://caniuse.com/?search=line-clamp)。

:::warning

Using the `lineClamp` attribute invalidates the `placement` and `ellipsis` attributes.

:::
:::demo You can specify the number of lines to display by passing in the `lineClamp` attribute, and specify the `expandTrigger` attribute to allow the text to click and expand.

ellipsis/lineClamp

:::
:::demo If the `expandTrigger` attributeis is set to `false`, you will not be able to expand the text.

ellipsis/expandTrigger

:::

## Configure Tooltip components

`ellipsis`component uses component `el-tooltip` internally, and provides some properties of component `el-tooltip` for developers to use.

:::demo You can configure the component `el-tooltip` by passing in the `tooltipoption` attribute.

ellipsis/tooltip

:::

## Ellipsis API

### Ellipsis Attributes

| Name             | Description                                          | Type                         | Default                | Required |
| ---------------- | ---------------------------------------------------- | ---------------------------- | ---------------------- | -------- |
| `ellipsis`       | Number of text omitted characters                    | number                       | 5                      | Yes      |
| `placement`      | Text omitted position                                | `'left' \|'center'\|'right'` | `'right'`              | No       |
| `lineClamp`      | Number of lines of text displayed in multiple lines  | string / number              | —                      | No       |
| `expandTrigger`  | Allow multiline text expansion                       | boolean                      | false                  | No       |
| `content`        | Text content passed to component `el-tooltip`        | boolean                      | —                      | Yes      |
| `text`           | The original text you need to display                | string                       | —                      | Yes      |
| `toolTip-option` | Configuration items passed to component `el-tooltip` | object                       | `{ placement: 'top' }` | No       |

### toolTip-option

| Attribute    | Description                                     | Type    | Accepted Values                                                                                           | Default           |
| ------------ | ----------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------- | ----------------- |
| effect       | Tooltip theme, built-in theme: `dark` / `light` | string  | string                                                                                                    | dark              |
| placement    | position of Tooltip                             | string  | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom            |
| offset       | offset of the Tooltip                           | number  | —                                                                                                         | 0                 |
| transition   | animation name                                  | string  | —                                                                                                         | el-fade-in-linear |
| show-after   | delay of appearance, in millisecond             | number  | —                                                                                                         | 0                 |
| show-arrow   | whether the tooltip content has an arrow        | boolean | true / false                                                                                              | true              |
| hide-after   | delay of disappear, in millisecond              | number  | —                                                                                                         | 0                 |
| popper-class | custom class name for Tooltip's popper          | string  | —                                                                                                         | —                 |
| enterable    | whether the mouse can enter the tooltip         | Boolean | —                                                                                                         | true              |
| trigger      | How should the tooltip be triggered (to show)   | string  | hover / click / focus / contextmenu                                                                       | hover             |
| disabled     | whether Tooltip is disabled                     | boolean | —                                                                                                         | false             |
