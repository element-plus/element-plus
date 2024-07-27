---
title: Popover
lang: en-US
---

# Popover

:::tip

This component requires the `<client-only></client-only>` wrap when used in SSR (eg: [Nuxt](https://nuxt.com/v3)) and SSG (eg: [VitePress](https://vitepress.vuejs.org/)).

:::

## Basic usage

Popover is built with `ElTooltip`. So for some duplicated attributes, please refer to the documentation of Tooltip.

:::demo The `trigger` attribute is used to define how popover is triggered: `hover`, `click`, `focus` or `contextmenu` . If you want to manually control it, you can set `:visible`.

popover/basic-usage

:::

## Virtual triggering

Like Tooltip, Popover can be triggered by virtual elements, if your use case includes separate the triggering element and the content element, you should definitely use the mechanism, normally we use `#reference` to place our triggering element, with `triggering-element` API you can set your triggering element anywhere you like, but notice that the triggering element should be an element that accepts `mouse` and `keyboard` event.

:::warning

`v-popover` is about to be deprecated, please use `virtual-ref` as alternative.

:::

:::demo

popover/virtual-triggering

:::

## Rich content

Other components/elements can be nested in popover. Following is an example of nested table.

:::demo replace the `content` attribute with a default `slot`.

popover/nested-information

:::

## Nested operation

Of course, you can nest other operations. It's more light-weight than using a dialog.

:::demo

popover/nested-operation

:::

## Directive

You can still using popover in directive way but this is **not recommended** anymore since this makes your application
complicated, you may refer to the virtual triggering for more information.

:::demo

popover/directive-usage

:::

## API

### Attributes

| Name                      | Description                                                                                                                                                              | Type                                                                                                                                                                        | Default                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| trigger                   | how the popover is triggered                                                                                                                                             | ^[enum]`'click' \| 'focus' \| 'hover' \| 'contextmenu'`                                                                                                                     | hover                                                                      |
| title                     | popover title                                                                                                                                                            | ^[string]                                                                                                                                                                   | —                                                                          |
| effect                    | Tooltip theme, built-in theme: `dark` / `light`                                                                                                                          | ^[enum]`'dark' \| 'light'`                                                                                                                                                  | light                                                                      |
| content                   | popover content, can be replaced with a default `slot`                                                                                                                   | ^[string]                                                                                                                                                                   | ''                                                                         |
| width                     | popover width                                                                                                                                                            | ^[string] / ^[number]                                                                                                                                                       | 150                                                                        |
| placement                 | popover placement                                                                                                                                                        | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | bottom                                                                     |
| disabled                  | whether Popover is disabled                                                                                                                                              | ^[boolean]                                                                                                                                                                  | false                                                                      |
| visible / v-model:visible | whether popover is visible                                                                                                                                               | ^[boolean] / ^[null]                                                                                                                                                        | null                                                                       |
| offset                    | popover offset, `Popover` is built with `Tooltip`, offset of `Popover` is `undefined`, but offset of `Tooltip` is 12                                                     | ^[number]                                                                                                                                                                   | undefined                                                                  |
| transition                | popover transition animation, the default is el-fade-in-linear                                                                                                           | ^[string]                                                                                                                                                                   | —                                                                          |
| show-arrow                | whether a tooltip arrow is displayed or not. For more info, please refer to [ElPopper](https://github.com/element-plus/element-plus/tree/dev/packages/components/popper) | ^[boolean]                                                                                                                                                                  | true                                                                       |
| popper-options            | parameters for [popper.js](https://popper.js.org/docs/v2/)                                                                                                               | ^[object]                                                                                                                                                                   | `{modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]}` |
| popper-class              | custom class name for popover                                                                                                                                            | ^[string]                                                                                                                                                                   | —                                                                          |
| popper-style              | custom style for popover                                                                                                                                                 | ^[string] / ^[object]                                                                                                                                                       | —                                                                          |
| show-after                | delay of appearance, in millisecond                                                                                                                                      | ^[number]                                                                                                                                                                   | 0                                                                          |
| hide-after                | delay of disappear, in millisecond                                                                                                                                       | ^[number]                                                                                                                                                                   | 200                                                                        |
| auto-close                | timeout in milliseconds to hide tooltip                                                                                                                                  | ^[number]                                                                                                                                                                   | 0                                                                          |
| tabindex                  | [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Popover                                                                      | ^[number] / ^[string]                                                                                                                                                       | 0                                                                          |
| teleported                | whether popover dropdown is teleported to the body                                                                                                                       | ^[boolean]                                                                                                                                                                  | true                                                                       |
| persistent                | when popover inactive and `persistent` is `false` , popover will be destroyed                                                                                            | ^[boolean]                                                                                                                                                                  | true                                                                       |

### Slots

| Name      | Description                        |
| --------- | ---------------------------------- |
| default   | text content of popover            |
| reference | HTML element that triggers popover |

### Events

| Name         | Description                                  | Type                    |
| ------------ | -------------------------------------------- | ----------------------- |
| show         | triggers when popover shows                  | ^[Function]`() => void` |
| before-enter | triggers when the entering transition before | ^[Function]`() => void` |
| after-enter  | triggers when the entering transition ends   | ^[Function]`() => void` |
| hide         | triggers when popover hides                  | ^[Function]`() => void` |
| before-leave | triggers when the leaving transition before  | ^[Function]`() => void` |
| after-leave  | triggers when the leaving transition ends    | ^[Function]`() => void` |

### Exposes

| Name         | Description  | Type                    |
| ------------ | ------------ | ----------------------- |
| hide         | hide popover | ^[Function]`() => void` |
