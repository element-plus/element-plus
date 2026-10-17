---
title: Masonry
lang: en-US
---

# Masonry ^(2.15.0)

Arrange content of different heights in equal-width columns. Each item is placed in the shortest column, following the order of `items`.

## Basic usage

Set `columns` and `gutter` to control the layout. Use the default slot to render any content. `item-key` is required and must return a unique, stable string or number.

:::demo

masonry/basic

:::

The layout updates automatically when the container width or item heights change, including after images load. Items may move between columns after a size change. To reduce image loading shifts, reserve image space with dimensions or `aspect-ratio` in your content.

Keep item spacing in `gutter` rather than applying margins to the layout wrappers.

## Responsive layout

Set `columns` and `gutter` to objects to adjust the layout according to the viewport width. Breakpoints follow [Layout](./layout#col-attributes): `xs` <768px, `sm` ≥768px, `md` ≥992px, `lg` ≥1200px, and `xl` ≥1920px.

The largest matching breakpoint with a configured value takes precedence. If no breakpoint matches, `columns` falls back to its `xs` value or `1`, and `gutter` falls back to `0`. The `xs` gutter only applies below 768px. Omitting `columns` keeps the default of `3`.

:::demo

masonry/responsive

:::

## API

### Attributes

| Name     | Description                                                                                   | Type                                                                                 | Default |
| -------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------- |
| items    | Items to lay out                                                                              | ^[array]`T[]`                                                                        | []      |
| item-key | Required field name or function returning a stable unique key                                 | ^[string] / ^[Function]`(item: T) => string \| number`                               | —       |
| columns  | Number of columns, a positive integer or a responsive configuration                           | ^[number] / ^[object]`Partial<Record<'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl', number>>` | 3       |
| gutter   | Horizontal and vertical spacing in pixels, a nonnegative number or a responsive configuration | ^[number] / ^[object]`Partial<Record<'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl', number>>` | 0       |

### Slots

| Name    | Description             | Scope                                 |
| ------- | ----------------------- | ------------------------------------- |
| default | Custom content per item | ^[object]`{ item: T, index: number }` |
