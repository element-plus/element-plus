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
    <el-popper
      v-if="showTooltip"
      ref="tooltip"
      v-model:visible="tooltipVisible"
      placement="top"
      :popper-class="tooltipClass"
      manual-mode
    >
      <template #default>{{ formatValue }}</template>
      <template #trigger>
        <div class="el-slider__button el-tooltip" :class="{ 'hover': hovering, 'dragging': dragging }"></div>
      </template>
    </el-popper>
    <div v-else class="el-slider__button el-tooltip" :class="{ 'hover': hovering, 'dragging': dragging }"></div>
  </div>
</template>

<script lang="ts">
import { Popper as ElPopper } from '@element-plus/popper'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import { defineComponent, reactive, toRefs } from 'vue'
import { useSliderButton } from './useSliderButton'

export default defineComponent({
  name: 'ElSliderButton',

  components: {
    ElPopper,
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

  emits: [UPDATE_MODEL_EVENT],

  setup(props, { emit }) {

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
    } = useSliderButton(props, initData, emit)


    const {
      hovering,
      dragging,
    } = toRefs(initData)

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
