---
title: Timeline
lang: en-US
---

# Timeline

Visually display timeline.

## Basic usage

Timeline can be split into multiple activities. Timestamps are important features that distinguish them from other components. Note the difference with Steps.

:::demo

timeline/basic

:::

## Custom node

Size, color, and icons can be customized in node.

:::demo

timeline/custom-node

:::

## Custom timestamp

Timestamp can be placed on top of content when content is too high.

:::demo

timeline/custom-timestamp

:::

## Vertically centered

Timeline-Item is centered vertically.

:::demo

timeline/center

:::

## Timeline API

### Timeline Slots

| Name    | Description                            | Subtags       |
| ------- | -------------------------------------- | ------------- |
| default | customize default content for timeline | Timeline-Item |

## Timeline-Item API

### Timeline-Item Attributes

| Name           | Description                 | Type                                                               | Default |
| -------------- | --------------------------- | ------------------------------------------------------------------ | ------- |
| timestamp      | timestamp content           | ^[string]                                                          | ''      |
| hide-timestamp | whether to show timestamp   | ^[boolean]                                                         | false   |
| center         | whether vertically centered | ^[boolean]                                                         | false   |
| placement      | position of timestamp       | ^[enum]`'top' \| 'bottom'`                                         | bottom  |
| type           | node type                   | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | ''      |
| color          | background color of node    | ^[enum]`'hsl' \| 'hsv' \| 'hex' \| 'rgb'`                          | ''      |
| size           | node size                   | ^[enum]`'normal' \| 'large'`                                       | normal  |
| icon           | icon component              | ^[string] / ^[Component]                                           | —       |
| hollow         | icon is hollow              | ^[boolean]                                                         | false   |

### Timeline-Item Slots

| Name    | Description                                 |
| ------- | ------------------------------------------- |
| default | customize default content for timeline item |
| dot     | customize defined node for timeline item    |
