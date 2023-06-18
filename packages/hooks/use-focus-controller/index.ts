import { getCurrentInstance, ref, shallowRef } from 'vue'

interface UseFocusControllerOptions {
  afterFocus?: () => void
  afterBlur?: () => void
}

export function useFocusController<T extends HTMLElement>({
  afterFocus,
  afterBlur,
}: UseFocusControllerOptions = {}) {
  const { emit } = getCurrentInstance()!
  const wrapperRef = shallowRef<HTMLElement>()
  const targetRef = shallowRef<T>()
  const isFocused = ref(false)

  const triggerAttrs = {
    role: 'button',
    tabIndex: -1,
    onClick() {
      targetRef.value?.focus()
    },
  }

  const handleFocus = (event: FocusEvent) => {
    if (isFocused.value) return
    isFocused.value = true
    emit('focus', event)
    afterFocus?.()
  }

  const handleBlur = (event: FocusEvent) => {
    setTimeout(() => {
      if (!wrapperRef.value?.contains(document.activeElement)) {
        isFocused.value = false
        emit('blur', event)
        afterBlur?.()
      }
    })
  }

  return {
    wrapperRef,
    targetRef,
    isFocused,
    triggerAttrs,
    handleFocus,
    handleBlur,
  }
}
