import type { DirectiveBinding, ObjectDirective } from 'vue'

export const REPEAT_INTERVAL = 100
export const REPEAT_DELAY = 600

const RepeatClick: ObjectDirective = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    let interval: ReturnType<typeof setInterval> | null = null
    let delay: ReturnType<typeof setTimeout> | null = null

    const handler = () => binding.value && binding.value()

    const clear = () => {
      if (delay) {
        clearTimeout(delay)
        delay = null
      }
      if (interval) {
        clearInterval(interval)
        interval = null
      }
    }

    el.addEventListener('mousedown', (e: MouseEvent) => {
      if (e.button !== 0) return
      handler()

      document.addEventListener('mouseup', clear, { once: true })
      clear()
      delay = setTimeout(() => {
        interval = setInterval(() => {
          handler()
        }, REPEAT_INTERVAL)
      }, REPEAT_DELAY)
    })
  },
}

export default RepeatClick
