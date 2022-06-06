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

Native `loading` has been supported since <VersionTag version="2.2.3" />, you can use `loading = "lazy"` to replace `lazy = true`.

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

| Attribute                                | Description                                                                                                                                       | Type                                                        | Default                                                                 |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------- |
| `src`                                    | image source, same as native.                                                                                                                     | `string`                                                    | —                                                                       |
| `fit`                                    | indicate how the image should be resized to fit its container, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit). | `'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale'-down'` | —                                                                       |
| `hide-on-click-modal`                    | when enabling preview, use this flag to control whether clicking on backdrop can exit preview mode.                                               | `boolean`                                                   | `false`                                                                 |
| `loading` <VersionTag version="2.2.3" /> | Indicates how the browser should load the image, same as [native](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading)     | `'eager' \| 'lazy'`                                         | —                                                                       |
| `lazy`                                   | whether to use lazy load.                                                                                                                         | `boolean`                                                   | `false`                                                                 |
| `scroll-container`                       | the container to add scroll listener when using lazy load.                                                                                        | `string \| HTMLElement`                                     | the nearest parent container whose overflow property is auto or scroll. |
| `alt`                                    | native attribute `alt`.                                                                                                                           | `string`                                                    | —                                                                       |
| `referrer-policy`                        | native attribute `referrerPolicy`.                                                                                                                | `string`                                                    | —                                                                       |
| `preview-src-list`                       | allow big image preview.                                                                                                                          | `string[]`                                                  | —                                                                       |
| `z-index`                                | set image preview z-index.                                                                                                                        | `number`                                                    | —                                                                       |
| `initial-index`                          | initial preview image index, less than the length of `url-list`.                                                                                  | `number`                                                    | `0`                                                                     |
| `close-on-press-escape`                  | whether the image-viewer can be closed by pressing ESC                                                                                            | `boolean`                                                   | `true`                                                                  |
| `preview-teleported`                     | whether to append image-viewer to body. A nested parent element attribute transform should have this attribute set to `true`.                     | `boolean`                                                   | `false`                                                                 |

### Image Events

| Name     | Description                                                                                       | Type                      |
| -------- | ------------------------------------------------------------------------------------------------- | ------------------------- |
| `load`   | same as native load.                                                                              | `(e: Event) => void`      |
| `error`  | same as native error.                                                                             | `(e: Error) => void`      |
| `switch` | trigger when switching images.                                                                    | `(index: number) => void` |
| `close`  | trigger when clicking on close button or when `hide-on-click-modal` enabled clicking on backdrop. | `() => void`              |

### Image Slots

| Name          | Description                                              |
| ------------- | -------------------------------------------------------- |
| `placeholder` | custom placeholder content when image hasn't loaded yet. |
| `error`       | custom image load failed content.                        |
| `viewer`      | description of the image.                                |

## Image Viewer API

### Image Viewer Attributes

| Name                  | Description                                                                                                                   | Type               | Default |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------- |
| `url-list`            | preview link list.                                                                                                            | `string[]`         | `[]`    |
| `z-index`             | preview backdrop z-index.                                                                                                     | `number \| string` | —       |
| `initial-index`       | the initial preview image index, less than or equal to the length of `url-list`.                                              | `number`           | `0`     |
| `infinite`            | whether preview is infinite.                                                                                                  | `boolean`          | `true`  |
| `hide-on-click-modal` | whether user can emit close event when clicking backdrop.                                                                     | `boolean`          | `false` |
| `teleported`          | whether to append image itself to body. A nested parent element attribute transform should have this attribute set to `true`. | `boolean`          | `false` |

### Image Viewer Events

| Event name | Description                                                                                       | Type                      |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------- |
| `close`    | trigger when clicking on close button or when `hide-on-click-modal` enabled clicking on backdrop. | `() => void`              |
| `switch`   | trigger when switching images.                                                                    | `(index: number) => void` |
