import { unref, watch } from 'vue'
import { on, off } from '@element-plus/utils/dom'

import type { Ref } from 'vue'

type PopperTriggeringMethods = {
  click: () => void
  mouseenter: () => void
  mouseleave: () => void
  focus: () => void
  blur: () => void
  contextmenu: (e: Event) => void
}

export const useTriggeringElement = (
  {
    isVirtualTriggering,
    triggeringElement,
  }: {
    isVirtualTriggering: Ref<boolean>
    triggeringElement: Ref<HTMLElement | null>
  },
  methods: PopperTriggeringMethods
) => {
  watch(
    () => unref(triggeringElement),
    (el: HTMLElement | null, prevEl: HTMLElement | null) => {
      if (!el) return
      if (unref(isVirtualTriggering)) {
        const isSameTarget = el === prevEl
        Object.keys(methods).forEach((m) => {
          if (!isSameTarget && prevEl) {
            off(prevEl, m, methods[m])
          }
          on(el, m, methods[m])
        })
      }
    }
  )
}
