import { cloneVNode } from 'vue'

import throwError from '@element-plus/utils/error'
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
  const firstElement = getFirstValidNode(trigger, 1)
  if (!firstElement) throwError('renderTrigger', 'trigger expects single rooted node')
  return cloneVNode(firstElement, extraProps)
}
