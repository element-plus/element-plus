import { on, once } from '@element-plus/utils/dom'

import type { ObjectDirective } from 'vue'
export default {
  beforeMount(el, binding) {
    const DELAY = 300
    const INTERVAL = 100
    let intervalTimer = null
    let delayTimer = null
    const handler = () => binding.value && binding.value()
    const clear = () => {
      clearInterval(intervalTimer)
      clearTimeout(delayTimer)
      intervalTimer = null
      delayTimer = null
    }

    on(el, 'mousedown', e => {
      if ((e as any).button !== 0) return

      handler()
      once(el, 'mouseup', clear)
      clearInterval(intervalTimer)

      if (delayTimer) {
        clearTimeout(delayTimer)
      }

      delayTimer = setTimeout(() => {
        intervalTimer = setInterval(handler, INTERVAL)
        delayTimer = null
      }, DELAY)
    })
  },
} as ObjectDirective
