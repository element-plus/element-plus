import { cloneVNode } from 'vue'

import { getFirstValidNode } from '@element-plus/utils/vnode'

import type { VNode } from 'vue'

interface IRenderTriggerProps extends Record<string, unknown> {
  ref: string
  onClick?: () => void
  onMouseOver?: () => void
  onMouseLeave?: () => void
  onFocus?: () => void
}

export default function renderTrigger(trigger: VNode[], extraProps: IRenderTriggerProps) {
  const firstElement = getFirstValidNode(trigger)
  return cloneVNode(firstElement, extraProps)
}
