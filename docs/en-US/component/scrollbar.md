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

## Scroll masks ^(2.14.8)

Use `mask` to indicate that more content can be scrolled to above, below, to the left, or to the right of the viewport. Masks are disabled by default.

| Value      | Behavior                                                    |
| ---------- | ----------------------------------------------------------- |
| `false`    | Disable all masks (default).                                |
| `true`     | Enable all four masks, according to the available overflow. |
| `'top'`    | Enable only the top mask.                                   |
| `'bottom'` | Enable only the bottom mask.                                |
| `'left'`   | Enable only the left mask.                                  |
| `'right'`  | Enable only the right mask.                                 |

```vue
<template>
  <el-scrollbar height="240px" mask />
  <el-scrollbar height="240px" mask="top" />
  <el-scrollbar height="240px" mask="bottom" />
  <el-scrollbar mask="left" />
  <el-scrollbar mask="right" />
</template>
```

:::demo Scroll vertically or horizontally and change the mask mode. Each enabled mask appears only while there is more content in its direction. It disappears when that edge is reached. Masks stay hidden on axes without overflow; when both axes overflow, all four masks can appear together.

scrollbar/scroll-mask

:::

Masks fade in and out over `200ms` by default, using `--el-transition-duration-fast`. The animation is disabled when the user prefers reduced motion. Masks do not block pointer events or cover scrollbar controls, and also work with `native`.

`left` and `right` refer to the physical edges of the viewport, including when the scroll container uses `direction: rtl`.

The `distance` attribute only affects the `end-reached` event; it does not change when masks appear. When using `noresize`, call `update()` after changing the content or container size to refresh the masks.

### Customize masks

Use the following CSS variables on the Scrollbar component to customize each mask:

| CSS variable                        | Description                | Default              |
| ----------------------------------- | -------------------------- | -------------------- |
| `--el-scrollbar-top-mask-height`    | Height of the top mask.    | `40px`               |
| `--el-scrollbar-bottom-mask-height` | Height of the bottom mask. | `40px`               |
| `--el-scrollbar-left-mask-width`    | Width of the left mask.    | `40px`               |
| `--el-scrollbar-right-mask-width`   | Width of the right mask.   | `40px`               |
| `--el-scrollbar-top-mask-color`     | Color of the top mask.     | `var(--el-bg-color)` |
| `--el-scrollbar-bottom-mask-color`  | Color of the bottom mask.  | `var(--el-bg-color)` |
| `--el-scrollbar-left-mask-color`    | Color of the left mask.    | `var(--el-bg-color)` |
| `--el-scrollbar-right-mask-color`   | Color of the right mask.   | `var(--el-bg-color)` |

The default color follows the light or dark theme. Set the mask colors to match the container background when using a custom background. The example above sets the vertical mask heights and horizontal mask widths to `48px`.

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
| mask ^(2.14.8)                    | Gradient masks: `true` for all edges, a direction for one edge, and `false` to disable                                          | ^[boolean] / ^[enum]`'top' \| 'bottom' \| 'left' \| 'right'`        | false   |
| min-size                          | minimum size of scrollbar                                                                                                       | ^[number]                                                           | 20      |
| id ^(2.4.0)                       | id of view                                                                                                                      | ^[string]                                                           | —       |
| role ^(2.4.0) ^(a11y)             | role of view                                                                                                                    | ^[string]                                                           | —       |
| aria-label ^(2.4.0) ^(a11y)       | aria-label of view                                                                                                              | ^[string]                                                           | —       |
| aria-orientation ^(2.4.0) ^(a11y) | aria-orientation of view                                                                                                        | ^[enum]`'horizontal' \| 'vertical'`                                 | —       |
| tabindex ^(2.8.3)                 | tabindex of wrap container                                                                                                      | ^[number] / ^[string]                                               | —       |
| distance ^(2.10.5)                | trigger end-reached event distance(px)                                                                                          | ^[number]                                                           | 0       |

### Events

| Name                  | Description                                           | Type                                                                     |
| --------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------ |
| scroll                | triggers when scrolling, return distance of scrolling | ^[Function]`({ scrollLeft: number, scrollTop: number }) => void`         |
| end-reached ^(2.10.0) | triggers when the end of a scroll is triggered        | ^[Function]`(direction: 'top' \| 'bottom' \| 'left' \| 'right') => void` |

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
