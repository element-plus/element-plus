---
title: Scrollbar
lang: en-US
---

# Scrollbar

Used to replace the browser's native scrollbar.

<style lang="scss">
.example-showcase {
  .el-scrollbar {
    .scrollbar-demo-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      margin: 10px;
      text-align: center;
      border-radius: 4px;
      background: var(--el-color-primary-light-9);
      color: var(--el-color-primary);
    }

    .flex-content {
      display: flex;

      .scrollbar-demo-item {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 50px;
        margin: 10px;
        text-align: center;
        border-radius: 4px;
        background: var(--el-color-danger-lighter);
        color: var(--el-color-danger);
      }
    }
  }
  .el-slider {
    margin-top: 20px;
  }
}
</style>

## Basic usage

:::demo Use `height` property to set the height of the scrollbar, or if not set, it adapts according to the parent container height.

scrollbar/basic-usage

:::

## Horizontal scroll

:::demo When the element width is greater than the scrollbar width, the horizontal scrollbar is displayed.

scrollbar/horizontal-scroll

:::

## Max height

:::demo The scrollbar is displayed only when the element height exceeds the max height.

scrollbar/max-height

:::

## Manual scroll

:::demo Use `setScrollTop` and `setScrollLeft` methods can control scrollbar manually.

scrollbar/manual-scroll

:::

## Scrollbar Attributes

| Attribute  | Description                                                                                                                     | Type            | Accepted Values | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------------- | ------- |
| height     | height of scrollbar                                                                                                             | string / number | —               | —       |
| max-height | max height of scrollbar                                                                                                         | string / number | —               | —       |
| native     | whether to use the native scrollbar style                                                                                       | boolean         | —               | false   |
| wrap-style | style of warp container                                                                                                         | string          | —               | —       |
| wrap-class | class of warp container                                                                                                         | string          | —               | —       |
| view-style | style of view                                                                                                                   | string          | —               | —       |
| view-class | class of view                                                                                                                   | string          | —               | —       |
| noresize   | do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance | boolean         | —               | false   |
| tag        | element tag of the view                                                                                                         | string          | —               | div     |
| always     | always show scrollbar                                                                                                           | boolean         | —               | false   |
| min-size   | minimum size of scrollbar                                                                                                       | number          | —               | 20      |

## Scrollbar Events

| Event Name | Description             | Parameters                                      |
| ---------- | ----------------------- | ----------------------------------------------- |
| scroll     | triggers when scrolling | distance of scrolling { scrollLeft, scrollTop } |

## Scrollbar Methods

| Method        | Description                     | Parameters           |
| ------------- | ------------------------------- | -------------------- |
| setScrollTop  | Set distance to scroll top      | (scrollTop: number)  |
| setScrollLeft | Set distance to scroll left     | (scrollLeft: number) |
| update        | update scrollbar state manually | —                    |

## Scrollbar Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |
