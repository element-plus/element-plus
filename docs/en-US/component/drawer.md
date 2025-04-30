---
title: Drawer
lang: en-US
---

# Drawer

Sometimes, `Dialog` does not always satisfy our requirements, let's say you have a massive form, or you need space to display something like `terms & conditions`, `Drawer` has almost identical API with `Dialog`, but it introduces different user experience.

:::tip

Since v-model is natively supported for all components, `visible.sync` has been deprecated, use `v-model="visibilityBinding"` to control the visibility of the current drawer.

:::

## Basic Usage

Callout a temporary drawer, from multiple direction

:::demo You must set `model-value` for `Drawer` like `Dialog` does to control the visibility of `Drawer` itself, it's `boolean` type. `Drawer` has three parts: `title` & `body` & `footer`, the `title` is a named slot, you can also set the title through attribute named `title`, default to an empty string, the `body` part is the main area of `Drawer`, which contains user defined content. When opening, `Drawer` expand itself from the **right corner to left** which size is **30%** of the browser window by default. You can change that default behavior by setting `direction` and `size` attribute. This show case also demonstrated how to use the `before-close` API, check the Attribute section for more detail

drawer/basic-usage

:::

## No Title

When you no longer need a title, you can remove it from the drawer.

:::demo Set the `withHeader` attribute to **false**, you can remove the title from drawer, thus your drawer can have more space on screen. If you want to be accessible, make sure to set the `title` attribute.

drawer/no-title

:::

## Customized Content

Like `Dialog`, `Drawer` can be used to display a multitude of diverse interactions.

:::demo

drawer/customization-content

:::

## Customized Header

The `header` slot can be used to customize the area where the title is displayed. In order to maintain accessibility, use the `title` attribute in addition to using this slot, or use the `titleId` slot property to specify which element should be read out as the drawer title.

:::demo

drawer/customization-header

:::

## Nested Drawer

You can also have multiple layer of `Drawer` just like `Dialog`.

:::demo If you need multiple Drawer in different layer, you must set the `append-to-body` attribute to **true**

drawer/nested-drawer

:::

:::tip

The content inside Drawer should be lazy rendered, which means that the content inside Drawer will not impact the initial render performance, therefore any DOM operation should be performed through `ref` or after `open` event emitted.

:::

:::tip

Drawer provides an API called `destroyOnClose`, which is a flag variable that indicates should destroy the children content inside Drawer after Drawer was closed. You can use this API when you need your `mounted` life cycle to be called every time the Drawer opens.

:::

## API

### Attributes

