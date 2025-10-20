import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { onClickOutside, unrefElement, useEventListener } from '@vueuse/core'
import { EVENT_CODE } from '@element-plus/constants'
import { getEventCode, isElement } from '@element-plus/utils'

import type { Ref } from 'vue'
import type { TooltipTriggerType } from '@element-plus/components/tooltip'
import type { DropdownProps } from '../dropdown'
import type {
  UseDropdownHoverControllerReturn,
  UseDropdownVisibleReturn,
} from './index'

interface UseDropdownControllerOptions
  extends Pick<
      UseDropdownVisibleReturn,
      'opened' | 'handleOpen' | 'handleToggle' | 'handleCloseAll'
    >,
    Pick<
      UseDropdownHoverControllerReturn,
      'handlePointerEnterTrigger' | 'handlePointerLeaveTrigger'
    > {
  props: DropdownProps
  trigger: Ref<TooltipTriggerType[]>
}

/** Used to control the ElDropdown root dropdown panel open and close */
export function useDropdownController({
  props,
  trigger,
  opened,
  handleOpen,
  handleToggle,
  handleCloseAll,
  handlePointerEnterTrigger,
  handlePointerLeaveTrigger,
}: UseDropdownControllerOptions) {
  const popperContentRefs = ref<HTMLElement[]>([])
  const triggeringElementRef = ref()
  let stopHandle: ReturnType<typeof onClickOutside> | undefined

  const triggerRef = computed(() => {
    if (props.virtualRef) {
      const virtualEl = unrefElement(props.virtualRef as HTMLElement)
      return isElement(virtualEl) ? props.virtualRef : undefined
    }

    return triggeringElementRef.value
  })

  useEventListener(triggerRef, 'click', (event) => {
    if (trigger.value.includes('click')) {
      event.preventDefault()
      handleToggle(event)
    }
  })
  useEventListener(triggerRef, 'contextmenu', (event) => {
    if (trigger.value.includes('contextmenu')) {
      event.preventDefault()
      handleToggle(event)
    }
  })
  useEventListener(triggerRef, 'keydown', (event) => {
    const code = getEventCode(event)

    if (code === EVENT_CODE.down) {
      event.preventDefault()
      handleOpen(event)
    }
  })
  useEventListener(triggerRef, 'mouseenter', (event) => {
    if (trigger.value.includes('hover')) {
      unrefElement(triggerRef).focus({ preventScroll: true })
      handlePointerEnterTrigger(event)
    }
  })
  useEventListener(triggerRef, 'mouseleave', handlePointerLeaveTrigger)

  watch(
    [opened, () => popperContentRefs.value.length],
    ([val, len]) => {
      if (!val || !len) {
        stopHandle?.()
        stopHandle = undefined
      } else {
        stopHandle = onClickOutside(
          popperContentRefs.value[0],
          (event) => {
            if (!shouldIgnore(event)) {
              handleCloseAll()
            }
          },
          { detectIframe: true }
        )
      }
    },
    {
      flush: 'post',
    }
  )

  onBeforeUnmount(() => {
    stopHandle?.()
    stopHandle = undefined
    popperContentRefs.value = []
  })

  function addPopperContent(el?: HTMLElement) {
    if (el && !popperContentRefs.value.includes(el)) {
      popperContentRefs.value.push(el)
    }
  }

  function removePopperContent(el?: HTMLElement) {
    if (!el) return
    const index = popperContentRefs.value.indexOf(el)
    if (index !== -1) {
      popperContentRefs.value.splice(index, 1)
    }
  }

  function shouldIgnore(event: Event) {
    return popperContentRefs.value.some((el) => {
      return el && (event.target === el || event.composedPath().includes(el))
    })
  }

  return {
    triggerRef,
    triggeringElementRef,
    addPopperContent,
    removePopperContent,
  }
}
