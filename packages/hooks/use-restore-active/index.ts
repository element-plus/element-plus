import { isRef, watch } from 'vue'
import type { Ref } from 'vue'

/**
 * This method provides dialogable components the ability to restore previously activated element before
 * the dialog gets opened
 */
export default (toggle: Ref<boolean>, initialFocus?: Ref<HTMLElement>) => {
  let previousActive: HTMLElement
  watch(
    () => toggle.value,
    (val) => {
      if (val) {
        previousActive = document.activeElement as HTMLElement
        if (isRef(initialFocus)) {
          initialFocus.value.focus?.()
        }
      } else {
        if (process.env.NODE_ENV === 'testing') {
          previousActive.focus.call(previousActive)
        } else {
          previousActive.focus()
        }
      }
    }
  )
}
