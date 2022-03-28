---
title: Backtop
lang: en-US
---

# Backtop

A button to back to top.

## Basic Usage

Scroll down to see the bottom-right button.

:::demo

backtop/basic

:::

## Customizations

Display area is 40px \* 40px.

:::demo

backtop/custom

:::

## Backtop API

### Backtop Attributes

| Name                | Description                                                          | Type     | Default |
| ------------------- | -------------------------------------------------------------------- | -------- | ------- |
| `target`            | the target to trigger scroll.                                        | `string` | —       |
| `visibility-height` | the button will not show until the scroll height reaches this value. | `number` | `200`   |
| `right`             | right distance.                                                      | `number` | `40`    |
| `bottom`            | bottom distance.                                                     | `number` | `40`    |

## Backtop Events

| Name    | Description          | Parameters                  |
| ------- | -------------------- | --------------------------- |
| `click` | triggers when click. | `(evt: MouseEvent) => void` |

## Backtop Slots

| Name      | Description                |
| --------- | -------------------------- |
| `default` | customize default content. |
