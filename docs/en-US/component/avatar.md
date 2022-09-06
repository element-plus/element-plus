---
title: Avatar
lang: en-US
---

# Avatar

Avatars can be used to represent people or objects. It supports images, Icons, or characters.

## Basic Usage

Use `shape` and `size` prop to set avatar's shape and size.

:::demo

avatar/basic

:::

## Types

It supports images, Icons, or characters.

:::demo

avatar/types

:::

## Fallback

fallback when image load error.

:::demo

avatar/fallback

:::

## Fit Container

Set how the image fit its container for an image avatar, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).

:::demo

avatar/fit

:::

## Avatar API

### Avatar Attributes

| Attribute | Description                                               | Type                                                       | Default     | Required |
| --------- | --------------------------------------------------------- | ---------------------------------------------------------- | ----------- | -------- |
| `icon`    | representation type to icon, more info on icon component. | `string \| Component`                                      | —           | No       |
| `size`    | avatar size.                                              | `number \| 'large' \| 'default' \| 'small'`                | `'default'` | No       |
| `shape`   | avatar shape.                                             | `'circle' \| 'square'`                                     | `'circle'`  | No       |
| `src`     | the source of the image for an image avatar.              | `string`                                                   | —           | No       |
| `src-set` | native attribute `srcset` of image avatar.                | `string`                                                   | —           | No       |
| `alt`     | native attribute `alt` of image avatar.                   | `string`                                                   | —           | No       |
| `fit`     | set how the image fit its container for an image avatar.  | `'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down'` | `'cover'`   | No       |

### Avatar Events

| Event Name | Description                    | Type                 |
| ---------- | ------------------------------ | -------------------- |
| `error`    | trigger when image load error. | `(e: Event) => void` |

### Avatar Slots

| Name      | Description               |
| --------- | ------------------------- |
| `default` | customize avatar content. |
