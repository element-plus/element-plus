---
title: Dialog
lang: en-US
---

# Dialog

Informs users while preserving the current page state.

<style lang="scss" scoped>
.example-showcase {
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
  .full-image {
    width: 100%;
  }
  .el-dialog__wrapper {
    margin: 0;
  }
  .el-select {
    width: 300px;
  }
  .el-input {
    width: 300px;
  }
  .el-button--text {
    margin-right: 15px;
  }
}
</style>

## Basic usage

Dialog pops up a dialog box, and it's quite customizable.

:::demo Set `model-value / v-model` attribute with a `Boolean`, and Dialog shows when it is `true`. The Dialog has two parts: `body` and `footer`, and the latter requires a `slot` named `footer`. The optional `title` attribute (empty by default) is for defining a title. Finally, this example demonstrates how `before-close` is used.

dialog/basic-usage

:::

:::tip

`before-close` only works when user clicks the close icon or the backdrop. If you have buttons that close the Dialog in the `footer` named slot, you can add what you would do with `before-close` in the buttons' click event handler.

:::

## Customizations

The content of Dialog can be anything, even a table or a form. This example shows how to use Element Plus Table and Form with Dialog。

:::demo

dialog/customizations

:::

## Nested Dialog

If a Dialog is nested in another Dialog, `append-to-body` is required.

:::demo Normally we do not recommend using nested Dialog. If you need multiple Dialogs rendered on the page, you can simply flat them so that they're siblings to each other. If you must nest a Dialog inside another Dialog, set `append-to-body` of the nested Dialog to true, and it will append to body instead of its parent node, so both Dialogs can be correctly rendered.

dialog/nested-dialog

:::

## Centered content

Dialog's content can be centered.

:::demo Setting `center` to `true` will center dialog's header and footer horizontally. `center` only affects Dialog's header and footer. The body of Dialog can be anything, so sometimes it may not look good when centered. You need to write some CSS if you wish to center the body as well.

dialog/centered-content

:::

:::tip

The content of Dialog is lazily rendered, which means the default slot is not rendered onto the DOM until it is firstly opened. Therefore, if you need to perform a DOM manipulation or access a component using `ref`, do it in the `open` event callback.

:::

## Destroy on Close

When this is feature is enabled, the content under default slot will be destroyed with a `v-if` directive. Enable this when you have perf concerns.

:::demo Note that by enabling this feature, the content will not be rendered before `transition.beforeEnter` dispatched, there will only be `overlay` `header(if any)` `footer(if any)`.

dialog/destroy-on-close

:::

### Draggable Dialog

Try to drag the `header` part.

:::demo Set `draggable` to `true` to drag.

dialog/draggable-dialog

:::

:::tip

When using `modal` = false, please make sure that `append-to-body` was set to **true**, because `Dialog` was positioned by `position: relative`, when `modal` gets removed, `Dialog` will position itself based on the current position in the DOM, instead of `Document.Body`, thus the style will be messed up.

:::

## Attributes

| Attribute             | Description                                                                                       | Type                                             | Accepted Values | Default |
| --------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------ | --------------- | ------- |
| model-value / v-model | visibility of Dialog                                                                              | boolean                                          | —               | —       |
| title                 | title of Dialog. Can also be passed with a named slot (see the following table)                   | string                                           | —               | —       |
| width                 | width of Dialog                                                                                   | string / number                                  | —               | 50%     |
| fullscreen            | whether the Dialog takes up full screen                                                           | boolean                                          | —               | false   |
| top                   | value for `margin-top` of Dialog CSS                                                              | string                                           | —               | 15vh    |
| modal                 | whether a mask is displayed                                                                       | boolean                                          | —               | true    |
| append-to-body        | whether to append Dialog itself to body. A nested Dialog should have this attribute set to `true` | boolean                                          | —               | false   |
| lock-scroll           | whether scroll of body is disabled while Dialog is displayed                                      | boolean                                          | —               | true    |
| custom-class          | custom class names for Dialog                                                                     | string                                           | —               | —       |
| open-delay            | Time(milliseconds) before open                                                                    | number                                           | —               | 0       |
| close-delay           | Time(milliseconds) before close                                                                   | number                                           | —               | 0       |
| close-on-click-modal  | whether the Dialog can be closed by clicking the mask                                             | boolean                                          | —               | true    |
| close-on-press-escape | whether the Dialog can be closed by pressing ESC                                                  | boolean                                          | —               | true    |
| show-close            | whether to show a close button                                                                    | boolean                                          | —               | true    |
| before-close          | callback before Dialog closes, and it will prevent Dialog from closing                            | function(done)，done is used to close the Dialog | —               | —       |
| draggable             | whether can drag Dialog                                                                           | boolean                                          | —               | false   |
| center                | whether to align the header and footer in center                                                  | boolean                                          | —               | false   |
| destroy-on-close      | Destroy elements in Dialog when closed                                                            | boolean                                          | —               | false   |

## Slots

| Name   | Description                  |
| ------ | ---------------------------- |
| —      | content of Dialog            |
| title  | content of the Dialog title  |
| footer | content of the Dialog footer |

## Events

| Event Name | Description                                     | Parameters |
| ---------- | ----------------------------------------------- | ---------- |
| open       | triggers when the Dialog opens                  | —          |
| opened     | triggers when the Dialog opening animation ends | —          |
| close      | triggers when the Dialog closes                 | —          |
| closed     | triggers when the Dialog closing animation ends | —          |
