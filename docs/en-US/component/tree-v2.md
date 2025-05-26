---
title: Virtualized Tree
lang: en-US
---

# <ElBadge value="beta">Tree V2 virtualized tree</ElBadge>

Tree view with blazing fast scrolling performance for any amount of data

## Basic usage

Basic tree structure.

:::demo

tree-v2/basic

:::

## Selectable

Used for node selection.

:::demo

tree-v2/selectable

:::

:::warning
When using show-checkbox, since `check-on-click-leaf` is true by default,
last tree children's can be checked by clicking their nodes.
:::

## Disabled checkbox

The checkbox of a node can be set as disabled.

:::demo In the example, `disabled` property is declared in defaultProps, and some nodes are set as `disabled: true`. The corresponding checkboxes are disabled and can't be clicked.

tree-v2/disabled

:::

## Default expanded and default checked

Tree nodes can be initially expanded or checked

:::demo Use `default-expanded-keys` and `default-checked-keys` to set initially expanded and initially checked nodes respectively.

tree-v2/default-state

:::

## Custom node content

The content of tree nodes can be customized, so you can add icons or buttons as you will

:::demo

tree-v2/custom-node

:::

## Custom node class ^(2.9.0)

The class of tree nodes can be customized

:::demo

tree-v2/custom-node-class

:::

## Tree node filtering ^(2.9.1)

The `filter-method` method can only accept the third parameter after version `2.9.1`.
Tree nodes can be filtered

:::demo Invoke the `filter` method of the Tree instance to filter tree nodes. Its parameter is the filtering keyword. Note that for it to work, `filter-method` is required, and its value is the filtering method.

tree-v2/filter

:::

## TreeV2 Attributes

| Name                         | Description                                                                                                                                  | Type                        | Default |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ------- |
| data                         | tree data                                                                                                                                    | array                       | —       |
| empty-text                   | text displayed when data is void                                                                                                             | string                      | —       |
| props                        | configuration options, see the following table                                                                                               | object                      | —       |
| highlight-current            | whether current node is highlighted                                                                                                          | boolean                     | false   |
| expand-on-click-node         | whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon.   | boolean                     | true    |
| check-on-click-node          | whether to check or uncheck node when clicking on the node, if false, the node can only be checked or unchecked by clicking on the checkbox. | boolean                     | false   |
| check-on-click-leaf ^(2.9.6) | whether to check or uncheck node when clicking on leaf node (last children).                                                                 | ^[boolean]                  | true    |
| default-expanded-keys        | array of keys of initially expanded nodes                                                                                                    | array                       | —       |
| show-checkbox                | whether node is selectable                                                                                                                   | boolean                     | false   |
| check-strictly               | whether checked state of a node not affects its father and child nodes when `show-checkbox` is `true`                                        | boolean                     | false   |
| default-checked-keys         | array of keys of initially checked nodes                                                                                                     | array                       | —       |
| current-node-key             | key of initially selected node                                                                                                               | string / number             | —       |
| filter-method                | this function will be executed on each node when use filter method. if return `false`, tree node will be hidden.                             | Function(value, data, node) | —       |
| indent                       | horizontal indentation of nodes in adjacent levels in pixels                                                                                 | number                      | 16      |
| icon                         | custom tree node icon                                                                                                                        | `string \| Component`       | —       |
| item-size ^(2.2.33)          | custom tree node height                                                                                                                      | number                      | 26      |

## props

| Attribute      | Description                                                                          | Type                                            | Default  |
| -------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------- | -------- |
| value          | unique identity key name for nodes, its value should be unique across the whole tree | string                                          | id       |
| label          | specify which key of node object is used as the node's label                         | string                                          | label    |
| children       | specify which node object is used as the node's subtree                              | string                                          | children |
| disabled       | specify which key of node object represents if node's checkbox is disabled           | string                                          | disabled |
| class ^(2.9.0) | custom node class name                                                               | ^[string] / ^[Function]`(data, node) => string` | —        |

## TreeV2 Method

`Tree` has the following method, which returns the currently selected array of nodes.
| Method | Description | Parameters |
| --------------- | ---------------------------------------- | ---------------------------------------- |
| filter | filter all tree nodes, filtered nodes will be hidden | `(query: string)` |
| getCheckedNodes | If the node can be selected (`show-checkbox` is `true`), it returns the currently selected array of nodes | `(leafOnly: boolean)` |
| getCheckedKeys | If the node can be selected (`show-checkbox` is `true`), it returns the currently selected array of node's keys | `(leafOnly: boolean)` |
| setCheckedKeys | set certain nodes to be checked | `(keys: TreeKey[])` |
| setChecked | set node to be checked or not | `(key: TreeKey, checked: boolean)` |
| setExpandedKeys | set certain nodes to be expanded | `(keys: TreeKey[])` |
| getHalfCheckedNodes | If the node can be selected (`show-checkbox` is `true`), it returns the currently half selected array of nodes | — |
| getHalfCheckedKeys | If the node can be selected (`show-checkbox` is `true`), it returns the currently half selected array of node's keys | — |
| getCurrentKey | return the highlight node's key (undefined if no node is highlighted) | — |
| getCurrentNode | return the highlight node's data (undefined if no node is highlighted) | — |
| setCurrentKey | set highlighted node by key | `(key: TreeKey)` |
| getNode | get node by key or data | `(data: TreeKey \| TreeNodeData)` |
| expandNode | expand specified node | `(node: TreeNode)` |
| collapseNode | collapse specified node | `(node: TreeNode)` |
| setData | When the data is very large, using reactive data will cause the poor performance, so we provide a way to avoid this situation | `(data: TreeData)` |
| scrollTo ^(2.8.0) | scroll to a given position | `(offset: number)` |
| scrollToNode ^(2.8.0) | scroll to a given tree key with specified scroll strategy | `(key: TreeKey, strategy?: auto \| smart \| center \| start \| end)` |

## TreeV2 Events

| Name               | Description                                          | Parameters                                                                                                                              |
| ------------------ | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| node-click         | triggers when a node is clicked                      | `(data: TreeNodeData, node: TreeNode, e: MouseEvent)`                                                                                   |
| node-drop ^(2.8.3) | triggers when drag someting and drop on a node       | `(data: TreeNodeData, node: TreeNode, e: DragEvent)`                                                                                    |
| node-contextmenu   | triggers when a node is clicked by right button      | `(e: Event, data: TreeNodeData, node: TreeNode)`                                                                                        |
| check-change       | triggers when the selected state of the node changes | `(data: TreeNodeData, checked: boolean)`                                                                                                |
| check              | triggers after clicking the checkbox of a node       | `(data: TreeNodeData, info: { checkedKeys: TreeKey[],checkedNodes: TreeData, halfCheckedKeys: TreeKey[], halfCheckedNodes: TreeData,})` |
| current-change     | triggers when current node changes                   | `(data: TreeNodeData, node: TreeNode)`                                                                                                  |
| node-expand        | triggers when current node open                      | `(data: TreeNodeData, node: TreeNode)`                                                                                                  |
| node-collapse      | triggers when current node close                     | `(data: TreeNodeData, node: TreeNode)`                                                                                                  |

## TreeV2 Slots

| Name           | Description                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------- |
| -              | Custom content for tree nodes. The scope parameter is `{ node: TreeNode, data: TreeNodeData }` |
| empty ^(2.9.0) | empty you can customize content when data is empty.                                            |
