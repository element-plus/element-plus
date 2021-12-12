import {
  cloneVNode,
  Comment,
  defineComponent,
  Fragment,
  h,
  Text,
  withDirectives,
  inject,
} from 'vue'
import { NOOP } from '@vue/shared'
import {
  FORWARD_REF_INJECTION_KEY,
  useForwardRefDirective,
} from '@element-plus/hooks'
import { debugWarn } from '@element-plus/utils/error'

import type { VNode } from 'vue'

const NAME = 'ElOnlyChild'

const OnlyChild = defineComponent({
  name: NAME,
  setup(_, { slots, attrs }) {
    const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY, undefined)!
    const forwardRefDirective = useForwardRefDirective(
      forwardRefInjection.setForwardRef ?? NOOP
    )
    return () => {
      const defaultSlot = slots.default?.(attrs)
      if (!defaultSlot) return null

      if (defaultSlot.length > 1) {
        debugWarn(NAME, 'ElOnlyChild requires exact only one valid child.')
        return null
      }

      const firstLegitNode = findFirstLegitChild(defaultSlot)
      if (!firstLegitNode) {
        debugWarn(NAME, 'no valid child node found')
        return null
      }

      return withDirectives(cloneVNode(firstLegitNode), [[forwardRefDirective]])
    }
  },
})

function findFirstLegitChild(node: VNode[] | undefined) {
  if (!node) return null
  const children = node as VNode[]
  for (let i = 0; i < children.length; i++) {
    const child = children[i]

    switch (child.type) {
      case Comment:
        continue
      case Text:
        return h('span', { class: 'el-only-child__content' }, [child])
      case Fragment:
        return findFirstLegitChild(child.children as VNode[])
      default:
        return child
    }
  }
  return null
}

export default OnlyChild
