---
title: Scrollbar
lang: en-US
---

# Scrollbar

Used to replace the browser's native scrollbar.

## Basic usage

:::demo Use `height` property to set the height of the scrollbar, or if not set, it adapts according to the parent container height.

scrollbar/basic-usage

:::

## Horizontal scroll

:::demo When the element width is greater than the scrollbar width, the horizontal scrollbar is displayed.

scrollbar/horizontal-scroll

:::

## Max height

:::demo The scrollbar is displayed only when the element height exceeds the max height.

scrollbar/max-height

:::

## Manual scroll

:::demo Use `setScrollTop` and `setScrollLeft` methods can control scrollbar manually.

scrollbar/manual-scroll

:::

## Infinite scroll ^(2.10.0)

:::demo `end-reached` is triggered when the scrollbar reaches the end. It can be used as an infinite scroll.

scrollbar/infinite-scroll

:::

## API

### Attributes

| Name                              | Description                                                                                                                     | Type                                                                | Default |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------- |
| height                            | Height of scrollbar                                                                                                             | ^[string] / ^[number]                                               | —       |
| max-height                        | Max height of scrollbar                                                                                                         | ^[string] / ^[number]                                               | —       |
| native                            | Whether to use the native scrollbar style                                                                                       | ^[boolean]                                                          | false   |
| wrap-style                        | Style of wrap container                                                                                                         | ^[string] / ^[object]`CSSProperties \| CSSProperties[] \| string[]` | —       |
| wrap-class                        | Class of wrap container                                                                                                         | ^[string]                                                           | —       |
| view-style                        | Style of view                                                                                                                   | ^[string] / ^[object]`CSSProperties \| CSSProperties[] \| string[]` | —       |
| view-class                        | Class of view                                                                                                                   | ^[string]                                                           | —       |
| noresize                          | Do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance | ^[boolean]                                                          | false   |
| tag                               | Element tag of the view                                                                                                         | ^[string]                                                           | div     |
| always                            | Always show scrollbar                                                                                                           | ^[boolean]                                                          | false   |
| min-size                          | Minimum size of scrollbar                                                                                                       | ^[number]                                                           | 20      |
| id ^(2.4.0)                       | Id of view                                                                                                                      | ^[string]                                                           | —       |
| role ^(2.4.0) ^(a11y)             | Role of view                                                                                                                    | ^[string]                                                           | —       |
| aria-label ^(2.4.0) ^(a11y)       | Aria-label of view                                                                                                              | ^[string]                                                           | —       |
| aria-orientation ^(2.4.0) ^(a11y) | Aria-orientation of view                                                                                                        | ^[enum]`'horizontal' \| 'vertical'`                                 | —       |
| tabindex ^(2.8.3)                 | Tabindex of wrap container                                                                                                      | ^[number] / ^[string]                                               | —       |
| distance ^(2.10.5)                | Trigger end-reached event distance(px)                                                                                          | ^[number]                                                           | 0       |

### Events

| Name                  | Description                                           | Type                                                                     |
| --------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------ |
| scroll                | Triggers when scrolling, return distance of scrolling | ^[Function]`({ scrollLeft: number, scrollTop: number }) => void`         |
| end-reached ^(2.10.0) | Triggers when the end of a scroll is triggered        | ^[Function]`(direction: 'top' \| 'bottom' \| 'left' \| 'right') => void` |

### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | Customize default content |

### Exposes

| Name          | Description                                | Type                                                                       |
| ------------- | ------------------------------------------ | -------------------------------------------------------------------------- |
| handleScroll  | Handle scroll event                        | ^[Function]`() => void`                                                    |
| scrollTo      | Scrolls to a particular set of coordinates | ^[Function]`(options: ScrollToOptions \| number, yCoord?: number) => void` |
| setScrollTop  | Set distance to scroll top                 | ^[Function]`(scrollTop: number) => void`                                   |
| setScrollLeft | Set distance to scroll left                | ^[Function]`(scrollLeft: number) => void`                                  |
| update        | Update scrollbar state manually            | ^[Function]`() => void`                                                    |
| wrapRef       | Scrollbar wrap ref                         | ^[object]`Ref<HTMLDivElement>`                                             |
