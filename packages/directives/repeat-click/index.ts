import { isFunction } from '@element-plus/utils'

import type { ObjectDirective } from 'vue'

export const REPEAT_INTERVAL = 100
export const REPEAT_DELAY = 600
const SCOPE = '_RepeatClick'

interface RepeatClickEl extends HTMLElement {
  [SCOPE]: null | {
    start?: (evt: MouseEvent) => void
    clear?: () => void
  }
}

export interface RepeatClickOptions {
  interval?: number
  delay?: number
  handler: (...args: unknown[]) => unknown
}

export const vRepeatClick: ObjectDirective<
  RepeatClickEl,
  RepeatClickOptions | RepeatClickOptions['handler']
> = {
  beforeMount(el, binding) {
    const value = binding.value
    const { interval = REPEAT_INTERVAL, delay = REPEAT_DELAY } = isFunction(
      value
    )
      ? {}
      : value

    let intervalId: ReturnType<typeof setInterval> | undefined
    let delayId: ReturnType<typeof setTimeout> | undefined

    const handler = () => (isFunction(value) ? value() : value.handler())

    const clear = () => {
      if (delayId) {
        clearTimeout(delayId)
        delayId = undefined
      }
      if (intervalId) {
        clearInterval(intervalId)
        intervalId = undefined
      }
    }

    const start = (evt: MouseEvent) => {
      if (evt.button !== 0) return
      clear()
      handler()

      document.addEventListener('mouseup', clear, { once: true })

      delayId = setTimeout(() => {
        intervalId = setInterval(() => {
          handler()
        }, interval)
      }, delay)
    }

    el[SCOPE] = { start, clear }
    el.addEventListener('mousedown', start)
  },
  unmounted(el) {
    if (!el[SCOPE]) return
    const { start, clear } = el[SCOPE]

    if (start) {
      el.removeEventListener('mousedown', start)
    }
    if (clear) {
      clear()
      document.removeEventListener('mouseup', clear)
    }
    el[SCOPE] = null
  },
}
