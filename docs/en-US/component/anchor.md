---
title: Anchor
lang: en-US
---

# Anchor

Anchor is used to jump to the specified location on the page.

## Basic Usage

:::demo

anchor/basic

:::

## Ellipsis Title

:::demo

anchor/ellipsis

:::

## Offset Top

:::demo when there is a fixed element on the top of the page, `offset-top` can be used to fix offsets.

anchor/offset-top

:::

## Anchor API

### Anchor Attributes

| Name          | Description                      | Type                | Default    | Required |
| ------------- | -------------------------------- | ------------------- | ---------- | -------- |
| `container`   | Scroll container. (CSS selector) | `string`            | -          | No       |
| `offset-top`  | Anchor scroll offset top.        | `number`            | `0`        | No       |
| `offset-left` | Anchor scroll offset left.       | `number`            | `0`        | No       |
| `boundary`    | Anchor area boundary.            | `number`            | `5`        | No       |
| `behavior`    | Scroll behavior.                 | `'auto' \| 'smooth` | `'smooth'` | No       |
| `hash`        | Whether to change location hash. | `boolean`           | `false`    | No       |

### Anchor Events

| Name     | Description                    | Type                                      |
| -------- | ------------------------------ | ----------------------------------------- |
| `select` | triggers when link be clicked. | `(link: string, evt: MouseEvent) => void` |
| `change` | triggers when link changed.    | `(link: string) => void`                  |
