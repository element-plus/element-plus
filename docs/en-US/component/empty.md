---
title: Empty
lang: en-US
---

# Empty

Placeholder hints for empty states.

## Basic usage

:::demo

empty/basic-usage

:::

## Custom image

Use `image` prop to set image URL.

:::demo

empty/custom-image

:::

## Image size

Use `image-size` prop to control image size.

:::demo

empty/image-size

:::

## Bottom content

Use the default slot to insert content at the bottom.

:::demo

empty/bottom-content

:::

## Empty Attributes

| Attribute   | Description        | Type   | Acceptable Value | Default |
| ----------- | ------------------ | ------ | ---------------- | ------- |
| image       | image URL          | string | —                | —       |
| image-size  | image size (width) | number | —                | —       |
| description | description        | string | —                | —       |

## Empty Slots

| Name        | Description           |
| ----------- | --------------------- |
| default     | Custom bottom content |
| image       | Custom image          |
| description | Custom description    |
