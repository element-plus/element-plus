import {
  computed,
  onDeactivated,
  provide,
  readonly,
  ref,
  toRef,
  unref,
  watch,
} from 'vue'
import { isBoolean, isUndefined } from 'lodash'
import {
  createModelToggleComposable,
  useDelayedToggle,
  useId,
  usePopperContainer,
} from '@element-plus/hooks'
import { TOOLTIP_INJECTION_KEY } from '@element-plus/tokens'
import { debugWarn } from '@element-plus/utils'
import type ElTooltipContent from './content.vue'
import type ElPopper from '@element-plus/components/popper'
import type { ElTooltipProps } from './tooltip'

export const useTooltip = (
  props: ElTooltipProps,
  emit: (event: string, ...args: any[]) => void
) => {
  const { useModelToggle } = createModelToggleComposable('visible' as const)

  usePopperContainer()
  const compatShowAfter = computed(() => {
    if (!isUndefined(props.openDelay)) {
      debugWarn(
        'ElTooltip',
        'open-delay is about to be deprecated in the next major version, please use `show-after` instead'
      )
    }
    return props.openDelay || (props.showAfter as number)
  })
  const compatShowArrow = computed(() => {
    if (!isUndefined(props.visibleArrow)) {
      debugWarn(
        'ElTooltip',
        '`visible-arrow` is about to be deprecated in the next major version, please use `show-arrow` instead'
      )
    }
    return isBoolean(props.visibleArrow) ? props.visibleArrow : props.showArrow
  })

  const id = useId()
  const popperRef = ref<InstanceType<typeof ElPopper> | null>(null)
  const contentRef = ref<InstanceType<typeof ElTooltipContent> | null>(null)

  const updatePopper = () => {
    const popperComponent = unref(popperRef)
    if (popperComponent) {
      popperComponent.popperInstanceRef?.update()
    }
  }
  const open = ref(false)
  const toggleReason = ref<Event | undefined>(undefined)

  const { show, hide } = useModelToggle({
    indicator: open,
    toggleReason,
  })

  const { onOpen, onClose } = useDelayedToggle({
    showAfter: compatShowAfter,
    hideAfter: toRef(props, 'hideAfter'),
    open: show,
    close: hide,
  })

  const controlled = computed(() => isBoolean(props.visible))

  provide(TOOLTIP_INJECTION_KEY, {
    controlled,
    id,
    open: readonly(open),
    trigger: toRef(props, 'trigger'),
    onOpen: (event?: Event) => {
      onOpen(event)
    },
    onClose: (event?: Event) => {
      onClose(event)
    },
    onToggle: (event?: Event) => {
      if (unref(open)) {
        onClose(event)
      } else {
        onOpen(event)
      }
    },
    onShow: () => {
      emit('show', toggleReason.value)
    },
    onHide: () => {
      emit('hide', toggleReason.value)
    },
    onBeforeShow: () => {
      emit('before-show', toggleReason.value)
    },
    onBeforeHide: () => {
      emit('before-hide', toggleReason.value)
    },
    updatePopper,
  })

  watch(
    () => props.disabled,
    (disabled: boolean) => {
      if (disabled && open.value) {
        open.value = false
      }
    }
  )

  const isFocusInsideContent = () => {
    const popperContent: HTMLElement | undefined =
      contentRef.value?.contentRef?.popperContentRef
    return popperContent && popperContent.contains(document.activeElement)
  }

  onDeactivated(() => open.value && hide())

  return {
    compatShowAfter,
    compatShowArrow,
    id,
    popperRef,
    contentRef,
    updatePopper,
    open,
    toggleReason,
    show,
    hide,
    onOpen,
    onClose,
    controlled,
    isFocusInsideContent,
  }
}
