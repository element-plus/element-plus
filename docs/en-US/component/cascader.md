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
<script lang="ts" setup>
  const props = { multiple: true }
</script>
```

Don't do:

```html
<template>
  <!--  Object literal binging here is invalid syntax for cascader  -->
  <el-cascader :props="{ multiple: true }" />
</template>
```

:::demo When using multiple selection, all selected tags will display by default. You can set `collapse-tags = true` to fold selected tags. You can set `max-collapse-tags` to show max tags number, default 1. You can check them when mouse hover collapse text by using `collapse-tags-tooltip` attribute.

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

## Custom suggestion item ^(2.9.5)

You can customize the filter suggestion item by `suggestion-item` slot. You'll have access to `item` in the scope, standing for the suggestion item.

:::demo

cascader/custom-suggestion-item

:::

## Cascader panel

`CascaderPanel` is the core component of `Cascader` which has various of features such as single selection, multiple selection, dynamic loading and so on.

:::demo Just like `el-cascader`, you can set alternative options by `options`, and enable other features by `props`, see the API form below for details.

cascader/panel

:::

## Cascader API

### Cascader Attributes

| Name                                | Description                                                                                                                                                                      | Type                                                                                                                                                                        | Default      |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| model-value / v-model               | binding value                                                                                                                                                                    | ^[string]/^[number]/^[object]`string[] \| number[] \| any`                                                                                                                  | —            |
| options                             | data of the options, the key of `value` and `label` can be customize by `CascaderProps`.                                                                                         | ^[object]`Record<string, unknown>[]`                                                                                                                                        | —            |
| props                               | configuration options, see the following `CascaderProps` table.                                                                                                                  | ^[object]`CascaderProps`                                                                                                                                                    | —            |
| size                                | size of input                                                                                                                                                                    | ^[enum]`'large' \| 'default' \| 'small'`                                                                                                                                    | —            |
| placeholder                         | placeholder of input                                                                                                                                                             | ^[string]                                                                                                                                                                   | —            |
| disabled                            | whether Cascader is disabled                                                                                                                                                     | ^[boolean]                                                                                                                                                                  | —            |
| clearable                           | whether selected value can be cleared                                                                                                                                            | ^[boolean]                                                                                                                                                                  | —            |
| show-all-levels                     | whether to display all levels of the selected value in the input                                                                                                                 | ^[boolean]                                                                                                                                                                  | true         |
| collapse-tags                       | whether to collapse tags in multiple selection mode                                                                                                                              | ^[boolean]                                                                                                                                                                  | —            |
| collapse-tags-tooltip               | whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true                                                                 | ^[boolean]                                                                                                                                                                  | false        |
| separator                           | option label separator                                                                                                                                                           | ^[string]                                                                                                                                                                   | ' / '        |
| filterable                          | whether the options can be searched                                                                                                                                              | ^[boolean]                                                                                                                                                                  | —            |
| filter-method                       | customize search logic, the first parameter is `node`, the second is `keyword`, and need return a boolean value indicating whether it hits.                                      | ^[Function]`(node: CascaderNode, keyword: string) => boolean`                                                                                                               | —            |
| debounce                            | debounce delay when typing filter keyword, in milliseconds                                                                                                                       | ^[number]                                                                                                                                                                   | 300          |
| before-filter                       | hook function before filtering with the value to be filtered as its parameter. If `false` is returned or a `Promise` is returned and then is rejected, filtering will be aborted | ^[Function]`(value: string) => boolean`                                                                                                                                     | —            |
| popper-class                        | custom class name for Cascader's dropdown                                                                                                                                        | ^[string]                                                                                                                                                                   | ''           |
| teleported                          | whether cascader popup is teleported                                                                                                                                             | ^[boolean]                                                                                                                                                                  | true         |
| tag-type                            | tag type                                                                                                                                                                         | ^[enum]`'success' \| 'info' \| 'warning' \| 'danger'`                                                                                                                       | info         |
| tag-effect ^(2.7.8)                 | tag effect                                                                                                                                                                       | ^[enum]`'light' \| 'dark' \| 'plain'`                                                                                                                                       | light        |
| validate-event                      | whether to trigger form validation                                                                                                                                               | ^[boolean]                                                                                                                                                                  | true         |
| max-collapse-tags ^(2.3.10)         | The max tags number to be shown. To use this, `collpase-tags` must be true                                                                                                       | ^[number]                                                                                                                                                                   | 1            |
| empty-values ^(2.7.0)               | empty values of component, [see config-provider](/en-US/component/config-provider#empty-values-configurations)                                                                   | ^[array]                                                                                                                                                                    | —            |
| value-on-clear ^(2.7.0)             | clear return value, [see config-provider](/en-US/component/config-provider#empty-values-configurations)                                                                          | ^[string] / ^[number] / ^[boolean] / ^[Function]                                                                                                                            | —            |
| persistent ^(2.7.8)                 | when dropdown is inactive and `persistent` is `false`, dropdown will be destroyed                                                                                                | ^[boolean]                                                                                                                                                                  | true         |
| fallback-placements ^(2.8.1)        | list of possible positions for Tooltip [popper.js](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements)                                                             | ^[arrary]`Placement[]`                                                                                                                                                      | —            |
| placement ^(2.8.1)                  | position of dropdown                                                                                                                                                             | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | bottom-start |
| popper-append-to-body ^(deprecated) | whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false                                                      | ^[boolean]                                                                                                                                                                  | true         |

### Cascader Events

| Name           | Description                                                   | Type                                                        |
| -------------- | ------------------------------------------------------------- | ----------------------------------------------------------- |
| change         | triggers when the binding value changes                       | ^[Function]`(value: CascaderValue) => void`                 |
| expand-change  | triggers when expand option changes                           | ^[Function]`(value: CascaderValue) => void`                 |
| blur           | triggers when Cascader blurs                                  | ^[Function]`(event: FocusEvent) => void`                    |
| focus          | triggers when Cascader focuses                                | ^[Function]`(event: FocusEvent) => void`                    |
| clear ^(2.7.7) | triggers when the clear icon is clicked in a clearable Select | ^[Function]`() => void`                                     |
| visible-change | triggers when the dropdown appears/disappears                 | ^[Function]`(value: boolean) => void`                       |
| remove-tag     | triggers when remove tag in multiple selection mode           | ^[Function]`(value: CascaderNode['valueByOption']) => void` |

### Cascader Slots

| Name                     | Description                                                                                    | Scope                               |
| ------------------------ | ---------------------------------------------------------------------------------------------- | ----------------------------------- |
| default                  | the custom content of cascader node, which are current Node object and node data respectively. | ^[object]`{ node: any, data: any }` |
| empty                    | content when there is no matched options.                                                      | —                                   |
| prefix ^(2.9.4)          | content as Input prefix                                                                        | —                                   |
| suggestion-item ^(2.9.5) | custom content for suggestion item when searching                                              | ^[object]`{ item: CascaderNode }`   |

### Cascader Exposes

| Name                          | Description                                                                                                       | Type                                                            |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| getCheckedNodes               | get an array of currently selected node,(leafOnly) whether only return the leaf checked nodes, default is `false` | ^[Function]`(leafOnly: boolean) => CascaderNode[] \| undefined` |
| cascaderPanelRef              | cascader panel ref                                                                                                | ^[object]`ComputedRef<any>`                                     |
| togglePopperVisible ^(2.2.31) | toggle the visible type of popper                                                                                 | ^[Function]`(visible?: boolean) => void`                        |
| contentRef                    | cascader content ref                                                                                              | ^[object]`ComputedRef<any>`                                     |
| presentText ^(2.8.4)          | selected content text                                                                                             | ^[object]`ComputedRef<string>`                                  |

## CascaderPanel API

### CascaderPanel Attributes

| Name                  | Description                                                                              | Type                                                       | Default |
| --------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------- |
| model-value / v-model | binding value                                                                            | ^[string]/^[number]/^[object]`string[] \| number[] \| any` | —       |
| options               | data of the options, the key of `value` and `label` can be customize by `CascaderProps`. | ^[object]`Record<string, unknown>[]`                       | —       |
| props                 | configuration options, see the following `CascaderProps` table.                          | ^[object]`CascaderProps`                                   | —       |

### CascaderPanel Events

| Name          | Description                                                             | Type                                                |
| ------------- | ----------------------------------------------------------------------- | --------------------------------------------------- |
| change        | triggers when the binding value changes                                 | ^[Function]`(value: CascaderValue) => void`         |
| expand-change | triggers when expand option changes                                     | ^[Function]`(value: CascaderNodePathValue) => void` |
| close         | close panel event, provided to Cascader to put away the panel judgment. | ^[Function]`() => void`                             |

### CascaderPanel Slots

| Name           | Description                                                                                    | Scope                               |
| -------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------- |
| default        | the custom content of cascader node, which are current Node object and node data respectively. | ^[object]`{ node: any, data: any }` |
| empty ^(2.8.3) | the content of the panel when there is no data.                                                | —                                   |

### CascaderPanel Exposes

| Name              | Description                                                                                                       | Type                                                            |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| getCheckedNodes   | get an array of currently selected node,(leafOnly) whether only return the leaf checked nodes, default is `false` | ^[Function]`(leafOnly: boolean) => CascaderNode[] \| undefined` |
| clearCheckedNodes | clear checked nodes                                                                                               | ^[Function]`() => void`                                         |

## CascaderProps

| Attribute      | Description                                                                                                | Type                                                | Default  |
| -------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | -------- |
| expandTrigger  | trigger mode of expanding options                                                                          | ^[enum]`'click' \| 'hover'`                         | click    |
| multiple       | whether multiple selection is enabled                                                                      | ^[boolean]                                          | false    |
| checkStrictly  | whether checked state of a node not affects its parent and child nodes                                     | ^[boolean]                                          | false    |
| emitPath       | when checked nodes change, whether to emit an array of node's path, if false, only emit the value of node. | ^[boolean]                                          | true     |
| lazy           | whether to dynamic load child nodes, use with `lazyload` attribute                                         | ^[boolean]                                          | false    |
| lazyLoad       | method for loading child nodes data, only works when `lazy` is true                                        | ^[Function]`(node: Node, resolve: Resolve) => void` | —        |
| value          | specify which key of node object is used as the node's value                                               | ^[string]                                           | value    |
| label          | specify which key of node object is used as the node's label                                               | ^[string]                                           | label    |
| children       | specify which key of node object is used as the node's children                                            | ^[string]                                           | children |
| disabled       | specify which key of node object is used as the node's disabled                                            | ^[string]                                           | disabled |
| leaf           | specify which key of node object is used as the node's leaf field                                          | ^[string]                                           | leaf     |
| hoverThreshold | hover threshold of expanding options                                                                       | ^[number]                                           | 500      |

## Type Declarations

<details>
  <summary>Show declarations</summary>

```ts
type CascaderNodeValue = string | number
type CascaderNodePathValue = CascaderNodeValue[]
type CascaderValue =
  | CascaderNodeValue
  | CascaderNodePathValue
  | (CascaderNodeValue | CascaderNodePathValue)[]

