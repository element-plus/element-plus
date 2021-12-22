---
title: Backtop
lang: en-US
---

# Backtop

A button to back to top

## Basic usage

Scroll down to see the bottom-right button.

:::demo

backtop/basic

:::

## Customizations

Display area is 40px \* 40px.

:::demo

backtop/custom

:::

## Attributes

| Attribute         | Description                                                         | Type   | Accepted Values | Default |
| ----------------- | ------------------------------------------------------------------- | ------ | --------------- | ------- |
| target            | the target to trigger scroll                                        | string |                 |         |
| visibility-height | the button will not show until the scroll height reaches this value | number |                 | 200     |
| right             | right distance                                                      | number |                 | 40      |
| bottom            | bottom distance                                                     | number |                 | 40      |

## Events

| Event Name | Description         | Parameters  |
| ---------- | ------------------- | ----------- |
| click      | triggers when click | click event |

## Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |
