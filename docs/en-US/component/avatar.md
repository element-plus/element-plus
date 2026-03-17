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

| Name    | Description                                              | Type                                                              | Default |
| ------- | -------------------------------------------------------- | ----------------------------------------------------------------- | ------- |
| icon    | Representation type to icon, more info on icon component | ^[string] / ^[Component]                                          | —       |
| size    | Avatar size                                              | ^[number] / ^[enum]`'large' \| 'default' \| 'small'`              | —       |
| shape   | Avatar shape                                             | ^[enum]`'circle' \| 'square'`                                     | —       |
| src     | The source of the image for an image avatar              | `string`                                                          | —       |
| src-set | Native attribute `srcset` of image avatar                | `string`                                                          | —       |
| alt     | Native attribute `alt` of image avatar                   | `string`                                                          | —       |
| fit     | Set how the image fit its container for an image avatar  | ^[enum]`'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down'` | cover   |

### Avatar Events

| Name  | Description                   | Type                            |
| ----- | ----------------------------- | ------------------------------- |
| error | Trigger when image load error | ^[Function]`(e: Event) => void` |

### Avatar Slots

| Name    | Description              |
| ------- | ------------------------ |
| default | Customize avatar content |

## AvatarGroup API ^(2.13.1)

### AvatarGroup Attributes

| Name                     | Description                                                                                                                | Type                                                                                                                                                                        | Default |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| size                     | Control the size of avatars in this avatar-group                                                                           | ^[number] / ^[enum]`'large' \| 'default' \| 'small'`                                                                                                                        | —       |
| shape                    | Control the shape of avatars in this avatar-group                                                                          | ^[enum]`'circle' \| 'square'`                                                                                                                                               | —       |
| collapse-avatars         | Whether to collapse avatars                                                                                                | ^[boolean]                                                                                                                                                                  | false   |
| collapse-avatars-tooltip | Whether to show all collapsed avatars when hovering over the collapse-avatar. To use this, `collapse-avatars` must be true | ^[boolean]                                                                                                                                                                  | false   |
| max-collapse-avatars     | The maximum number of avatars to be shown. To use this, `collapse-avatars` must be true                                    | ^[number]                                                                                                                                                                   | 1       |
| effect                   | Tooltip theme, built-in theme: `dark` / `light`                                                                            | ^[enum]`'dark' \| 'light'` / ^[string]                                                                                                                                      | light   |
| placement                | Placement of tooltip                                                                                                       | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | top     |
| popper-class             | Custom class name for tooltip                                                                                              | ^[string]                                                                                                                                                                   | ''      |
| popper-style             | Custom style for tooltip                                                                                                   | ^[string] / ^[object]                                                                                                                                                       | —       |
| collapse-class           | Custom class name for the collapse-avatar                                                                                  | ^[string]                                                                                                                                                                   | ''      |
| collapse-style           | Custom style for the collapse-avatar                                                                                       | ^[string] / ^[object]                                                                                                                                                       | —       |
