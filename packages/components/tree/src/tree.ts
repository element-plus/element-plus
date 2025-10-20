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
