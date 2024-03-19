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
Now the colors are automatically calculate, but you also can set these variables.

### Default variables

| Variable                | Color(auto) |
| ----------------------- | ----------- |
| --el-empty-fill-color-0 | #f7f3f9     |
| --el-empty-fill-color-1 | #f6f5f9     |
| --el-empty-fill-color-2 | #f6f6f9     |
| --el-empty-fill-color-3 | #f6f7f9     |
| --el-empty-fill-color-4 | #f1f2f5     |
| --el-empty-fill-color-5 | #eceef1     |
| --el-empty-fill-color-6 | #e7e9ec     |
| --el-empty-fill-color-7 | #e2e5e9     |
| --el-empty-fill-color-8 | #dde1e5     |
| --el-empty-fill-color-9 | #d7dce2     |

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
