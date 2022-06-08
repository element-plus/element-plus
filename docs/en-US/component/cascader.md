---
title: Cascader
lang: en-US
---

# Cascader

If the options have a clear hierarchical structure, Cascader can be used to view and select them.

## Basic usage

There are two ways to expand child option items.

:::demo Assigning the `options` attribute to an array of options renders a Cascader. The `props.expandTrigger` attribute defines how child options are expanded.

cascader/basic

:::

## Disabled option

Disable an option by setting a `disabled` field in the option object.

:::demo In this example, the first item in `options` array has a `disabled: true` field, so it is disabled. By default, Cascader checks the `disabled` field in each option object; if you are using another field name to indicate whether an option is disabled, you can assign it in the `props.disabled` attribute (see the API table below for details). And of course, field name `value`, `label` and `children` can also be customized in the same way.

cascader/option-disabling

:::

## Clearable

Set `clearable` attribute for `el-cascader` and a clear icon will appear when selected and hovered

:::demo

cascader/clearable

:::

## Display only the last level

The input can display only the last level instead of all levels.

:::demo The `show-all-levels` attribute defines if all levels are displayed. If it is `false`, only the last level is displayed.

cascader/last-level

:::

## Multiple Selection

Add `:props="props"` in tag and set data `props = { multiple: true }` to use multiple selection.

Do:

```html
<template>
  <el-cascader :props="props" />
</template>
<script lang="ts">
  export default {
    setup() {
      return {
        props: {
          // props.
          multiple: true,
        },
      }
    },
  }
</script>
```

Don't do:

```html
<template>
  <!--  Object literal binging here is invalid syntax for cascader  -->
  <el-cascader :props="{ multiple: true }" />
</template>
```

:::demo When using multiple selection, all selected tags will display by default. You can set `collapse-tags = true` to fold selected tags. You can check them when mouse hover collapse text by using `collapse-tags-tooltip` attribute.

cascader/multiple-selection

:::

## Select any level of options

In single selection, only the leaf nodes can be checked, and in multiple selection, check parent nodes will lead to leaf nodes be checked eventually. When enable this feature, it can make parent and child nodes unlinked and you can select any level of options.

:::demo Set `props.checkStrictly = true` to make checked state of a node not affects its parent nodes and child nodes, and then you can select any level of options.

cascader/any-level

:::

## Dynamic loading

Dynamic load its child nodes when checked a node.

:::demo Set `lazy = true` to use dynamic loading, and you have to specify how to load the data source by `lazyload`. There are two parameters of `lazyload`,the first parameter `node` is the node currently clicked, and the `resolve` is a callback that indicate loading is finished which must invoke. To display the status of node more accurately, you can add a `leaf` field (can be modified by `props.leaf`) to indicate whether it is a leaf node. Otherwise, it will be inferred by if has any child nodes.

cascader/dynamic-loading

:::

## Filterable

Search and select options with a keyword.

:::demo Adding `filterable` to `el-cascader` enables filtering. Cascader will match nodes whose label or parent's label (according to `show-all-levels`) includes input keyword. Of course, you can customize search logic by `filter-method` which accepts a function, the first parameter is `node`, the second is `keyword`, and need return a boolean value indicating whether it hits.

cascader/filterable

:::

## Custom option content

You can customize the content of cascader node.

:::demo You can customize the content of cascader node by `scoped slot`. You'll have access to `node` and `data` in the scope, standing for the Node object and node data of the current node respectively.

cascader/custom-content

:::

## Cascader panel

`CascaderPanel` is the core component of `Cascader` which has various of features such as single selection, multiple selection, dynamic loading and so on.

:::demo Just like `el-cascader`, you can set alternative options by `options`, and enable other features by `props`, see the API form below for details.

cascader/panel

:::

## Cascader Attributes

| Attribute                         | Description                                                                                                                                                                      | Type                    | Accepted Values             | Default |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------------- | ------- |
| model-value / v-model             | binding value                                                                                                                                                                    | -                       | —                           | —       |
| options                           | data of the options，the key of `value` and `label` can be customize by `Props`.                                                                                                 | array                   | —                           | —       |
| props                             | configuration options, see the following table.                                                                                                                                  | object                  | —                           | —       |
| size                              | size of input                                                                                                                                                                    | string                  | large / default /small      | —       |
| placeholder                       | placeholder of input                                                                                                                                                             | string                  | —                           | Select  |
| disabled                          | whether Cascader is disabled                                                                                                                                                     | boolean                 | —                           | false   |
| clearable                         | whether selected value can be cleared                                                                                                                                            | boolean                 | —                           | false   |
| show-all-levels                   | whether to display all levels of the selected value in the input                                                                                                                 | boolean                 | —                           | true    |
| collapse-tags                     | whether to collapse tags in multiple selection mode                                                                                                                              | boolean                 | -                           | false   |
| collapse-tags-tooltip             | whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true                                                                 | boolean                 | -                           | false   |
| separator                         | option label separator                                                                                                                                                           | string                  | —                           | ' / '   |
| filterable                        | whether the options can be searched                                                                                                                                              | boolean                 | —                           | —       |
| filter-method                     | customize search logic, the first parameter is `node`, the second is `keyword`, and need return a boolean value indicating whether it hits.                                      | function(node, keyword) | -                           | -       |
| debounce                          | debounce delay when typing filter keyword, in milliseconds                                                                                                                       | number                  | —                           | 300     |
| before-filter                     | hook function before filtering with the value to be filtered as its parameter. If `false` is returned or a `Promise` is returned and then is rejected, filtering will be aborted | function(value)         | —                           | —       |
| popper-class                      | custom class name for Cascader's dropdown                                                                                                                                        | string                  | —                           | —       |
| teleported                        | whether cascader popup is teleported                                                                                                                                             | boolean                 | true / false                | true    |
| popper-append-to-body(deprecated) | whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false                                                      | boolean                 | -                           | true    |
| tag-type                          | tag type                                                                                                                                                                         | string                  | success/info/warning/danger | info    |
| validate-event                    | whether to trigger form validation                                                                                                                                               | boolean                 | -                           | true    |

