<template>
  <div
    ref="button"
    class="el-slider__button-wrapper"
    :class="{ hover: hovering, dragging: dragging }"
    :style="wrapperStyle"
    tabindex="0"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousedown="onButtonDown"
    @touchstart="onButtonDown"
    @focus="handleMouseEnter"
    @blur="handleMouseLeave"
    @keydown.left="onLeftKeyDown"
    @keydown.right="onRightKeyDown"
    @keydown.down.prevent="onLeftKeyDown"
    @keydown.up.prevent="onRightKeyDown"
  >
    <el-tooltip
      ref="tooltip"
      v-model="tooltipVisible"
      placement="top"
      :stop-popper-mouse-event="false"
      :popper-class="tooltipClass"
      :disabled="!showTooltip"
      manual
    >
      <template #content>
        <span>{{ formatValue }}</span>
      </template>
      <div
        class="el-slider__button"
        :class="{ hover: hovering, dragging: dragging }"
      ></div>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import ElTooltip from '@element-plus/components/tooltip'
import { useSliderButton } from './useSliderButton'
import { silderButtonProps, sliderButtonEmits } from './slider-button'

export default defineComponent({
  name: 'ElSliderButton',
  components: {
    ElTooltip,
  },
  props: silderButtonProps,
  emits: sliderButtonEmits,
  setup(props, ctx) {
    const initData = reactive({
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

    const {
      tooltip,
      showTooltip,
      tooltipVisible,
      wrapperStyle,
      formatValue,
      handleMouseEnter,
      handleMouseLeave,
      onButtonDown,
      onLeftKeyDown,
      onRightKeyDown,
      setPosition,
    } = useSliderButton(props, initData, ctx)

    const { hovering, dragging } = toRefs(initData)

    return {
      tooltip,
      tooltipVisible,
      showTooltip,
      wrapperStyle,
      formatValue,
      handleMouseEnter,
      handleMouseLeave,
      onButtonDown,
      onLeftKeyDown,
      onRightKeyDown,
      setPosition,

      hovering,
      dragging,
    }
  },
})
</script>
