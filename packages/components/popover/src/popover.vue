<template>
  <el-tooltip
    ref="tooltipRef"
    v-bind="passTooltipProps"
    :aria-label="title"
    :popper-class="kls"
    :popper-style="style"
    :gpu-acceleration="gpuAcceleration"
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
      <slot :hide="hide">
        {{ content }}
      </slot>
    </template>
  </el-tooltip>
</template>

<script lang="ts" setup>
import { computed, ref, unref } from 'vue'
import { isArray, pick } from 'lodash-unified'
import { ElTooltip } from '@element-plus/components/tooltip'
import { addUnit } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { popoverEmits, popoverPropsDefaults } from './popover'

import type { TooltipInstance } from '@element-plus/components/tooltip'
import type { PopoverProps } from './popover'

defineOptions({
  name: 'ElPopover',
})

const props = withDefaults(defineProps<PopoverProps>(), popoverPropsDefaults)
const emit = defineEmits(popoverEmits)

const passTooltipProps = computed(() => {
  const tooltipProps = ElTooltip.props
  const keys = isArray(tooltipProps) ? tooltipProps : Object.keys(tooltipProps)
  return pick(props, keys)
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
