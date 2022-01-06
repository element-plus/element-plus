import type { Ref } from 'vue'

export const useFocus = (
  el: Ref<{
    focus: () => void
  } | null>
) => {
  return {
    focus: () => {
      el.value?.focus?.()
    },
  }
}
