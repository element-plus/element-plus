import { isFunction } from '@element-plus/utils'

import type { ObjectDirective } from 'vue'

export const REPEAT_INTERVAL = 100
export const REPEAT_DELAY = 600

export interface BindEventHTMLElement extends HTMLElement {
  __element_bind_event__: Record<string, (...args: any[]) => any>
}

export interface RepeatClickOptions {
  interval?: number
  delay?: number
  handler: (...args: unknown[]) => unknown
}

export const vRepeatClick: ObjectDirective<
  BindEventHTMLElement,
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

    function onmousedown(evt: MouseEvent) {
      if (evt.button !== 0) return
      clear()
      handler()
      document.addEventListener('mouseup', onmouseup, {
        once: true,
      })
      delayId = setTimeout(() => {
        intervalId = setInterval(() => {
          handler()
        }, interval)
      }, delay)
    }

    function onmouseup() {
      clear()
    }

    el.addEventListener('mousedown', onmousedown)

    el.__element_bind_event__ = {
      mousedown: onmousedown,
    }
  },
  beforeUnmount(el) {
    el.removeEventListener('mousedown', el.__element_bind_event__['mousedown'])
  },
}
