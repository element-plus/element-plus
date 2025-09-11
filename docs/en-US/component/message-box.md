---
title: Message
lang: en-US
---

# Message Box

A set of modal boxes simulating system message box, mainly for alerting information, confirm operations and prompting messages.

:::tip

By design MessageBox provides simulations of system's `alert`, `confirm` and `prompt`，so it's content should be simple. For more complicated contents, please use Dialog.

:::

## Alert

Alert interrupts user operation until the user confirms.

:::demo Open an alert by calling the `ElMessageBox.alert` method. It simulates the system's `alert`, and cannot be closed by pressing ESC or clicking outside the box. In this example, two parameters `message` and `title` are received. It is worth mentioning that when the box is closed, it returns a `Promise` object for further processing. If you are not sure if your target browsers support `Promise`, you should import a third party polyfill or use callbacks instead like this example.

message-box/alert

:::

## Confirm

Confirm is used to ask users' confirmation.

:::demo Call `ElMessageBox.confirm` method to open a confirm, and it simulates the system's `confirm`. We can also highly customize Message Box by passing a third attribute `options` which is a literal object. The attribute `type` indicates the message type, and it's value can be `primary`, `success`, `error`, `info` and `warning`. Note that the second attribute `title` must be a `string`, and if it is an `object`, it will be handled as the attribute `options`. Here we use `Promise` to handle further processing. `primary` has been added in ^(2.9.11).

message-box/confirm

:::

## Prompt

Prompt is used when user input is required.

:::demo Call `ElMessageBox.prompt` method to open a prompt, and it simulates the system's `prompt`. You can use `inputPattern` parameter to specify your own RegExp pattern. Use `inputValidator` to specify validation method, and it should return `Boolean` or `String`. Returning `false` or `String` means the validation has failed, and the string returned will be used as the `inputErrorMessage`. In addition, you can customize the placeholder of the input box with `inputPlaceholder` parameter.

message-box/prompt

:::

## Use VNode

`message` can be VNode.

:::demo

message-box/use-vnode

:::

## Customization

Can be customized to show various content.

:::demo The three methods mentioned above are repackagings of the `ElMessageBox` method. This example calls `ElMessageBox` method directly using the `showCancelButton` attribute, which is used to indicate if a cancel button is displayed. Besides we can use `cancelButtonClass` to add a custom style and `cancelButtonText` to customize the button text (the confirm button also has these fields, and a complete list of fields can be found at the end of this documentation). This example also uses the `beforeClose` attribute. It is a method and will be triggered when the MessageBox instance will be closed, and its execution will stop the instance from closing. It has three parameters: `action`, `instance` and `done`. Using it enables you to manipulate the instance before it closes, e.g. activating `loading` for confirm button; you can invoke the `done` method to close the MessageBox instance (if `done` is not called inside `beforeClose`, the instance will not be closed).

message-box/customization

:::

## Use HTML String

`message` supports HTML string.

:::demo Set `dangerouslyUseHTMLString` to true and `message` will be treated as an HTML string.

message-box/use-html

:::

:::warning

Although `message` property supports HTML strings, dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting). So when `dangerouslyUseHTMLString` is on, please make sure the content of `message` is trusted, and **never** assign `message` to user-provided content.

:::

## Distinguishing cancel and close

In some cases, clicking the cancel button and close button may have different meanings.

:::demo By default, the parameters of Promise's reject callback and `callback` are 'cancel' when the user cancels (clicking the cancel button) and closes (clicking the close button or mask layer, pressing the ESC key) the MessageBox. If `distinguishCancelAndClose` is set to true, the parameters of the above two operations are 'cancel' and 'close' respectively.

message-box/distinguishable-close-cancel

:::

## Centered content

Content of MessageBox can be centered.

:::demo Setting `center` to `true` will center the content.

message-box/centered-content

:::

## Customized Icon

