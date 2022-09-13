<template>
  <el-tooltip
    ref="tooltipRef"
    v-bind="$attrs"
    :trigger="trigger"
    :placement="placement"
    :disabled="disabled"
    :visible="visible"
    :transition="transition"
    :popper-options="popperOptions"
    :tabindex="tabindex"
    :content="content"
    :offset="offset"
    :show-after="showAfter"
    :hide-after="hideAfter"
    :auto-close="autoClose"
    :show-arrow="showArrow"
    :aria-label="title"
    :effect="effect"
    :enterable="enterable"
    :popper-class="kls"
    :popper-style="style"
    :teleported="teleported"
    :persistent="persistent"
    :gpu-acceleration="gpuAcceleration"
    @update:visible="onUpdateVisible"
    @before-show="beforeEnter"
    @before-hide="beforeLeave"
    @show="afterEnter"
    @hide="afterLeave"
  >
    <template v-if="$slots.reference">
      <slot name="reference" />
    </template>

    <template #content>
      <div v-if="title" :class="ns.e('title')" role="title">
        {{ title }}
      </div>
      <slot>
        {{ content }}
      </slot>
    </template>
  </el-tooltip>
</template>
<script lang="ts" setup>
import { computed, ref, unref } from 'vue'
import { ElTooltip } from '@element-plus/components/src/tooltip'
import { addUnit } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { popoverEmits, popoverProps } from './popover'
import type { TooltipInstance } from '@element-plus/components/src/tooltip'

defineOptions({
  name: 'ElPopover',
})

const props = defineProps(popoverProps)
const emit = defineEmits(popoverEmits)

const updateEventKeyRaw = `onUpdate:visible` as const

const onUpdateVisible = computed(() => {
  return props[updateEventKeyRaw]
})

const ns = useNamespace('popover')
const tooltipRef = ref<TooltipInstance>()
const popperRef = computed(() => {
  return unref(tooltipRef)?.popperRef
})

const style = computed(() => {
  return [
    {
      width: addUnit(props.width),
    },
    props.popperStyle!,
  ]
})

const kls = computed(() => {
  return [ns.b(), props.popperClass!, { [ns.m('plain')]: !!props.content }]
})

const gpuAcceleration = computed(() => {
  return props.transition === `${ns.namespace.value}-fade-in-linear`
})

const hide = () => {
  tooltipRef.value?.hide()
}

const beforeEnter = () => {
  emit('before-enter')
}
const beforeLeave = () => {
  emit('before-leave')
}

const afterEnter = () => {
  emit('after-enter')
}

const afterLeave = () => {
  emit('update:visible', false)
  emit('after-leave')
}

defineExpose({
  /** @description popper ref */
  popperRef,
  /** @description hide popover */
  hide,
})
</script>
