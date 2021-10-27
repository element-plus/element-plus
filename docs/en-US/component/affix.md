---
title: Affix
lang: en-US
---

# Affix

Fix the element to a specific visible area.

## Basic usage

Affix is fixed at the top of the page by default.

:::demo You can set `offset` attribute to change the offset top，the default value is 0。

affix/basic

:::

## Target container

You can set `target` attribute to keep the affix in the container at all times. It will be hidden if out of range.

:::demo Please notice that the container avoid having scrollbar.

affix/target

:::

## Fixed position

The affix component provides two fixed positions: `top` and `bottom`.

:::demo You can set `position` attribute to change the fixed position, the default value is `top`.

affix/fixed

:::

## Attributes

| Attribute | Description                     | Type   | Accepted Values | Default |
| --------- | ------------------------------- | ------ | --------------- | ------- |
| offset    | offset distance                 | number | —               | 0       |
| position  | position of affix               | string | top / bottom    | top     |
| target    | target container (CSS selector) | string | —               | —       |
| z-index   | z-index of affix                | number | —               | 100     |

## Events

| Event Name | Description                       | Parameters                 |
| ---------- | --------------------------------- | -------------------------- |
| change     | triggers when fixed state changed | (value: boolean)           |
| scroll     | triggers when scrolling           | scroll top and fixed state |

## Methods

| Method | Description                 | Parameters |
| ------ | --------------------------- | ---------- |
| update | update affix state manually | —          |

## Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |

<style lang="scss">
.example-showcase {
  .affix-container {
    text-align: center;
    height: 400px;
    border-radius: 4px;
    background: var(--el-color-primary-light-9);
  }
}
</style>
