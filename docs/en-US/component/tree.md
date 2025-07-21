---
title: Tree
lang: en-US
---

# Tree

Display a set of data with hierarchies.

## Basic usage

Basic tree structure.

:::demo

tree/basic

:::

## Selectable

Used for node selection.

:::demo This example also shows how to load node data asynchronously.

tree/selectable

:::

:::warning
When using show-checkbox, since `check-on-click-leaf` is true by default,
last tree children's can be checked by clicking their nodes.
:::

## Custom leaf node in lazy mode

:::demo A node's data is not fetched until it is clicked, so the Tree cannot predict whether a node is a leaf node. That's why a drop-down button is added to each node, and if it is a leaf node, the drop-down button will disappear when clicked. That being said, you can also tell the Tree in advance whether the node is a leaf node, avoiding the render of the drop-down button before a leaf node.

tree/custom-leaf

:::

## Lazy loading multiple times ^(2.6.3)

:::demo When lazily loading node data remotely, lazy loading may sometimes fail. In this case, you can call reject to keep the node status as is and allow remote loading to continue.

tree/multiple-times-load

:::

## Disabled checkbox

The checkbox of a node can be set as disabled.

:::demo In the example, 'disabled' property is declared in defaultProps, and some nodes are set as 'disabled:true'. The corresponding checkboxes are disabled and can't be clicked.

tree/disabled

:::

## Default expanded and default checked

Tree nodes can be initially expanded or checked

:::demo Use `default-expanded-keys` and `default-checked-keys` to set initially expanded and initially checked nodes respectively. Note that for them to work, `node-key` is required. Its value is the name of a key in the data object, and the value of that key should be unique across the whole tree.

tree/default-state

:::

## Checking tree nodes

:::demo This example shows how to get and set checked nodes. They both can be done in two approaches: node and key. If you are taking the key approach, `node-key` is required.

tree/checking-tree

:::

## Custom node content

The content of tree nodes can be customized, so you can add icons or buttons as you will

:::demo There are two ways to customize template for tree nodes: `render-content` and scoped slot. Use `render-content` to assign a render function that returns the content of tree nodes. See Vue's documentation for a detailed introduction of render functions. If you prefer scoped slot, you'll have access to `node` and `data` in the scope, standing for the TreeNode object and node data of the current node respectively. Note that the `render-content` demo can't run in JSFiddle because it doesn't support JSX syntax. In a real project, `render-content` will work if relevant dependencies are correctly configured.

tree/customized-node

:::

## Custom node class

The class of tree nodes can be customized

:::demo. Use `props.class` to build class name of nodes.

tree/custom-node-class

:::

## Tree node filtering

Tree nodes can be filtered

:::demo Invoke the `filter` method of the Tree instance to filter tree nodes. Its parameter is the filtering keyword. Note that for it to work, `filter-node-method` is required, and its value is the filtering method.

tree/filtering

:::

## Accordion

Only one node among the same level can be expanded at one time.

:::demo

tree/accordion

:::

## Draggable

You can drag and drop Tree nodes by adding a `draggable` attribute.

:::demo

tree/draggable

:::

## Attributes

