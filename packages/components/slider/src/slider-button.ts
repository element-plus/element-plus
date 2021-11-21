import { buildProps } from '@element-plus/utils/props'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import { isNumber } from '@element-plus/utils/util'
import type { ElTooltip } from '../../tooltip'
import type { ExtractPropTypes } from 'vue'
import type sliderButton from './slider-button.vue'
export interface SliderButtonStates {
  hovering: boolean
  dragging: boolean
  isClick: boolean
  startX: number
  currentX: number
  startY: number
  currentY: number
  startPosition: number
  newPosition: number
  oldValue: number
}

export const silderButtonProps = buildProps({
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
} as const)
export type SliderButtonProps = ExtractPropTypes<typeof silderButtonProps>

export const sliderButtonEmits = {
  [UPDATE_MODEL_EVENT]: (val: number) => isNumber(val),
}
export type SliderButtonEmits = typeof sliderButtonEmits

export type SliderButtonInstance = InstanceType<typeof sliderButton>

/** TODO: when tooltip instance merge, here can be remove */
export type ElTooltipInstance = InstanceType<typeof ElTooltip>
