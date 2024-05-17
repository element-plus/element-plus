---
title: Ellipsis
lang: en-US
---

# Ellipsis

This can be used when there is a piece of text that is too long to fit.

## Basic usage

:::demo

ellipsis/basic-usage

:::

## API

### Attributes

| Name        | Description                 | Type      | Default |
| ----------- | --------------------------- | --------- | ------- |
| image       | image URL of empty          | ^[string] | ''      |
| image-size  | image size (width) of empty | ^[number] | —       |
| description | description of empty        | ^[string] | ''      |

### Slots

| Name        | Description               |
| ----------- | ------------------------- |
| default     | content as bottom content |
| image       | content as image          |
| description | content as description    |
