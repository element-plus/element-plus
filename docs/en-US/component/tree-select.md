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

:::tip

When using `show-checkbox`, since `check-on-click-node` is false by default,
it can only be selected by checking, you can set it to true,
and then click the node to select.

:::

:::demo

tree-select/check-strictly

:::

:::warning

When using show-checkbox, since `check-on-click-leaf` is true by default,
last tree children's can be checked by clicking their nodes.

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

## Use node-key attribute

By default the `modelValue` is looking for the `value` key.
For a different data structure `node-key` must be provided to work normally.

:::tip

1. `node-key` should be unique across the whole tree.
2. `value-key` have the same objective as `node-key`.
3. Contrary to the select component, the tree-select can't retrieve an object value.

:::

:::demo

tree-select/node-key

:::

## API

### Attributes

Since this component combines the functions of components `el-tree` and `el-select`,
the original properties have not been changed, so no repetition here,
and please go to the original component to view the documentation.

| Attributes                              | Exposes                              | Events                              | Slots                              |
| --------------------------------------- | ------------------------------------ | ----------------------------------- | ---------------------------------- |
| [tree](./tree.md#attributes)            | [tree](./tree.md#exposes)            | [tree](./tree.md#events)            | [tree](./tree.md#slots)            |
| [select](./select.md#select-attributes) | [select](./select.md#select-exposes) | [select](./select.md#select-events) | [select](./select.md#select-slots) |

#### Own Attributes

| Name                 | Description                                                                                                         | Type                     | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------- |
| cache-data ^(2.2.26) | The cached data of the lazy node, the structure is the same as the data, used to get the label of the unloaded data | ^[object]`CacheOption[]` | []      |

### Exposes

:::warning

Expose methods under tree and select component has been **deprecated**, and **will be** removed in ^(3.0.0), please use them under their component layer: `tree` and `select`.

:::

| Name                                 | Description                                                                                                          | Type                                                                                                                                                                                                                                                                                        |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| treeRef ^(2.11.3)                    | Tree component instance                                                                                              | `TreeInstance`                                                                                                                                                                                                                                                                              |
| selectRef ^(2.11.3)                  | Select component instance                                                                                            | `SelectInstance`                                                                                                                                                                                                                                                                            |
| filter ^(deprecated)                 | filter all tree nodes, filtered nodes will be hidden                                                                 | Accept a parameter which will be used as first parameter for filter-node-method                                                                                                                                                                                                             |
| updateKeyChildren ^(deprecated)      | set new data to node, only works when `node-key` is assigned                                                         | (key, data) Accept two parameters: 1. key of node 2. new data                                                                                                                                                                                                                               |
| getCheckedNodes ^(deprecated)        | If the node can be selected (`show-checkbox` is `true`), it returns the currently selected array of nodes            | (leafOnly, includeHalfChecked) Accept two boolean type parameters: 1. default value is `false`. If the parameter is `true`, it only returns the currently selected array of sub-nodes. 2. default value is `false`. If the parameter is `true`, the return value contains halfchecked nodes |
| setCheckedNodes ^(deprecated)        | set certain nodes to be checked, only works when `node-key` is assigned                                              | an array of nodes to be checked                                                                                                                                                                                                                                                             |
| getCheckedKeys ^(deprecated)         | If the node can be selected (`show-checkbox` is `true`), it returns the currently selected array of node's keys      | (leafOnly) Accept a boolean type parameter whose default value is `false`. If the parameter is `true`, it only returns the currently selected array of sub-nodes.                                                                                                                           |
| setCheckedKeys ^(deprecated)         | set certain nodes to be checked, only works when `node-key` is assigned                                              | (keys, leafOnly) Accept two parameters: 1. an array of node's keys to be checked 2. a boolean parameter. If set to `true`, only the checked status of leaf nodes will be set. The default value is `false`.                                                                                 |
| setChecked ^(deprecated)             | set node to be checked or not, only works when `node-key` is assigned                                                | (key/data, checked, deep) Accept three parameters: 1. node's key or data to be checked 2. a boolean typed parameter indicating checked or not. 3. a boolean typed parameter indicating deep or not.                                                                                         |
| getHalfCheckedNodes ^(deprecated)    | If the node can be selected (`show-checkbox` is `true`), it returns the currently half selected array of nodes       | —                                                                                                                                                                                                                                                                                           |
| getHalfCheckedKeys ^(deprecated)     | If the node can be selected (`show-checkbox` is `true`), it returns the currently half selected array of node's keys | —                                                                                                                                                                                                                                                                                           |
| getCurrentKey ^(deprecated)          | return the highlight node's key (null if no node is highlighted)                                                     | —                                                                                                                                                                                                                                                                                           |
| getCurrentNode ^(deprecated)         | return the highlight node's data (null if no node is highlighted)                                                    | —                                                                                                                                                                                                                                                                                           |
| setCurrentKey ^(deprecated)          | set highlighted node by key, only works when `node-key` is assigned                                                  | (key, shouldAutoExpandParent=true) 1. the node's key to be highlighted. If `null`, cancel the currently highlighted node 2. whether to automatically expand parent node                                                                                                                     |
| setCurrentNode ^(deprecated)         | set highlighted node, only works when `node-key` is assigned                                                         | (node, shouldAutoExpandParent=true) 1. the node to be highlighted 2. whether to automatically expand parent node                                                                                                                                                                            |
| getNode ^(deprecated)                | get node by data or key                                                                                              | (data) the node's data or key                                                                                                                                                                                                                                                               |
| remove ^(deprecated)                 | remove a node, only works when node-key is assigned                                                                  | (data) the node's data or node to be deleted                                                                                                                                                                                                                                                |
| append ^(deprecated)                 | append a child node to a given node in the tree                                                                      | (data, parentNode) 1. child node's data to be appended 2. parent node's data, key or node                                                                                                                                                                                                   |
| insertBefore ^(deprecated)           | insert a node before a given node in the tree                                                                        | (data, refNode) 1. node's data to be inserted 2. reference node's data, key or node                                                                                                                                                                                                         |
| insertAfter ^(deprecated)            | insert a node after a given node in the tree                                                                         | (data, refNode) 1. node's data to be inserted 2. reference node's data, key or node                                                                                                                                                                                                         |
| focus ^(deprecated)                  | focus the Input component                                                                                            | ^[Function]`() => void`                                                                                                                                                                                                                                                                     |
| blur ^(deprecated)                   | blur the Input component, and hide the dropdown                                                                      | ^[Function]`() => void`                                                                                                                                                                                                                                                                     |
| selectedLabel ^(2.8.5) ^(deprecated) | get the currently selected label                                                                                     | ^[object]`ComputedRef<string \| string[]>`                                                                                                                                                                                                                                                  |

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
