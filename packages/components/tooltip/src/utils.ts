import { isArray } from '@element-plus/utils/util'
import type { Trigger } from './tooltip'

export const isTriggerType = (trigger: Trigger | Trigger[], type: Trigger) => {
  if (isArray(trigger)) {
    return trigger.includes(type)
  }
  return trigger === type
}

export const whenTrigger = (
  trigger: Trigger | Trigger[],
  type: Trigger,
  handler: (e: Event) => void
) => {
  return (e: Event) => {
    isTriggerType(trigger, type) && handler(e)
  }
}
