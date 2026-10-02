import {
  Comment,
  Fragment,
  Text,
  cloneVNode,
  defineComponent,
  inject,
  withDirectives,
} from 'vue'
import { NOOP, debugWarn, isObject } from '@element-plus/utils'
import {
  FORWARD_REF_INJECTION_KEY,
  useForwardRefDirective,
  useNamespace,
} from '@element-plus/hooks'

import type { Ref, VNode } from 'vue'

const NAME = 'ElOnlyChild'

export const OnlyChild = defineComponent({
  name: NAME,
  setup(_, { slots, attrs }) {
    const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY)
    const forwardRefDirective = useForwardRefDirective(
      forwardRefInjection?.setForwardRef ?? NOOP
    )
    return () => {
      const defaultSlot = slots.default?.(attrs)
      if (!defaultSlot) return null
      const [firstLegitNode, length] = findFirstLegitChild(defaultSlot)

      if (!firstLegitNode) {
        debugWarn(NAME, 'no valid child node found')
        return null
      }
      if (length > 1) {
        debugWarn(NAME, 'requires exact only one valid child.')
      }

      return withDirectives(cloneVNode(firstLegitNode!, attrs), [
        [forwardRefDirective],
      ])
    }
  },
})

function findFirstLegitChild(
  node: VNode[] | undefined
): [VNode | null, number] {
  if (!node) return [null, 0]
  const children = node as VNode[]
  const len = children.filter((c) => c.type !== Comment).length

  for (const child of children) {
    /**
     * when user uses h(Fragment, [text]) to render plain string,
     * this switch case just cannot handle, when the value is primitives
     * we should just return the wrapped string
     */
    if (isObject(child)) {
      switch (child.type) {
        case Comment:
          continue
        case Text:
        case 'svg':
          return [wrapTextContent(child), len]
        case Fragment:
          return findFirstLegitChild(child.children as VNode[])
        default:
          return [child, len]
      }
    }
    return [wrapTextContent(child), len]
  }
  return [null, 0]
}

function wrapTextContent(s: string | VNode) {
  const ns = useNamespace('only-child')
  return <span class={ns.e('content')}>{s}</span>
}

export type OnlyChildExpose = {
  forwardRef: Ref<HTMLElement>
}
