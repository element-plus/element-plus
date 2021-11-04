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

## Timeline Slots

| Name | Description                 | Subtags       |
| ---- | --------------------------- | ------------- |
| —    | Custom content for timeline | Timeline-Item |

## Timeline-Item Attributes

| Attribute      | Description                 | Type               | Accepted Values                             | Default |
| -------------- | --------------------------- | ------------------ | ------------------------------------------- | ------- |
| timestamp      | timestamp content           | string             | —                                           | —       |
| hide-timestamp | whether to show timestamp   | boolean            | —                                           | false   |
| center         | Whether vertically centered | boolean            | —                                           | false   |
| placement      | position of timestamp       | string             | top / bottom                                | bottom  |
| type           | node type                   | string             | primary / success / warning / danger / info | —       |
| color          | background color of node    | string             | hsl / hsv / hex / rgb                       | —       |
| size           | node size                   | string             | normal / large                              | normal  |
| icon           | icon component              | string / Component | —                                           | —       |
| hollow         | icon is hollow              | boolean            | —                                           | false   |

## Timeline-Item Slots

| Name | Description                      |
| ---- | -------------------------------- |
| —    | Custom content for timeline item |
| dot  | Custom defined node              |
