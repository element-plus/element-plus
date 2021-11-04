---
title: Virtualized Select
lang: en-US
---

# <ElBadge value="beta">Select V2 virtualized selector</ElBadge>

:::tip

This component is still under testing, if you found any bug or issue please report it at [Github](https://github.com/element-plus/element-plus/issues) for us to fix.

:::

## Background

Now days, with tons of data came from the backend server through the internet, one single selector could have ended up loading tens of thousands of data from the backend, but rendering
that much data into the DOM could be a burden to the browser which could crash the browser. For better user experience and developer experience, we decided to add this component.

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

## Hide extra tags when the selected items are too many.

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

## Customized option renderer

We can define our own template for rendering the option in the popup.

:::demo

select-v2/customized-option

:::

## Clearable selector

We can clear all the selected options at once, also applicable for single select.

:::demo

select-v2/clearable

:::

## Create Option

Create and select new items that are not included in select options

:::demo By using the `allow-create` attribute, users can create new items by typing in the input box. Note that for `allow-create` to work, `filterable` must be `true`.

select-v2/allow-create

:::

## Remote search

Enter keywords and search data from server.

:::demo Set the value of `filterable` and `remote` with `true` to enable remote search, and you should pass the `remote-method`. `remote-method` is a `Function` that gets called when the input value changes, and its parameter is the current input value.

select-v2/remote-search

:::

## SelectV2 Attributes

| Param                 | Description                                                                                                                 | Type                               | Accepted Values   | Default       |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ----------------- | ------------- |
| model-value / v-model | biding value                                                                                                                | string / number / boolean / object | —                 | —             |
| multiple              | is multiple                                                                                                                 | boolean                            | —                 | false         |
| disabled              | is disabled                                                                                                                 | boolean                            | —                 | false         |
| value-key             | unique identity key name for value, required when value is an object                                                        | string                             | —                 | value         |
| size                  | input box size                                                                                                              | string                             | medium/small/mini | —             |
| clearable             | whether select can be cleared                                                                                               | boolean                            | —                 | false         |
| collapse-tags         | whether to collapse tags to a text when multiple selecting                                                                  | boolean                            | —                 | false         |
| multiple-limit        | maximum number of options user can select when multiple is true. No limit when set to 0                                     | number                             | —                 | 0             |
| name                  | the name attribute of select input                                                                                          | string                             | —                 | —             |
| autocomplete          | select input 的 autocomplete 属性                                                                                           | string                             | —                 | off           |
| placeholder           | the autocomplete attribute of select input                                                                                  | string                             | —                 | Please select |
| filterable            | is filterable                                                                                                               | boolean                            | —                 | false         |
| allow-create          | whether creating new items is allowed. To use this, `filterable` must be true                                               | boolean                            | —                 | false         |
| no-data-text          | displayed text when there is no options, you can also use slot empty                                                        | string                             | —                 | No Data       |
| popper-class          | custom class name for Select's dropdown                                                                                     | string                             | —                 | —             |
| popper-append-to-body | whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false | boolean                            | -                 | false         |
| popper-options        | Customized popper option see more at [popper.js](https://popper.js.org/documentation.html)                                  | object                             | -                 | -             |
| automatic-dropdown    | for non-filterable Select, this prop decides if the option menu pops up when the input is focused                           | boolean                            | -                 | false         |
| clear-icon            | Customized clear icon component                                                                                             | string / Component                 | —                 | CircleClose   |
| height                | The height of the dropdown panel, 34px for each item                                                                        | number                             | -                 | 170           |
| scrollbar-always-on   | Controls whether the scrollbar is always displayed                                                                          | boolean                            | -                 | false         |

<span style="display: none;">
<!-- | no-match-text | 搜索条件无匹配时显示的文字，也可以使用`#empty`设置 | string | — | 无匹配数据 | -->
<!-- | reserve-keyword | 多选且可搜索时，是否在选中一个Option后保留当前的搜索关键词 | boolean | — | false |
| default-first-option | 在输入框按下回车，选择第一个匹配项。需配合 `filterable` 或 `remote` 使用 | boolean | - | false |
| clear-icon | 自定义清空图标的类名 | string / component | — | CircleClose |
| allow-create | 是否允许用户创建新条目，需配合 `filterable` 使用 | boolean | — | false |
| filter-method | 自定义搜索方法 | function | — | — |
| remote | 是否为远程搜索 | boolean | — | false |
| remote-method | 远程搜索方法 | function | — | — |
| loading | 是否正在从远程获取数据 | boolean | — | false |
| loading-text | 远程加载时显示的文字 | string | — | 加载中 | -->
</span>

## SelectV2 Events

| Event Name     | Description                                                   | Params                                    |
| -------------- | ------------------------------------------------------------- | ----------------------------------------- |
| change         | triggers when the selected value changes                      | current selected value                    |
| visible-change | triggers when the dropdown appears/disappears                 | true when it appears, and false otherwise |
| remove-tag     | triggers when a tag is removed in multiple mode               | removed tag value                         |
| clear          | triggers when the clear icon is clicked in a clearable Select | —                                         |
| blur           | triggers when Input blurs                                     | (event: Event)                            |
| focus          | triggers when Input focuses                                   | (event: Event)                            |

## SelectV2 Slots

|   name  | 说明               |
| ------- | ------------------ |
| default | Option renderer    |
| empty   | 无 Option 时的列表 |

<!-- | prefix  | Select 组件头部内容 | -->
