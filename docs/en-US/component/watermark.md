---
title: Watermark
lang: en-US
---

# Watermark

Add specific text or patterns to the page.

## Basic usage

The most basic usage

:::demo

watermark/basic

:::

## Multi-line watermark

Use "content" to set an array of strings to specify multi-line text watermark content.

:::demo

watermark/multi-line

:::

## Image watermark

Specify the image address via 'image'. To ensure that the image is high definition and not stretched, set the width and height, and upload at least twice the width and height of the logo image address.

:::demo

watermark/image

:::

## Custom configuration

Preview the watermark effect by configuring custom parameters.

:::demo

watermark/custom

:::

## API

### Attributes

| Name    | Description                                                                                     | Type                          | Default                    |
| ------- | ----------------------------------------------------------------------------------------------- | ----------------------------- | -------------------------- |
| width   | The width of the watermark, the default value of `content` is its own width                     | ^[number]                     | 120                        |
| height  | The height of the watermark, the default value of `content` is its own height                   | ^[number]                     | 64                         |
| rotate  | When the watermark is drawn, the rotation Angle, unit `°`                                       | ^[number]                     | -22                        |
| zIndex  | The z-index of the appended watermark element                                                   | ^[number]                     | 9                          |
| image   | Image source, it is recommended to export 2x or 3x image, high priority                         | ^[string]                     | —                          |
| content | Watermark text content                                                                          | ^[string]/^[object]`string[]` | —                          |
| font    | Text style                                                                                      | [Font](#font)                 | [Font](#font)              |
| gap     | The spacing between watermarks                                                                  | ^[object]`[number, number]`   | \[100, 100\]               |
| offset  | The offset of the watermark from the upper left corner of the container. The default is `gap/2` | ^[object]`[number, number]`   | \[gap\[0\]/2, gap\[1\]/2\] |

### Font

| Name         | Description   | Type                                                                                 | Default         |
| ------------ | ------------- | ------------------------------------------------------------------------------------ | --------------- |
| color        | font color    | ^[string]                                                                            | rgba(0,0,0,.15) |
| fontSize     | font size     | ^[number]                                                                            | 16              |
| fontWeight   | font weight   | ^[enum]`'normal' \| 'light' \| 'weight' \| number`                                   | normal          |
| fontFamily   | font family   | ^[string]                                                                            | sans-serif      |
| fontStyle    | font style    | ^[enum]`'none' \| 'normal' \| 'italic' \| 'oblique'`                                 | normal          |
| textAlign    | text align    | ^[enum]`'left' \| 'right' \| 'center' \| 'start' \| 'end' `                          | center          |
| textBaseline | text baseline | ^[enum]`'top' \| 'hanging' \| 'middle' \| 'alphabetic' \| 'ideographic' \| 'bottom'` | hanging         |

### Slots

| Name    | Description                    |
| ------- | ------------------------------ |
| default | container for adding watermark |
