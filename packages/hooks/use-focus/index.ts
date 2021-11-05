import type { Ref } from 'vue'

export const useFocus = (el: Ref<HTMLElement>) => {
  return {
    focus: () => {
      el.value?.focus?.()
    },
  }
}
