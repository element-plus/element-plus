<template>
  <el-popper-trigger
    :virtual-ref="virtualRef"
    :id="id"
    :open="open"
    :virtual-triggering="virtualTriggering"
    @blur="onBlur"
    @contextmenu="onContextMenu"
    @focus="onFocus"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
    @mousedown="onMousedown"
    @keydown="onKeydown"
  >
    <slot />
  </el-popper-trigger>
</template>

<script lang="ts">
import { defineComponent, inject, ref, unref } from 'vue'
import { ElPopperTrigger } from '@element-plus/components/popper'
import { EVENT_CODE } from '@element-plus/utils/aria'
import { composeEventHandlers } from '@element-plus/utils/dom'
import { TOOLTIP_INJECTION_KEY } from './tokens'
import { useTooltipTriggerProps } from './tooltip'
import { whenTrigger } from './utils'

import type { ElOnlyChildExpose } from '@element-plus/components/slot'

export default defineComponent({
  name: 'ElTooltipTrigger',
  props: useTooltipTriggerProps,
  components: {
    ElPopperTrigger,
  },
  setup(props) {
    const { controlled, id, open, onOpen, onClose, onToggle } = inject(
      TOOLTIP_INJECTION_KEY,
      undefined
    )!
    const triggerRef = ref<ElOnlyChildExpose | null>(null)

    const stopWhenControlled = () => {
      if (unref(controlled)) {
        return true
      }
    }
    const onMouseenter = composeEventHandlers(
      stopWhenControlled,
      whenTrigger(props.trigger, 'hover', onOpen)
    )
    const onMouseleave = composeEventHandlers(
      stopWhenControlled,
      whenTrigger(props.trigger, 'hover', onClose)
    )
    const onMousedown = composeEventHandlers(
      stopWhenControlled,
      whenTrigger(props.trigger, 'click', onToggle)
    )
    const onFocus = composeEventHandlers(
      stopWhenControlled,
      whenTrigger(props.trigger, 'focus', onOpen)
    )

    const onBlur = composeEventHandlers(
      stopWhenControlled,
      whenTrigger(props.trigger, 'focus', onClose)
    )

    const onContextMenu = composeEventHandlers(
      stopWhenControlled,
      whenTrigger(props.trigger, 'contextmenu', (e: Event) => {
        e.preventDefault()
        onToggle(e)
      })
    )

    const onKeydown = composeEventHandlers(
      stopWhenControlled,
      (e: KeyboardEvent) => {
        const { code } = e
        if (code === EVENT_CODE.enter || code === EVENT_CODE.space) {
          onToggle(e)
        }
      }
    )

    return {
      onBlur,
      onContextMenu,
      onFocus,
      onMouseenter,
      onMouseleave,
      onMousedown,
      onKeydown,
      open,
      id,
      triggerRef,
    }
  },
})
</script>
