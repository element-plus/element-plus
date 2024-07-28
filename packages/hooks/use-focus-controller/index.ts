import { getCurrentInstance, ref, shallowRef, watch } from 'vue'
import { useEventListener } from '@vueuse/core'
import { isFunction } from '@element-plus/utils'
import type { ShallowRef } from 'vue'

interface UseFocusControllerOptions {
  afterFocus?: () => void
  /**
   * return true to cancel blur
   * @param event FocusEvent
   */
  beforeBlur?: (event: FocusEvent) => boolean | undefined
  afterBlur?: () => void
}

export function useFocusController<T extends HTMLElement>(
  target: ShallowRef<T | undefined>,
  { afterFocus, beforeBlur, afterBlur }: UseFocusControllerOptions = {}
) {
  const instance = getCurrentInstance()!
  const { emit } = instance
  const wrapperRef = shallowRef<HTMLElement>()
  const isFocused = ref(false)

  const handleFocus = (event: FocusEvent) => {
    if (isFocused.value) return
    isFocused.value = true
    emit('focus', event)
    afterFocus?.()
  }

  const handleBlur = (event: FocusEvent) => {
    const cancelBlur = isFunction(beforeBlur) ? beforeBlur(event) : false
    if (
      cancelBlur ||
      (event.relatedTarget &&
        wrapperRef.value?.contains(event.relatedTarget as Node))
    )
      return

    isFocused.value = false
    emit('blur', event)
    afterBlur?.()
  }

  const handleClick = () => {
    target.value?.focus()
  }

  watch(wrapperRef, (el) => {
    if (el) {
      el.setAttribute('tabindex', '-1')
    }
  })

  // TODO: using useEventListener will fail the test
  // useEventListener(target, 'focus', handleFocus)
  // useEventListener(target, 'blur', handleBlur)
  useEventListener(wrapperRef, 'click', handleClick)

  return {
    wrapperRef,
    isFocused,
    handleFocus,
    handleBlur,
  }
}
