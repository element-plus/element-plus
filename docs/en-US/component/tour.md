---
title: Tour
lang: en-US
---

# Tour

A popup component for guiding users through a product. Use when you want to guide users through a product.

## Basic usage

The most basic usage

:::demo

tour/basic

:::

## Non modal

Use `:mask="false"` to make Tour non-modal. At the meantime it is recommended to use with `type="primary"` to emphasize the guide itself.

:::demo

tour/non-modal

:::

## Placement

Change the placement of the guide relative to the target, there are 12 placements available. When `target` is empty the guide will show in the center.

:::demo

tour/placement

:::

## Custom mask style

Custom mask style.

:::demo

tour/mask

:::

## Custom indicator

Custom indicator.

:::demo

tour/indicator

:::

## Target

Various parameter passing types of target. The string and Function types are supported since ^(2.5.2).

:::demo

tour/target

:::

## Tour API

:::tip
tour-step component configuration with the same name has higher priority
:::

### Tour Attributes

| Property                  | Description                                                                      | Type                                                                                                                                                                        | Default                            |
| ------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| append-to                 | Which element the TourContent appends to                                         | ^[CSSSelector] / ^[HTMLElement]                                                                                                                                             | `body`                             |
| show-arrow                | Whether to show the arrow                                                        | `boolean`                                                                                                                                                                   | true                               |
| placement                 | Position of the guide card relative to the target element                        | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | `bottom`                           |
| content-style             | Custom style for content                                                         | `CSSProperties`                                                                                                                                                             | —                                  |
| mask                      | Whether to enable masking, change mask style and fill color by pass custom props | `boolean` \| ^[Object]`{ style?: CSSProperties; color?: string; }`                                                                                                          | `true`                             |
| gap                       | Transparent gap between mask and target                                          | `TourGap`                                                                                                                                                                   | ^[Object]`{ offset: 6, radius: 2}` |
| type                      | Type, affects the background color and text color                                | `default` \| `primary`                                                                                                                                                      | `default`                          |
| model-value / v-model     | Open tour                                                                        | `boolean`                                                                                                                                                                   | `false`                            |
| current / v-model:current | What is the current step                                                         | `number`                                                                                                                                                                    | `0`                                |
| scroll-into-view-options  | Support pass custom scrollIntoView options                                       | `boolean` \| `ScrollIntoViewOptions`                                                                                                                                        | ^[Object]`{ block: 'center' }`     |
| z-index                   | Tour's zIndex                                                                    | `number`                                                                                                                                                                    | `2001`                             |
| show-close                | Whether to show a close button                                                   | `boolean`                                                                                                                                                                   | `true`                             |
| close-icon                | Custom close icon, default is Close                                              | `string` \| `Component`                                                                                                                                                     | —                                  |
| close-on-press-escape     | Whether the Dialog can be closed by pressing ESC                                 | `boolean`                                                                                                                                                                   | `true`                             |
| target-area-clickable     | Whether the target element can be clickable, when using mask                     | `boolean`                                                                                                                                                                   | `true`                             |

### Tour slots

| Name       | Description             | Type                                          |
| ---------- | ----------------------- | --------------------------------------------- |
| default    | TourStep component list | —                                             |
| indicators | Custom indicator        | ^[object]`{ current: number, total: number }` |

### Tour events

| Name   | Description                    | Type                                   |
| ------ | ------------------------------ | -------------------------------------- |
| close  | Callback function on shutdown  | ^[Function]`(current: number) => void` |
| finish | Callback function on finished  | ^[Function]`() => void`                |
| change | Callback when the step changes | ^[Function]`(current: number) => void` |

## TourStep API

### TourStep Attributes

| Property                 | Description                                                                                                                                                                                           | Type                                                                                                                                                                        | Default   |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| target                   | Get the element the guide card points to. Empty makes it show in center of screen. the string and Function types are supported since ^(2.5.2). the string type is selectors of document.querySelector | `HTMLElement` \| `string` \| ^[Function]`() => HTMLElement`                                                                                                                 | —         |
| show-arrow               | Whether to show the arrow                                                                                                                                                                             | `boolean`                                                                                                                                                                   | —         |
| title                    | Title                                                                                                                                                                                                 | `string`                                                                                                                                                                    | —         |
| description              | Description                                                                                                                                                                                           | `string`                                                                                                                                                                    | —         |
| placement                | Position of the guide card relative to the target element                                                                                                                                             | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | `bottom`  |
| content-style            | Custom style for content                                                                                                                                                                              | `CSSProperties`                                                                                                                                                             | —         |
| mask                     | Whether to enable masking, change mask style and fill color by pass custom props                                                                                                                      | `boolean` \| ^[Object]`{ style?: CSSProperties; color?: string; }`                                                                                                          | —         |
| type                     | Type, affects the background color and text color                                                                                                                                                     | `default` \| `primary`                                                                                                                                                      | `default` |
| next-button-props        | Properties of the Next button                                                                                                                                                                         | ^[Object]`{ children: VueNode \| string; onClick: Function }`                                                                                                               | —         |
| prev-button-props        | Properties of the previous button                                                                                                                                                                     | ^[Object]`{ children: VueNode \| string; onClick: Function }`                                                                                                               | —         |
| scroll-into-view-options | Support pass custom scrollIntoView options, the default follows the `scrollIntoViewOptions` property of Tour                                                                                          | `boolean` \| `ScrollIntoViewOptions`                                                                                                                                        | —         |
| show-close               | Whether to show a close button                                                                                                                                                                        | `boolean`                                                                                                                                                                   | —         |
| close-icon               | Custom close icon, default is Close                                                                                                                                                                   | `string` \| `Component`                                                                                                                                                     | —         |

### TourStep slots

| Name    | Description           |
| ------- | --------------------- |
| default | Custom description    |
| header  | Custom header content |

### TourStep events

| Name  | Description                   | Arguments               |
| ----- | ----------------------------- | ----------------------- |
| close | Callback function on shutdown | ^[Function]`() => void` |
