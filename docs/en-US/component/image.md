---
title: Image
lang: en-US
---

# Image

Besides the native features of img, support lazy load, custom placeholder and load failure, etc.

## Basic Usage

:::demo Indicate how the image should be resized to fit its container by `fit`, same as native [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)。

image/basic-usage

:::

## Placeholder

:::demo Custom placeholder content when image hasn't loaded yet by `slot = placeholder`

image/placeholder

:::

## Load Failed

:::demo Custom failed content when error occurs to image load by `slot = error`

image/load-failed

:::

## Lazy Load

:::demo Use lazy load by `lazy = true`. Image will load until scroll into view when set. You can indicate scroll container that adds scroll listener to by `scroll-container`. If undefined, will be the nearest parent container whose overflow property is auto or scroll.

image/lazy-load

:::

## Image Preview

:::demo allow big image preview by setting `previewSrcList` prop. You can initialize the position of the first picture previewed by `initial-index`. The default initial position is 0.

image/image-preview

:::

## Image Attributes

| Attribute           | Description                                                                                                                                      | Type                 | Accepted values                            | Default                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- | ------------------------------------------ | ---------------------------------------------------------------------- |
| alt                 | Native alt                                                                                                                                       | string               | -                                          | -                                                                      |
| fit                 | Indicate how the image should be resized to fit its container, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) | string               | fill / contain / cover / none / scale-down | -                                                                      |
| hide-on-click-modal | When enabling preview, use this flag to control whether clicking on backdrop can exit preview mode                                               | boolean              | true / false                               | false                                                                  |
| initial-index       | The initial preview image index, less than the length of `url-list`                                                                              | number               | int                                        | 0                                                                      |
| lazy                | Whether to use lazy load                                                                                                                         | boolean              | —                                          | false                                                                  |
| preview-src-list    | allow big image preview                                                                                                                          | Array                | —                                          | -                                                                      |
| referrer-policy     | Native referrerPolicy                                                                                                                            | string               | -                                          | -                                                                      |
| src                 | Image source, same as native                                                                                                                     | string               | —                                          | -                                                                      |
| scroll-container    | The container to add scroll listener when using lazy load                                                                                        | string / HTMLElement | —                                          | The nearest parent container whose overflow property is auto or scroll |
| z-index             | set image preview z-index                                                                                                                        | Number               | —                                          | 2000                                                                   |
| preview-teleported  | whether to append image-viewer to body. A nested parent element attribute transform should have this attribute set to `true`                     | boolean              | —                                          | false                                                                  |

## Image Events

| Event Name | Description          | Parameters |
| ---------- | -------------------- | ---------- |
| load       | Same as native load  | (e: Event) |
| error      | Same as native error | (e: Error) |

## Image Slots

| Name        | Description                     |
| ----------- | ------------------------------- |
| placeholder | Triggers when image load        |
| error       | Triggers when image load failed |

## ImageViewer Attributes

| Attribute           | Description                                                                                                                  | Type            | Acceptable Value    | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------- | ------- |
| url-list            | Preview link list                                                                                                            | Array\<string\> | -                   | []      |
| z-index             | Preview backdrop z-index                                                                                                     | number / string | int / string\<int\> | 2000    |
| initial-index       | The initial preview image index, less than or equal to the length of `url-list`                                              | number          | int                 | 0       |
| infinite            | Whether preview is infinite                                                                                                  | boolean         | true / false        | true    |
| hide-on-click-modal | Whether user can emit close event when clicking backdrop                                                                     | boolean         | true / false        | false   |
| teleported          | whether to append image itself to body. A nested parent element attribute transform should have this attribute set to `true` | boolean         | —                   | false   |

## ImageViewer Events

| Event name | Description                                                                                    | Callback parameter                     |
| ---------- | ---------------------------------------------------------------------------------------------- | -------------------------------------- |
| close      | Emitted when clicking on `X` button or when `hide-on-click-modal` enabled clicking on backdrop | None                                   |
| switch     | When switching images                                                                          | `(val: number)` switching target index |
