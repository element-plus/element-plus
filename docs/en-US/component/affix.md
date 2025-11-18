---
title: Affix
lang: en-US
---

# Affix

Fix the element to a specific visible area.

## Basic Usage

Affix is fixed at the top of the page by default.

:::demo You can set `offset` attribute to change the offset top，the default value is 0.

affix/basic

:::

## Target Container

You can set `target` attribute to keep the affix in the container at all times. It will be hidden if out of range.

:::demo Please notice that the container avoid having scrollbar.

affix/target

:::

## Fixed Position

The affix component provides two fixed positions: `top` and `bottom`.

:::demo You can set `position` attribute to change the fixed position, the default value is `top`.

affix/fixed

:::

## API

### Attributes

| Name     | Description                     | Type                       | Default |
| -------- | ------------------------------- | -------------------------- | ------- |
| offset   | offset distance                 | ^[number]                  | 0       |
| position | position of affix               | ^[enum]`'top' \| 'bottom'` | top     |
| target   | target container (CSS selector) | ^[string]                  | —       |
| z-index  | `z-index` of affix              | ^[number]                  | 100     |

### Events

| Name   | Description                       | Type                                                                |
| ------ | --------------------------------- | ------------------------------------------------------------------- |
| change | triggers when fixed state changed | ^[Function]`(fixed: boolean) => void`                               |
| scroll | triggers when scrolling           | ^[Function]`(value: { scrollTop: number, fixed: boolean }) => void` |

### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

### Exposes

| Name       | Description                 | Type                    |
| ---------- | --------------------------- | ----------------------- |
| update     | update affix state manually | ^[Function]`() => void` |
| updateRoot | update rootRect info        | ^[Function]`() => void` |