The icon can be customized to any Vue component or [render function (JSX)](https://vuejs.org/guide/extras/render-function.html).

:::demo

message-box/customized-icon

:::

## Draggable

MessageBox can be draggable.

:::demo Setting `draggable` to `true` allows user to drag MessageBox. Set `overflow` ^(2.5.4) to `true` can drag overflow the viewport.

message-box/draggable

:::

## Global method

If Element Plus is fully imported, it will add the following global methods for `app.config.globalProperties`: `$msgbox`, `$alert`, `$confirm` and `$prompt`. So in a Vue instance you can call `MessageBox` like what we did in this page. The parameters are:

- `$msgbox(options)`
- `$alert(message, title, options)` or `$alert(message, options)`
- `$confirm(message, title, options)` or `$confirm(message, options)`
- `$prompt(message, title, options)` or `$prompt(message, options)`

## App context inheritance <el-tag>> 2.0.4</el-tag>

Now message box accepts a `context` as second (forth if you are using message box variants) parameter of the message constructor which allows you to inject current app's context to message which allows you to inherit all the properties of the app.

```ts
import { getCurrentInstance } from 'vue'
import { ElMessageBox } from 'element-plus'

// in your setup method
const { appContext } = getCurrentInstance()!
// You can pass it like:
ElMessageBox({}, appContext)
// or if you are using variants
ElMessageBox.alert('Hello world!', 'Title', {}, appContext)
```

## Local import

If you prefer importing `MessageBox` on demand:

```ts
import { ElMessageBox } from 'element-plus'
```

The corresponding methods are: `ElMessageBox`, `ElMessageBox.alert`, `ElMessageBox.confirm` and `ElMessageBox.prompt`. The parameters are the same as above.

## API

### Options

| Name                              | Description                                                                                                                              | Type                                                                               | Default                                          |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------ |
| autofocus                         | auto focus when open MessageBox                                                                                                          | ^[boolean]                                                                         | true                                             |
| title                             | title of the MessageBox                                                                                                                  | ^[string]                                                                          | ''                                               |
| message                           | content of the MessageBox                                                                                                                | ^[string] / ^[VNode] / ^[Function]`() => VNode` ^(2.2.17)                          | —                                                |
| dangerouslyUseHTMLString          | whether `message` is treated as HTML string                                                                                              | ^[boolean]                                                                         | false                                            |
| type                              | message type, used for icon display                                                                                                      | ^[enum]`'primary' (2.9.11) \| 'success' \| 'info' \| 'warning' \| 'error'`         | ''                                               |
| icon                              | custom icon component, overrides `type`                                                                                                  | ^[string] / ^[Component]                                                           | ''                                               |
| closeIcon ^(2.9.5)                | custom close icon component, default is Close                                                                                            | ^[string] / ^[Component]                                                           | ''                                               |
| customClass                       | custom class name for MessageBox                                                                                                         | ^[string]                                                                          | ''                                               |
| customStyle                       | custom inline style for MessageBox                                                                                                       | ^[CSSProperties]                                                                   | {}                                               |
| modalClass                        | custom class names for mask                                                                                                              | string                                                                             | —                                                |
| callback                          | MessageBox closing callback if you don't prefer Promise                                                                                  | ^[Function]`(value: string, action: Action) => any \| (action: Action) => any`     | null                                             |
| showClose                         | whether to show close icon of MessageBox                                                                                                 | ^[boolean]                                                                         | true                                             |
| beforeClose                       | callback before MessageBox closes, and it will prevent MessageBox from closing                                                           | ^[Function]`(action: Action, instance: MessageBoxState, done: () => void) => void` | null                                             |
| distinguishCancelAndClose         | whether to distinguish canceling and closing the MessageBox                                                                              | ^[boolean]                                                                         | false                                            |
| lockScroll                        | whether to lock body scroll when MessageBox prompts                                                                                      | ^[boolean]                                                                         | true                                             |
| showCancelButton                  | whether to show a cancel button                                                                                                          | ^[boolean]                                                                         | false (true when called with confirm and prompt) |
| showConfirmButton                 | whether to show a confirm button                                                                                                         | ^[boolean]                                                                         | true                                             |
| cancelButtonText                  | text content of cancel button                                                                                                            | ^[string]                                                                          | Cancel                                           |
| confirmButtonText                 | text content of confirm button                                                                                                           | ^[string]                                                                          | OK                                               |
| cancelButtonLoadingIcon ^(2.7.7)  | loading icon content of cancel button                                                                                                    | ^[string] / ^[Component]                                                           | Loading                                          |
| confirmButtonLoadingIcon ^(2.7.7) | loading icon content of confirm button                                                                                                   | ^[string] / ^[Component]                                                           | Loading                                          |
| cancelButtonClass                 | custom class name of cancel button                                                                                                       | ^[string]                                                                          | ''                                               |
| confirmButtonClass                | custom class name of confirm button                                                                                                      | ^[string]                                                                          | ''                                               |
| closeOnClickModal                 | whether MessageBox can be closed by clicking the mask                                                                                    | ^[boolean]                                                                         | true (false when called with alert)              |
| closeOnPressEscape                | whether MessageBox can be closed by pressing the ESC                                                                                     | ^[boolean]                                                                         | true (false when called with alert)              |
| closeOnHashChange                 | whether to close MessageBox when hash changes                                                                                            | ^[boolean]                                                                         | true                                             |
| showInput                         | whether to show an input                                                                                                                 | ^[boolean]                                                                         | false (true when called with prompt)             |
| inputPlaceholder                  | placeholder of input                                                                                                                     | ^[string]                                                                          | ''                                               |
| inputType                         | type of input                                                                                                                            | ^[string]                                                                          | text                                             |
| inputValue                        | initial value of input                                                                                                                   | ^[string]                                                                          | ''                                               |
| inputPattern                      | regexp for the input                                                                                                                     | ^[regexp]                                                                          | null                                             |
| inputValidator                    | validation function for the input. Should returns a boolean or string. If a string is returned, it will be assigned to inputErrorMessage | ^[Function]`(value: string) => boolean \| string`/ `undefined`                     | undefined                                        |
| inputErrorMessage                 | error message when validation fails                                                                                                      | ^[string]                                                                          | Illegal input                                    |
| center                            | whether to align the content in center                                                                                                   | ^[boolean]                                                                         | false                                            |
| draggable                         | whether MessageBox is draggable                                                                                                          | ^[boolean]                                                                         | false                                            |
| overflow ^(2.5.4)                 | draggable MessageBox can overflow the viewport                                                                                           | ^[boolean]                                                                         | false                                            |
| roundButton                       | whether to use round button                                                                                                              | ^[boolean]                                                                         | false                                            |
| buttonSize                        | custom size of confirm and cancel buttons                                                                                                | ^[string]`'small' \| 'default' \| 'large'`                                         | default                                          |
| appendTo ^(2.2.19)                | set the root element for the message box                                                                                                 | ^[CSSSelector] / ^[HTMLElement]                                                    | —                                                |
