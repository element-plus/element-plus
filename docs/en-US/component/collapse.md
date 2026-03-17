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

:::tip

Starting from version ^(2.9.10), the `title` slot provides an `isActive` property that indicates whether the current collapse item is active.

:::

:::demo

collapse/customization

:::

## Custom icon ^(2.8.3)

Besides using the `icon` attribute, you can customize icon of panel item with named slots, which makes adding custom content.

:::demo

collapse/custom-icon

:::

## Custom icon position ^(2.9.10)

using the `expand-icon-position` attribute, you can customize icon position.

:::demo

collapse/custom-icon-position

:::

## Prevent collapsing ^(2.9.11)

set the `before-collapse` property, If `false` is returned or a `Promise` is returned and then is rejected, will stop collapsing.

:::demo

collapse/prevent-collapsing

:::

## Collapse API

### Collapse Attributes

| Name                           | Description                                                                                                                                          | Type                                           | Default |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------- |
| model-value / v-model          | Currently active panel, the type is `string` in accordion mode, otherwise it is `array`                                                              | ^[string] / ^[array]                           | []      |
| accordion                      | Whether to activate accordion mode                                                                                                                   | ^[boolean]                                     | false   |
| expand-icon-position ^(2.9.10) | Set expand icon position                                                                                                                             | ^[enum]`'left' \| 'right' `                    | right   |
| before-collapse ^(2.9.11)      | Before-collapse hook before the collapse state changes. If `false` is returned or a `Promise` is returned and then is rejected, will stop collapsing | ^[Function]`() => Promise<boolean> \| boolean` | —       |

### Collapse Events

| Name   | Description                                                                                                   | Type                                                |
| ------ | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| change | Triggers when active panels change, the parameter type is `string` in accordion mode, otherwise it is `array` | ^[Function]`(activeNames: array \| string) => void` |

### Collapse Slots

| Name    | Description               | Subtags       |
| ------- | ------------------------- | ------------- |
| default | Customize default content | Collapse Item |

### Collapse Exposes

| Name           | Description                  | Type                                                     |
| -------------- | ---------------------------- | -------------------------------------------------------- |
| activeNames    | Currently active panel names | ^[object]`ComputedRef<(string \| number)[]>`             |
| setActiveNames | Set active panel names       | ^[Function]`(activeNames: (string \| number)[]) => void` |

## Collapse Item API

### Collapse Item Attributes

| Name          | Description                        | Type                     | Default    |
| ------------- | ---------------------------------- | ------------------------ | ---------- |
| name          | Unique identification of the panel | ^[string] / ^[number]    | —          |
| title         | Title of the panel                 | ^[string]                | ''         |
| icon ^(2.8.3) | Icon of the collapse item          | ^[string] / ^[Component] | ArrowRight |
| disabled      | Disable the collapse item          | ^[boolean]               | false      |

### Collapse Item Slot

| Name          | Description                    | Type                             |
| ------------- | ------------------------------ | -------------------------------- |
| default       | Content of Collapse Item       | —                                |
| title         | Content of Collapse Item title | ^[object]`{ isActive: boolean }` |
| icon ^(2.8.3) | Content of Collapse Item icon  | ^[object]`{ isActive: boolean }` |

### Collapse Item Exposes

| Name     | Description                                 | Type                                         |
| -------- | ------------------------------------------- | -------------------------------------------- |
| isActive | Whether the current collapse item is active | ^[object]`ComputedRef<boolean \| undefined>` |
