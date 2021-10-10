---
title: Config Provider
locale: en-US
---

# Config Provider

Config Provider is used for providing global configurations, which enables your entire application to access these configurations everywhere

## i18n related configurations

Configure i18n related properties via Config Provider, to get language switching feature

:::demo Use two attributes to provide i18n related config

config-provider/usage

:::

## Config Provider Attributes

| Attribute | Description                                                                                                                                                       | Type                                 | Accepted Values                                                                         | Default |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------- | ------- |
| locale    | Locale Object                                                                                                                                                     | Object\<Language\>                   | [languages](https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang) | English |
| i18n      | External translator, when this attribute is provided, it will be used at first, and it will fallback to default translator when this method returns nullish value | Function\<(...args: []) =\> string\> | -                                                                                       | -       |

## ConfigProvider Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |
