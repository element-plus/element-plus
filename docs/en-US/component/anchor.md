---
title: Anchor
lang: en-US
---

# Anchor

Through the anchor point, you can quickly find the position of the information content on the current page.

## Basic Usage

The most basic usage

:::demo

anchor/basic

:::

## Horizontal Mode

Horizontally aligned anchors

:::tip

Horizontal Mode does not support `sub-link` slots

:::

:::demo

anchor/horizontal

:::

## Scroll Container

Custom scroll area, use `offset` props can set anchor scroll offset, listen the `link-click` event and prevents browser default behavior then it will not change history.

:::demo

anchor/scroll

:::

## Anchor link change

Listening for anchor link change

:::demo

anchor/change

:::

## Underline type

set `type="underline"` change to underline type

:::demo

anchor/underline

:::

## Affix Mode

Use the affix component to fix the anchor point within the page.

:::demo

anchor/affix

:::

## Anchor API

### Anchor Attributes

| Property                   | Description                                                | Type                                   | Default    |
| -------------------------- | ---------------------------------------------------------- | -------------------------------------- | ---------- |
| container                  | scroll container.                                          | `string` \| `HTMLElement` \| `Window ` | —          |
| offset                     | set the offset of the anchor scroll.                       | `number`                               | 0          |
| bound                      | the offset of the element starting to trigger the anchor.  | `number`                               | 15         |
| duration                   | set the scroll duration of the container, in milliseconds. | `number`                               | 300        |
| marker                     | whether to show the marker.                                | ^[boolean]                             | true       |
| type                       | set Anchor type.                                           | ^[enum]`'default' \| 'underline'`      | `default`  |
| direction                  | Set Anchor direction.                                      | ^[enum]`'vertical' \| 'horizontal'`    | `vertical` |
| select-scroll-top ^(2.9.2) | scroll whether link is selected at the top                 | ^[boolean]                             | false      |

### Anchor Events

| Name   | Description                                | Type                                                |
| ------ | ------------------------------------------ | --------------------------------------------------- |
| change | callback when the step changes             | ^[Function]`(href: string) => void`                 |
| click  | Triggered when the user clicks on the link | ^[Function]`(e: MouseEvent, href?: string) => void` |

### Anchor Methods

| Name     | Description                               | Type                                |
| -------- | ----------------------------------------- | ----------------------------------- |
| scrollTo | Manually scroll to the specific position. | ^[Function]`(href: string) => void` |

### Anchor Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | AnchorLink component list |

### AnchorLink Attributes

| Property | Description                          | Type     | Default |
| -------- | ------------------------------------ | -------- | ------- |
| title    | the text content of the anchor link. | `string` | —       |
| href     | The address of the anchor link.      | `string` | —       |

### AnchorLink Slots

| Name     | Description                     |
| -------- | ------------------------------- |
| default  | the content of the anchor link. |
| sub-link | slots for child links.          |