| Name                       | Description                                                                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                           | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| model-value / v-model      | Should Drawer be displayed                                                                                                                                                                                                                                                                                   | ^[boolean]                                                                                                                                                                                     | false   |
| append-to-body             | Controls should Drawer be inserted to DocumentBody Element, nested Drawer must assign this param to **true**                                                                                                                                                                                                 | ^[boolean]                                                                                                                                                                                     | false   |
| append-to ^(2.8.0)         | which element the Drawer appends to. Will override `append-to-body`                                                                                                                                                                                                                                          | ^[CSSSelector] / ^[HTMLElement]                                                                                                                                                                | body    |
| lock-scroll                | whether scroll of body is disabled while Drawer is displayed                                                                                                                                                                                                                                                 | ^[boolean]                                                                                                                                                                                     | true    |
| before-close               | If set, closing procedure will be halted                                                                                                                                                                                                                                                                     | ^[Function]`(done: (cancel?: boolean) => void) => void(done is function type that accepts a boolean as parameter, calling done with true or without parameter will abort the close procedure)` | —       |
| close-on-click-modal       | whether the Drawer can be closed by clicking the mask                                                                                                                                                                                                                                                        | ^[boolean]                                                                                                                                                                                     | true    |
| close-on-press-escape      | Indicates whether Drawer can be closed by pressing ESC                                                                                                                                                                                                                                                       | ^[boolean]                                                                                                                                                                                     | true    |
| open-delay                 | Time(milliseconds) before open                                                                                                                                                                                                                                                                               | ^[number]                                                                                                                                                                                      | 0       |
| close-delay                | Time(milliseconds) before close                                                                                                                                                                                                                                                                              | ^[number]                                                                                                                                                                                      | 0       |
| destroy-on-close           | Indicates whether children should be destroyed after Drawer closed                                                                                                                                                                                                                                           | ^[boolean]                                                                                                                                                                                     | false   |
| modal                      | Should show shadowing layer                                                                                                                                                                                                                                                                                  | ^[boolean]                                                                                                                                                                                     | true    |
| direction                  | Drawer's opening direction                                                                                                                                                                                                                                                                                   | ^[enum]`'rtl' \| 'ltr' \| 'ttb' \| 'btt'`                                                                                                                                                      | rtl     |
| show-close                 | Should show close button at the top right of Drawer                                                                                                                                                                                                                                                          | ^[boolean]                                                                                                                                                                                     | true    |
| size                       | Drawer's size, if Drawer is horizontal mode, it effects the width property, otherwise it effects the height property, when size is `number` type, it describes the size by unit of pixels; when size is `string` type, it should be used with `x%` notation, other wise it will be interpreted to pixel unit | ^[number] / ^[string]                                                                                                                                                                          | 30%     |
| title                      | Drawer's title, can also be set by named slot, detailed descriptions can be found in the slot form                                                                                                                                                                                                           | ^[string]                                                                                                                                                                                      | —       |
| withHeader                 | Flag that controls the header section's existance, default to true, when withHeader set to false, both `title attribute` and `title slot` won't work                                                                                                                                                         | ^[boolean]                                                                                                                                                                                     | true    |
| modal-class                | Extra class names for shadowing layer                                                                                                                                                                                                                                                                        | ^[string]                                                                                                                                                                                      | —       |
| header-class ^(2.9.3)      | custom class names for header wrapper                                                                                                                                                                                                                                                                        | ^[string]                                                                                                                                                                                      | —       |
| body-class ^(2.9.3)        | custom class names for body wrapper                                                                                                                                                                                                                                                                          | ^[string]                                                                                                                                                                                      | —       |
| footer-class ^(2.9.3)      | custom class names for footer wrapper                                                                                                                                                                                                                                                                        | ^[string]                                                                                                                                                                                      | —       |
| z-index                    | set z-index                                                                                                                                                                                                                                                                                                  | ^[number]                                                                                                                                                                                      | —       |
| header-aria-level ^(a11y)  | header's `aria-level` attribute                                                                                                                                                                                                                                                                              | ^[string]                                                                                                                                                                                      | 2       |
| custom-class ^(deprecated) | Extra class names for Drawer                                                                                                                                                                                                                                                                                 | ^[string]                                                                                                                                                                                      | —       |

:::warning

`custom-class` has been **deprecated**, and **will be** removed in ^(2.3.0), please use `class`.

:::

### Events

| Name             | Description                                      | Type                    |
| ---------------- | ------------------------------------------------ | ----------------------- |
| open             | Triggered before Drawer opening animation begins | ^[Function]`() => void` |
| opened           | Triggered after Drawer opening animation ended   | ^[Function]`() => void` |
| close            | Triggered before Drawer closing animation begins | ^[Function]`() => void` |
| closed           | Triggered after Drawer closing animation ended   | ^[Function]`() => void` |
| open-auto-focus  | triggers after Drawer opens and content focused  | ^[Function]`() => void` |
| close-auto-focus | triggers after Drawer closed and content focused | ^[Function]`() => void` |

### Slots

| Name                | Description                                                                                    |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| default             | Drawer's Content                                                                               |
| header              | Drawer header section; Replacing this removes the title, but does not remove the close button. |
| footer              | Drawer footer Section                                                                          |
| title ^(deprecated) | Works the same as the header slot. Use that instead.                                           |

### Exposes

| Name        | Description                                                     |
| ----------- | --------------------------------------------------------------- |
| handleClose | In order to close Drawer, this method will call `before-close`. |
