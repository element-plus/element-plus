import { computed, nextTick, ref } from 'vue'
import { useEventListener, useTimeoutFn } from '@vueuse/core'
import { whenMouse, whenTouch } from '@element-plus/utils'

import type { Ref } from 'vue'
import type { TooltipTriggerType } from '@element-plus/components/tooltip'
import type { UseDropdownVisibleReturn } from './use-dropdown-visible'

interface UseDropdownHoverControllerOptions extends Pick<
  UseDropdownVisibleReturn,
  'handleOpen' | 'handleClose'
> {
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
  let stop: (() => void) | undefined

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
        if (trigger.value.includes('hover')) {
          handleClose(event)
        }
        if (parentContentRef) {
          notifyParentPointerStatus('leave')
        }
      }
    })
  }

  const handlePointerEnterTrigger = whenMouse((event: PointerEvent) => {
    if (disabled.value) return
    isHoverInTrigger.value = true
    if (trigger.value.includes('hover')) {
      event.preventDefault()
      stop?.()
      ;({ stop } = useTimeoutFn(() => {
        handleOpen(event)
      }, showTimeout.value))
    }
  })

  const handlePointerLeaveTrigger = whenMouse((event: PointerEvent) => {
    if (disabled.value) return
    isHoverInTrigger.value = false
    stop?.()
    notifyParentPointerStatus('enter')
    ;({ stop } = useTimeoutFn(() => {
      if (!isHover.value) {
        if (trigger.value.includes('hover')) {
          handleClose(event)
        }
        notifyParentPointerStatus('leave')
      }
    }, hideTimeout.value))
  })

  const handlePointerDownTrigger = whenTouch((event: PointerEvent) => {
    if (disabled.value) return
    if (trigger.value.includes('hover')) {
      event.preventDefault()
      handleOpen(event)
    }
  })

  const handlePointerEnterContent = whenMouse(() => {
    isHoverInContent.value = true
    stop?.()
  })

  const handlePointerLeaveContent = whenMouse((event: PointerEvent) => {
    isHoverInContent.value = false
    stop?.()
    ;({ stop } = useTimeoutFn(() => {
      if (!isHover.value) {
        if (trigger.value.includes('hover')) {
          handleClose(event)
        }
        notifyParentPointerStatus('leave')
      }
    }, hideTimeout.value))
  })

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
    handlePointerDownTrigger,
    handlePointerEnterContent,
    handlePointerLeaveContent,
    notifyParentPointerStatus,
  }
}

export type UseDropdownHoverControllerReturn = ReturnType<
  typeof useDropdownHoverController
>
