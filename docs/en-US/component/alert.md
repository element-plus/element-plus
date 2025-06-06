---
title: Alert
lang: en-US
---

# Alert

Displays important alert messages.

## Basic Usage

Alert components are non-overlay elements in the page that does not disappear automatically.

:::demo Alert provides 5 types of themes defined by `type`, whose default value is `info`. `primary` has been added in ^(2.9.11).

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

:::demo Setting the `show-icon` attribute displays an icon that corresponds with the current Alert type. Or use the `icon` slot to customize icon.

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

## With Delayed Attributes ^(2.9.12)

:::demo At last, this is an example with delayed attributes.

alert/delayed

:::

## Alert API

### Attributes

| Name                 | Description                              | Type                                                                       | Default |
| -------------------- | ---------------------------------------- | -------------------------------------------------------------------------- | ------- |
| title                | alert title.                             | ^[string]                                                                  | —       |
| type                 | alert type.                              | ^[enum]`'primary' (2.9.11) \| 'success' \| 'warning' \| 'info' \| 'error'` | info    |
| description          | descriptive text.                        | ^[string]                                                                  | —       |
| closable             | whether alert can be dismissed.          | ^[boolean]                                                                 | true    |
| center               | whether content is placed in the center. | ^[boolean]                                                                 | false   |
| close-text           | customized close button text.            | ^[string]                                                                  | —       |
| show-icon            | whether a type icon is displayed.        | ^[boolean]                                                                 | false   |
| effect               | theme style.                             | ^[enum]`'light' \| 'dark'`                                                 | light   |
| show-after ^(2.9.12) | delay of appearance, in millisecond      | ^[number]                                                                  | 0       |
| hide-after ^(2.9.12) | delay of disappear, in millisecond       | ^[number]                                                                  | 200     |
| auto-close ^(2.9.12) | timeout in milliseconds to hide alert    | ^[number]                                                                  | 0       |

### Events

| Name           | Description                   | Type                                 |
| -------------- | ----------------------------- | ------------------------------------ |
| open ^(2.9.12) | trigger when alert is opened. | ^[Function]`() => void`              |
| close          | trigger when alert is closed. | ^[Function]`(event?: Event) => void` |

### Slots

| Name          | Description                       |
| ------------- | --------------------------------- |
| default       | content of the alert description. |
| title         | content of the alert title.       |
| icon ^(2.9.7) | content of the alert icon.        |
