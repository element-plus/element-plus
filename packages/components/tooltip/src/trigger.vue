<template>
  <el-popper-trigger
    :virtual-ref="virtualRef"
    @blur="onBlur"
    @contextmenu="onContextMenu"
    @focus="onFocus"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
    @mousedown="onMousedown"
    @keydown="onKeydown"
  >
    <el-only-child
      v-if="!virtualRef"
      v-bind="$attrs"
      @anchor-updated=""
      @anchor-unmounted=""
      :aria-describedby="open ? id : undefined"
    >
      <slot />
    </el-only-child>
  </el-popper-trigger>
</template>

<script lang="ts">
import { defineComponent, inject, ref, unref } from 'vue'
import { isArray } from '@element-plus/utils/util'
import { ElPopperTrigger } from '@element-plus/components/popper'
import { ElOnlyChild } from '@element-plus/components/slot'
import { EVENT_CODE } from '@element-plus/utils/aria'
import { composeEventHandlers } from '@element-plus/utils/dom'
import { TOOLTIP_INJECTION_KEY } from './tokens'
import { useTooltipTriggerProps } from './tooltip'

import type { ElOnlyChildExpose } from '@element-plus/components/slot'
import type { Trigger } from './tooltip'

export default defineComponent({
  name: 'ElTooltipTrigger',
  props: useTooltipTriggerProps,
  components: {
    ElPopperTrigger,
    ElOnlyChild,
  },
  setup(props) {
    const { controlled, id, open, onOpen, onClose, onToggle } = inject(
      TOOLTIP_INJECTION_KEY,
      undefined
    )!
    const triggerRef = ref<ElOnlyChildExpose | null>(null)
    const isTriggerType = (type: Trigger) => {
      if (isArray(props.trigger)) {
        return props.trigger.includes(type)
      }
      return props.trigger === type
    }

    const stopWhenControlled = () => {
      if (unref(controlled)) {
        return true
      }
    }
    const onMouseenter = composeEventHandlers(
      stopWhenControlled,
      (e: Event) => {
        if (isTriggerType('hover')) {
          onOpen(e)
        }
      }
    )
    const onMouseleave = composeEventHandlers(
      stopWhenControlled,
      (e: Event) => {
        if (isTriggerType('hover')) {
          onClose(e)
        }
      }
    )
    const onMousedown = composeEventHandlers(stopWhenControlled, onToggle)
    const onFocus = composeEventHandlers(stopWhenControlled, (e: Event) => {
      if (isTriggerType('focus')) {
        onOpen(e)
      }
    })

    const onBlur = composeEventHandlers(stopWhenControlled, (e: Event) => {
      if (isTriggerType('focus')) {
        onClose(e)
      }
    })

    const onContextMenu = composeEventHandlers(
      stopWhenControlled,
      (e: Event) => {
        if (isTriggerType('contextmenu')) {
          onOpen(e)
        }
      }
    )

    const onKeydown = composeEventHandlers(
      stopWhenControlled,
      ({ key }: KeyboardEvent) => {
        if (key === EVENT_CODE.enter || key === EVENT_CODE.space) {
          onClose()
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
