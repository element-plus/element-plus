---
title: Avatar
lang: en-US
---

# Avatar

Avatars can be used to represent people or objects. It supports images, Icons, or characters.

## Basic

use `shape` and `size` prop to set avatar's shape and size

:::demo

avatar/basic

:::

## Types

It supports images, Icons, or characters

:::demo

avatar/types

:::

## Fallback when image load error

fallback when image load error

:::demo

avatar/fallback

:::

## How the image fit its container

Set how the image fit its container for an image avatar, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).

:::demo

avatar/fit

:::

## Attributes

| Attribute | Description                                                                                                            | Type               | Accepted Values                            | Default |
| --------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------ | ------- |
| icon      | set representation type to Icon, more info on Icon Component                                                           | string / Component |                                            |         |
| size      | set avatar size                                                                                                        | number / string    | number / large / medium / small            | large   |
| shape     | set avatar shape                                                                                                       | string             | circle / square                            | circle  |
| src       | the address of the image for an image avatar                                                                           | string             |                                            |         |
| srcSet    | A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use | string             |                                            |         |
| alt       | This attribute defines an alternative text description of the image                                                    | string             |                                            |         |
| fit       | set how the image fit its container for an image avatar                                                                | string             | fill / contain / cover / none / scale-down | cover   |

## Events

| Event Name | Description                                                                    | Parameters |
| ---------- | ------------------------------------------------------------------------------ | ---------- |
| error      | handler when img load error, return false to prevent default fallback behavior | (e: Event) |

## Slots

| Name    | Description              |
| ------- | ------------------------ |
| default | customize avatar content |

<style lang="scss">
.example-showcase {
  .demo-basic {
    text-align: center;

    .demo-basic--circle,
    .demo-basic--square {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .block {
        flex: 1;
      }

      .block:not(:last-child) {
        border-right: 1px solid var(--el-border-color-base);
      }
    }

    .el-col:not(:last-child) {
      border-right: 1px solid var(--el-border-color-base);
    }
  }

  .sub-title {
    margin-bottom: 10px;
    font-size: 14px;
    color: var(--el-text-color-secondary);
  }



  .demo-type {
    display: flex;

    > div {
      flex: 1;
      text-align: center;
    }

    > div:not(:last-child) {
      border-right: 1px solid var(--el-border-color-base);
    }
  }

  .demo-fit {
    display: flex;
    text-align: center;
    justify-content: space-between;

    .block {
      flex: 1;
      display: flex;
      flex-direction: column;
      flex-grow: 0;
    }

    .title {
      margin-bottom: 10px;
      font-size: 14px;
      color: var(--el-text-color-secondary);
    }
  }
}
</style>
