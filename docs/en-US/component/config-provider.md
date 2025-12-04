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

## Link Configurations ^(2.9.11)

:::demo

config-provider/link

:::

## Card Configurations ^(2.10.5)

:::demo

config-provider/card

:::

## Dialog Configurations ^(2.10.7)

:::demo

config-provider/dialog

:::

## Message Configurations

:::demo

config-provider/message

:::

## Empty Values Configurations ^(2.7.0)

<details>
  <summary>Supported components list</summary>

- Cascader
- ColorPicker ^(2.10.3)
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
| button                  | button related configuration, [see the following table](#button-attribute)                                                                                             | ^[object]`{autoInsertSpace?: boolean, type?: string, plain?: boolean, round?: boolean}`                                                                                                                                                                        | see the following table                                                                |
| link                    | link related configuration, [see the following table](#link-attribute)                                                                                                 | ^[object]`{type?: string, underline?: boolean \| string}`                                                                                                                                                                                                      | see the following table                                                                |
| dialog ^(2.10.7)        | dialog related configuration, [see the following table](#dialog-attribute)                                                                                             | ^[object]`{alignCenter?: boolean, draggable?: boolean, overflow?: boolean, transition?: DialogTransition}`                                                                                                                                                     | see the following table                                                                |
| message                 | message related configuration, [see the following table](#message-attribute)                                                                                           | ^[object]`{max?: number}`                                                                                                                                                                                                                                      | see the following table                                                                |
| experimental-features   | features at experimental stage to be added, all features are default to be set to false                                                                                | ^[object]                                                                                                                                                                                                                                                      | —                                                                                      |
| empty-values ^(2.7.0)   | global empty values of components                                                                                                                                      | ^[array]                                                                                                                                                                                                                                                       | —                                                                                      |
| value-on-clear ^(2.7.0) | global clear return value                                                                                                                                              | ^[string] / ^[number] / ^[boolean] / ^[Function]                                                                                                                                                                                                               | —                                                                                      |

### Button Attribute

| Attribute       | Description                                                                                                                                          | Type                                                                                      | Default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------- |
| type ^(2.9.11)  | button type, when setting `color`, the latter prevails                                                                                               | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text' (deprecated)` | —       |
| autoInsertSpace | automatically insert a space between two chinese characters(this will only take effect when the text length is 2 and all characters are in Chinese.) | ^[boolean]                                                                                | false   |
| plain ^(2.9.11) | determine whether it's a plain button                                                                                                                | ^[boolean]                                                                                | false   |
| text ^(2.11.0)  | determine whether it's a text button                                                                                                                 | ^[boolean]                                                                                | false   |
| round ^(2.9.11) | determine whether it's a round button                                                                                                                | ^[boolean]                                                                                | false   |

### Link Attribute

| Attribute           | Description                   | Type                                                                            | Default |
| ------------------- | ----------------------------- | ------------------------------------------------------------------------------- | ------- |
| type ^(2.9.11)      | type                          | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` | default |
| underline ^(2.9.11) | when underlines should appear | ^[enum]`'always' \| 'hover' \| 'never' \| boolean`                              | hover   |

### Card Attribute

| Attribute        | Description               | Type                              | Default |
| ---------------- | ------------------------- | --------------------------------- | ------- |
| shadow ^(2.10.5) | when to show card shadows | ^[enum]`always \| never \| hover` | —       |

### Dialog Attribute

| Attribute              | Description                                                                                                                    | Type                                   | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- | ------- |
| align-center ^(2.10.7) | whether to align the dialog both horizontally and vertically                                                                   | ^[boolean]                             | false   |
| draggable ^(2.10.7)    | enable dragging feature for Dialog                                                                                             | ^[boolean]                             | false   |
| overflow ^(2.10.7)     | draggable Dialog can overflow the viewport long                                                                                | ^[boolean]                             | false   |
| transition ^(2.10.7)   | custom transition configuration for dialog animation. Can be a string (transition name) or an object with Vue transition props | ^[string] / ^[object]`TransitionProps` | —       |

### Message Attribute

| Attribute           | Description                                                                    | Type                                                                                       | Default |
| ------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------- |
| max                 | the maximum number of messages that can be displayed at the same time          | ^[number]                                                                                  | —       |
| grouping ^(2.8.2)   | merge messages with the same content, type of VNode message is not supported   | ^[boolean]                                                                                 | —       |
| duration ^(2.8.2)   | display duration, millisecond. If set to 0, it will not turn off automatically | ^[number]                                                                                  | —       |
| showClose ^(2.8.2)  | whether to show a close button                                                 | ^[boolean]                                                                                 | —       |
| offset ^(2.8.2)     | set the distance to the top of viewport                                        | ^[number]                                                                                  | —       |
| plain ^(2.9.11)     | whether message is plain                                                       | ^[boolean]                                                                                 | —       |
| placement ^(2.11.0) | message placement position                                                     | ^[enum]`'top' \| 'top-left' \| 'top-right' \| 'bottom' \| 'bottom-left' \| 'bottom-right'` | —       |

### Config Provider Slots

| Name    | Description               | Type                                                    |
| ------- | ------------------------- | ------------------------------------------------------- |
| default | customize default content | config: provided global config (inherited from the top) |
