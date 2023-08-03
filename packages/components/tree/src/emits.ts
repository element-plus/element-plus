import { isBoolean } from '@element-plus/utils'
import type {
  CheckedInfo,
  NodeDropType,
  TreeNodeData,
  TreeNodeInstance,
} from './tree.type'

// emits
export const NODE_CHECK_CHANGE = 'check-change'
export const CURRENT_CHANGE = 'current-change'
export const NODE_CLICK = 'node-click'
export const NODE_CONTEXTMENU = 'node-contextmenu'
export const NODE_COLLAPSE = 'node-collapse'
export const NODE_EXPAND = 'node-expand'
export const NODE_CHECK = 'check'
export const NODE_DRAG_START = 'node-drag-start'
export const NODE_DRAG_END = 'node-drag-end'
export const NODE_DROP = 'node-drop'
export const NODE_DRAG_LEAVE = 'node-drag-leave'
export const NODE_DRAG_ENTER = 'node-drag-enter'
export const NODE_DRAG_OVER = 'node-drag-over'

export const treeEmits = {
  [NODE_CHECK_CHANGE]: (
    data: TreeNodeData,
    checked: boolean,
    indeterminate: boolean
  ) => data && isBoolean(checked) && isBoolean(indeterminate),
  [CURRENT_CHANGE]: (data: TreeNodeData, node: Node) => data && node,
  [NODE_CLICK]: (
    data: TreeNodeData,
    node: Node,
    instance: TreeNodeInstance,
    e: MouseEvent
  ) => data && node && instance && e,
  [NODE_CONTEXTMENU]: (
    event: Event,
    data: TreeNodeData,
    node: Node,
    instance: TreeNodeInstance
  ) => event && data && node && instance,
  [NODE_COLLAPSE]: (
    data: TreeNodeData,
    node: Node,
    instance: TreeNodeInstance
  ) => data && node && instance,
  [NODE_EXPAND]: (data: TreeNodeData, node: Node, instance: TreeNodeInstance) =>
    data && node && instance,
  [NODE_CHECK]: (data: TreeNodeData, checkedInfo: CheckedInfo) =>
    data && checkedInfo,
  [NODE_DRAG_START]: (node: Node, e: DragEvent) => node && e,
  [NODE_DRAG_END]: (
    draggingNode: Node,
    dropNode: Node | null,
    dropType: NodeDropType,
    e: DragEvent
  ) => draggingNode && dropType && e,
  [NODE_DROP]: (
    draggingNode: Node,
    dropNode: Node,
    dropType: Omit<NodeDropType, 'none'>,
    e: DragEvent
  ) => draggingNode && dropNode && dropType !== 'none' && e,
  [NODE_DRAG_LEAVE]: (draggingNode: Node, oldDropNode: Node, e: DragEvent) =>
    draggingNode && oldDropNode && e,
  [NODE_DRAG_ENTER]: (draggingNode: Node, dropNode: Node, e: DragEvent) =>
    draggingNode && dropNode && e,
  [NODE_DRAG_OVER]: (draggingNode: Node, dropNode: Node, e: DragEvent) =>
    draggingNode && dropNode && e,
}

export type TreeEmits = typeof treeEmits
