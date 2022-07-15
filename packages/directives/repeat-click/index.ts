// @ts-nocheck
import { on, once } from '@element-plus/utils'

import type { DirectiveBinding, ObjectDirective } from 'vue'

export default {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    let interval = null
    let isHandlerCalled = false

    const handler = () => binding.value && binding.value()

    const clear = () => {
      clearInterval(interval)
      interval = null

      if (!isHandlerCalled) {
        handler()
      }
      isHandlerCalled = false
    }

    on(el, 'mousedown', (e: MouseEvent) => {
      if ((e as any).button !== 0) return

      once(document as any, 'mouseup', clear)

      clearInterval(interval)
      interval = setInterval(() => {
        isHandlerCalled = true
        handler()
      }, 100)
    })
  },
} as ObjectDirective
