<template>
  <div
    ref="button"
    :class="[ns.e('button-wrapper'), { hover: hovering, dragging }]"
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
      v-model:visible="tooltipVisible"
      placement="top"
      :stop-popper-mouse-event="false"
      :popper-class="tooltipClass"
      :disabled="!showTooltip"
      persistent
    >
      <template #content>
        <span>{{ formatValue }}</span>
      </template>
      <div :class="[ns.e('button'), { hover: hovering, dragging }]"></div>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import ElTooltip from '@element-plus/components/tooltip'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { useNamespace } from '@element-plus/hooks'
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

  emits: [UPDATE_MODEL_EVENT],

  setup(props, { emit }) {
    const ns = useNamespace('slider')
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
    } = useSliderButton(props, initData, emit)

    const { hovering, dragging } = toRefs(initData)

    return {
      ns,
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
