import {
  cloneVNode,
  Comment,
  defineComponent,
  Fragment,
  h,
  renderSlot,
  Text,
  withDirectives,
  inject,
} from 'vue'
import { NOOP } from '@vue/shared'
import { FORWARD_REF_INJECTION_KEY } from '@element-plus/hooks'
import { debugWarn } from '@element-plus/utils/error'

import type { VNode } from 'vue'

const NAME = 'ElOnlyChild'

const OnlyChild = defineComponent({
  name: NAME,
  setup(_, { slots, attrs }) {
    const { setForwardRef } = inject(FORWARD_REF_INJECTION_KEY, {
      setForwardRef: NOOP,
    })
    return () => {
      const defaultSlot = renderSlot(slots, 'default', attrs, () => [])!

      if (Array.isArray(defaultSlot.children)) {
        if (defaultSlot.children.length > 1) {
          debugWarn(NAME, 'ElOnlyChild requires exact only one valid child.')
          return null
        }

        const firstLegitNode = findFirstLegitChild(defaultSlot)
        if (!firstLegitNode) {
          debugWarn(NAME, 'no valid child node found')
          return null
        }

        return withDirectives(cloneVNode(firstLegitNode), [
          [
            {
              mounted(el) {
                setForwardRef(el)
              },
              updated(el) {
                setForwardRef(el)
              },
              unmounted() {
                setForwardRef(null)
              },
            },
          ],
        ])
      }
      return null
    }
  },
})

function findFirstLegitChild(node: VNode | null) {
  if (!node) return null
  if (node.type === Fragment) {
    const children = node.children as VNode[]
    for (let i = 0; i < children.length; i++) {
      const child = children[i]

      switch (child.type) {
        case Comment:
          continue
        case Text:
          return h('span', { class: 'el-only-child__content' }, [child])
        case Fragment:
          return findFirstLegitChild(child)
        default:
          return child
      }
    }
  }
  return null
}

export default OnlyChild
