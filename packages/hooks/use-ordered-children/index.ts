import { isVNode, shallowRef } from 'vue'
import { flattedChildren } from '@element-plus/utils'

import type { ComponentInternalInstance, VNode } from 'vue'

const getOrderedChildren = <T>(
  vm: ComponentInternalInstance,
  childComponentName: string,
  children: Record<number, T>
): T[] => {
  const nodes = flattedChildren(vm.subTree).filter(
    (n): n is VNode =>
      isVNode(n) &&
      (n.type as any)?.name === childComponentName &&
      !!n.component
  )
  const uids = nodes.map((n) => n.component!.uid)
  return uids.map((uid) => children[uid]).filter((p) => !!p)
}

export const useOrderedChildren = <T extends { uid: number }>(
  vm: ComponentInternalInstance,
  childComponentName: string
) => {
  const children: Record<number, T> = {}
  const orderedChildren = shallowRef<T[]>([])

  // TODO: split into two functions: addChild and sortChildren
  const addChild = (child: T) => {
    children[child.uid] = child
    orderedChildren.value = getOrderedChildren(vm, childComponentName, children)
  }
  const removeChild = (uid: number) => {
    delete children[uid]
    orderedChildren.value = orderedChildren.value.filter(
      (children) => children.uid !== uid
    )
  }

  return {
    children: orderedChildren,
    addChild,
    removeChild,
  }
}
