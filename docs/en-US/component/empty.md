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

## Custom styles

Now you can set custom style for empty component.
Use `css/scss` language to change the global or local color. We set some global color variables: `--el-empty-fill-color-0`, `--el-empty-fill-color-1`, `--el-empty-fill-color-2`, ......, `--el-empty-fill-color-9`. You can use like: `:root { --el-empty-fill-color-0: red; --el-empty-fill-color-1: blue; }`.
But usually, if you want to change style, you need to change all color, because these colors are a combination.

### Default Variables

| Variable                | Color                 |
| ----------------------- | --------------------- |
| --el-empty-fill-color-0 | var(--el-color-white) |
| --el-empty-fill-color-1 | #fcfcfd               |
| --el-empty-fill-color-2 | #f8f9fb               |
| --el-empty-fill-color-3 | #f7f8fc               |
| --el-empty-fill-color-4 | #eeeff3               |
| --el-empty-fill-color-5 | #edeef2               |
| --el-empty-fill-color-6 | #e9ebef               |
| --el-empty-fill-color-7 | #e5e7e9               |
| --el-empty-fill-color-8 | #e0e3e9               |
| --el-empty-fill-color-9 | #d5d7de               |

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
