---
title: Splitter
lang: en-US
---

# Splitter ^(beta)

Divide the area horizontally or vertically, and freely drag to adjust the size of each area.

## Basic usage

The most basic usage, if no default size is passed, it will be automatically divided equally.

:::demo

splitter/basic

:::

## Vertical

Use vertical orientation.

:::demo

splitter/vertical

:::

## Collapsible

Configuring `collapsible` provides quick shrinking capability. You can use the `min` property to prevent expanding through dragging after collapsing.

:::demo

splitter/collapsible

:::

## Disable drag

When either panel disables `resizable`, dragging will be disabled.

:::demo

splitter/disableDrag

:::

## Panel size

`v-model:size` can get the panel size.

:::demo

splitter/size

:::

## Splitter API

### Splitter Attributes

| Name   | Description                      | Type                                | Default    |
| ------ | -------------------------------- | ----------------------------------- | ---------- |
| layout | Layout direction of the splitter | ^[enum]`'horizontal' \| 'vertical'` | horizontal |

### Splitter Events

| Name         | Description                                                              | type                                                  |
| ------------ | ------------------------------------------------------------------------ | ----------------------------------------------------- |
| resize-start | Triggered when starting to resize a panel, `index` is the drag bar index | ^[Function]`(index: number, sizes: number[]) => void` |
| resize       | Triggered while resizing a panel, `index` is the drag bar index          | ^[Function]`(index: number, sizes: number[]) => void` |
| resize-end   | Triggered when panel resizing ends, `index` is the drag bar index        | ^[Function]`(index: number, sizes: number[]) => void` |

## SplitterPanel API

### SplitterPanel Attributes

| Name                | Description                                         | Type                  | Default |
| ------------------- | --------------------------------------------------- | --------------------- | ------- |
| size / v-model:size | Size of the panel (in pixels or percentage)         | ^[string] / ^[number] | -       |
| min                 | Minimum size of the panel (in pixels or percentage) | ^[string] / ^[number] | -       |
| max                 | Maximum size of the panel (in pixels or percentage) | ^[string] / ^[number] | -       |
| resizable           | Whether the panel can be resized                    | ^[boolean]            | true    |
| collapsible         | Whether the panel can be collapsed                  | ^[boolean]            | false   |

### SplitterPanel Events

| Name        | Description                       | type                                |
| ----------- | --------------------------------- | ----------------------------------- |
| update:size | Triggered when panel size changes | ^[Function]`(size: number) => void` |

### SplitterPanel Slots

| Name              | Description                                     |
| ----------------- | ----------------------------------------------- |
| default           | Default content of the panel                    |
| start-collapsible | Custom content for the start collapsible button |
| end-collapsible   | Custom content for the end collapsible button   |
