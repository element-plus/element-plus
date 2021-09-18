import { watch } from 'vue'

import type { Ref } from 'vue'

export const useToggleWidgets = (
  watchSource: Ref<boolean>,
  handler: (e: Event) => void
) => {
  watch(
    () => watchSource.value,
    (val) => {
      if (val) {
        window.addEventListener('resize', handler)
      } else {
        window.removeEventListener('resize', handler)
      }
    }
  )
}
