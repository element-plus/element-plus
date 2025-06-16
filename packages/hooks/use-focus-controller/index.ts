import { getCurrentInstance, onMounted, ref, shallowRef, watch } from 'vue'
import { useEventListener } from '@vueuse/core'
import { isElement, isFocusable, isFunction } from '@element-plus/utils'
// eslint-disable-next-line no-restricted-imports
import { useFormDisabled } from '@element-plus/components/form/src/hooks/use-form-common-props' // TODO: remove this

import type { ShallowRef } from 'vue'

interface UseFocusControllerOptions {
  /**
   * return true to cancel focus
   * @param event FocusEvent
   */
  beforeFocus?: (event: FocusEvent) => boolean | undefined
  afterFocus?: () => void
  /**
   * return true to cancel blur
   * @param event FocusEvent
   */
  beforeBlur?: (event: FocusEvent) => boolean | undefined
  afterBlur?: () => void
}

export function useFocusController<T extends { focus: () => void }>(
  target: ShallowRef<T | undefined>,
  {
    beforeFocus,
    afterFocus,
    beforeBlur,
    afterBlur,
  }: UseFocusControllerOptions = {}
) {
  const instance = getCurrentInstance()!
  const { emit } = instance
  const wrapperRef = shallowRef<HTMLElement>()
  const disabled = useFormDisabled()
  const isFocused = ref(false)

  const handleFocus = (event: FocusEvent) => {
    const cancelFocus = isFunction(beforeFocus) ? beforeFocus(event) : false
    if (cancelFocus || isFocused.value) return
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

  const handleClick = (event: Event) => {
    if (
      (wrapperRef.value?.contains(document.activeElement) &&
        wrapperRef.value !== document.activeElement) ||
      isFocusable(event.target as HTMLElement) ||
      disabled.value
    )
      return

    target.value?.focus()
  }

  watch([wrapperRef, disabled], ([el, disabled]) => {
    if (!el) return
    if (disabled) {
      el.removeAttribute('tabindex')
    } else {
      el.setAttribute('tabindex', '-1')
    }
  })

  useEventListener(wrapperRef, 'focus', handleFocus, true)
  useEventListener(wrapperRef, 'blur', handleBlur, true)
  useEventListener(wrapperRef, 'click', handleClick, true)

  // only for test
  if (process.env.NODE_ENV === 'test') {
    onMounted(() => {
      const targetEl = isElement(target.value)
        ? target.value
        : document.querySelector('input,textarea')

      if (targetEl) {
        useEventListener(targetEl, 'focus', handleFocus, true)
        useEventListener(targetEl, 'blur', handleBlur, true)
      }
    })
  }

  return {
    isFocused,
    /** Avoid using wrapperRef and handleFocus/handleBlur together */
    wrapperRef,
    handleFocus,
    handleBlur,
  }
}
