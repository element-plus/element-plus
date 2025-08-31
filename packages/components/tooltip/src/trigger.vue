<template>
  <el-popper-trigger
    :id="id"
    :virtual-ref="virtualRef"
    :open="open"
    :virtual-triggering="virtualTriggering"
    :class="ns.e('trigger')"
    @blur="onBlur"
    @click="onClick"
    @contextmenu="onContextMenu"
    @focus="onFocus"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
    @keydown="onKeydown"
  >
    <slot />
  </el-popper-trigger>
</template>

<script lang="ts" setup>
import { inject, ref, toRef } from 'vue'
import { ElPopperTrigger } from '@element-plus/components/popper'
import { useNamespace } from '@element-plus/hooks'
import { TOOLTIP_INJECTION_KEY } from './constants'
import { useTooltipTriggerProps } from './trigger'
import { whenTrigger } from './utils'

import type { OnlyChildExpose } from '@element-plus/components/slot'

defineOptions({
  name: 'ElTooltipTrigger',
})

const props = defineProps(useTooltipTriggerProps)

const ns = useNamespace('tooltip')
const { id, open, onOpen, onClose, onToggle } = inject(
  TOOLTIP_INJECTION_KEY,
  undefined
)!

const triggerRef = ref<OnlyChildExpose | null>(null)

const trigger = toRef(props, 'trigger')
const onMouseenter = whenTrigger(trigger, 'hover', onOpen)
const onMouseleave = whenTrigger(trigger, 'hover', onClose)
const onClick = whenTrigger(trigger, 'click', (e) => {
  // distinguish left click
  if ((e as MouseEvent).button === 0) {
    onToggle(e)
  }
})

const onFocus = whenTrigger(trigger, 'focus', onOpen)

const onBlur = whenTrigger(trigger, 'focus', onClose)

const onContextMenu = whenTrigger(trigger, 'contextmenu', (e: Event) => {
  e.preventDefault()
  onToggle(e)
})

const onKeydown = (e: KeyboardEvent) => {
  const { code } = e
  if (props.triggerKeys.includes(code)) {
    e.preventDefault()
    onToggle(e)
  }
}

defineExpose({
  /**
   * @description trigger element
   */
  triggerRef,
})
</script>
