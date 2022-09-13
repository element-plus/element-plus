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

## Divider Attributes

| Name             | Description                                                | Type   | Accepted Values                                                                   | Default    |
| ---------------- | ---------------------------------------------------------- | ------ | --------------------------------------------------------------------------------- | ---------- |
| direction        | Set divider's direction                                    | string | horizontal / vertical                                                             | horizontal |
| border-style     | Set the style of divider                                   | string | [CSS/border-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style) | solid      |
| content-position | the position of the customized content on the divider line | string | left / right / center                                                             | center     |

## Slots

| Name | Description                            |
| ---- | -------------------------------------- |
| —    | customized content on the divider line |
