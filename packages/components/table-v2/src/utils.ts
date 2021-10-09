import { debugWarn } from '@element-plus/utils/error'
import { isFragment } from '@element-plus/utils/vnode'
import Column from './components/column'
import { tableV2Name } from './constants'

import type { Slots, VNodeArrayChildren, VNode } from 'vue'
import type { MappedColumn } from './helpers/column'

export const normalizeColumns = (children: VNodeArrayChildren) => {
  const columns: MappedColumn[] = []
  for (let i = 0; i < children.length; i++) {
    const c = children[i]
    if (Array.isArray(c)) {
      debugWarn(tableV2Name, `Resolving error, columns cannot be nested.`)
      return []
    }

    // only loop for one depth further.
    // for v-if || v-for
    if (isFragment(c)) {
      const nestedChildren = ((c as VNode).children as VNodeArrayChildren) || []
      for (let j = 0; j < nestedChildren.length; j++) {
        const inner = nestedChildren[j] as VNode
        if (isColumnNode(inner)) {
          columns.push(deriveRenderer(inner))
        }
      }
    } else if (isColumnNode(c as VNode)) {
      columns.push(deriveRenderer(c as VNode))
    }
  }
  return columns
}

function isColumnNode(c: VNode) {
  return c?.type === Column
}

function deriveRenderer(vnode: VNode) {
  const props = { ...vnode.props } as MappedColumn
  const children = vnode.children as Slots
  if (!props.headerRenderer) {
    props.headerRenderer = children.header
  }

  if (!props.cellRenderer) {
    props.cellRenderer = children.cell
  }
  return props
}

export function tryCall(val: ((...args: any) => any) | any, ...args: any[]) {
  return typeof val === 'function' ? val(...args) : args
}
