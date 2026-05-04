import {
  buildProps,
  definePropType,
  iconPropType,
  isBoolean,
} from '@element-plus/utils'

import type { ComponentInternalInstance, PropType } from 'vue'
import type { EmitFn } from '@element-plus/utils'
import type Node from './model/node'
import type {
  AllowDragFunction,
  AllowDropFunction,
  CheckedInfo,
  NodeDropType,
  RenderContentFunction,
  TreeComponentProps,
  TreeData,
} from './tree.type'

export const treeProps = buildProps({
  data: {
    type: definePropType<TreeData>(Array),
    default: () => [],
  },
  emptyText: {
    type: String,
  },
  renderAfterExpand: {
    type: Boolean,
    default: true,
  },
  nodeKey: String,
  checkStrictly: Boolean,
  defaultExpandAll: Boolean,
  expandOnClickNode: {
    type: Boolean,
    default: true,
  },
  checkOnClickNode: Boolean,
  checkOnClickLeaf: {
    type: Boolean,
    default: true,
  },
  checkDescendants: Boolean,
  autoExpandParent: {
    type: Boolean,
    default: true,
  },
  defaultCheckedKeys: {
    type: Array as PropType<TreeComponentProps['defaultCheckedKeys']>,
  },
  defaultExpandedKeys: {
    type: Array as PropType<TreeComponentProps['defaultExpandedKeys']>,
  },
  currentNodeKey: {
    type: [String, Number] as PropType<string | number>,
  },
  renderContent: {
    type: definePropType<RenderContentFunction>(Function),
  },
  showCheckbox: Boolean,
  draggable: Boolean,
  allowDrag: {
    type: definePropType<AllowDragFunction>(Function),
  },
  allowDrop: {
    type: definePropType<AllowDropFunction>(Function),
  },
  props: {
    type: Object as PropType<TreeComponentProps['props']>,
    default: () => ({
      children: 'children',
      label: 'label',
      disabled: 'disabled',
    }),
  },
  lazy: Boolean,
  highlightCurrent: Boolean,
  load: {
    type: Function as PropType<TreeComponentProps['load']>,
  },
  filterNodeMethod: {
    type: Function as PropType<TreeComponentProps['filterNodeMethod']>,
  },
  accordion: Boolean,
  indent: {
    type: Number,
    default: 18,
  },
  icon: {
    type: iconPropType,
  },
} as const)

/* eslint-disable @typescript-eslint/no-unused-vars */
export const treeEmits = {
  'check-change': (data: any, checked: boolean, indeterminate: boolean) =>
    data && isBoolean(checked) && isBoolean(indeterminate),
  'current-change': (data: any | null, node: Node | null) => true,
  'node-click': (
    data: any,
    node: Node,
    nodeInstance: ComponentInternalInstance | null,
    evt: MouseEvent
  ) => data && node && evt instanceof Event,
  'node-contextmenu': (
    evt: Event,
    data: any,
    node: Node,
    nodeInstance: ComponentInternalInstance | null
  ) => evt instanceof Event && data && node,
  'node-collapse': (
    data: any,
    node: Node,
    nodeInstance: ComponentInternalInstance | null
  ) => data && node,
  'node-expand': (
    data: any,
    node: Node,
    nodeInstance: ComponentInternalInstance | null
  ) => data && node,
  check: (data: any, checkedInfo: CheckedInfo) => data && checkedInfo,
  'node-drag-start': (node: Node, evt: DragEvent) => node && evt,
  'node-drag-end': (
    draggingNode: Node,
    dropNode: Node | null,
    dropType: NodeDropType,
    evt: DragEvent
  ) => draggingNode && evt,
  'node-drop': (
    draggingNode: Node,
    dropNode: Node,
    dropType: Exclude<NodeDropType, 'none'>,
    evt: DragEvent
  ) => draggingNode && dropNode && evt,
  'node-drag-leave': (draggingNode: Node, oldDropNode: Node, evt: DragEvent) =>
    draggingNode && oldDropNode && evt,
  'node-drag-enter': (draggingNode: Node, dropNode: Node, evt: DragEvent) =>
    draggingNode && dropNode && evt,
  'node-drag-over': (draggingNode: Node, dropNode: Node, evt: DragEvent) =>
    draggingNode && dropNode && evt,
}
/* eslint-enable @typescript-eslint/no-unused-vars */

export type TreeEmits = EmitFn<typeof treeEmits>
