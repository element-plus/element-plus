---
title: Config Provider
lang: en-US
---

# Config Provider

Config Provider is used for providing global configurations, which enables your entire application to access these configurations everywhere

## i18n related configurations

Configure i18n related properties via Config Provider, to get language switching feature

:::demo Use two attributes to provide i18n related config

config-provider/usage

:::

## button configurations

:::demo

config-provider/button

:::

## message configurations

:::demo

config-provider/message

:::

## Config Provider Attributes

| Attribute | Description                                                                 | Type               | Accepted Values                                                                         | Default                 |
| --------- | --------------------------------------------------------------------------- | ------------------ | --------------------------------------------------------------------------------------- | ----------------------- |
| locale    | Locale Object                                                               | Object\<Language\> | [languages](https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang) | English                 |
| size      | global component size                                                       | string             | large / default /small                                                                  | default                 |
| zIndex    | global Initial zIndex                                                       | number             | -                                                                                       | -                       |
| button    | button related configuration, [see the following table](#button-attributes) | ButtonGlobalConfig | -                                                                                       | see the following table |
| message   | message related configuration, [see the following table](#message-attributes) | MessageGlobalConfig | -                                                                                    | see the following table |


## Button Attributes

| Attribute       | Description                                                 | Type    | Accepted Values | Default |
| --------------- | ----------------------------------------------------------- | ------- | --------------- | ------- |
| autoInsertSpace | automatically insert a space between two chinese characters | boolean | -               | false   |

## Message Attributes

| Attribute | Description                                                           | Type   | Accepted Values | Default |
| --------- | --------------------------------------------------------------------- | ------ | --------------- | ------- |
| max       | the maximum number of messages that can be displayed at the same time | number | -               | -       |

## ConfigProvider Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |
