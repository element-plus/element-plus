---
title: Tooltip V2
lang: en-US
---

# Tooltip V2

For the existing tooltip, it has too many APIs which is not very intuitive and accessible, so we created this much simpler tooltip, which does only one simple thing - showing tooltip. The structure of having a tooltip is kind of the same, but the API is different. In this version we have provided the components individually, you can compose your own tooltip by using the components.

## Basic usage

**Hover** or **tab** on the icon to see the tooltip.

:::demo

tooltip-v2/basic-usage

:::

## Accessible tooltip

:::demo

tooltip-v2/a11y

:::

## Transition / Animation

You may set transition/animation via `CSS` animation/transition or [Transition](https://vuejs.org/guide/built-ins/transition.html#transition) component for your tooltip content when opening.

:::tip

By default, tooltip v2 ONLY allows a half-way transition/animation which only occurs when the tooltip is shown. This is because the implementation uses `v-if` to show/hide the tooltip. When closing, the content element is removed from DOM, so that the transition / animation will be interrupted.

:::

:::demo

tooltip-v2/transition

:::

### Full transition

Of course, you can have full transition for your tooltip content. But this requires using [Transition](https://vuejs.org/guide/built-ins/transition.html#transition) component, checkout the demo below.

:::demo

tooltip-v2/full-transition

:::

## Render to the root element

By default, unlike [tooltip v1](./tooltip.md), the tooltip will be rendered to the body element. **tooltip v2** will render to where the trigger/reference element is. But you can still render to to the root element by using `Teleport` component.

:::demo

tooltip-v2/render-to-root

:::

## With arrow

:::demo

tooltip-v2/arrow

:::

<!-- ## Composing your own tooltip

## Tooltip V2 APIs

### Tooltip Root

### Tooltip Trigger

### Tooltip Content

### Tooltip Arrow

### Tooltip Reference -->
