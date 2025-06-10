---
title: Select
lang: en-US
---

# Select

When there are plenty of options, use a drop-down menu to display and select desired ones.

:::tip

After version ^(2.5.0), the default width of `el-select` changed to `100%`. When used in a inline form, the width will collapse. In order to display the width properly, you need to give `el-select` a specific width (eg: [Example](https://github.com/element-plus/element-plus/issues/15834#issuecomment-1936919229)) .

:::

## Basic usage

:::demo `v-model` is the value of `el-option` that is currently selected.

select/basic-usage

:::

## Disabled option

:::demo Set the value of `disabled` in `el-option` to `true` to disable this option.

select/disabled-option

:::

## Disabled select

Disable the whole component.

:::demo Set `disabled` of `el-select` to make it disabled.

select/disabled

:::

## Clearable single select

You can clear Select using a clear icon.

:::demo Set `clearable` attribute for `el-select` and a clear icon will appear. Note that `clearable` is only for single select.

select/clearable

:::

## Basic multiple select

Multiple select uses tags to display selected options.

:::demo Set `multiple` attribute for `el-select` to enable multiple mode. In this case, the value of `v-model` will be an array of selected options. By default the selected options will be displayed as Tags. You can collapse them to a text by using `collapse-tags` attribute. You can check them when mouse hover collapse text by using `collapse-tags-tooltip` attribute.

select/multiple

:::

## Custom template

You can customize HTML templates for options.

:::demo Insert customized HTML templates into the slot of `el-option`.

select/custom-template

:::

## Header of the dropdown ^(2.4.3)

You can customize the header of the dropdown.

:::demo Use slot to customize the content.

select/custom-header

:::

## Footer of the dropdown ^(2.4.3)

You can customize the footer of the dropdown.

:::demo Use slot to customize the content.

select/custom-footer

:::

## Grouping

Display options in groups.

:::demo Use `el-option-group` to group the options, and its `label` attribute stands for the name of the group.

select/grouping

:::

## Option filtering

You can filter options for your desired ones.

:::demo Adding `filterable` to `el-select` enables filtering. By default, Select will find all the options whose `label` attribute contains the input value. If you prefer other filtering strategies, you can pass the `filter-method`. `filter-method` is a `Function` that gets called when the input value changes, and its parameter is the current input value.

select/filterable

:::

## Remote Search

Enter keywords and search data from server.

:::demo Set the value of `filterable` and `remote` with `true` to enable remote search, and you should pass the `remote-method`. `remote-method` is a `Function` that gets called when the input value changes, and its parameter is the current input value. Note that if `el-option` is rendered with the `v-for` directive, you should add the `key` attribute for `el-option`. Its value needs to be unique, such as `item.value` in the following example.

select/remote-search

:::

## Create new items

Create and select new items that are not included in select options

:::demo By using the `allow-create` attribute, users can create new items by typing in the input box. Note that for `allow-create` to work, `filterable` must be `true`. This example also demonstrates `default-first-option`. When this attribute is set to `true`, you can select the first option in the current option list by hitting enter without having to navigate with mouse or arrow keys.

select/allow-create

:::

## Use value-key attribute

If the binding value of Select is an object, make sure to assign `value-key` as its unique identity key name.

:::demo By using the `value-key` attribute, data with duplicate labels can be properly handled. The value of the `label` property is duplicated, but the option can be identified through the `id`.

select/value-key

:::

## Custom Tag ^(2.5.0)

You can customize tags.

:::demo Insert customized tags into the slot of `el-select`. `collapse-tags`, `collapse-tags-tooltip`, `max-collapse-tags` will not work.

select/custom-tag

:::

## Custom Loading ^(2.5.2)

Override loading content.

:::demo

select/custom-loading

:::

## Empty Values ^(2.7.0)

If you want to support empty string, please set `empty-values` to `[null, undefined]`.

If you want to change the clear value to `null`, please set `value-on-clear` to `null`.

:::demo

select/empty-values

:::

## Custom Label ^(2.7.4)

You can customize label.

:::demo

select/custom-label

:::

## Select API

### Select Attributes

| Name                            | Description                                                                                                           | Type                                                                                                                                                                        | Default                                        |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| model-value / v-model           | binding value                                                                                                         | ^[string] / ^[number] / ^[boolean] / ^[object] / ^[array]                                                                                                                   | —                                              |
| multiple                        | whether multiple-select is activated                                                                                  | ^[boolean]                                                                                                                                                                  | false                                          |
| disabled                        | whether Select is disabled                                                                                            | ^[boolean]                                                                                                                                                                  | false                                          |
| value-key                       | unique identity key name for value, required when value is an object                                                  | ^[string]                                                                                                                                                                   | value                                          |
| size                            | size of Input                                                                                                         | ^[enum]`'' \| 'large' \| 'default' \| 'small'`                                                                                                                              | —                                              |
| clearable                       | whether select can be cleared                                                                                         | ^[boolean]                                                                                                                                                                  | false                                          |
| collapse-tags                   | whether to collapse tags to a text when multiple selecting                                                            | ^[boolean]                                                                                                                                                                  | false                                          |
| collapse-tags-tooltip ^(2.3.0)  | whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true      | ^[boolean]                                                                                                                                                                  | false                                          |
| multiple-limit                  | maximum number of options user can select when `multiple` is `true`. No limit when set to 0                           | ^[number]                                                                                                                                                                   | 0                                              |
| name                            | the name attribute of select input                                                                                    | ^[string]                                                                                                                                                                   | —                                              |
| effect                          | tooltip theme, built-in theme: `dark` / `light`                                                                       | ^[enum]`'dark' \| 'light'` / ^[string]                                                                                                                                      | light                                          |
| autocomplete                    | the autocomplete attribute of select input                                                                            | ^[string]                                                                                                                                                                   | off                                            |
| placeholder                     | placeholder, default is 'Select'                                                                                      | ^[string]                                                                                                                                                                   | —                                              |
| filterable                      | whether Select is filterable                                                                                          | ^[boolean]                                                                                                                                                                  | false                                          |
| allow-create                    | whether creating new items is allowed. To use this, `filterable` must be true                                         | ^[boolean]                                                                                                                                                                  | false                                          |
| filter-method                   | custom filter method                                                                                                  | ^[Function]`() => void`                                                                                                                                                     | —                                              |
| remote                          | whether options are loaded from server                                                                                | ^[boolean]                                                                                                                                                                  | false                                          |
| remote-method                   | custom remote search method                                                                                           | ^[Function]`() => void`                                                                                                                                                     | —                                              |
| remote-show-suffix              | in remote search method show suffix icon                                                                              | ^[boolean]                                                                                                                                                                  | false                                          |
| loading                         | whether Select is loading data from server                                                                            | ^[boolean]                                                                                                                                                                  | false                                          |
| loading-text                    | displayed text while loading data from server, default is 'Loading'                                                   | ^[string]                                                                                                                                                                   | —                                              |
| no-match-text                   | displayed text when no data matches the filtering query, you can also use slot `empty`, default is 'No matching data' | ^[string]                                                                                                                                                                   | —                                              |
| no-data-text                    | displayed text when there is no options, you can also use slot `empty`, default is 'No data'                          | ^[string]                                                                                                                                                                   | —                                              |
| popper-class                    | custom class name for Select's dropdown                                                                               | ^[string]                                                                                                                                                                   | ''                                             |
| reserve-keyword                 | when `multiple` and `filterable` is true, whether to reserve current keyword after selecting an option                | ^[boolean]                                                                                                                                                                  | true                                           |
| default-first-option            | select first matching option on enter key. Use with `filterable` or `remote`                                          | ^[boolean]                                                                                                                                                                  | false                                          |
| teleported                      | whether select dropdown is teleported, if `true` it will be teleported to where `append-to` sets                      | ^[boolean]                                                                                                                                                                  | true                                           |
| append-to ^(2.8.4)              | which element the select dropdown appends to                                                                          | ^[CSSSelector] / ^[HTMLElement]                                                                                                                                             | —                                              |
| persistent                      | when select dropdown is inactive and `persistent` is `false`, select dropdown will be destroyed                       | ^[boolean]                                                                                                                                                                  | true                                           |
| automatic-dropdown              | for non-filterable Select, this prop decides if the option menu pops up when the input is focused                     | ^[boolean]                                                                                                                                                                  | false                                          |
| clear-icon                      | custom clear icon component                                                                                           | ^[string] / ^[object]`Component`                                                                                                                                            | CircleClose                                    |
| fit-input-width                 | whether the width of the dropdown is the same as the input                                                            | ^[boolean]                                                                                                                                                                  | false                                          |
| suffix-icon                     | custom suffix icon component                                                                                          | ^[string] / ^[object]`Component`                                                                                                                                            | ArrowDown                                      |
| tag-type                        | tag type                                                                                                              | ^[enum]`'' \| 'success' \| 'info' \| 'warning' \| 'danger'`                                                                                                                 | info                                           |
| tag-effect ^(2.7.7)             | tag effect                                                                                                            | ^[enum]`'' \| 'light' \| 'dark' \| 'plain'`                                                                                                                                 | light                                          |
| validate-event                  | whether to trigger form validation                                                                                    | ^[boolean]                                                                                                                                                                  | true                                           |
| offset ^(2.8.8)                 | offset of the dropdown                                                                                                | ^[number]                                                                                                                                                                   | 12                                             |
| show-arrow ^(2.8.8)             | whether the dropdown has an arrow                                                                                     | ^[boolean]                                                                                                                                                                  | true                                           |
| placement ^(2.2.17)             | position of dropdown                                                                                                  | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | bottom-start                                   |
| fallback-placements ^(2.5.6)    | list of possible positions for dropdown [popper.js](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements) | ^[array]`Placement[]`                                                                                                                                                       | ['bottom-start', 'top-start', 'right', 'left'] |
| max-collapse-tags ^(2.3.0)      | the max tags number to be shown. To use this, `collapse-tags` must be true                                            | ^[number]                                                                                                                                                                   | 1                                              |
| popper-options                  | [popper.js](https://popper.js.org/docs/v2/) parameters                                                                | ^[object]refer to [popper.js](https://popper.js.org/docs/v2/) doc                                                                                                           | {}                                             |
| aria-label ^(a11y)              | same as `aria-label` in native input                                                                                  | ^[string]                                                                                                                                                                   | —                                              |
| empty-values ^(2.7.0)           | empty values of component, [see config-provider](/en-US/component/config-provider#empty-values-configurations)        | ^[array]                                                                                                                                                                    | —                                              |
| value-on-clear ^(2.7.0)         | clear return value, [see config-provider](/en-US/component/config-provider#empty-values-configurations)               | ^[string] / ^[number] / ^[boolean] / ^[Function]                                                                                                                            | —                                              |
| suffix-transition ^(deprecated) | animation when dropdown appears/disappears icon                                                                       | ^[boolean]                                                                                                                                                                  | true                                           |
| tabindex ^(2.9.0)               | tabindex for input                                                                                                    | ^[string] / ^[number]                                                                                                                                                       | —                                              |

:::warning

`suffix-transition` has been **deprecated**, and **will be** removed in ^(2.4.0), please use override style scheme.

:::

### Select Events

| Name                  | Description                                                   | Type                                                                |
| --------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------- |
| change                | triggers when the selected value changes                      | ^[Function]`(value: any) => void`                                   |
| visible-change        | triggers when the dropdown appears/disappears                 | ^[Function]`(visible: boolean) => void`                             |
| remove-tag            | triggers when a tag is removed in multiple mode               | ^[Function]`(tagValue: any) => void`                                |
| clear                 | triggers when the clear icon is clicked in a clearable Select | ^[Function]`() => void`                                             |
| blur                  | triggers when Input blurs                                     | ^[Function]`(event: FocusEvent) => void`                            |
| focus                 | triggers when Input focuses                                   | ^[Function]`(event: FocusEvent) => void`                            |
| popup-scroll ^(2.9.4) | triggers when dropdown scrolls                                | ^[Function]`(data:{scrollTop: number, scrollLeft: number}) => void` |

### Select Slots

| Name             | Description                           | Subtags               |
| ---------------- | ------------------------------------- | --------------------- |
| default          | option component list                 | Option Group / Option |
| header ^(2.4.3)  | content at the top of the dropdown    | —                     |
| footer ^(2.4.3)  | content at the bottom of the dropdown | —                     |
| prefix           | content as Select prefix              | —                     |
| empty            | content when there is no options      | —                     |
| tag ^(2.5.0)     | content as Select tag                 | —                     |
| loading ^(2.5.2) | content as Select loading             | —                     |
| label ^(2.7.4)   | content as Select label               | —                     |

### Select Exposes

| Name                   | Description                                     | Type                                       |
| ---------------------- | ----------------------------------------------- | ------------------------------------------ |
| focus                  | focus the Input component                       | ^[Function]`() => void`                    |
| blur                   | blur the Input component, and hide the dropdown | ^[Function]`() => void`                    |
| selectedLabel ^(2.8.5) | get the currently selected label                | ^[object]`ComputedRef<string \| string[]>` |

## Option Group API

### Option Group Attributes

| Name     | Description                                  | Type       | Default |
| -------- | -------------------------------------------- | ---------- | ------- |
| label    | name of the group                            | ^[string]  | —       |
| disabled | whether to disable all options in this group | ^[boolean] | false   |

### Option Group Slots

| Name    | Description               | Subtags |
| ------- | ------------------------- | ------- |
| default | customize default content | Option  |

## Option API

### Option Attributes

| Name     | Description                                 | Type                                           | Default |
| -------- | ------------------------------------------- | ---------------------------------------------- | ------- |
| value    | value of option                             | ^[string] / ^[number] / ^[boolean] / ^[object] | —       |
| label    | label of option, same as `value` if omitted | ^[string] / ^[number]                          | —       |
| disabled | whether option is disabled                  | ^[boolean]                                     | false   |

### Option Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
