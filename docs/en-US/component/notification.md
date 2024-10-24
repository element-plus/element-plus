---
title: Notification
lang: en-US
---

# Notification

Displays a global notification message at a corner of the page.

## Basic usage

:::demo Element Plus has registered the `$notify` method and it receives an object as its parameter. In the simplest case, you can set the `title` field and the` message` field for the title and body of the notification. By default, the notification automatically closes after 4500ms, but by setting `duration` you can control its duration. Specifically, if set to `0`, it will not close automatically. Note that `duration` receives a `Number` in milliseconds.

notification/basic

:::

## With types

We provide four types: success, warning, info and error.

:::demo Element Plus provides four notification types: `success`, `warning`, `info` and `error`. They are set by the `type` field, and other values will be ignored. We also registered methods for these types that can be invoked directly like `open3` and `open4` without passing a `type` field.

notification/different-types

:::

## Custom position

Notification can emerge from any corner you like.

:::demo The `position` attribute defines which corner Notification slides in. It can be `top-right`, `top-left`, `bottom-right` or `bottom-left`. Defaults to `top-right`.

notification/positioning

:::

## With offset

Customize Notification's offset from the edge of the screen.

:::demo Set the `offset` attribute to customize Notification's offset from the edge of the screen. Note that every Notification instance of the same moment should have the same offset.

notification/offsetting

:::

## Use HTML string

`message` supports HTML string.

:::demo Set `dangerouslyUseHTMLString` to true and `message` will be treated as an HTML string.

notification/raw-html

:::

:::warning

Although `message` property supports HTML strings, dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting). So when `dangerouslyUseHTMLString` is on, please make sure the content of `message` is trusted, and **never** assign `message` to user-provided content.

:::

## Hide close button

It is possible to hide the close button

:::demo Set the `showClose` attribute to `false` so the notification cannot be closed by the user.

notification/no-close

:::

## Global method

Element Plus has added a global method `$notify` for `app.config.globalProperties`. So in a vue instance you can call `Notification` like what we did in this page.

## Local import

```javascript
import { ElNotification } from 'element-plus'
```

In this case you should call `ElNotification(options)`. We have also registered methods for different types, e.g. `ElNotification.success(options)`. You can call `ElNotification.closeAll()` to manually close all the instances.

## App context inheritance <el-tag>> 2.0.4</el-tag>

Now notification accepts a `context` as second parameter of the message constructor which allows you to inject current app's context to notification which allows you to inherit all the properties of the app.

You can use it like this:

:::tip

If you globally registered ElNotification component, it will automatically inherit your app context.

:::

```ts
import { getCurrentInstance } from 'vue'
import { ElNotification } from 'element-plus'

// in your setup method
const { appContext } = getCurrentInstance()!
ElNotification({}, appContext)
```

## Keyboard listener

Notification component registers a `keydown` event listener on the document. When the Escape key is pressed, it will close the notification. On Backspace and Delete, the timer will pause or reset (depending on the <a href='#timer-controls'>timerControls</a> prop). Any other key will resume or restart the timer.

## Actions ^(X.Y.Z)

Actions use Element Plus's <a href='button'>Button</a> component, with button props provided via the action's `button` property.

When clicked, the `execute` method is called, and the notification closes by default. To prevent closing, set the action's `keepOpen` property to `true` or `'until-resolved'` (by default it is `false`). If set to `'until-resolved'`, the notification will remain open until the promise returned by `execute` resolves.

To prevent multiple `execute` calls, actions's has `disableAfterExecute` property. After the first `execute` call, the action button will be disabled and other `execute` calls will be ignored. Although this is not recommended, it is possible to change this behavior. By default it is `false` (except when `keepOpen` is `true`).

:::demo The `label` property be unique non empty string. The `execute` method must be specified.

notification/actions

:::

## Progress bar ^(X.Y.Z)

The progress bar's background color will match the notification's `type` prop. If no type is set, the color will default to 'currentColor'.

Implementation uses <a href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API'>
Web Animations API</a> and does not rely on `setInterval` and `setTimeout`.

:::demo To make the progress bar visible set the `duration` prop to a positive number and set the `showProgress` prop to `true`. Otherwise the progress bar will be hidden (but will be in DOM).

notification/progress-bar

:::

## Timer controls ^(X.Y.Z)

By default, the close timer resets on `mouseenter` and restarts on `mouseleave` events. You can change this behavior to pause and resume the timer by setting `timerControls` prop to `'pause-resume'`.

:::demo

notification/timer-controls

:::

## API

### Options

| Name                     | Description                                                                                                        | Type                                                                                                                                       | Default       |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| title                    | title                                                                                                              | ^[string]                                                                                                                                  | ''            |
| message                  | description text                                                                                                   | ^[string] / ^[VNode]                                                                                                                       | ''            |
| dangerouslyUseHTMLString | whether `message` is treated as HTML string                                                                        | ^[boolean]                                                                                                                                 | false         |
| type                     | notification type                                                                                                  | ^[enum]`'success' \| 'warning' \| 'info' \| 'error' \| ''`                                                                                 | ''            |
| icon                     | custom icon component. It will be overridden by `type`                                                             | ^[string] / ^[Component]                                                                                                                   | —             |
| customClass              | custom class name for Notification                                                                                 | ^[string]                                                                                                                                  | ''            |
| duration                 | duration before close. It will not automatically close if set 0                                                    | ^[number]                                                                                                                                  | 4500          |
| timerControls ^(X.Y.Z)   | behavior of timer upon hover over notification                                                                     | ^[enum]`'pause-resume' \| 'reset-restart'`                                                                                                 | reset-restart |
| actions ^(X.Y.Z)         | buttons for notification interaction                                                                               | ^[Array]`{ label: string; execute(): void; keepOpen?: boolean \|'until-resolved'; disableAfterExecute?: boolean; button?: ButtonProps }[]` | —             |
| position                 | custom position                                                                                                    | ^[enum]`'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'`                                                                      | top-right     |
| showClose                | whether to show a close button                                                                                     | ^[boolean]                                                                                                                                 | true          |
| showProgressBar ^(X.Y.Z) | whether to show a progress bar                                                                                     | ^[boolean]                                                                                                                                 | false         |
| onClose                  | callback function when closed                                                                                      | ^[Function]`() => void`                                                                                                                    | —             |
| onClick                  | callback function when notification clicked                                                                        | ^[Function]`() => void`                                                                                                                    | —             |
| offset                   | offset from the top edge of the screen. Every Notification instance of the same moment should have the same offset | ^[number]                                                                                                                                  | 0             |
| appendTo                 | set the root element for the notification, default to `document.body`                                              | ^[string] / ^[HTMLElement]                                                                                                                 | —             |
| zIndex                   | initial zIndex                                                                                                     | ^[number]                                                                                                                                  | 0             |

### Method

`Notification` and `this.$notify` returns the current Notification instance. To manually close the instance, you can call `close` on it.

| Name  | Description            | Type                    |
| ----- | ---------------------- | ----------------------- |
| close | close the Notification | ^[Function]`() => void` |
