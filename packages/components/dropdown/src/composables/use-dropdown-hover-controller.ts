import { computed, nextTick, ref } from 'vue'
import { useEventListener, useTimeoutFn } from '@vueuse/core'

import type { Ref } from 'vue'
import type { TooltipTriggerType } from '@element-plus/components/tooltip'
import type { UseDropdownVisibleReturn } from './use-dropdown-visible'

interface UseDropdownHoverControllerOptions
  extends Pick<UseDropdownVisibleReturn, 'handleOpen' | 'handleClose'> {
  trigger: Ref<TooltipTriggerType[]>
  parentContentRef?: Ref<HTMLElement | undefined>
  contentRef: Ref<HTMLElement | undefined>
  disabled: Ref<boolean>
  showTimeout: Ref<number>
  hideTimeout: Ref<number>
}

const POINTER_ENTER_TOOLTIP = 'dropdown.pointer-enter-tooltip'
const POINTER_LEAVE_TOOLTIP = 'dropdown.pointer-leave-tooltip'

export function useDropdownHoverController({
  trigger,
  parentContentRef,
  contentRef,
  disabled,
  showTimeout,
  hideTimeout,
  handleOpen,
  handleClose,
}: UseDropdownHoverControllerOptions) {
  const isHoverInTrigger = ref(false)
  const isHoverInContent = ref(false)
  const isHoverInSubContent = ref(false)
  let timeout: (() => void) | undefined

  const isHover = computed(() => {
    return (
      isHoverInTrigger.value ||
      isHoverInContent.value ||
      isHoverInSubContent.value
    )
  })

  useEventListener(contentRef, POINTER_ENTER_TOOLTIP, handleEnterSubContent)
  useEventListener(contentRef, POINTER_LEAVE_TOOLTIP, handleLeaveSubContent)

  function handleEnterSubContent(event: PointerEvent) {
    event.stopPropagation()
    isHoverInSubContent.value = true
  }

  function handleLeaveSubContent(event: PointerEvent) {
    event.stopPropagation()
    isHoverInSubContent.value = false

    nextTick(() => {
      if (!isHover.value) {
        if (parentContentRef) {
          notifyParentPointerStatus('leave')
        } else {
          if (trigger.value.includes('hover')) {
            handleClose(event)
          }
        }
      }
    })
  }

  function handlePointerEnterTrigger(event: PointerEvent | MouseEvent) {
    if (disabled.value) return
    isHoverInTrigger.value = true
    if (trigger.value.includes('hover')) {
      event.preventDefault()
      handleOpen(event)
    }
  }

  function handlePointerLeaveTrigger(event: PointerEvent | MouseEvent) {
    if (disabled.value) return
    isHoverInTrigger.value = false
    timeout?.()
    notifyParentPointerStatus('enter')
    ;({ stop: timeout } = useTimeoutFn(() => {
      if (!isHover.value) {
        if (trigger.value.includes('hover')) {
          handleClose(event)
        }
        notifyParentPointerStatus('leave')
      }
    }, showTimeout.value))
  }

  function handlePointerEnterContent() {
    isHoverInContent.value = true
  }

  function handlePointerLeaveContent(event: PointerEvent) {
    isHoverInContent.value = false
    timeout?.()
    ;({ stop: timeout } = useTimeoutFn(() => {
      if (!isHover.value) {
        if (trigger.value.includes('hover')) {
          handleClose(event)
        }
        notifyParentPointerStatus('leave')
      }
    }, hideTimeout.value))
  }

  function notifyParentPointerStatus(type: 'enter' | 'leave') {
    if (!parentContentRef?.value) return
    const eventType =
      type === 'enter' ? POINTER_ENTER_TOOLTIP : POINTER_LEAVE_TOOLTIP

    const event = new Event(eventType, {
      bubbles: true,
      cancelable: true,
    })

    parentContentRef.value.dispatchEvent(event)
  }

  return {
    isHover,
    isHoverInTrigger,
    isHoverInContent,
    isHoverInSubContent,
    handlePointerEnterTrigger,
    handlePointerLeaveTrigger,
    handlePointerEnterContent,
    handlePointerLeaveContent,
    notifyParentPointerStatus,
  }
}

export type UseDropdownHoverControllerReturn = ReturnType<
  typeof useDropdownHoverController
>
