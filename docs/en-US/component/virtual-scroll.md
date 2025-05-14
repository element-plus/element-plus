---
title: Virtual Scroll
lang: en-US
---

# Virtual Scroll

Supports hundreds of thousands or even millions of variable-height list items scrolling components.

## Basic Usage

:::demo Set the scrolling item by passing in the `listData` array. The height of the visible window is the height of the parent element.

virtual-scroll/basic

:::

## Support v-model:index

:::demo We can set and get the index of the first item in visible use `v-model:index`.

virtual-scroll/model

:::

## Custom Item

:::demo Content of scroll item. It accept `data` as item of `listData` and `index` as current item index for `slot props`

virtual-scroll/slot

:::

## Horizonal Scroll

:::demo Set `direction` to `horizontal`

virtual-scroll/horizonal

:::

## Manual Scroll

:::demo Call the `scrollToIndex(index, align = 'start')` function of instance to set the item in visible window

virtual-scroll/manual

:::

:::warning

You should not change `el-virtual-scroll__item` and `el-virtual-scroll` box size by `css` for calculate `scroll index` and `scroll distance` accurately.

:::

## API

### Props

| Name        |      Type      |  Description |  Default  |
| ------------- | :----------- | :---- |  :----  |
| listData      |   Array\<any\>    |   The scroll list array |  []  |
| index      | number | The first index of visible window |  -  |
| direction |   'vertical'\|'horizontal'    |    The scroll direction | vertical   |
| averageSpace |   number    |    To optimize the performance of calculating and it doesn't work at most of time | 10   |

### Event

| name        |  Description |  Callback Params  |
| ------------- | :---- |  :----  |
| virtual-scroll | Emited when scroll or call `scrollToIndex` function |  The first and end index of visible window`[startIndex, endIndex]`  |

### Slot

| Name       |  Description |  Slot Props  |
| ------------- | :---- |  :----  |
| default | Content as scroll item |  `#default={ index, data }`  |

### Exposes

| Name        | Description | Type |
| ------------- | :---- | :---- |
| scrollToIndex | Scroll to target index | `(index: number, align: start\|center\|end): Promise<void>` |
