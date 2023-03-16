---
title: Watermark
lang: en-US
---

# Watermark

Watermark an area of the page

## text watermark

:::demo

watermark/textWatermark

:::

## Image watermark

:::demo

watermark/imageWatermark

:::

## Multiline text watermark

:::demo

watermark/multilineWatermark

:::

## Grayscale watermark of picture

:::demo

watermark/grayscaleWatermark

:::

## Watermark API

### Attributes

| Name             | Description                                                                                                                                                              | Type                                                                                   | Default | Required |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ------- | -------- |
| alpha            | Overall transparency of watermark, value range [0-1]                                                                                                                     | ^[number]                                                                              | 1       | No       |
| height           | Watermark height                                                                                                                                                         | ^[number]                                                                              | -       | No       |
| isRepeat         | Whether the watermark is repeated                                                                                                                                        | ^[boolean]                                                                             | true    | No       |
| lineSpace        | Line spacing, only if there are multiple lines (content is configured as an array)                                                                                       | ^[number]                                                                              | 16      | No       |
| offset           | The horizontal and vertical offsets the watermark is drawn on the canvas, normally the watermark is drawn in the middle position, that is, offset = [gapX / 2, gapY / 2] | ^[array]`Array<number>`                                                                | `false` | No       |
| removable        | Watermark cannot be deleted. By default, watermark node anti-deletion is enabled                                                                                         | ^[string]                                                                              | —       | No       |
| rotate           | The watermark rotation Angle, in °                                                                                                                                       | ^[number]                                                                              | -22     | No       |
| watermarkContent | Watermark content that needs to be displayed in multiple lines can be configured as an array.                                                                            | ^[object / array]`WatermarkText, WatermarkImage,Array<WatermarkText , WatermarkImage>` | No      |
| width            | watermark width                                                                                                                                                          | ^[number]                                                                              | —       | No       |
| x                | Horizontal spacing between watermark                                                                                                                                     | ^[number]                                                                              | —       | No       |
| y                | Vertical spacing between watermark                                                                                                                                       | ^[number]                                                                              | —       | No       |
| zIndex           | The watermark element z-index, the default value is written in CSS                                                                                                       | ^[number]                                                                              | 99      | No       |

### Slots

| Name    | Description                                |
| ------- | ------------------------------------------ |
| default | The content node covered by the watermark. |
