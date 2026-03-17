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

## API

### Attributes

| Name              | Description                                                         | Type      | Default |
| ----------------- | ------------------------------------------------------------------- | --------- | ------- |
| target            | The target to trigger scroll                                        | ^[string] | —       |
| visibility-height | The button will not show until the scroll height reaches this value | ^[number] | 200     |
| right             | Right distance                                                      | ^[number] | 40      |
| bottom            | Bottom distance                                                     | ^[number] | 40      |

### Events

| Name  | Description         | Parameters                             |
| ----- | ------------------- | -------------------------------------- |
| click | Triggers when click | ^[Function]`(evt: MouseEvent) => void` |

### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | Customize default content |
