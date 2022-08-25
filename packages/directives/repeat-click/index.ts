import type { DirectiveBinding, ObjectDirective } from 'vue'

const RepeatClick: ObjectDirective = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    let interval: ReturnType<typeof setInterval> | null = null
    let isHandlerCalled = false

    const handler = () => binding.value && binding.value()

    const clear = () => {
      clearInterval(interval!)
      interval = null

      if (!isHandlerCalled) {
        handler()
      }
      isHandlerCalled = false
    }

    el.addEventListener('mousedown', (e: MouseEvent) => {
      if (e.button !== 0) return

      document.addEventListener('mouseup', clear, { once: true })

      clearInterval(interval!)
      interval = setInterval(() => {
        isHandlerCalled = true
        handler()
      }, 200)
    })
  },
}

export default RepeatClick
