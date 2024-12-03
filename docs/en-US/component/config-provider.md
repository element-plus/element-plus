---
title: Config Provider
lang: en-US
---

# Config Provider

Config Provider is used for providing global configurations, which enables your entire application to access these configurations everywhere.

## i18n Configurations

Configure i18n related properties via Config Provider, to get language switching feature.

:::demo Use two attributes to provide i18n related config

config-provider/usage

:::

## Button Configurations

:::demo

config-provider/button

:::

## Message Configurations

:::demo

config-provider/message

:::

## Empty Values Configurations ^(2.7.0)

<details>
  <summary>Supported components list</summary>

- Cascader
- DatePicker
- Select
- SelectV2
- TimePicker
- TimeSelect
- TreeSelect

</details>

Set `empty-values` to support empty values of components. The fallback value is `['', null, undefined]`. If you think the empty string is meaningful, write `[undefined, null]`.

Set `value-on-clear` to set the return value when cleared. The fallback value is `undefined`. In the date component is `null`. If you want to set `undefined`, use `() => undefined`.

:::demo

config-provider/empty-values

:::

## Experimental features

In this section, you can learn how to use Config Provider to provide experimental features. For now, we haven't added any experimental features, but in the feature roadmap, we will add some experimental features. You can use this config to manage the features you want or not.

 <!-- TODO -->

## API

### Config Provider Attributes

| Name                    | Description                                                                                                                                                            | Type                                                                                                                                                                                                                                                           | Default                                                                                |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| locale                  | Locale Object                                                                                                                                                          | ^[object]`{name: string, el: TranslatePair}`[](https://github.com/element-plus/element-plus/blob/a98ff9b40c0c3d2b9959f99919bd8363e3e3c25a/packages/locale/index.ts#L5) [languages](https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang) | [en](https://github.com/element-plus/element-plus/blob/dev/packages/locale/lang/en.ts) |
| size                    | global component size                                                                                                                                                  | ^[enum]`'large' \| 'default' \| 'small'`                                                                                                                                                                                                                       | default                                                                                |
| zIndex                  | global Initial zIndex                                                                                                                                                  | ^[number]                                                                                                                                                                                                                                                      | —                                                                                      |
| namespace               | global component className prefix (cooperated with [$namespace](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1)) | ^[string]                                                                                                                                                                                                                                                      | el                                                                                     |
| button                  | button related configuration, [see the following table](#button-attribute)                                                                                             | ^[object]`{autoInsertSpace?: boolean}`                                                                                                                                                                                                                         | see the following table                                                                |
| message                 | message related configuration, [see the following table](#message-attribute)                                                                                           | ^[object]`{max?: number}`                                                                                                                                                                                                                                      | see the following table                                                                |
| experimental-features   | features at experimental stage to be added, all features are default to be set to false                                                                                | ^[object]                                                                                                                                                                                                                                                      | —                                                                                      |
| empty-values ^(2.7.0)   | global empty values of components                                                                                                                                      | ^[array]                                                                                                                                                                                                                                                       | —                                                                                      |
| value-on-clear ^(2.7.0) | global clear return value                                                                                                                                              | ^[string] / ^[number] / ^[boolean] / ^[Function]                                                                                                                                                                                                               | —                                                                                      |

### Button Attribute

| Attribute       | Description                                                                                                                                          | Type       | Default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------- |
| autoInsertSpace | automatically insert a space between two chinese characters(this will only take effect when the text length is 2 and all characters are in Chinese.) | ^[boolean] | false   |

### Message Attribute

| Attribute          | Description                                                                    | Type       | Default |
| ------------------ | ------------------------------------------------------------------------------ | ---------- | ------- |
| max                | the maximum number of messages that can be displayed at the same time          | ^[number]  | —       |
| grouping ^(2.8.2)  | merge messages with the same content, type of VNode message is not supported   | ^[boolean] | —       |
| duration ^(2.8.2)  | display duration, millisecond. If set to 0, it will not turn off automatically | ^[number]  | —       |
| showClose ^(2.8.2) | whether to show a close button                                                 | ^[boolean] | —       |
| offset ^(2.8.2)    | set the distance to the top of viewport                                        | ^[number]  | —       |

### Config Provider Slots

| Name    | Description               | Scope                                                   |
| ------- | ------------------------- | ------------------------------------------------------- |
| default | customize default content | config: provided global config (inherited from the top) |
