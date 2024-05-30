---
title: Image
lang: en-US
---

# Image

Besides the native features of img, support lazy load, custom placeholder and load failure, etc.

## Basic Usage

:::demo Indicate how the image should be resized to fit its container by `fit`, same as native [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).

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

:::tip

Native `loading` has been supported since ^(2.2.3), you can use `loading = "lazy"` to replace `lazy = true`.

If the current browser supports native lazy loading, the native lazy loading will be used first, otherwise will be implemented through scroll.

:::

:::demo Use lazy load by `lazy = true`. Image will load until scroll into view when set. You can indicate scroll container that adds scroll listener to by `scroll-container`. If undefined, will be the nearest parent container whose overflow property is auto or scroll.

image/lazy-load

:::

## Image Preview

:::demo allow big image preview by setting `previewSrcList` prop. You can initialize the position of the first picture previewed by `initial-index`. The default initial position is 0.

image/image-preview

:::

## Image API

### Image Attributes

| Name                  | Description                                                                                                                                       | Type                                                                    | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------- |
| src                   | image source, same as native.                                                                                                                     | ^[string]                                                               | ''      |
| fit                   | indicate how the image should be resized to fit its container, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit). | ^[enum]`'' \| 'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down'` | ''      |
| hide-on-click-modal   | when enabling preview, use this flag to control whether clicking on backdrop can exit preview mode.                                               | ^[boolean]                                                              | false   |
| loading ^(2.2.3)      | Indicates how the browser should load the image, same as [native](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading).    | ^[enum]`'eager' \| 'lazy'`                                              | —       |
| lazy                  | whether to use lazy load.                                                                                                                         | ^[boolean]                                                              | false   |
| scroll-container      | the container to add scroll listener when using lazy load. By default, the container to add scroll listener when using lazy load.                 | ^[string] / ^[object]`HTMLElement`                                      | —       |
| alt                   | native attribute `alt`.                                                                                                                           | ^[string]                                                               | —       |
| referrerpolicy        | native attribute [referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy).                              | ^[string]                                                               | —       |
| crossorigin           | native attribute [crossorigin](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin).                                         | ^[enum]`'' \| 'anonymous' \| 'use-credentials'`                         | —       |
| preview-src-list      | allow big image preview.                                                                                                                          | ^[object]`string[]`                                                     | []      |
| z-index               | set image preview z-index.                                                                                                                        | ^[number]                                                               | —       |
| initial-index         | initial preview image index, less than the length of `url-list`.                                                                                  | ^[number]                                                               | 0       |
| close-on-press-escape | whether the image-viewer can be closed by pressing ESC.                                                                                           | ^[boolean]                                                              | true    |
| preview-teleported    | whether to append image-viewer to body. A nested parent element attribute transform should have this attribute set to `true`.                     | ^[boolean]                                                              | false   |
| infinite              | whether the viewer preview is infinite.                                                                                                           | ^[boolean]                                                              | true    |
| zoom-rate             | the zoom rate of the image viewer zoom event.                                                                                                     | ^[number]                                                               | 1.2     |
| min-scale ^(2.4.0)    | the min scale of the image viewer zoom event.                                                                                                     | ^[number]                                                               | 0.2     |
| max-scale ^(2.4.0)    | the max scale of the image viewer zoom event.                                                                                                     | ^[number]                                                               | 7       |

### Image Events

| Name   | Description                                                                                       | Type                                 |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------------------------ |
| load   | same as native load.                                                                              | ^[Function]`(e: Event) => void`      |
| error  | same as native error.                                                                             | ^[Function]`(e: Error) => void`      |
| switch | trigger when switching images.                                                                    | ^[Function]`(index: number) => void` |
| close  | trigger when clicking on close button or when `hide-on-click-modal` enabled clicking on backdrop. | ^[Function]`() => void`              |
| show   | trigger when the viewer displays                                                                  | ^[Function]`() => void`              |

### Image Slots

| Name        | Description                                              |
| ----------- | -------------------------------------------------------- |
| placeholder | custom placeholder content when image hasn't loaded yet. |
| error       | custom image load failed content.                        |
| viewer      | custom content when image preview.                       |

## Image Viewer API

### Image Viewer Attributes

| Name                  | Description                                                                                                                   | Type                  | Default |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------- |
| url-list              | preview link list.                                                                                                            | ^[object]`string[]`   | []      |
| z-index               | preview backdrop z-index.                                                                                                     | ^[number] / ^[string] | —       |
| initial-index         | the initial preview image index, less than or equal to the length of `url-list`.                                              | ^[number]             | 0       |
| infinite              | whether preview is infinite.                                                                                                  | ^[boolean]            | true    |
| hide-on-click-modal   | whether user can emit close event when clicking backdrop.                                                                     | ^[boolean]            | false   |
| teleported            | whether to append image itself to body. A nested parent element attribute transform should have this attribute set to `true`. | ^[boolean]            | false   |
| zoom-rate ^(2.2.27)   | the zoom rate of the image viewer zoom event.                                                                                 | ^[number]             | 1.2     |
| min-scale ^(2.4.0)    | the min scale of the image viewer zoom event.                                                                                 | ^[number]             | 0.2     |
| max-scale ^(2.4.0)    | the max scale of the image viewer zoom event.                                                                                 | ^[number]             | 7       |
| close-on-press-escape | whether the image-viewer can be closed by pressing ESC.                                                                       | ^[boolean]            | true    |

### Image Viewer Events

| Name             | Description                                                                                       | Type                                 |
| ---------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------ |
| close            | trigger when clicking on close button or when `hide-on-click-modal` enabled clicking on backdrop. | ^[Function]`() => void`              |
| switch           | trigger when switching images.                                                                    | ^[Function]`(index: number) => void` |
| rotate ^(2.3.13) | trigger when rotating images.                                                                     | ^[Function]`(deg: number) => void`   |

### Image Viewer Exposes

| Name          | Description           | Type                                 |
| ------------- | --------------------- | ------------------------------------ |
| setActiveItem | manually switch image | ^[Function]`(index: number) => void` |
