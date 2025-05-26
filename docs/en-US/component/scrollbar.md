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

## Infinite scroll ^(2.9.12)

:::demo When the end of the scroll is reached `bottom-reached` is called. It can be used for infinite scroll.

scrollbar/infinite-scroll

:::

## API

### Attributes

| Name                              | Description                                                                                                                     | Type                                                                | Default |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------- |
| height                            | height of scrollbar                                                                                                             | ^[string] / ^[number]                                               | —       |
| max-height                        | max height of scrollbar                                                                                                         | ^[string] / ^[number]                                               | —       |
| native                            | whether to use the native scrollbar style                                                                                       | ^[boolean]                                                          | false   |
| wrap-style                        | style of wrap container                                                                                                         | ^[string] / ^[object]`CSSProperties \| CSSProperties[] \| string[]` | —       |
| wrap-class                        | class of wrap container                                                                                                         | ^[string]                                                           | —       |
| view-style                        | style of view                                                                                                                   | ^[string] / ^[object]`CSSProperties \| CSSProperties[] \| string[]` | —       |
| view-class                        | class of view                                                                                                                   | ^[string]                                                           | —       |
| noresize                          | do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance | ^[boolean]                                                          | false   |
| tag                               | element tag of the view                                                                                                         | ^[string]                                                           | div     |
| always                            | always show scrollbar                                                                                                           | ^[boolean]                                                          | false   |
| min-size                          | minimum size of scrollbar                                                                                                       | ^[number]                                                           | 20      |
| id ^(2.4.0)                       | id of view                                                                                                                      | ^[string]                                                           | —       |
| role ^(2.4.0) ^(a11y)             | role of view                                                                                                                    | ^[string]                                                           | —       |
| aria-label ^(2.4.0) ^(a11y)       | aria-label of view                                                                                                              | ^[string]                                                           | —       |
| aria-orientation ^(2.4.0) ^(a11y) | aria-orientation of view                                                                                                        | ^[enum]`'horizontal' \| 'vertical'`                                 | —       |
| tabindex ^(2.8.3)                 | tabindex of wrap container                                                                                                      | ^[number] / ^[string]                                               | —       |
| bottom-reached ^(2.9.12)          | invoked when the end of the scroll is reached. Useful for infinite scroll.                                                      | (options: [ScrollOptions](#typings)) => Awaitable<void\>            | —       |
| direction ^(2.9.12)               | direction to use the infinite scroll scroll.                                                                                    | ^[enum]`'top'\| 'bottom' \| 'left'\| 'right'`                       | bottom  |

### Events

| Name   | Description                                           | Type                                                             |
| ------ | ----------------------------------------------------- | ---------------------------------------------------------------- |
| scroll | triggers when scrolling, return distance of scrolling | ^[Function]`({ scrollLeft: number, scrollTop: number }) => void` |

### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

### Exposes

| Name          | Description                                | Type                                                                       |
| ------------- | ------------------------------------------ | -------------------------------------------------------------------------- |
| handleScroll  | handle scroll event                        | ^[Function]`() => void`                                                    |
| scrollTo      | scrolls to a particular set of coordinates | ^[Function]`(options: ScrollToOptions \| number, yCoord?: number) => void` |
| setScrollTop  | Set distance to scroll top                 | ^[Function]`(scrollTop: number) => void`                                   |
| setScrollLeft | Set distance to scroll left                | ^[Function]`(scrollLeft: number) => void`                                  |
| update        | update scrollbar state manually            | ^[Function]`() => void`                                                    |
| wrapRef       | scrollbar wrap ref                         | ^[object]`Ref<HTMLDivElement>`                                             |

## Typings{#typings}

<details>
  <summary>Show Type Declarations</summary>

```ts
import { useScroll } from '@vueuse/core'
import type { UnwrapNestedRefs } from 'vue'

type Awaitable<T> = Promise<T> | T
type ScrollOptions = UnwrapNestedRefs<ReturnType<typeof useScroll>>
```

</details>
