<template>
  <div
    ref="button"
    class="el-slider__button-wrapper"
    :class="{ 'hover': hovering, 'dragging': dragging }"
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
      placement="top"
      :popper-class="tooltipClass"
      :disabled="!showTooltip"
    >
      <template #content>{{ formatValue }}</template>
      <div class="el-slider__button" :class="{ 'hover': hovering, 'dragging': dragging }"></div>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
} from 'vue'
import ElTooltip from '@element-plus/tooltip'
import { ISliderButton, ISliderButtonInitData, ISliderButtonProps } from './Slider'
import { useSliderButton } from './useSliderButton'

export default defineComponent({
  name: 'ElSliderButton',

  components: {
    ElTooltip,
  },

  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    tooltipClass: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue'],

  setup(props:ISliderButtonProps, { emit }) {

    const initData:ISliderButtonInitData = reactive({
      hovering: false,
      dragging: false,
      isClick: false,
      startX: 0,
      currentX: 0,
      startY: 0,
      currentY: 0,
      startPosition: 0,
      newPosition: null,
      oldValue: props.modelValue,
    })

    const {
      showTooltip,
      wrapperStyle,
      formatValue,
      handleMouseEnter,
      handleMouseLeave,
      onButtonDown,
      onLeftKeyDown,
      onRightKeyDown,
      setPosition,
    }:ISliderButton = useSliderButton(props, initData, emit)


    const {
      hovering,
      dragging,
    } = toRefs(initData)

    return {
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
