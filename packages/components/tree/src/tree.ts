import { ComponentInternalInstance } from 'vue'
import { EmitFn, isBoolean } from '@element-plus/utils'

import type Node from './model/node'
import type { CheckedInfo, NodeDropType, TreeNodeData } from './tree.type'

/* eslint-disable @typescript-eslint/no-unused-vars */
export const treeEmits = {
  'check-change': (
    data: TreeNodeData,
    checked: boolean,
    indeterminate: boolean
  ) => data && isBoolean(checked) && isBoolean(indeterminate),
  'current-change': (data: TreeNodeData | null, node: Node | null) => true,
  'node-click': (
    data: TreeNodeData,
    node: Node,
    nodeInstance: ComponentInternalInstance | null,
    event: MouseEvent
  ) => data && node && event instanceof Event,
  'node-contextmenu': (
    event: Event,
    data: TreeNodeData,
    node: Node,
    nodeInstance: ComponentInternalInstance | null
  ) => event instanceof Event && data && node,
  'node-collapse': (
    data: TreeNodeData,
    node: Node,
    nodeInstance: ComponentInternalInstance | null
  ) => data && node,
  'node-expand': (
    data: TreeNodeData,
    node: Node,
    nodeInstance: ComponentInternalInstance | null
  ) => data && node,
  check: (data: TreeNodeData, checkedInfo: CheckedInfo) => data && checkedInfo,
  'node-drag-start': (node: Node, event: DragEvent) =>
    node && event instanceof DragEvent,
  'node-drag-end': (
    draggingNode: Node,
    dropNode: Node | null,
    dropType: NodeDropType | null,
    event: DragEvent
  ) => draggingNode && event instanceof DragEvent,
  'node-drop': (
    draggingNode: Node,
    dropNode: Node,
    dropType: Exclude<NodeDropType, 'none'> | null,
    event: DragEvent
  ) => draggingNode && dropNode && event instanceof DragEvent,
  'node-drag-leave': (
    draggingNode: Node,
    oldDropNode: Node,
    event: DragEvent
  ) => draggingNode && oldDropNode && event instanceof DragEvent,
  'node-drag-enter': (draggingNode: Node, dropNode: Node, event: DragEvent) =>
    draggingNode && dropNode && event instanceof DragEvent,
  'node-drag-over': (draggingNode: Node, dropNode: Node, event: DragEvent) =>
    draggingNode && dropNode && event instanceof DragEvent,
}
/* eslint-enable @typescript-eslint/no-unused-vars */

export type TreeEmits = EmitFn<typeof treeEmits>
