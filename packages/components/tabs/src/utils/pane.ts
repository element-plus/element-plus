import { flattedChildren, isVNode } from '@element-plus/utils'
import type { ComponentInternalInstance, VNode } from 'vue'
import type { TabsPanes } from '../tabs'

export const getTabPanes = (vm: ComponentInternalInstance) => {
  const nodes = flattedChildren(vm.subTree)
  return nodes.filter(
    (n): n is VNode =>
      isVNode(n) && (n.type as any)?.name === 'ElTabPane' && !!n.component
  )
}

export const getOrderedPanes = (
  vm: ComponentInternalInstance,
  panes: TabsPanes
) => {
  const nodes = getTabPanes(vm)
  const uids = nodes.map((n) => n.component!.uid)
  return uids.map((uid) => panes[uid]).filter((p) => !!p)
}
