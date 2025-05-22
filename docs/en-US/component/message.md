---
title: Message
lang: en-US
---

# Message

Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification.

## Basic usage

Displays at the top, and disappears after 3 seconds.

:::demo The setup of Message is very similar to notification, so parts of the options won't be explained in detail here. You can check the options table below combined with notification doc to understand it. Element Plus has registered a `$message` method for invoking. Message can take a string or a VNode as parameter, and it will be shown as the main body.

message/basic

:::

## Types

Used to show the feedback of Success, Warning, Message and Error activities.

:::demo When you need more customizations, Message component can also take an object as parameter. For example, setting value of `type` can define different types, and its default is `info`. In such cases the main body is passed in as the value of `message`. Also, we have registered methods for different types, so you can directly call it without passing a type like `open4`. `primary` has been added in ^(2.9.11).

message/different-types

:::

## Plain ^(2.6.3)

Set `plain` to have a plain background.

:::demo

message/plain

:::

## Closable

A close button can be added.

:::demo A default Message cannot be closed manually. If you need a closable message, you can set `showClose` field. Besides, same as notification, message has a controllable `duration`. Default duration is 3000 ms, and it won't disappear when set to `0`.

message/closable

:::

## Use HTML string

`message` supports HTML string.

:::demo Set `dangerouslyUseHTMLString` to true and `message` will be treated as an HTML string.

message/raw-html

:::

:::warning

Although `message` property supports HTML strings, dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting). So when `dangerouslyUseHTMLString` is on, please make sure the content of `message` is trusted, and **never** assign `message` to user-provided content.

:::

## Grouping

merge messages with the same content.

:::demo Set `grouping` to true and the same content of `message` will be merged.

message/grouping

:::

## Global method

Element Plus has added a global method `$message` for `app.config.globalProperties`. So in a vue instance you can call `Message` like what we did in this page.

## Local import

```ts
import { ElMessage } from 'element-plus'
```

In this case you should call `ElMessage(options)`. We have also registered methods for different types, e.g. `ElMessage.success(options)`. You can call `ElMessage.closeAll()` to manually close all the instances.

## App context inheritance ^(2.0.3)

Now message accepts a `context` as second parameter of the message constructor which allows you to inject current app's context to message which allows you to inherit all the properties of the app.

You can use it like this:

:::tip

If you globally registered ElMessage component, it will automatically inherit your app context.

:::

```ts
import { getCurrentInstance } from 'vue'
import { ElMessage } from 'element-plus'

// in your setup method
const { appContext } = getCurrentInstance()!
ElMessage({}, appContext)
```

## API

### Options

| Name                     | Description                                                                                          | Type                                                                       | Default |
| ------------------------ | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------- |
| message                  | message text                                                                                         | ^[string] / ^[VNode] / ^[Function]`() => VNode`                            | ''      |
| type                     | message type                                                                                         | ^[enum]`'primary' (2.9.11) \| 'success' \| 'warning' \| 'info' \| 'error'` | info    |
| plain ^(2.6.3)           | whether message is plain                                                                             | ^[boolean]                                                                 | false   |
| icon                     | custom icon component, overrides `type`                                                              | ^[string] / ^[Component]                                                   | —       |
| dangerouslyUseHTMLString | whether `message` is treated as HTML string                                                          | ^[boolean]                                                                 | false   |
| customClass              | custom class name for Message                                                                        | ^[string]                                                                  | ''      |
| duration                 | display duration, millisecond. If set to 0, it will not turn off automatically                       | ^[number]                                                                  | 3000    |
| showClose                | whether to show a close button                                                                       | ^[boolean]                                                                 | false   |
| onClose                  | callback function when closed with the message instance as the parameter                             | ^[Function]`() => void`                                                    | —       |
| offset                   | set the distance to the top of viewport                                                              | ^[number]                                                                  | 16      |
| appendTo                 | set the root element for the message, default to `document.body`                                     | ^[CSSSelector] / ^[HTMLElement]                                            | —       |
| grouping                 | merge messages with the same content, type of VNode message is not supported                         | ^[boolean]                                                                 | false   |
| repeatNum                | The number of repetitions, similar to badge, is used as the initial number when used with `grouping` | ^[number]                                                                  | 1       |

### Methods

`Message` and `this.$message` returns the current Message instance. To manually close the instance, you can call `close` on it.

| Name  | Description       | Type                    |
| ----- | ----------------- | ----------------------- |
| close | close the Message | ^[Function]`() => void` |
