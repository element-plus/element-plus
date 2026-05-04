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

## Avatar Group ^(2.13.1)

Displayed as a avatar group.

:::demo Use tag `<el-avatar-group>` to group your avatars.

avatar/group

:::

## Avatar API

### Avatar Attributes

| Name    | Description                                               | Type                                                              | Default |
| ------- | --------------------------------------------------------- | ----------------------------------------------------------------- | ------- |
| icon    | representation type to icon, more info on icon component. | ^[string] / ^[Component]                                          | —       |
| size    | avatar size.                                              | ^[number] / ^[enum]`'large' \| 'default' \| 'small'`              | —       |
| shape   | avatar shape.                                             | ^[enum]`'circle' \| 'square'`                                     | —       |
| src     | the source of the image for an image avatar.              | `string`                                                          | —       |
| src-set | native attribute `srcset` of image avatar.                | `string`                                                          | —       |
| alt     | native attribute `alt` of image avatar.                   | `string`                                                          | —       |
| fit     | set how the image fit its container for an image avatar.  | ^[enum]`'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down'` | cover   |

### Avatar Events

| Name  | Description                    | Type                            |
| ----- | ------------------------------ | ------------------------------- |
| error | trigger when image load error. | ^[Function]`(e: Event) => void` |

### Avatar Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize avatar content. |

## AvatarGroup API ^(2.13.1)

### AvatarGroup Attributes

| Name                     | Description                                                                                                                   | Type                                                                                                                                                                        | Default |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| size                     | control the size of avatars in this avatar-group                                                                              | ^[number] / ^[enum]`'large' \| 'default' \| 'small'`                                                                                                                        | —       |
| shape                    | control the shape of avatars in this avatar-group                                                                             | ^[enum]`'circle' \| 'square'`                                                                                                                                               | —       |
| collapse-avatars         | whether to collapse avatars                                                                                                   | ^[boolean]                                                                                                                                                                  | false   |
| collapse-avatars-tooltip | whether show all collapsed avatars when mouse hover text of the collapse-avatar. To use this, `collapse-avatars` must be true | ^[boolean]                                                                                                                                                                  | false   |
| max-collapse-avatars     | the max avatars number to be shown. To use this, `collapse-avatars` must be true                                              | ^[number]                                                                                                                                                                   | 1       |
| effect                   | tooltip theme, built-in theme: `dark` / `light`                                                                               | ^[enum]`'dark' \| 'light'` / ^[string]                                                                                                                                      | light   |
| placement                | placement of tooltip                                                                                                          | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | top     |
| popper-class             | custom class name for tooltip                                                                                                 | ^[string]                                                                                                                                                                   | ''      |
| popper-style             | custom style for tooltip                                                                                                      | ^[string] / ^[object]                                                                                                                                                       | —       |
| collapse-class           | custom class name for the collapse-avatar                                                                                     | ^[string]                                                                                                                                                                   | ''      |
| collapse-style           | custom style for the collapse-avatar                                                                                          | ^[string] / ^[object]                                                                                                                                                       | —       |
