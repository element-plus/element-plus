import { defineComponent, h, isVNode, shallowRef, triggerRef } from 'vue'
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
  const children = shallowRef<Record<number, T>>({})
  const orderedChildren = shallowRef<T[]>([])

  const addChild = (child: T) => {
    children.value[child.uid] = child
    triggerRef(children)
  }

  const removeChild = (child: T) => {
    delete children.value[child.uid]
    triggerRef(children)
  }

  const sortChildren = () => {
    orderedChildren.value = getOrderedChildren(
      vm,
      childComponentName,
      children.value
    )
  }

  const IsolatedRenderer = (props: { render: () => VNode[] }) => {
    return props.render()
  }

  // TODO: Refactor `el-description` before converting this to a functional component
  const ChildrenSorter = defineComponent({
    setup(_, { slots }) {
      return () => {
        sortChildren()

        return slots.default
          ? // Create a new `ReactiveEffect` to ensure `ChildrenSorter` doesn't track any extra dependencies
            // @ts-ignore TODO: Remove this after Vue is upgraded
            h(IsolatedRenderer, {
              render: slots.default,
            })
          : null
      }
    },
  })

  return {
    children: orderedChildren,
    addChild,
    removeChild,
    ChildrenSorter,
  }
}
