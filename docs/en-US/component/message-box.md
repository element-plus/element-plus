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

:::demo Open an alert by calling the `$alert` method. It simulates the system's `alert`, and cannot be closed by pressing ESC or clicking outside the box. In this example, two parameters `message` and `title` are received. It is worth mentioning that when the box is closed, it returns a `Promise` object for further processing. If you are not sure if your target browsers support `Promise`, you should import a third party polyfill or use callbacks instead like this example.

message-box/alert

:::

## Confirm

Confirm is used to ask users' confirmation.

:::demo Call `$confirm` method to open a confirm, and it simulates the system's `confirm`. We can also highly customize Message Box by passing a third attribute `options` which is a literal object. The attribute `type` indicates the message type, and it's value can be `success`, `error`, `info` and `warning`. Note that the second attribute `title` must be a `string`, and if it is an `object`, it will be handled as the attribute `options`. Here we use `Promise` to handle further processing.

message-box/confirm

:::

## Prompt

Prompt is used when user input is required.

:::demo Call `$prompt` method to open a prompt, and it simulates the system's `prompt`. You can use `inputPattern` parameter to specify your own RegExp pattern. Use `inputValidator` to specify validation method, and it should return `Boolean` or `String`. Returning `false` or `String` means the validation has failed, and the string returned will be used as the `inputErrorMessage`. In addition, you can customize the placeholder of the input box with `inputPlaceholder` parameter.

message-box/prompt

:::

## Customization

Can be customized to show various content.

:::demo The three methods mentioned above are repackagings of the `$msgbox` method. This example calls `$msgbox` method directly using the `showCancelButton` attribute, which is used to indicate if a cancel button is displayed. Besides we can use `cancelButtonClass` to add a custom style and `cancelButtonText` to customize the button text (the confirm button also has these fields, and a complete list of fields can be found at the end of this documentation). This example also uses the `beforeClose` attribute. It is a method and will be triggered when the MessageBox instance will be closed, and its execution will stop the instance from closing. It has three parameters: `action`, `instance` and `done`. Using it enables you to manipulate the instance before it closes, e.g. activating `loading` for confirm button; you can invoke the `done` method to close the MessageBox instance (if `done` is not called inside `beforeClose`, the instance will not be closed).

message-box/customization

:::

:::tip

