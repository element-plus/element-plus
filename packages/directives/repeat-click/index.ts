import { isFunction } from '@element-plus/utils'

import type { ObjectDirective } from 'vue'

export const REPEAT_INTERVAL = 100
export const REPEAT_DELAY = 600

export interface RepeatClickOptions {
  interval?: number
  delay?: number
  handler: (...args: unknown[]) => unknown
}

const handlerMap = new WeakMap<
  HTMLElement,
  {
    onMouseDown: (e: MouseEvent) => void
    clear: () => void
  }
>()

export const vRepeatClick: ObjectDirective<
  HTMLElement,
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

    const onMouseDown = (evt: MouseEvent) => {
      if (evt.button !== 0) return
      clear()
      handler()

      document.addEventListener('mouseup', () => clear(), {
        once: true,
      })

      delayId = setTimeout(() => {
        intervalId = setInterval(() => {
          handler()
        }, interval)
      }, delay)
    }

    el.addEventListener('mousedown', onMouseDown)

    handlerMap.set(el, { onMouseDown, clear })
  },
  unmounted(el) {
    const entry = handlerMap.get(el)
    if (entry) {
      el.removeEventListener('mousedown', entry.onMouseDown)
      entry.clear()
      handlerMap.delete(el)
    }
  },
}
