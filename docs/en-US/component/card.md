---
title: Card
lang: en-US
---

# Card

Integrate information in a card container.

## Basic usage

Card includes title, content and operations.

:::demo Card is made up of `header`, `body` and `footer`. `header` and `footer` are optional, and its content distribution depends on a named slot.

card/basic

:::

## Simple card

The header part can be omitted.

:::demo

card/simple

:::

## With images

Display richer content by adding some configs.

:::demo The `body-style` attribute defines CSS style of custom `body`.

card/with-images

:::

## Shadow

You can define when to show the card shadows

:::demo The `shadow` attribute determines when the card shadows are displayed. It can be `always`, `hover` or `never`.

card/shadow

:::

## API

### Attributes

| Name                  | Description                                                    | Type                              | Default |
| --------------------- | -------------------------------------------------------------- | --------------------------------- | ------- |
| header                | Title of the card. Also accepts a DOM passed by `slot#header`  | ^[string]                         | —       |
| footer ^(2.4.3)       | Footer of the card. Also accepts a DOM passed by `slot#footer` | ^[string]                         | —       |
| body-style            | CSS style of card body                                         | ^[object]`CSSProperties`          | —       |
| header-class ^(2.9.8) | Custom class name of card header                               | ^[string]                         | —       |
| body-class ^(2.3.10)  | Custom class name of card body                                 | ^[string]                         | —       |
| footer-class ^(2.9.8) | Custom class name of card footer                               | ^[string]                         | —       |
| shadow                | When to show card shadows                                      | ^[enum]`always \| never \| hover` | always  |

### Slots

| Name    | Description                |
| ------- | -------------------------- |
| default | Customize default content  |
| header  | Content of the Card header |
| footer  | Content of the Card footer |
