---
title: Carousel
lang: en-US
---

# Carousel

Loop a series of images or texts in a limited space

## Basic usage

:::demo Combine `el-carousel` with `el-carousel-item`, and you'll get a carousel. Content of each slide is completely customizable, and you just need to place it inside `el-carousel-item` tag. By default the carousel switches when mouse hovers over an indicator. Set `trigger` to `click`, and the carousel switches only when an indicator is clicked.

carousel/basic

:::

## Indicators

Indicators can be displayed outside the carousel

:::demo The `indicator-position` attribute determines where the indicators are located. By default they are inside the carousel, and setting `indicator-position` to `outside` moves them outside; setting `indicator-position` to `none` hides the indicators.

carousel/indicator

:::

## Arrows

You can define when arrows are displayed

:::demo The `arrow` attribute determines when arrows are displayed. By default they appear when mouse hovers over the carousel. Setting `arrow` to `always` or `never` shows/hides the arrows permanently.

carousel/arrows

:::

## Card mode

When a page is wide enough but has limited height, you can activate card mode for carousels

:::demo Setting `type` to `card` activates the card mode. Apart from the appearance, the biggest difference between card mode and common mode is that clicking the slides at both sides directly switches the carousel in card mode.

carousel/card

:::

## Vertical

By default, `direction` is `horizontal`. Let carousel be displayed in the vertical direction by setting `direction` to `vertical`.

:::demo

carousel/vertical

:::

## Carousel Attributes

| Name               | Description                                           | Type    | Accepted Values     | Default    |
| ------------------ | ----------------------------------------------------- | ------- | ------------------- | ---------- |
| height             | height of the carousel                                | string  | —                   | —          |
| initial-index      | index of the initially active slide (starting from 0) | number  | —                   | 0          |
| trigger            | how indicators are triggered                          | string  | hover/click         | hover      |
| autoplay           | whether automatically loop the slides                 | boolean | —                   | true       |
| interval           | interval of the auto loop, in milliseconds            | number  | —                   | 3000       |
| indicator-position | position of the indicators                            | string  | outside/none        | —          |
| arrow              | when arrows are shown                                 | string  | always/hover/never  | hover      |
| type               | type of the Carousel                                  | string  | card                | —          |
| loop               | display the items in loop                             | boolean | -                   | true       |
| direction          | display direction                                     | string  | horizontal/vertical | horizontal |
| pause-on-hover     | pause autoplay when hover                             | boolean | -                   | true       |

## Carousel Events

| Name   | Description                             | Parameters                                                   |
| ------ | --------------------------------------- | ------------------------------------------------------------ |
| change | triggers when the active slide switches | index of the new active slide, index of the old active slide |

## Carousel Methods

| Method        | Description                  | Parameters                                                                                               |
| ------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------- |
| setActiveItem | manually switch slide        | index of the slide to be switched to, starting from 0; or the `name` of corresponding `el-carousel-item` |
| prev          | switch to the previous slide | —                                                                                                        |
| next          | switch to the next slide     | —                                                                                                        |

## Carousel Slots

| Name | Description               | Subtags       |
| ---- | ------------------------- | ------------- |
| -    | customize default content | Carousel-Item |

## Carousel-Item Attributes

| Name  | Description                                      | Type   | Accepted Values | Default |
| ----- | ------------------------------------------------ | ------ | --------------- | ------- |
| name  | name of the item, can be used in `setActiveItem` | string | —               | —       |
| label | text content for the corresponding indicator     | string | —               | —       |

## Carousel-Item Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |
