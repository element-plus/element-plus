---
title: Alert
lang: en-US
---

# Alert

Displays important alert messages.

## Basic Usage

Alert components are non-overlay elements in the page that does not disappear automatically.

:::demo Alert provides 4 types of themes defined by `type`, whose default value is `info`.

alert/basic

:::

## Theme

Alert provide two different themes, `light` and `dark`.

:::demo Set `effect` to change theme, default is `light`.

alert/theme

:::

## Customizable Close Button

Customize the close button as texts or other symbols.

:::demo Alert allows you to configure if it's closable. The close button text and closing callbacks are also customizable. `closable` attribute decides if the component can be closed or not. It accepts `boolean`, and the default is `true`. You can set `close-text` attribute to replace the default cross symbol as the close button. Be careful that `close-text` must be a string. `close` event fires when the component is closed.

alert/close-button

:::

## With Icon

Displaying an icon improves readability.

:::demo Setting the `show-icon` attribute displays an icon that corresponds with the current Alert type.

alert/icon

:::

## Centered Text

Use the `center` attribute to center the text.

:::demo

alert/center

:::

## With Description

Description includes a message with more detailed information.

:::demo Besides the required `title` attribute, you can add a `description` attribute to help you describe the alert with more details. Description can only store text string, and it will word wrap automatically.

alert/description

:::

## With Icon and Description

:::demo At last, this is an example with both icon and description.

alert/icon-description

:::

## Alert API

### Attributes

| Name        | Description                              | Type                                                  | Default   | Required |
| ----------- | ---------------------------------------- | ----------------------------------------------------- | --------- | -------- |
| title       | alert title.                             | ^[string]                                             | —         | No       |
| type        | alert type.                              | ^[enum]`'success' \| 'warning' \| 'info' \| 'error' ` | `info`    | No       |
| description | descriptive text.                        | ^[string]                                             | —         | No       |
| closable    | whether alert can be dismissed.          | ^[boolean]                                            | `true`    | No       |
| center      | whether content is placed in the center. | ^[boolean]                                            | `false`   | No       |
| close-text  | customized close button text.            | ^[string]                                             | —         | No       |
| show-icon   | whether a type icon is displayed.        | ^[boolean]                                            | `false`   | No       |
| effect      | theme style.                             | ^[enum]`'light' \| 'dark'`                            | `'light'` | No       |

### Events

| Name  | Description                   | Type                                     |
| ----- | ----------------------------- | ---------------------------------------- |
| close | trigger when alert is closed. | ^[Function]`(event: MouseEvent) => void` |

### Slots

| Name    | Description                       |
| ------- | --------------------------------- |
| default | content of the alert description. |
| title   | content of the alert title.       |
