---
title: Ellipsis
lang: en-US
---

# Ellipsis

Text ellipsis component.

## Basic Usage

你可以定义你的缩略位置与文本。

:::demo 通过传入 `ellipsis` 来确定你要省略的字符数，`text` 是你要显示的原始文本，`content` 则会传递给 `el-tooltip` 组件。

ellipsis/basic

:::

## placement

`ellipsis` 提供了三个缩略位置给你选择。

:::demo 通过传入`placement`来选择你的缩略。

ellipsis/placement

:::

## lineClamp and expandTrigger

`ellipsis` 组件提供了基于 `-webkit-line-clamp`的多行省略功能，兼容性参考 [caniuse](https://caniuse.com/?search=line-clamp)。

:::warning

使用 `lineClamp`，会使得属性 `placement` 与属性 `ellipsis`失效。

:::
:::demo 你可以通过传入 `lineClamp` 来指定显示行数，同时指定 `expandTrigger` 来允许文本点击展开。

ellipsis/lineClamp

:::
:::demo `expandTrigger` 设置为 `false` 你将无法展开文本。

ellipsis/expandTrigger

:::

## 使用 Tooltip 内容

`ellipsis` 内部基于 `el-tooltip`,并开放了部分 `el-tooltip` 的属性使用。

:::demo 你可以通过传入 `toolTipOption` 来配置 `el-tooltip`。

ellipsis/tooltip

:::

## Ellipsis API

### Ellipsis Attributes

| Name             | Description                   | Type                            | Default                | Required |
| ---------------- | ----------------------------- | ------------------------------- | ---------------------- | -------- |
| `ellipsis`       | 文本缩略字符数                | number                          | 5                      | Yes      |
| `placement`      | 文本缩略位置                  | `'left' \| 'center'\| 'right' ` | `'right'`              | No       |
| `lineClamp`      | 多行显示行数                  | string / number                 | —                      | No       |
| `expandTrigger`  | 是否允许展开多行文本          | boolean                         | false                  | No       |
| `content`        | 传递给组件 `tooltip` 的内容   | boolean                         | —                      | Yes      |
| `text`           | 你需要显示的原始文本          | string                          | —                      | Yes      |
| `toolTip-option` | 传递给组件 `tooltip` 的配置项 | object                          | `{ placement: 'top' }` | No       |

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
