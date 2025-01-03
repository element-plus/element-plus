---
title: TreeSelect
lang: en-US
---

# TreeSelect

The tree selector of the dropdown menu,
it combines the functions of components `el-tree` and `el-select`.

## Basic usage

Selector for tree structures.

:::demo

tree-select/basic

:::

## Select any level

When using the `check-strictly=true` attribute, any node can be checked,
otherwise only leaf nodes are supported.

:::demo

tree-select/check-strictly

:::

:::tip

When using `show-checkbox`, since `check-on-click-node` is false by default,
it can only be selected by checking, you can set it to true,
and then click the node to select.

:::

## Multiple Selection

Multiple selection using clicks or checkbox.

:::demo

tree-select/multiple

:::

## Disabled Selection

Disable options using the disabled field.

:::demo

tree-select/disabled

:::

## Filterable

Use keyword filtering or custom filtering methods.
`filterMethod` can custom filter method for data,
`filterNodeMethod` can custom filter method for data node.

:::demo

tree-select/filterable

:::

## Custom content

Contents of custom tree nodes.

:::demo

tree-select/slots

:::

## LazyLoad

Lazy loading of tree nodes, suitable for large data lists.

:::demo

tree-select/lazy

:::

:::tip

**Note**: `value-key` and `node-key` serve the same purpose, but `node-key` has a higher priority. However,
it is recommended to use `value-key` to maintain consistency with `el-select`.

:::

## Use value-key attribute ^(2.8.9)

If the binding value of `el-tree-select` is an object, please ensure to specify `value-key` as the unique identifier key name for both the binding value and each data item.

:::demo

tree-select/value-key

:::

## API

### Attributes

Since this component combines the functions of components `el-tree` and `el-select`,
the original properties have not been changed, so no repetition here,
and please go to the original component to view the documentation.

| Attributes                              | Methods                       | Events                              | Slots                              |
|-----------------------------------------|-------------------------------|-------------------------------------|------------------------------------|
| [tree](./tree.md#attributes)            | [tree](./tree.md#method)      | [tree](./tree.md#events)            | [tree](./tree.md#slots)            |
| [select](./select.md#select-attributes) | [select](./select.md#methods) | [select](./select.md#select-events) | [select](./select.md#select-slots) |

### Own Attributes

| Name                | Description                                                                                                         | Type                     | Default |
|---------------------|---------------------------------------------------------------------------------------------------------------------|--------------------------|---------|
| cacheData ^(2.2.26) | The cached data of the lazy node, the structure is the same as the data, used to get the label of the unloaded data | ^[object]`CacheOption[]` | []      |
| props               | configuration options, see the following table                                                                      | [props](#props)          | —       |

## props

| Attribute        | Description                                                                   | Type                                             | Default  |
|------------------|-------------------------------------------------------------------------------|--------------------------------------------------|----------|
| label            | specify which key of node object is used as the node's label                  | ^[string] / ^[Function]`(data, node) => string`  | label    |
| value  ^(2.8.9)  | specify which key of the node object is used as the value of the node.        | ^[string]                                        | value    |
| children         | specify which node object is used as the node's subtree                       | ^[string]                                        | children |
| disabled         | specify which key of node object represents if node's checkbox is disabled    | ^[string] / ^[Function]`(data, node) => boolean` | disabled |
| isLeaf           | specify whether the node is a leaf node, only works when lazy load is enabled | ^[string] / ^[Function]`(data, node) => boolean` | isLeaf   |
| class            | custom node class name                                                        | ^[string] / ^[Function]`(data, node) => string`  | —        |


## Type Declarations

<details>
  <summary>Show declarations</summary>

```ts
type CacheOption = {
  value: string | number | boolean | object
  currentLabel: string | number
  isDisabled: boolean
}
```

</details>
