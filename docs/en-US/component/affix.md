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

## Affix API

### Affix Attributes

| Name       | Description                      | Type                | Default | Required |
| ---------- | -------------------------------- | ------------------- | ------- | -------- |
| `offset`   | offset distance.                 | `number`            | `0`     | No       |
| `position` | position of affix.               | `'top' \| 'bottom'` | `'top'` | No       |
| `target`   | target container. (CSS selector) | `string`            | —       | No       |
| `z-index`  | `z-index` of affix               | `number`            | `100`   | No       |

### Affix Events

| Name     | Description                        | Type                                                     |
| -------- | ---------------------------------- | -------------------------------------------------------- |
| `change` | triggers when fixed state changed. | `(fixed: boolean) => void`                               |
| `scroll` | triggers when scrolling.           | `(value: { scrollTop: number, fixed: boolean }) => void` |

### Affix Exposes

| Method   | Description                 | Type         |
| -------- | --------------------------- | ------------ |
| `update` | update affix state manually | `() => void` |

### Affix Slots

| Name      | Description                |
| --------- | -------------------------- |
| `default` | customize default content. |