| Name                         | Description                                                                                                                                                                                                                                                                                                                                                                 | Type                                                   | Default |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------- |
| data                         | tree data                                                                                                                                                                                                                                                                                                                                                                   | ^[object]`Array<{[key: string]: any}>`                 | —       |
| empty-text                   | text displayed when data is void                                                                                                                                                                                                                                                                                                                                            | ^[string]                                              | —       |
| node-key                     | unique identity key name for nodes, its value should be unique across the whole tree                                                                                                                                                                                                                                                                                        | ^[string]                                              | —       |
| props                        | configuration options, see the following table                                                                                                                                                                                                                                                                                                                              | [props](#props)                                        | —       |
| render-after-expand          | whether to render child nodes only after a parent node is expanded for the first time                                                                                                                                                                                                                                                                                       | ^[boolean]                                             | true    |
| load                         | method for loading subtree data, only works when `lazy` is true                                                                                                                                                                                                                                                                                                             | ^[Function]`(node, resolve, reject) => void`           | —       |
| render-content               | render function for tree node                                                                                                                                                                                                                                                                                                                                               | ^[Function]`(h, { node, data, store }) => void`        | —       |
| highlight-current            | whether current node is highlighted                                                                                                                                                                                                                                                                                                                                         | ^[boolean]                                             | false   |
| default-expand-all           | whether to expand all nodes by default                                                                                                                                                                                                                                                                                                                                      | ^[boolean]                                             | false   |
| expand-on-click-node         | whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon.                                                                                                                                                                                                                                  | ^[boolean]                                             | true    |
| check-on-click-node          | whether to check or uncheck node when clicking on the node, if false, the node can only be checked or unchecked by clicking on the checkbox.                                                                                                                                                                                                                                | ^[boolean]                                             | false   |
| check-on-click-leaf ^(2.9.6) | whether to check or uncheck node when clicking on leaf node (last children).                                                                                                                                                                                                                                                                                                | ^[boolean]                                             | true    |
| auto-expand-parent           | whether to expand father node when a child node is expanded                                                                                                                                                                                                                                                                                                                 | ^[boolean]                                             | true    |
| default-expanded-keys        | array of keys of initially expanded nodes                                                                                                                                                                                                                                                                                                                                   | ^[object]`Array<string \| number>`                     | —       |
| show-checkbox                | whether node is selectable                                                                                                                                                                                                                                                                                                                                                  | ^[boolean]                                             | false   |
| check-strictly               | whether checked state of a node not affects its father and child nodes when `show-checkbox` is `true`                                                                                                                                                                                                                                                                       | ^[boolean]                                             | false   |
| default-checked-keys         | array of keys of initially checked nodes                                                                                                                                                                                                                                                                                                                                    | ^[object]`Array<string \| number>`                     | —       |
| current-node-key             | key of initially selected node                                                                                                                                                                                                                                                                                                                                              | ^[string] / ^[number]                                  | —       |
| filter-node-method           | this function will be executed on each node when use filter method. if return `false`, tree node will be hidden.                                                                                                                                                                                                                                                            | ^[Function]`(value, data, node) => boolean`            | —       |
| accordion                    | whether only one node among the same level can be expanded at one time                                                                                                                                                                                                                                                                                                      | ^[boolean]                                             | false   |
| indent                       | horizontal indentation of nodes in adjacent levels in pixels                                                                                                                                                                                                                                                                                                                | ^[number]                                              | 18      |
| icon                         | custom tree node icon component                                                                                                                                                                                                                                                                                                                                             | ^[string] / ^[Component]                               | —       |
| lazy                         | whether to lazy load leaf node, used with `load` attribute                                                                                                                                                                                                                                                                                                                  | ^[boolean]                                             | false   |
| draggable                    | whether enable tree nodes drag and drop                                                                                                                                                                                                                                                                                                                                     | ^[boolean]                                             | false   |
| allow-drag                   | this function will be executed before dragging a node. If `false` is returned, the node can not be dragged                                                                                                                                                                                                                                                                  | ^[Function]`(node) => boolean`                         | —       |
| allow-drop                   | this function will be executed before the dragging node is dropped. If `false` is returned, the dragging node can not be dropped at the target node. `type` has three possible values: 'prev' (inserting the dragging node before the target node), 'inner' (inserting the dragging node to the target node) and 'next' (inserting the dragging node after the target node) | ^[Function]`(draggingNode, dropNode, type) => boolean` | —       |

## props

| Attribute | Description                                                                   | Type                                             | Default |
| --------- | ----------------------------------------------------------------------------- | ------------------------------------------------ | ------- |
| label     | specify which key of node object is used as the node's label                  | ^[string] / ^[Function]`(data, node) => string`  | —       |
| children  | specify which node object is used as the node's subtree                       | ^[string]                                        | —       |
| disabled  | specify which key of node object represents if node's checkbox is disabled    | ^[string] / ^[Function]`(data, node) => boolean` | —       |
| isLeaf    | specify whether the node is a leaf node, only works when lazy load is enabled | ^[string] / ^[Function]`(data, node) => boolean` | —       |
| class     | custom node class name                                                        | ^[string] / ^[Function]`(data, node) => string`  | —       |

## Method

`Tree` has the following method, which returns the currently selected array of nodes.
| Method | Description | Parameters |
| --------------- | ---------------------------------------- | ---------------------------------------- |
| filter | filter all tree nodes, filtered nodes will be hidden | Accept a parameter which will be used as first parameter for filter-node-method |
| updateKeyChildren | set new data to node, only works when `node-key` is assigned | (key, data) Accept two parameters: 1. key of node 2. new data |
| getCheckedNodes | If the node can be selected (`show-checkbox` is `true`), it returns the currently selected array of nodes | (leafOnly, includeHalfChecked) Accept two boolean type parameters: 1. default value is `false`. If the parameter is `true`, it only returns the currently selected array of sub-nodes. 2. default value is `false`. If the parameter is `true`, the return value contains halfchecked nodes |
| setCheckedNodes | set certain nodes to be checked, only works when `node-key` is assigned | an array of nodes to be checked |
| getCheckedKeys | If the node can be selected (`show-checkbox` is `true`), it returns the currently selected array of node's keys | (leafOnly) Accept a boolean type parameter whose default value is `false`. If the parameter is `true`, it only returns the currently selected array of sub-nodes. |
| setCheckedKeys | set certain nodes to be checked, only works when `node-key` is assigned | (keys, leafOnly) Accept two parameters: 1. an array of node's keys to be checked 2. a boolean parameter. If set to `true`, only the checked status of leaf nodes will be set. The default value is `false`. |
| setChecked | set node to be checked or not, only works when `node-key` is assigned | (key/data, checked, deep) Accept three parameters: 1. node's key or data to be checked 2. a boolean typed parameter indicating checked or not. 3. a boolean typed parameter indicating deep or not. |
| getHalfCheckedNodes | If the node can be selected (`show-checkbox` is `true`), it returns the currently half selected array of nodes | — |
| getHalfCheckedKeys | If the node can be selected (`show-checkbox` is `true`), it returns the currently half selected array of node's keys | — |
| getCurrentKey | return the highlight node's key (null if no node is highlighted) | — |
| getCurrentNode | return the highlight node's data (null if no node is highlighted) | — |
| setCurrentKey | set highlighted node by key, only works when `node-key` is assigned | (key, shouldAutoExpandParent=true) 1. the node's key to be highlighted. If `null`, cancel the currently highlighted node 2. whether to automatically expand parent node |
| setCurrentNode | set highlighted node, only works when `node-key` is assigned | (node, shouldAutoExpandParent=true) 1. the node to be highlighted 2. whether to automatically expand parent node |
| getNode | get node by data or key | (data) the node's data or key |
| remove | remove a node, only works when node-key is assigned | (data) the node's data or node to be deleted |
| append | append a child node to a given node in the tree | (data, parentNode) 1. child node's data to be appended 2. parent node's data, key or node |
| insertBefore | insert a node before a given node in the tree | (data, refNode) 1. node's data to be inserted 2. reference node's data, key or node |
| insertAfter | insert a node after a given node in the tree | (data, refNode) 1. node's data to be inserted 2. reference node's data, key or node |

## Events

| Name             | Description                                               | Parameters                                                                                                                                                                                       |
| ---------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| node-click       | triggers when a node is clicked                           | four parameters: node object corresponding to the node clicked, `node` property of TreeNode, TreeNode itself, event object                                                                       |
| node-contextmenu | triggers when a node is clicked by right button           | four parameters: event, node object corresponding to the node clicked, `node` property of TreeNode, TreeNode itself                                                                              |
| check-change     | triggers when the selected state of the node changes      | three parameters: node object corresponding to the node whose selected state is changed, whether the node is selected, whether node's subtree has selected nodes                                 |
| check            | triggers after clicking the checkbox of a node            | two parameters: node object corresponding to the node that is checked / unchecked, tree checked status object which has four props: checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys |
| current-change   | triggers when current node changes                        | two parameters: node object corresponding to the current node, `node` property of TreeNode                                                                                                       |
| node-expand      | triggers when current node open                           | three parameters: node object corresponding to the node opened, `node` property of TreeNode, TreeNode itself                                                                                     |
| node-collapse    | triggers when current node close                          | three parameters: node object corresponding to the node closed, `node` property of TreeNode, TreeNode itself                                                                                     |
| node-drag-start  | triggers when dragging starts                             | two parameters: node object corresponding to the dragging node, event.                                                                                                                           |
| node-drag-enter  | triggers when the dragging node enters another node       | three parameters: node object corresponding to the dragging node, node object corresponding to the entering node, event.                                                                         |
| node-drag-leave  | triggers when the dragging node leaves a node             | three parameters: node object corresponding to the dragging node, node object corresponding to the leaving node, event.                                                                          |
| node-drag-over   | triggers when dragging over a node (like mouseover event) | three parameters: node object corresponding to the dragging node, node object corresponding to the dragging over node, event.                                                                    |
| node-drag-end    | triggers when dragging ends                               | four parameters: node object corresponding to the dragging node, node object corresponding to the dragging end node (may be `undefined`), node drop type (before / after / inner), event.        |
| node-drop        | triggers after the dragging node is dropped               | four parameters: node object corresponding to the dragging node, node object corresponding to the dropped node, node drop type (before / after / inner), event.                                  |

## Slots

| Name           | Description                                                            |
| -------------- | ---------------------------------------------------------------------- |
| —              | Custom content for tree nodes. The scope parameter is `{ node, data }` |
| empty ^(2.3.4) | empty you can customize content when data is empty.                    |
