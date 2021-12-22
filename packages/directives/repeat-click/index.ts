import { on, once } from '@element-plus/utils/dom'

import type { ObjectDirective, DirectiveBinding } from 'vue'

export default {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    let interval = null
    let startTime: number
    const handler = () => binding.value && binding.value()
    const clear = () => {
      if (Date.now() - startTime < 100) {
        handler()
      }
      clearInterval(interval)
      interval = null
    }

    on(el, 'mousedown', (e: MouseEvent) => {
      if ((e as any).button !== 0) return
      startTime = Date.now()
      once(document as any, 'mouseup', clear)
      clearInterval(interval)
      interval = setInterval(handler, 100)
    })
  },
} as ObjectDirective