The content of MessageBox can be `VNode`, allowing us to pass custom components. When opening the MessageBox, Vue compares new `VNode` with old `VNode`, then figures out how to efficiently update the UI, so the components may not be completely re-rendered ([#8931](https://github.com/ElemeFE/element/issues/8931)). In this case, you can add a unique key to `VNode` each time MessageBox opens: [example](https://jsfiddle.net/zhiyang/ezmhq2ef).

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

:::demo Setting `draggable` to `true` allows user to drag MessageBox.

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

## Options

| Attribute                    | Description                                                                                                                              | Type                                                                                                                                                                                                                            | Accepted Values                  | Default                                          |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------ |
| autofocus                    | auto focus when open MessageBox                                                                                                          | boolean                                                                                                                                                                                                                         | —                                | true                                             |
| title                        | title of the MessageBox                                                                                                                  | string                                                                                                                                                                                                                          | —                                | —                                                |
| message                      | content of the MessageBox                                                                                                                | string                                                                                                                                                                                                                          | —                                | —                                                |
| dangerouslyUseHTMLString     | whether `message` is treated as HTML string                                                                                              | boolean                                                                                                                                                                                                                         | —                                | false                                            |
| type                         | message type, used for icon display                                                                                                      | string                                                                                                                                                                                                                          | success / info / warning / error | —                                                |
| icon                         | custom icon component, overrides `type`                                                                                                  | string / Component                                                                                                                                                                                                              | —                                | —                                                |
| custom-class                 | custom class name for MessageBox                                                                                                         | string                                                                                                                                                                                                                          | —                                | —                                                |
| custom-style                 | custom inline style for MessageBox                                                                                                       | CSSProperties                                                                                                                                                                                                                   | —                                | —                                                |
| callback                     | MessageBox closing callback if you don't prefer Promise                                                                                  | function(action, instance), where `action` can be 'confirm', 'cancel' or 'close', and `instance` is the MessageBox instance. You can access to that instance's attributes and methods                                           | —                                | —                                                |
| showClose                    | whether to show close icon of MessageBox                                                                                                 | boolean                                                                                                                                                                                                                         | —                                | true                                             |
| before-close                 | callback before MessageBox closes, and it will prevent MessageBox from closing                                                           | function(action, instance, done), where `action` can be 'confirm', 'cancel' or 'close'; `instance` is the MessageBox instance, and you can access to that instance's attributes and methods; `done` is for closing the instance | —                                | —                                                |
| distinguish-cancel-and-close | whether to distinguish canceling and closing the MessageBox                                                                              | boolean                                                                                                                                                                                                                         | —                                | false                                            |
| lock-scroll                  | whether to lock body scroll when MessageBox prompts                                                                                      | boolean                                                                                                                                                                                                                         | —                                | true                                             |
| show-cancel-button           | whether to show a cancel button                                                                                                          | boolean                                                                                                                                                                                                                         | —                                | false (true when called with confirm and prompt) |
| show-confirm-button          | whether to show a confirm button                                                                                                         | boolean                                                                                                                                                                                                                         | —                                | true                                             |
| cancel-button-text           | text content of cancel button                                                                                                            | string                                                                                                                                                                                                                          | —                                | Cancel                                           |
| confirm-button-text          | text content of confirm button                                                                                                           | string                                                                                                                                                                                                                          | —                                | OK                                               |
| cancel-button-class          | custom class name of cancel button                                                                                                       | string                                                                                                                                                                                                                          | —                                | —                                                |
| confirm-button-class         | custom class name of confirm button                                                                                                      | string                                                                                                                                                                                                                          | —                                | —                                                |
| close-on-click-modal         | whether MessageBox can be closed by clicking the mask                                                                                    | boolean                                                                                                                                                                                                                         | —                                | true (false when called with alert)              |
| close-on-press-escape        | whether MessageBox can be closed by pressing the ESC                                                                                     | boolean                                                                                                                                                                                                                         | —                                | true (false when called with alert)              |
| close-on-hash-change         | whether to close MessageBox when hash changes                                                                                            | boolean                                                                                                                                                                                                                         | —                                | true                                             |
| show-input                   | whether to show an input                                                                                                                 | boolean                                                                                                                                                                                                                         | —                                | false (true when called with prompt)             |
| input-placeholder            | placeholder of input                                                                                                                     | string                                                                                                                                                                                                                          | —                                | —                                                |
| input-type                   | type of input                                                                                                                            | string                                                                                                                                                                                                                          | —                                | text                                             |
| input-value                  | initial value of input                                                                                                                   | string                                                                                                                                                                                                                          | —                                | —                                                |
| input-pattern                | regexp for the input                                                                                                                     | regexp                                                                                                                                                                                                                          | —                                | —                                                |
| input-validator              | validation function for the input. Should returns a boolean or string. If a string is returned, it will be assigned to inputErrorMessage | function                                                                                                                                                                                                                        | —                                | —                                                |
| input-error-message          | error message when validation fails                                                                                                      | string                                                                                                                                                                                                                          | —                                | Illegal input                                    |
| center                       | whether to align the content in center                                                                                                   | boolean                                                                                                                                                                                                                         | —                                | false                                            |
| draggable                    | whether MessageBox is draggable                                                                                                          | boolean                                                                                                                                                                                                                         | —                                | false                                            |
| round-button                 | whether to use round button                                                                                                              | boolean                                                                                                                                                                                                                         | —                                | false                                            |
| button-size                  | custom size of confirm and cancel buttons                                                                                                | string                                                                                                                                                                                                                          | small / default / large          | default                                          |
