---
title: Virtualized Select
lang: en-US
---

# Virtualized Select

:::tip

This component is still under testing, if you found any bug or issue please report it at [GitHub](https://github.com/element-plus/element-plus/issues) for us to fix.

:::

## Background

In some use-cases, a single selector may end up loading tens of thousands of rows of data.
Rendering that much data into the DOM could be a burden to the browser, which can result in performance issues.
For a better user and developer experience, we decided to add this component.

## Basic usage

The simplest selector

:::demo

select-v2/basic-usage

:::

## Multi select

The basic multi-select selector with tags

:::demo

select-v2/multiple

:::

## Hide extra tags when the selected items are too many

You can collapse tags to a text by using `collapse-tags` attribute. You can check them when mouse hover collapse text by using `collapse-tags-tooltip` attribute.

:::demo

select-v2/hide-extra-tags

:::

## Filterable multi-select

When the options are overwhelmingly too many, you can use `filterable` option to enable filter feature for finding out the desired option

:::demo

select-v2/filterable

:::

## Disabled selector and select options

You can choose to disable selector itself or the option.

:::demo

select-v2/disabled

:::

## Option Grouping

We can group option as we wanted, as long as the data satisfies the pattern.

:::demo

select-v2/grouping

:::

## Clearable selector

We can clear all the selected options at once, also applicable for single select.

:::demo

select-v2/clearable

:::

## Customized option renderer

We can define our own template for rendering the option in the popup.

:::demo

select-v2/customized-option

:::

## Header of the dropdown ^(2.5.2)

You can customize the header of the dropdown.

:::demo Use slot to customize the content.

select-v2/custom-header

:::

## Footer of the dropdown ^(2.5.2)

You can customize the footer of the dropdown.

:::demo Use slot to customize the content.

select-v2/custom-footer

:::

## Create Option

Create and select new items that are not included in select options

By using the `allow-create` attribute, users can create new items by typing in the input box. Note that for `allow-create` to work, `filterable` must be `true`. This example also demonstrates `default-first-option`. When this attribute is set to `true`, you can select the first option in the current option list by hitting enter without having to navigate with mouse or arrow keys.

:::tip

It will be better to set `:reserve-keyword="false"` when use `allow-create`

:::

:::demo

select-v2/allow-create

:::

## Remote search

Enter keywords and search data from server.

:::demo Set the value of `filterable` and `remote` with `true` to enable remote search, and you should pass the `remote-method`. `remote-method` is a `Function` that gets called when the input value changes, and its parameter is the current input value.

select-v2/remote-search

:::

## Use value-key attribute

when `options.value` is an object, you should set a unique identity key name for value

::: tip

Before ^(2.4.0), `value-key` was used both as the unique value of the selected object and as an alias for the value in `options`. Now `value-key` is only used as the unique value of the selected object, and the alias for the value in options is `props.value`.

:::

:::demo

select-v2/use-valueKey

:::

## Aliases for custom options ^(2.4.2)

When your `options` format is different from the default format, you can customize the alias of the `options` through the `props` attribute

:::demo

select-v2/props

:::

## Custom Tag ^(2.5.0)

You can customize tags.

:::demo Insert customized tags into the slot of `el-select`. `collapse-tags`, `collapse-tags-tooltip`, `max-collapse-tags` will not work.

select-v2/custom-tag

:::

## Custom Loading ^(2.5.2)

Override loading content.

:::demo

select-v2/custom-loading

:::

## Empty Values ^(2.7.0)

If you want to support empty string, please set `empty-values` to `[null, undefined]`.

If you want to change the clear value to `null`, please set `value-on-clear` to `null`.

:::demo

select-v2/empty-values

:::

## Custom Label ^(2.7.4)

You can customize label.

:::demo

select-v2/custom-label

:::

## Custom Width ^(2.9.2)

The width of dropdown box is calculated by default based on the value of `label`. If you customize the dropdown box options through the `default slot`, it is likely that the text displayed in the options is not equal to the value of `label`, resulting in calculation errors. In this case, you can set the `fit-input-width` attribute to a number to fix its width.

:::demo

select-v2/custom-width

:::

## API

### Attributes

| Name                                | Description                                                                                                                              | Type                                                                                                                                                                        | Default                                        |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| model-value / v-model               | binding value                                                                                                                            | ^[string] / ^[number] / ^[boolean] / ^[object] / ^[array]                                                                                                                   | —                                              |
| options                             | data of the options, the key of `value` and `label` can be customize by `props`                                                          | ^[array]                                                                                                                                                                    | —                                              |
| props ^(2.4.2)                      | configuration options, see the following table                                                                                           | ^[object]                                                                                                                                                                   | —                                              |
| multiple                            | is multiple                                                                                                                              | ^[boolean]                                                                                                                                                                  | false                                          |
| disabled                            | is disabled                                                                                                                              | ^[boolean]                                                                                                                                                                  | false                                          |
| value-key                           | unique identity key name for value, required when value is an object                                                                     | ^[string]                                                                                                                                                                   | value                                          |
| size                                | size of component                                                                                                                        | ^[enum]`'' \| 'large' \| 'default' \| 'small'`                                                                                                                              | ''                                             |
| clearable                           | whether select can be cleared                                                                                                            | ^[boolean]                                                                                                                                                                  | false                                          |
| clear-icon                          | custom clear icon                                                                                                                        | ^[string] / ^[object]`Component`                                                                                                                                            | CircleClose                                    |
| collapse-tags                       | whether to collapse tags to a text when multiple selecting                                                                               | ^[boolean]                                                                                                                                                                  | false                                          |
| multiple-limit                      | maximum number of options user can select when multiple is true. No limit when set to 0                                                  | ^[number]                                                                                                                                                                   | 0                                              |
| name                                | the name attribute of select input                                                                                                       | ^[string]                                                                                                                                                                   | —                                              |
| effect                              | tooltip theme, built-in theme: `dark` / `light`                                                                                          | ^[enum]`'dark' \| 'light'` / ^[string]                                                                                                                                      | light                                          |
| autocomplete                        | autocomplete of select input                                                                                                             | ^[string]                                                                                                                                                                   | off                                            |
| placeholder                         | placeholder                                                                                                                              | ^[string]                                                                                                                                                                   | Please select                                  |
| filterable                          | is filterable                                                                                                                            | ^[boolean]                                                                                                                                                                  | false                                          |
| allow-create                        | whether creating new items is allowed. To use this, `filterable` must be true                                                            | ^[boolean]                                                                                                                                                                  | false                                          |
| filter-method                       | custom filter method                                                                                                                     | ^[Function]`() => void`                                                                                                                                                     | —                                              |
| loading                             | whether Select is loading data from server                                                                                               | ^[boolean]                                                                                                                                                                  | false                                          |
| loading-text                        | displayed text while loading data from server, default is 'Loading'                                                                      | ^[string]                                                                                                                                                                   | —                                              |
| reserve-keyword                     | whether reserve the keyword after select filtered option.                                                                                | ^[boolean]                                                                                                                                                                  | true                                           |
| default-first-option                | select first matching option on enter key. Use with `filterable` or `remote`                                                             | ^[boolean]                                                                                                                                                                  | false                                          |
| no-match-text                       | displayed text when no data matches the filtering query, you can also use slot `empty`, default is 'No matching data'                    | ^[string]                                                                                                                                                                   | —                                              |
| no-data-text                        | displayed text when there is no options, you can also use slot empty                                                                     | ^[string]                                                                                                                                                                   | No Data                                        |
| popper-class                        | custom class name for Select's dropdown                                                                                                  | ^[string]                                                                                                                                                                   | ''                                             |
| teleported                          | whether select dropdown is teleported, if `true` it will be teleported to where `append-to` sets                                         | ^[boolean]                                                                                                                                                                  | true                                           |
| append-to ^(2.8.8)                  | which element the select dropdown appends to                                                                                             | ^[CSSSelector] / ^[HTMLElement]                                                                                                                                             | —                                              |
| persistent                          | when select dropdown is inactive and `persistent` is `false`, select dropdown will be destroyed                                          | ^[boolean]                                                                                                                                                                  | true                                           |
| popper-options                      | [popper.js](https://popper.js.org/docs/v2/) parameters                                                                                   | ^[object]refer to [popper.js](https://popper.js.org/docs/v2/) doc                                                                                                           | {}                                             |
| automatic-dropdown                  | for non-filterable Select, this prop decides if the option menu pops up when the input is focused                                        | ^[boolean]                                                                                                                                                                  | false                                          |
| fit-input-width ^(2.9.2)            | whether the width of the dropdown is the same as the input, if the value is `number`, then the width is fixed                            | ^[boolean] / ^[number]                                                                                                                                                      | true                                           |
| suffix-icon ^(2.9.8)                | custom suffix icon component                                                                                                             | ^[string] / ^[object]`Component`                                                                                                                                            | ArrowDown                                      |
| height                              | The height of the dropdown panel, 34px for each item                                                                                     | ^[number]                                                                                                                                                                   | 274                                            |
| item-height                         | The height of the dropdown item                                                                                                          | ^[number]                                                                                                                                                                   | 34                                             |
| scrollbar-always-on                 | Controls whether the scrollbar is always displayed                                                                                       | ^[boolean]                                                                                                                                                                  | false                                          |
| remote                              | whether search data from server                                                                                                          | ^[boolean]                                                                                                                                                                  | false                                          |
| remote-method                       | function that gets called when the input value changes. Its parameter is the current input value. To use this, `filterable` must be true | ^[Function]`(keyword: string) => void`                                                                                                                                      | —                                              |
| validate-event                      | whether to trigger form validation                                                                                                       | ^[boolean]                                                                                                                                                                  | true                                           |
| offset ^(2.8.8)                     | offset of the dropdown                                                                                                                   | ^[number]                                                                                                                                                                   | 12                                             |
| show-arrow ^(2.8.8)                 | whether the dropdown has an arrow                                                                                                        | ^[boolean]                                                                                                                                                                  | true                                           |
| placement                           | position of dropdown                                                                                                                     | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | bottom-start                                   |
| fallback-placements ^(2.5.6)        | list of possible positions for dropdown [popper.js](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements)                    | ^[array]`Placement[]`                                                                                                                                                       | ['bottom-start', 'top-start', 'right', 'left'] |
| collapse-tags-tooltip ^(2.3.0)      | whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true                         | ^[boolean]                                                                                                                                                                  | false                                          |
| max-collapse-tags ^(2.3.0)          | The max tags number to be shown. To use this, `collapse-tags` must be true                                                               | ^[number]                                                                                                                                                                   | 1                                              |
| tag-type ^(2.5.0)                   | tag type                                                                                                                                 | ^[enum]`'' \| 'success' \| 'info' \| 'warning' \| 'danger'`                                                                                                                 | info                                           |
| tag-effect ^(2.7.7)                 | tag effect                                                                                                                               | ^[enum]`'' \| 'light' \| 'dark' \| 'plain'`                                                                                                                                 | light                                          |
| aria-label ^(a11y) ^(2.5.0)         | same as `aria-label` in native input                                                                                                     | ^[string]                                                                                                                                                                   | —                                              |
| empty-values ^(2.7.0)               | empty values of component, [see config-provider](/en-US/component/config-provider#empty-values-configurations)                           | ^[array]                                                                                                                                                                    | —                                              |
| value-on-clear ^(2.7.0)             | clear return value, [see config-provider](/en-US/component/config-provider#empty-values-configurations)                                  | ^[string] / ^[number] / ^[boolean] / ^[Function]                                                                                                                            | —                                              |
| popper-append-to-body ^(deprecated) | whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false              | ^[boolean]                                                                                                                                                                  | false                                          |
| tabindex ^(2.9.0)                   | tabindex for input                                                                                                                       | ^[string] / ^[number]                                                                                                                                                       | —                                              |

### props

| Attribute | Description                                                     | Type      | Default  |
| --------- | --------------------------------------------------------------- | --------- | -------- |
| value     | specify which key of node object is used as the node's value    | ^[string] | value    |
| label     | specify which key of node object is used as the node's label    | ^[string] | label    |
| options   | specify which key of node object is used as the node's children | ^[string] | options  |
| disabled  | specify which key of node object is used as the node's disabled | ^[string] | disabled |

### Events

| Name           | Description                                                                                                | Type                                     |
| -------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| change         | triggers when the selected value changes, the param is current selected value                              | ^[Function]`(val: any) => void`          |
| visible-change | triggers when the dropdown appears/disappears, the param will be true when it appears, and false otherwise | ^[Function]`(visible: boolean) => void`  |
| remove-tag     | triggers when a tag is removed in multiple mode, the param is removed tag value                            | ^[Function]`(tagValue: any) => void`     |
| clear          | triggers when the clear icon is clicked in a clearable Select                                              | ^[Function]`() => void`                  |
| blur           | triggers when Input blurs                                                                                  | ^[Function]`(event: FocusEvent) => void` |
| focus          | triggers when Input focuses                                                                                | ^[Function]`(event: FocusEvent) => void` |

### Slots

| Name             | Description                           |
| ---------------- | ------------------------------------- |
| default          | Option renderer                       |
| header ^(2.5.2)  | content at the top of the dropdown    |
| footer ^(2.5.2)  | content at the bottom of the dropdown |
| empty            | content when options is empty         |
| prefix           | prefix content of input               |
| tag ^(2.5.0)     | content as Select tag                 |
| loading ^(2.5.2) | content as Select loading             |
| label ^(2.7.4)   | content as Select label               |

### Exposes

| Name                   | Description                                     | Type                                       |
| ---------------------- | ----------------------------------------------- | ------------------------------------------ |
| focus                  | focus the Input component                       | ^[Function]`() => void`                    |
| blur                   | blur the Input component, and hide the dropdown | ^[Function]`() => void`                    |
| selectedLabel ^(2.8.5) | get the currently selected label                | ^[object]`ComputedRef<string \| string[]>` |
