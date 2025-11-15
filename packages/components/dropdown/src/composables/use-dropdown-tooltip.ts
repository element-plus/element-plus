import { ref, unref } from 'vue'

import type { Ref } from 'vue'
import type {
  TooltipInstance,
  TooltipTriggerType,
} from '@element-plus/components/tooltip'

interface UseDropdownTooltipOptions {
  toggleReason: Ref<Event | undefined>
  trigger: Ref<TooltipTriggerType[]>
  handleClose: (event: Event) => void
  addPopperContent: (el?: HTMLElement) => void
  removePopperContent: (el?: HTMLElement) => void
}

export function useDropdownTooltip({
  toggleReason,
  trigger,
  handleClose,
  addPopperContent,
  removePopperContent,
}: UseDropdownTooltipOptions) {
  const popperRef = ref<TooltipInstance>()
  const contentRef = ref<HTMLElement>()
  const currentTabId = ref<string>()
  const isUsingKeyboard = ref(false)

  function onItemEnter() {
    // NOOP for now
  }

  function onItemLeave() {
    const contentEl = unref(contentRef)
    trigger.value.includes('hover') && contentEl?.focus({ preventScroll: true })
    currentTabId.value = undefined
  }

  function handleCurrentTabIdChange(id: string) {
    currentTabId.value = id
  }

  function handleShowTooltip(event?: Event) {
    addPopperContent(popperRef.value?.contentRef?.contentRef?.popperContentRef)
    isUsingKeyboard.value = (event ?? toggleReason.value)?.type === 'keydown'
    contentRef.value?.focus({ preventScroll: true })
  }

  function handleHideTooltip(event: Event) {
    handleClose(event)
    removePopperContent(
      popperRef.value?.contentRef?.contentRef?.popperContentRef
    )
    isUsingKeyboard.value = false
    currentTabId.value = undefined
  }

  return {
    popperRef,
    contentRef,
    currentTabId,
    isUsingKeyboard,
    onItemEnter,
    onItemLeave,
    handleShowTooltip,
    handleHideTooltip,
    handleCurrentTabIdChange,
  }
}