## Cascader Events

| Event Name     | Description                                         | Parameters                                    |
| -------------- | --------------------------------------------------- | --------------------------------------------- |
| change         | triggers when the binding value changes             | value                                         |
| expand-change  | triggers when expand option changes                 | an array of the expanding node's parent nodes |
| blur           | triggers when Cascader blurs                        | (event: Event)                                |
| focus          | triggers when Cascader focuses                      | (event: Event)                                |
| visible-change | triggers when the dropdown appears/disappears       | true when it appears, and false otherwise     |
| remove-tag     | triggers when remove tag in multiple selection mode | the value of the tag which is removed         |

## Cascader Methods

| Method Name     | Description                             | Parameters                                                                |
| --------------- | --------------------------------------- | ------------------------------------------------------------------------- |
| getCheckedNodes | get an array of currently selected node | (leafOnly) whether only return the leaf checked nodes, default is `false` |

## Cascader Slots

| Name  | Description                                                                                                                     |
| ----- | ------------------------------------------------------------------------------------------------------------------------------- |
| -     | the custom content of cascader node, the parameter is { node, data }, which are current Node object and node data respectively. |
| empty | content when there is no matched options.                                                                                       |

## CascaderPanel Attributes

| Attribute             | Description                                                                      | Type   | Accepted Values | Default |
| --------------------- | -------------------------------------------------------------------------------- | ------ | --------------- | ------- |
| model-value / v-model | binding value                                                                    | -      | —               | —       |
| options               | data of the options，the key of `value` and `label` can be customize by `Props`. | array  | —               | —       |
| props                 | configuration options, see the following table.                                  | object | —               | —       |

## CascaderPanel Events

| Event Name    | Description                             | Parameters                                    |
| ------------- | --------------------------------------- | --------------------------------------------- |
| change        | triggers when the binding value changes | value                                         |
| expand-change | triggers when expand option changes     | an array of the expanding node's parent nodes |

## CascaderPanel Methods

| Method Name       | Description                             | Parameters                                                                |
| ----------------- | --------------------------------------- | ------------------------------------------------------------------------- |
| getCheckedNodes   | get an array of currently selected node | (leafOnly) whether only return the leaf checked nodes, default is `false` |
| clearCheckedNodes | clear checked nodes                     | -                                                                         |

## CascaderPanel Slots

| Name | Description                                                                                                                     |
| ---- | ------------------------------------------------------------------------------------------------------------------------------- |
| -    | the custom content of cascader node, the parameter is { node, data }, which are current Node object and node data respectively. |

## Props

| Attribute     | Description                                                                                                | Type                    | Accepted Values | Default    |
| ------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------- | --------------- | ---------- |
| expandTrigger | trigger mode of expanding options                                                                          | string                  | click / hover   | 'click'    |
| multiple      | whether multiple selection is enabled                                                                      | boolean                 | -               | false      |
| checkStrictly | whether checked state of a node not affects its parent and child nodes                                     | boolean                 | -               | false      |
| emitPath      | when checked nodes change, whether to emit an array of node's path, if false, only emit the value of node. | boolean                 | -               | true       |
| lazy          | whether to dynamic load child nodes, use with `lazyload` attribute                                         | boolean                 | -               | false      |
| lazyLoad      | method for loading child nodes data, only works when `lazy` is true                                        | function(node, resolve) | -               | -          |
| value         | specify which key of node object is used as the node's value                                               | string                  | —               | 'value'    |
| label         | specify which key of node object is used as the node's label                                               | string                  | —               | 'label'    |
| children      | specify which key of node object is used as the node's children                                            | string                  | —               | 'children' |
| disabled      | specify which key of node object is used as the node's disabled                                            | string                  | —               | 'disabled' |
| leaf          | specify which key of node object is used as the node's leaf field                                          | string                  | —               | 'leaf'     |
