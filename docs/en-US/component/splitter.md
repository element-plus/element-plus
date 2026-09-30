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

### Size units

The unit a `size` is written in decides what the panel aims for when the
container is resized, so pick the one that matches your intent:

| `size`        | Panel aims for                                                                     |
| ------------- | ---------------------------------------------------------------------------------- |
| `"200px"`     | 200px, keeping that width as the container resizes. The rest goes to other panels. |
| `:size="200"` | 200px to begin with, then its share of the container proportionally.               |
| `"25%"`       | A quarter of the container.                                                        |
| omitted       | Whatever the sized panels leave over, split evenly with the other omitted panels.  |

A panel sized in `px` keeps its width through collapse and expand too, and
dragging it sets a new one.

These are targets rather than guarantees. `min` and `max` take precedence, a
panel can be collapsed to zero whatever its size says, and when the `px` panels
together are wider than the container they shrink in proportion rather than
pushing the other panels out.

`min` and `max` read their units the usual way: a percentage tracks the
container, while a number or a `px` string is a literal pixel limit.

## Lazy ^(2.11.0)

When `lazy` is enabled, the panel size will not update in real time during dragging, but only after the drag ends.

:::demo

splitter/lazy

:::

## Splitter API

### Splitter Attributes

| Name           | Description                      | Type                                | Default    |
| -------------- | -------------------------------- | ----------------------------------- | ---------- |
| layout         | Layout direction of the splitter | ^[enum]`'horizontal' \| 'vertical'` | horizontal |
| lazy ^(2.11.0) | Whether to enable lazy mode      | ^[boolean]                          | false      |

### Splitter Events

| Name               | Description                                                              | type                                                                          |
| ------------------ | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| resize-start       | Triggered when starting to resize a panel, `index` is the drag bar index | ^[Function]`(index: number, sizes: number[]) => void`                         |
| resize             | Triggered while resizing a panel, `index` is the drag bar index          | ^[Function]`(index: number, sizes: number[]) => void`                         |
| resize-end         | Triggered when panel resizing ends, `index` is the drag bar index        | ^[Function]`(index: number, sizes: number[]) => void`                         |
| collapse ^(2.10.3) | Triggered when a panel is collapsed, `index` is the drag bar index       | ^[Function]`(index: number, type: 'start' \| 'end', sizes: number[]) => void` |

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

### SplitterPanel Exposes

| Name                       | Description                | Type                           |
| -------------------------- | -------------------------- | ------------------------------ |
| splitterPanelRef ^(2.11.9) | SplitterPanel html element | ^[object]`Ref<HTMLDivElement>` |
