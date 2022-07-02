<template>
  <el-popper ref="popperRef" :role="role">
    <el-tooltip-trigger
      :disabled="disabled"
      :trigger="trigger"
      :trigger-keys="triggerKeys"
      :virtual-ref="virtualRef"
      :virtual-triggering="virtualTriggering"
    >
      <slot v-if="$slots.default" />
    </el-tooltip-trigger>
    <el-tooltip-content
      ref="contentRef"
      :aria-label="ariaLabel"
      :boundaries-padding="boundariesPadding"
      :content="content"
      :disabled="disabled"
      :effect="effect"
      :enterable="enterable"
      :fallback-placements="fallbackPlacements"
      :hide-after="hideAfter"
      :gpu-acceleration="gpuAcceleration"
      :offset="offset"
      :persistent="persistent"
      :popper-class="popperClass"
      :popper-style="popperStyle"
      :placement="placement"
      :popper-options="popperOptions"
      :pure="pure"
      :raw-content="rawContent"
      :reference-el="referenceEl"
      :trigger-target-el="triggerTargetEl"
      :show-after="compatShowAfter"
      :strategy="strategy"
      :teleported="teleported"
      :transition="transition"
      :virtual-triggering="virtualTriggering"
      :z-index="zIndex"
      :append-to="appendTo"
    >
      <slot name="content">
        <span v-if="rawContent" v-html="content" />
        <span v-else>{{ content }}</span>
      </slot>
      <el-popper-arrow v-if="compatShowArrow" :arrow-offset="arrowOffset" />
    </el-tooltip-content>
  </el-popper>
</template>

<script lang="ts" setup>
import { ElPopper, ElPopperArrow } from '@element-plus/components/popper'
import ElTooltipContent from './content.vue'
import ElTooltipTrigger from './trigger.vue'
import { useTooltipEmits, useTooltipProps } from './tooltip'
import { useTooltip } from './use-tooltip'

defineOptions({
  name: 'ElTooltip',
})

const props = defineProps(useTooltipProps)

const emit = defineEmits(useTooltipEmits)

const {
  compatShowAfter,
  compatShowArrow,
  popperRef,
  contentRef,
  open,
  hide,
  isFocusInsideContent,
  updatePopper,
  onOpen,
  onClose,
} = useTooltip(props, emit)

defineExpose({
  disabled: props.disabled,
  compatShowAfter,
  compatShowArrow,
  popperRef,
  contentRef,
  open,
  hide,
  isFocusInsideContent,
  updatePopper,
  onOpen,
  onClose,
})
</script>
