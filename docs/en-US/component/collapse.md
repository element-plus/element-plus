---
title: Collapse
lang: en-US
---

# Collapse

Use Collapse to store contents.

## Basic usage

You can expand multiple panels

:::demo

collapse/basic

:::

## Accordion

In accordion mode, only one panel can be expanded at once

:::demo Activate accordion mode using the `accordion` attribute.

collapse/accordion

:::

## Custom title

Besides using the `title` attribute, you can customize panel title with named slots, which makes adding custom content, e.g. icons, possible.

:::demo

collapse/customization

:::

## Custom icon ^(2.8.3)

Besides using the `icon` attribute, you can customize icon of panel item with named slots, which makes adding custom content.

:::demo

collapse/custom-icon

:::

## Collapse API

### Attributes

| Name                  | Description                                                                             | Type                 | Default |
| --------------------- | --------------------------------------------------------------------------------------- | -------------------- | ------- |
| model-value / v-model | currently active panel, the type is `string` in accordion mode, otherwise it is `array` | ^[string] / ^[array] | []      |
| accordion             | whether to activate accordion mode                                                      | ^[boolean]           | false   |

### Events

| Name   | Description                                                                                                   | Type                                                |
| ------ | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| change | triggers when active panels change, the parameter type is `string` in accordion mode, otherwise it is `array` | ^[Function]`(activeNames: array \| string) => void` |

### Slots

| Name    | Description               | Subtags       |
| ------- | ------------------------- | ------------- |
| default | customize default content | Collapse Item |

## Collapse Item API

### Attributes

| Name          | Description                        | Type                     | Default    |
| ------------- | ---------------------------------- | ------------------------ | ---------- |
| name          | unique identification of the panel | ^[string] / ^[number]    | —          |
| title         | title of the panel                 | ^[string]                | ''         |
| icon ^(2.8.3) | icon of the collapse item          | ^[string] / ^[Component] | ArrowRight |
| disabled      | disable the collapse item          | ^[boolean]               | false      |

### Slot

| Name          | Description                    | Type                             |
| ------------- | ------------------------------ | -------------------------------- |
| default       | content of Collapse Item       | —                                |
| title         | content of Collapse Item title | —                                |
| icon ^(2.8.3) | content of Collapse Item icon  | ^[object]`{ isActive: boolean }` |
