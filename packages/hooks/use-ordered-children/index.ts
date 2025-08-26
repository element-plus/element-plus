import {
  defineComponent,
  h,
  isVNode,
  onMounted,
  shallowRef,
  triggerRef,
} from 'vue'
import { flattedChildren } from '@element-plus/utils'

import type { Component, ComponentInternalInstance, VNode } from 'vue'

type ChildEssential = {
  uid: number
  getVnode: () => VNode
}

const getOrderedChildren = <T>(
  vm: ComponentInternalInstance,
  childComponentName: string,
  children: Record<number, T>
): T[] => {
  const nodes = flattedChildren(vm.subTree).filter(
    (n): n is VNode =>
      isVNode(n) &&
      (n.type as Component)?.name === childComponentName &&
      !!n.component
  )
  const uids = nodes.map((n) => n.component!.uid)
  return uids.map((uid) => children[uid]).filter((p) => !!p)
}

export const useOrderedChildren = <T extends ChildEssential>(
  vm: ComponentInternalInstance,
  childComponentName: string
) => {
  const children = shallowRef<Record<number, T>>({})
  const orderedChildren = shallowRef<T[]>([])
  const nodesMap = new WeakMap<ParentNode, Node[]>()

  const addChild = (child: T) => {
    children.value[child.uid] = child
    triggerRef(children)

    onMounted(() => {
      const childNode = child.getVnode().el! as Node
      const parentNode = childNode.parentNode!

      if (!nodesMap.has(parentNode)) {
        nodesMap.set(parentNode, [])

        const originalFn = parentNode.insertBefore.bind(parentNode)
        parentNode.insertBefore = <T extends Node>(
          node: T,
          anchor: Node | null
        ) => {
          // Schedule a job to update `orderedChildren` if the root element of child components is moved
          const shouldSortChildren = nodesMap
            .get(parentNode)!
            .some((el) => node === el || anchor === el)
          if (shouldSortChildren) triggerRef(children)

          return originalFn(node, anchor)
        }
      }

      nodesMap.get(parentNode)!.push(childNode)
    })
  }

  const removeChild = (child: T) => {
    delete children.value[child.uid]
    triggerRef(children)

    const childNode = child.getVnode().el! as Node
    const parentNode = childNode.parentNode!
    const childNodes = nodesMap.get(parentNode)!
    const index = childNodes.indexOf(childNode)
    childNodes.splice(index, 1)
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
