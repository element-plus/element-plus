import { h, withDirectives } from 'vue'
import type { VNode } from 'vue'
import { ClickOutside } from '@element-plus/directives'

interface IRenderMaskProps {
  hide: () => void
}

export default function renderMask(popper: VNode, { hide }: IRenderMaskProps): VNode {
  return withDirectives(
    h('div', {
      class: 'el-popper__mask',
    }, popper),
    // marking excludes as any due to the current version of Vue's definition file
    // DOES NOT support types other than string as arguments
    [[ClickOutside, hide]],
  )
}
