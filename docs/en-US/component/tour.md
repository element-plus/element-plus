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
| append-to                 | which element the TourContent appends to                                         | ^[CSSSelector] / ^[HTMLElement]                                                                                                                                             | `body`                             |
| show-arrow                | whether to show the arrow                                                        | `boolean`                                                                                                                                                                   | true                               |
| placement                 | position of the guide card relative to the target element                        | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | `bottom`                           |
| content-style             | custom style for content                                                         | `CSSProperties`                                                                                                                                                             | —                                  |
| mask                      | whether to enable masking, change mask style and fill color by pass custom props | `boolean` \| ^[Object]`{ style?: CSSProperties; color?: string; }`                                                                                                          | `true`                             |
| gap                       | transparent gap between mask and target                                          | `TourGap`                                                                                                                                                                   | ^[Object]`{ offset: 6, radius: 2}` |
| type                      | type, affects the background color and text color                                | `default` \| `primary`                                                                                                                                                      | `default`                          |
| model-value / v-model     | open tour                                                                        | `boolean`                                                                                                                                                                   | —                                  |
| current / v-model:current | what is the current step                                                         | `number`                                                                                                                                                                    | —                                  |
| scroll-into-view-options  | support pass custom scrollIntoView options                                       | `boolean` \| `ScrollIntoViewOptions`                                                                                                                                        | ^[Object]`{ block: 'center' }`     |
| z-index                   | Tour's zIndex                                                                    | `number`                                                                                                                                                                    | `2001`                             |
| show-close                | whether to show a close button                                                   | `boolean`                                                                                                                                                                   | `true`                             |
| close-icon                | custom close icon, default is Close                                              | `string` \| `Component`                                                                                                                                                     | —                                  |
| close-on-press-escape     | whether the Dialog can be closed by pressing ESC                                 | `boolean`                                                                                                                                                                   | `true`                             |
| target-area-clickable     | whether the target element can be clickable, when using mask                     | `boolean`                                                                                                                                                                   | `true`                             |

### Tour slots

| Name       | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| default    | tourStep component list                                       |
| indicators | custom indicator, The scope parameter is `{ current, total }` |

### Tour events

| Name   | Description                    | Type                                   |
| ------ | ------------------------------ | -------------------------------------- |
| close  | callback function on shutdown  | ^[Function]`(current: number) => void` |
| finish | callback function on finished  | ^[Function]`() => void`                |
| change | callback when the step changes | ^[Function]`(current: number) => void` |

### TourStep Attributes

| Property                 | Description                                                                                                                                                                                            | Type                                                                                                                                                                        | Default   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| target                   | get the element the guide card points to. Empty makes it show in center of screen. the string and Function types are supported since ^(2.5.2). the string type is selectors of document.querySelector. | `HTMLElement` \| `string` \| ^[Function]`() => HTMLElement`                                                                                                                 | —         |
| show-arrow               | whether to show the arrow                                                                                                                                                                              | `boolean`                                                                                                                                                                   | `true`    |
| title                    | title                                                                                                                                                                                                  | `string`                                                                                                                                                                    | —         |
| description              | description                                                                                                                                                                                            | `string`                                                                                                                                                                    | —         |
| placement                | position of the guide card relative to the target element                                                                                                                                              | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | `bottom`  |
| content-style            | custom style for content                                                                                                                                                                               | `CSSProperties`                                                                                                                                                             | —         |
| mask                     | whether to enable masking, change mask style and fill color by pass custom props                                                                                                                       | `boolean` \| ^[Object]`{ style?: CSSProperties; color?: string; }`                                                                                                          | `true`    |
| type                     | type, affects the background color and text color                                                                                                                                                      | `default` \| `primary`                                                                                                                                                      | `default` |
| next-button-props        | properties of the Next button                                                                                                                                                                          | ^[Object]`{ children: VueNode \| string; onClick: Function }`                                                                                                               | —         |
| prev-button-props        | properties of the previous button                                                                                                                                                                      | ^[Object]`{ children: VueNode \| string; onClick: Function }`                                                                                                               | —         |
| scroll-into-view-options | support pass custom scrollIntoView options, the default follows the `scrollIntoViewOptions` property of Tour                                                                                           | `boolean` \| `ScrollIntoViewOptions`                                                                                                                                        | —         |
| show-close               | whether to show a close button                                                                                                                                                                         | `boolean`                                                                                                                                                                   | `true`    |
| close-icon               | custom close icon, default is Close                                                                                                                                                                    | `string` \| `Component`                                                                                                                                                     | —         |

### TourStep slots

| Name    | Description |
| ------- | ----------- |
| default | description |
| header  | header      |

### TourStep events

| Name  | Description                   | Arguments               |
| ----- | ----------------------------- | ----------------------- |
| close | callback function on shutdown | ^[Function]`() => void` |
