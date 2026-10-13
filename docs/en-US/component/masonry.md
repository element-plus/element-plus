---
title: Masonry
lang: en-US
---

# Masonry ^(2.14.8)

Arrange content of different heights in equal-width columns. Each item is placed in the shortest column, following the order of `items`.

## Basic usage

Set `columns` and `gutter` to control the layout. Use the default slot to render any content. `item-key` is required and must return a unique, stable string or number.

:::demo

masonry/basic

:::

The layout updates automatically when the container width or item heights change, including after images load. Items may move between columns after a size change. To reduce image loading shifts, reserve image space with dimensions or `aspect-ratio` in your content.

For responsive layouts, update `columns` from the parent component. Keep item spacing in `gutter` rather than applying margins to the layout wrappers.

## API

### Attributes

| Name               | Description                                                     | Type                                                   | Default |
| ------------------ | --------------------------------------------------------------- | ------------------------------------------------------ | ------- |
| items ^(2.14.8)    | Items to lay out                                                | ^[array]`T[]`                                          | []      |
| item-key ^(2.14.8) | Required field name or function returning a stable unique key   | ^[string] / ^[Function]`(item: T) => string \| number` | —       |
| columns ^(2.14.8)  | Number of columns, a positive integer                           | ^[number]                                              | 3       |
| gutter ^(2.14.8)   | Horizontal and vertical spacing in pixels, a nonnegative number | ^[number]                                              | 0       |

### Slots

| Name              | Description             | Scope                                 |
| ----------------- | ----------------------- | ------------------------------------- |
| default ^(2.14.8) | Custom content per item | ^[object]`{ item: T, index: number }` |
