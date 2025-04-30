<template>
  <div
    ref="button"
    :class="[ns.e('button-wrapper'), { hover: hovering, dragging }]"
    :style="wrapperStyle"
    :tabindex="disabled ? -1 : 0"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousedown="onButtonDown"
    @focus="handleMouseEnter"
    @blur="handleMouseLeave"
    @keydown="onKeyDown"
  >
    <el-tooltip
      ref="tooltip"
      :visible="tooltipVisible"
      :placement="placement"
      :fallback-placements="['top', 'bottom', 'right', 'left']"
      :stop-popper-mouse-event="false"
      :popper-class="tooltipClass"
      :disabled="!showTooltip"
      :persistent="tooltipPersistent"
    >
      <template #content>
        <span>{{ formatValue }}</span>
      </template>
      <div :class="[ns.e('button'), { hover: hovering, dragging }]" />
    </el-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, toRefs } from 'vue'
import { ElTooltip } from '@element-plus/components/tooltip'
import { useNamespace } from '@element-plus/hooks'
import { useSliderButton } from './composables'
import { sliderButtonEmits, sliderButtonProps } from './button'
import type { SliderButtonInitData } from './button'

defineOptions({
  name: 'ElSliderButton',
})

const props = defineProps(sliderButtonProps)
const emit = defineEmits(sliderButtonEmits)

const ns = useNamespace('slider')

const initData = reactive<SliderButtonInitData>({
  hovering: false,
  dragging: false,
  isClick: false,
  startX: 0,
  currentX: 0,
  startY: 0,
  currentY: 0,
  startPosition: 0,
  newPosition: 0,
  oldValue: props.modelValue,
})

const tooltipPersistent = computed(() =>
  !showTooltip.value ? false : persistent.value
)

const {
  disabled,
  button,
  tooltip,
  showTooltip,
  persistent,
  tooltipVisible,
  wrapperStyle,
  formatValue,
  handleMouseEnter,
  handleMouseLeave,
  onButtonDown,
  onKeyDown,
  setPosition,
} = useSliderButton(props, initData, emit)

const { hovering, dragging } = toRefs(initData)

defineExpose({
  onButtonDown,
  onKeyDown,
  setPosition,
  hovering,
  dragging,
})
</script>
