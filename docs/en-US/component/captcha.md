---
title: Captcha
lang: en-US
---

# Captcha

Captcha is a simple challenge test for users to except bot attacts and spam.

## Basic Usage

:::demo You must use `v-model` to get or set state.
captcha/basic
:::

## Component events

:::demo There are `start`, `fail`, `success` events (open the developer console to see logs). More details see [Events](#events).
captcha/events
:::

## API

### Attributes

| Name                  | Description                                                                   | Type                                     | Default |
| --------------------- | ----------------------------------------------------------------------------- | ---------------------------------------- | ------- |
| model-value / v-model | binding value                                                                 | ^[boolean]``                             | false   |
| size                  | button size                                                                   | ^[enum]`'large' \| 'default' \| 'small'` | default |
| help-text             | a translation for `help text` or if empty set up the built-in translation     | ^[string]                                | ""      |
| complete-text         | a translation for `complete text` or if empty set up the built-in translation | ^[string]                                | ""      |

### Events

| Name    | Description                                       | Type                    |
| ------- | ------------------------------------------------- | ----------------------- |
| start   | triggers when dragging starts                     | ^[Function]`() => void` |
| fail    | triggers when dragging starts, but has't finished | ^[Function]`() => void` |
| success | triggers when slider has completed                | ^[Function]`() => void` |

<!-- ### Slots

| Name | Description |
| ---- | ----------- |

### Exposes

| Name | Description | Type |
| ---- | ----------- | ---- | -->