type Resolve = (data: any) => void

type ExpandTrigger = 'click' | 'hover'

type LazyLoad = (node: Node, resolve: Resolve) => void

type isDisabled = (data: CascaderOption, node: Node) => boolean

type isLeaf = (data: CascaderOption, node: Node) => boolean

interface CascaderOption extends Record<string, unknown> {
  label?: string
  value?: CascaderNodeValue
  children?: CascaderOption[]
  disabled?: boolean
  leaf?: boolean
}

interface CascaderProps {
  expandTrigger?: ExpandTrigger
  multiple?: boolean
  checkStrictly?: boolean
  emitPath?: boolean
  lazy?: boolean
  lazyLoad?: LazyLoad
  value?: string
  label?: string
  children?: string
  disabled?: string | isDisabled
  leaf?: string | isLeaf
  hoverThreshold?: number
}

class Node {
  readonly uid: number
  readonly level: number
  readonly value: CascaderNodeValue
  readonly label: string
  readonly pathNodes: Node[]
  readonly pathValues: CascaderNodePathValue
  readonly pathLabels: string[]

  childrenData: ChildrenData
  children: Node[]
  text: string
  loaded: boolean
  /**
   * Is it checked
   *
   * @default false
   */
  checked: boolean
  /**
   * Used to indicate the intermediate state of unchecked and fully checked child nodes
   *
   * @default false
   */
  indeterminate: boolean
  /**
   * Loading Status
   *
   * @default false
   */
  loading: boolean

  // getter
  isDisabled: boolean
  isLeaf: boolean
  valueByOption: CascaderNodeValue | CascaderNodePathValue

  // method
  appendChild(childData: CascaderOption): Node
  calcText(allLevels: boolean, separator: string): string
  broadcast(event: string, ...args: unknown[]): void
  emit(event: string, ...args: unknown[]): void
  onParentCheck(checked: boolean): void
  onChildCheck(): void
  setCheckState(checked: boolean): void
  doCheck(checked: boolean): void
}

Node as CascaderNode
```

</details>
