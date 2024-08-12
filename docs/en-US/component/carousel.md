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

## Motion blur ^(2.6.0)

Add motion blur to infuse dynamism and smoothness into the carousel.

:::demo Enabling motion blur enhances the dynamism and smoothness of the carousel. By default, the `motion-blur` parameter is set to `false`, activating this feature and providing a visually engaging experience.

carousel/motion-blur

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

## Auto height

When the `height` of `carousel` is set to `auto`, the `carousel` height will be automatically set according to the height of the `carousel item`

:::demo

carousel/auto-height

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

## Carousel API

### Carousel Attributes

| Name                 | Description                                           | Type                                    | Default    |
| -------------------- | ----------------------------------------------------- | --------------------------------------- | ---------- |
| height               | height of the carousel                                | ^[string]                               | ''         |
| initial-index        | index of the initially active slide (starting from 0) | ^[number]                               | 0          |
| trigger              | how indicators are triggered                          | ^[enum]`'hover' \| 'click'`             | hover      |
| autoplay             | whether automatically loop the slides                 | ^[boolean]                              | true       |
| interval             | interval of the auto loop, in milliseconds            | ^[number]                               | 3000       |
| indicator-position   | position of the indicators                            | ^[enum]`'' \| 'none' \| 'outside'`      | ''         |
| arrow                | when arrows are shown                                 | ^[enum]`'always' \| 'hover' \| 'never'` | hover      |
| type                 | type of the Carousel                                  | ^[enum]`'' \| 'card'`                   | ''         |
| cardScale ^(2.7.8)   | when type is card, scaled size of secondary cards     | ^[number]                               | 0.83       |
| loop                 | display the items in loop                             | ^[boolean]                              | true       |
| direction            | display direction                                     | ^[enum]`'horizontal' \| 'vertical'`     | horizontal |
| pause-on-hover       | pause autoplay when hover                             | ^[boolean]                              | true       |
| motion-blur ^(2.6.0) | infuse dynamism and smoothness into the carousel      | ^[boolean]                              | false      |

### Carousel Events

| Name   | Description                                                                                                                                              | Type                                                    |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| change | triggers when the active slide switches, it has two parameters, the one is the index of the new active slide, and other is index of the old active slide | ^[Function]`(current: number, prev: number) => boolean` |

### Carousel Slots

| Name    | Description               | Subtags       |
| ------- | ------------------------- | ------------- |
| default | customize default content | Carousel-Item |

### Carousel Exposes

| Method               | Description                                                                                                                     | Type                                           |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| activeIndex ^(2.7.8) | active slide index                                                                                                              | ^[number]                                      |
| setActiveItem        | manually switch slide, index of the slide to be switched to, starting from 0; or the `name` of corresponding `el-carousel-item` | ^[Function]`(index: string \| number) => void` |
| prev                 | switch to the previous slide                                                                                                    | ^[Function]`() => void`                        |
| next                 | switch to the next slide                                                                                                        | ^[Function]`() => void`                        |

## Carousel-Item API

### Carousel-Item Attributes

| Name  | Description                                      | Type                  | Default |
| ----- | ------------------------------------------------ | --------------------- | ------- |
| name  | name of the item, can be used in `setActiveItem` | ^[string]             | ''      |
| label | text content for the corresponding indicator     | ^[string] / ^[number] | ''      |

### Carousel-Item Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
