---
title: Drawer
lang: en-US
---

# Drawer

Sometimes, `Dialog` does not always satisfy our requirements, let's say you have a massive form, or you need space to display something like `terms & conditions`, `Drawer` has almost identical API with `Dialog`, but it introduces different user experience.

:::tip

Since v-model is natively supported for all components, `visible.sync` has been deprecated, use `v-model="visibilityBinding"` to control the visibility of the current drawer.

:::

<style lang="scss" scoped>
.example-showcase {
  &__content {
    display: flex;
    flex-direction: column;
    height: 100%;
    form {
      flex: 1;
    }
  }

  &__footer {
    display: flex;
    button {
      flex: 1;
    }
  }
}

.el-drawer__body {
  padding: 20px;
}

</style>

## Basic Usage

Callout a temporary drawer, from multiple direction

:::demo You must set `model-value` for `Drawer` like `Dialog` does to control the visibility of `Drawer` itself, it's `boolean` type. `Drawer` has to parts: `title` & `body`, the `title` is a named slot, you can also set the title through attribute named `title`, default to an empty string, the `body` part is the main area of `Drawer`, which contains user defined content. When opening, `Drawer` expand itself from the **right corner to left** which size is **30%** of the browser window by default. You can change that default behavior by setting `direction` and `size` attribute. This show case also demonstrated how to use the `before-close` API, check the Attribute section for more detail

drawer/basic-usage

:::

## No Title

When you no longer need a title, you can remove title from drawer.

:::demo Set the `withHeader` attribute to **false**, you can remove the title from drawer, thus your drawer can have more space on screen. If you want to be accessible, make sure to set the `title` attribute.

drawer/no-title

:::

## Customization Content

Like `Dialog`, `Drawer` can do many diverse interaction as you wanted.

:::demo

drawer/customization-content

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

## Drawer Attributes

| Attribute             | Description                                                                                                                                                                                                                                                                                                  | Type                                                                                                                                                   | Acceptable Values     | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- | ------- |
| model-value / v-model | Should Drawer be displayed                                                                                                                                                                                                                                                                                   | boolean                                                                                                                                                | —                     | false   |
| append-to-body        | Controls should Drawer be inserted to DocumentBody Element, nested Drawer must assign this param to **true**                                                                                                                                                                                                 | boolean                                                                                                                                                | —                     | false   |
| lock-scroll           | whether scroll of body is disabled while Drawer is displayed                                                                                                                                                                                                                                                 | boolean                                                                                                                                                | —                     | true    |
| before-close          | If set, closing procedure will be halted                                                                                                                                                                                                                                                                     | function(done) (done is function type that accepts a boolean as parameter, calling done with true or without parameter will abort the close procedure) | —                     | —       |
| close-on-click-modal  | whether the Drawer can be closed by clicking the mask                                                                                                                                                                                                                                                        | boolean                                                                                                                                                | —                     | true    |
| close-on-press-escape | Indicates whether Drawer can be closed by pressing ESC                                                                                                                                                                                                                                                       | boolean                                                                                                                                                | —                     | true    |
| open-delay            | Time(milliseconds) before open                                                                                                                                                                                                                                                                               | number                                                                                                                                                 | —                     | 0       |
| close-delay           | Time(milliseconds) before close                                                                                                                                                                                                                                                                              | number                                                                                                                                                 | —                     | 0       |
| custom-class          | Extra class names for Drawer                                                                                                                                                                                                                                                                                 | string                                                                                                                                                 | —                     | —       |
| destroy-on-close      | Indicates whether children should be destroyed after Drawer closed                                                                                                                                                                                                                                           | boolean                                                                                                                                                | -                     | false   |
| modal                 | Should show shadowing layer                                                                                                                                                                                                                                                                                  | boolean                                                                                                                                                | —                     | true    |
| direction             | Drawer's opening direction                                                                                                                                                                                                                                                                                   | Direction                                                                                                                                              | rtl / ltr / ttb / btt | rtl     |
| show-close            | Should show close button at the top right of Drawer                                                                                                                                                                                                                                                          | boolean                                                                                                                                                | —                     | true    |
| size                  | Drawer's size, if Drawer is horizontal mode, it effects the width property, otherwise it effects the height property, when size is `number` type, it describes the size by unit of pixels; when size is `string` type, it should be used with `x%` notation, other wise it will be interpreted to pixel unit | number / string                                                                                                                                        | -                     | '30%'   |
| title                 | Drawer's title, can also be set by named slot, detailed descriptions can be found in the slot form                                                                                                                                                                                                           | string                                                                                                                                                 | —                     | —       |
| withHeader            | Flag that controls the header section's existance, default to true, when withHeader set to false, both `title attribute` and `title slot` won't work                                                                                                                                                         | boolean                                                                                                                                                | -                     | true    |
| modal-class           | Extra class names for shadowing layer                                                                                                                                                                                                                                                                        | string                                                                                                                                                 | -                     | -       |
| z-index               | set z-index                                                                                                                                                                                                                                                                                                  | number                                                                                                                                                 | -                     | -       |

## Drawer Slots

| Name  | Description          |
| ----- | -------------------- |
| —     | Drawer's Content     |
| title | Drawer Title Section |

## Drawer Methods

| Name        | Description                                                     |
| ----------- | --------------------------------------------------------------- |
| handleClose | In order to close Drawer, this method will call `before-close`. |

## Drawer Events

| Event Name | Description                                      | Parameter |
| ---------- | ------------------------------------------------ | --------- |
| open       | Triggered before Drawer opening animation begins | —         |
| opened     | Triggered after Drawer opening animation ended   | —         |
| close      | Triggered before Drawer closing animation begins | —         |
| closed     | Triggered after Drawer closing animation ended   | —         |
