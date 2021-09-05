import { computed, getCurrentInstance } from 'vue'
import { isArray } from '@element-plus/utils/util'

export type TriggerType = 'click' | 'hover' | 'focus' | 'manual'
export type Trigger = TriggerType | TriggerType[]

export interface PopperEvents {
  onClick?: (e: Event) => void
  onMouseenter?: (e: Event) => void
  onMouseleave?: (e: Event) => void
  onFocus?: (e: Event) => void
  onBlur?: (e: Event) => void
}

export const DEFAULT_TRIGGER = 'hover'

type Handler = () => void

export const useTargetEvents = (
  onShow: Handler,
  onHide: Handler,
  onToggle: Handler
) => {
  const { props } = getCurrentInstance()

  let triggerFocused = false

  const popperEventsHandler = (e: Event) => {
    e.stopPropagation()
    switch (e.type) {
      case 'click': {
        if (triggerFocused) {
          // reset previous focus event
          triggerFocused = false
        } else {
          onToggle()
        }
        break
      }
      case 'mouseenter': {
        onShow()
        break
      }
      case 'mouseleave': {
        onHide()
        break
      }
      case 'focus': {
        triggerFocused = true
        onShow()
        break
      }
      case 'blur': {
        triggerFocused = false
        onHide()
        break
      }
    }
  }

  const triggerEventsMap: Partial<Record<TriggerType, (keyof PopperEvents)[]>> =
    {
      click: ['onClick'],
      hover: ['onMouseenter', 'onMouseleave'],
      focus: ['onFocus', 'onBlur'],
    }

  const mapEvents = (t: TriggerType) => {
    const events = {} as PopperEvents
    triggerEventsMap[t].forEach((event) => {
      events[event] = popperEventsHandler
    })

    return events
  }

  return computed(() => {
    if (isArray(props.trigger)) {
      return Object.values(props.trigger).reduce((pre, t) => {
        return {
          ...pre,
          ...mapEvents(t),
        }
      }, {})
    } else {
      return mapEvents(props.trigger as TriggerType)
    }
  })
}
