import { isBoolean } from '@element-plus/utils'

import type { ComponentInternalInstance } from 'vue'
import type { EmitFn } from '@element-plus/utils'
import type Node from './model/node'
import type { CheckedInfo, NodeDropType } from './tree.type'

/* eslint-disable @typescript-eslint/no-unused-vars */
export const treeEmits = {
  'check-change': (data: any, checked: boolean, indeterminate: boolean) =>
    data && isBoolean(checked) && isBoolean(indeterminate),
  'current-change': (data: any | null, node: Node | null) => true,
  'node-click': (
    data: any,
    node: Node,
    nodeInstance: ComponentInternalInstance | null,
    event: MouseEvent
  ) => data && node && event instanceof Event,
  'node-contextmenu': (
    event: Event,
    data: any,
    node: Node,
    nodeInstance: ComponentInternalInstance | null
  ) => event instanceof Event && data && node,
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
  'node-drag-start': (node: Node, event: DragEvent) => node && event,
  'node-drag-end': (
    draggingNode: Node,
    dropNode: Node | null,
    dropType: NodeDropType,
    event: DragEvent
  ) => draggingNode && event,
  'node-drop': (
    draggingNode: Node,
    dropNode: Node,
    dropType: Exclude<NodeDropType, 'none'>,
    event: DragEvent
  ) => draggingNode && dropNode && event,
  'node-drag-leave': (
    draggingNode: Node,
    oldDropNode: Node,
    event: DragEvent
  ) => draggingNode && oldDropNode && event,
  'node-drag-enter': (draggingNode: Node, dropNode: Node, event: DragEvent) =>
    draggingNode && dropNode && event,
  'node-drag-over': (draggingNode: Node, dropNode: Node, event: DragEvent) =>
    draggingNode && dropNode && event,
}
/* eslint-enable @typescript-eslint/no-unused-vars */

export type TreeEmits = EmitFn<typeof treeEmits>
