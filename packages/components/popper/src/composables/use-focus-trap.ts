import { ref } from 'vue'

import type { SetupContext } from 'vue'
import type { PopperContentEmits, PopperContentProps } from '../content'

export const usePopperContentFocusTrap = (
  props: PopperContentProps,
  emit: SetupContext<PopperContentEmits>['emit']
) => {
  const trapped = ref(false)
  const focusStartRef = ref<'container' | 'first' | HTMLElement>()

  const onFocusAfterTrapped = () => {
    emit('focus')
  }

  const onFocusAfterReleased = (event: CustomEvent) => {
    if (event.detail?.focusReason !== 'pointer') {
      focusStartRef.value = 'first'
      emit('blur')
    }
  }

  const onFocusInTrap = (event: FocusEvent) => {
    if (props.visible && !trapped.value) {
      if (event.target) {
        focusStartRef.value = event.target as typeof focusStartRef.value
      }
      trapped.value = true
    }
  }

  const onFocusoutPrevented = (event: CustomEvent) => {
    if (!props.trapping) {
      if (event.detail.focusReason === 'pointer') {
        event.preventDefault()
      }
      trapped.value = false
    }
  }

  const onReleaseRequested = () => {
    trapped.value = false
    emit('close')
  }

  return {
    focusStartRef,
    trapped,

    onFocusAfterReleased,
    onFocusAfterTrapped,
    onFocusInTrap,
    onFocusoutPrevented,
    onReleaseRequested,
  }
}

export type UsePopperContentFocusTrapReturn = ReturnType<
  typeof usePopperContentFocusTrap
>
