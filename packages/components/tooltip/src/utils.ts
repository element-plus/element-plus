import { unref } from 'vue'
import { isArray } from '@element-plus/utils'
import type { Arrayable } from '@element-plus/utils'
import type { Ref } from 'vue'
import type { TooltipTriggerType } from './trigger'

export const isTriggerType = (
  trigger: Arrayable<TooltipTriggerType>,
  type: TooltipTriggerType
) => {
  if (isArray(trigger)) {
    return trigger.includes(type)
  }
  return trigger === type
}

export const whenTrigger = (
  trigger: Ref<Arrayable<TooltipTriggerType>>,
  type: TooltipTriggerType,
  handler: (e: Event) => void
) => {
  return (e: Event) => {
    isTriggerType(unref(trigger), type) && handler(e)
  }
}

export const getActiveElement = (
  root: Document | ShadowRoot = document
): Element | null => {
  const activeEl = root.activeElement

  if (!activeEl) {
    return null
  }

  if (activeEl.shadowRoot) {
    return getActiveElement(activeEl.shadowRoot)
  } else {
    return activeEl
  }
}
