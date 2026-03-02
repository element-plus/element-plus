import {
  getCurrentInstance,
  onMounted,
  ref,
  shallowRef,
  unref,
  watch,
} from 'vue'
import { useEventListener } from '@vueuse/core'
import { isElement, isFocusable, isFunction } from '@element-plus/utils'

import type { ShallowRef } from 'vue'
import type { MaybeRef } from '@vueuse/core'

interface UseFocusControllerOptions {
  disabled?: MaybeRef<boolean>
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
  wrapperRef?: Readonly<ShallowRef<HTMLElement | undefined | null>>
}

export function useFocusController<T extends { focus: () => void }>(
  target: Readonly<ShallowRef<T | undefined | null>>,
  {
    disabled,
    beforeFocus,
    afterFocus,
    beforeBlur,
    afterBlur,
    wrapperRef,
  }: UseFocusControllerOptions = {}
) {
  const instance = getCurrentInstance()!
  const { emit } = instance
  const _wrapperRef = wrapperRef ?? shallowRef<HTMLElement>()
  const isFocused = ref(false)

  const handleFocus = (event: FocusEvent) => {
    const cancelFocus = isFunction(beforeFocus) ? beforeFocus(event) : false
    if (unref(disabled) || isFocused.value || cancelFocus) return

    isFocused.value = true
    emit('focus', event)
    afterFocus?.()
  }

  const handleBlur = (event: FocusEvent) => {
    const cancelBlur = isFunction(beforeBlur) ? beforeBlur(event) : false
    if (
      unref(disabled) ||
      (event.relatedTarget &&
        _wrapperRef.value?.contains(event.relatedTarget as Node)) ||
      cancelBlur
    )
      return

    isFocused.value = false
    emit('blur', event)
    afterBlur?.()
  }

  const handleClick = (event: Event) => {
    if (
      unref(disabled) ||
      isFocusable(event.target as HTMLElement) ||
      (_wrapperRef.value?.contains(document.activeElement) &&
        _wrapperRef.value !== document.activeElement)
    )
      return

    target.value?.focus()
  }

  watch([_wrapperRef, () => unref(disabled)], ([el, disabled]) => {
    if (!el) return
    if (disabled) {
      el.removeAttribute('tabindex')
    } else {
      el.setAttribute('tabindex', '-1')
    }
  })

  useEventListener(_wrapperRef, 'focus', handleFocus, true)
  useEventListener(_wrapperRef, 'blur', handleBlur, true)
  useEventListener(_wrapperRef, 'click', handleClick, true)

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
    wrapperRef: _wrapperRef,
    handleFocus,
    handleBlur,
  }
}
