import { inject, ref, toRef, unref } from 'vue'
import { composeEventHandlers } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { TOOLTIP_INJECTION_KEY } from '@element-plus/tokens'
import { whenTrigger } from './utils'
import type { OnlyChildExpose } from '@element-plus/components/slot'
import type { ElTooltipTriggerProps } from './tooltip'

export const useTrigger = (props: ElTooltipTriggerProps) => {
  const ns = useNamespace('tooltip')
  const { controlled, id, open, onOpen, onClose, onToggle } = inject(
    TOOLTIP_INJECTION_KEY,
    undefined
  )!
  const triggerRef = ref<OnlyChildExpose | null>(null)

  const stopWhenControlledOrDisabled = () => {
    if (unref(controlled) || props.disabled) {
      return true
    }
  }
  const trigger = toRef(props, 'trigger')
  const onMouseenter = composeEventHandlers(
    stopWhenControlledOrDisabled,
    whenTrigger(trigger, 'hover', onOpen)
  )
  const onMouseleave = composeEventHandlers(
    stopWhenControlledOrDisabled,
    whenTrigger(trigger, 'hover', onClose)
  )
  const onClick = composeEventHandlers(
    stopWhenControlledOrDisabled,
    whenTrigger(trigger, 'click', (e) => {
      // distinguish left click
      if ((e as MouseEvent).button === 0) {
        onToggle(e)
      }
    })
  )

  const onFocus = composeEventHandlers(
    stopWhenControlledOrDisabled,
    whenTrigger(trigger, 'focus', onOpen)
  )

  const onBlur = composeEventHandlers(
    stopWhenControlledOrDisabled,
    whenTrigger(trigger, 'focus', onClose)
  )

  const onContextMenu = composeEventHandlers(
    stopWhenControlledOrDisabled,
    whenTrigger(trigger, 'contextmenu', (e: Event) => {
      e.preventDefault()
      onToggle(e)
    })
  )

  const onKeydown = composeEventHandlers(
    stopWhenControlledOrDisabled,
    (e: KeyboardEvent) => {
      const { code } = e
      if (props.triggerKeys.includes(code)) {
        e.preventDefault()
        onToggle(e)
      }
    }
  )

  return {
    ns,
    controlled,
    id,
    open,
    onOpen,
    onClose,
    onToggle,
    triggerRef,
    stopWhenControlledOrDisabled,
    trigger,
    onMouseenter,
    onMouseleave,
    onClick,
    onFocus,
    onBlur,
    onContextMenu,
    onKeydown,
  }
}
