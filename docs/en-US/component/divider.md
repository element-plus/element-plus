---
title: Divider
lang: en-US
---

# Divider

The dividing line that separates the content.

## Basic usage

Divide the text of different paragraphs.

:::demo

divider/basic-usage

:::

## Custom content

You can customize the content on the divider line.

:::demo

divider/custom-content

:::

## dashed line

You can set the style of divider.

:::demo

divider/line-dashed

:::

## Vertical divider

:::demo

divider/vertical-divider

:::

## API

### Attributes

| Name             | Description                                                | Type                                                                                                                                        | Default    |
| ---------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| direction        | Set divider's direction                                    | ^[enum]`'horizontal' \| 'vertical'`                                                                                                         | horizontal |
| border-style     | Set the style of divider                                   | ^[enum]`'none' \| 'solid' \| 'hidden' \| 'dashed' \| ...` [css/border-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style) | solid      |
| content-position | the position of the customized content on the divider line | ^[enum]`'left' \| 'right' \| 'center' `                                                                                                     | center     |

### Slots

| Name    | Description                            |
| ------- | -------------------------------------- |
| default | customized content on the divider line |
