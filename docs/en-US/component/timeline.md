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

## Mode ^(2.13.1)

Use `mode` to control the relative position of timeline and content.

:::tip

After ^(2.13.1), `el-timeline` explicitly sets padding styles. If you have overridden padding styles of `ul` tag in your project, please check to ensure the layout is correct.

:::

:::demo

timeline/mode

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

## Reverse ^(2.11.9)

Use the reverse property to control the order of the nodes.

:::demo

timeline/reverse

:::

## Timeline API

### Timeline Attributes

| Name              | Description                               | Type                                                            | Default |
| ----------------- | ----------------------------------------- | --------------------------------------------------------------- | ------- |
| reverse ^(2.11.9) | Whether reverse order                     | ^[boolean]                                                      | false   |
| mode ^(2.13.1)    | Relative position of timeline and content | ^[enum]`'start' \| 'alternate' \| 'alternate-reverse' \| 'end'` | start   |

### Timeline Slots

| Name    | Description                            | Subtags       |
| ------- | -------------------------------------- | ------------- |
| default | Customize default content for timeline | Timeline-Item |

## Timeline-Item API

### Timeline-Item Attributes

| Name           | Description                 | Type                                                               | Default |
| -------------- | --------------------------- | ------------------------------------------------------------------ | ------- |
| timestamp      | Timestamp content           | ^[string]                                                          | ''      |
| hide-timestamp | Whether to show timestamp   | ^[boolean]                                                         | false   |
| center         | Whether vertically centered | ^[boolean]                                                         | false   |
| placement      | Position of timestamp       | ^[enum]`'top' \| 'bottom'`                                         | bottom  |
| type           | Node type                   | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | ''      |
| color          | Background color of node    | ^[string]                                                          | ''      |
| size           | Node size                   | ^[enum]`'normal' \| 'large'`                                       | normal  |
| icon           | Icon component              | ^[string] / ^[Component]                                           | —       |
| hollow         | Icon is hollow              | ^[boolean]                                                         | false   |

### Timeline-Item Slots

| Name    | Description                                 |
| ------- | ------------------------------------------- |
| default | Customize default content for timeline item |
| dot     | Customize defined node for timeline item    |
