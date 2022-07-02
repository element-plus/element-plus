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
import { ElPopperTrigger } from '@element-plus/components/popper'
import { useTooltipTriggerProps } from './tooltip'
import { useTrigger } from './use-trigger'

const props = defineProps(useTooltipTriggerProps)

defineOptions({
  name: 'ElTooltipTrigger',
})

const {
  ns,
  id,
  open,
  triggerRef,
  onMouseenter,
  onMouseleave,
  onClick,
  onFocus,
  onBlur,
  onContextMenu,
  onKeydown,
} = useTrigger(props)

defineExpose({
  onBlur,
  onContextMenu,
  onFocus,
  onMouseenter,
  onMouseleave,
  onClick,
  onKeydown,
  open,
  id,
  triggerRef,
  ns,
})
</script>
