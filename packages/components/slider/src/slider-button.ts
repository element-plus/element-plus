import { buildProps } from '@element-plus/utils/props'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import { isNumber } from '@element-plus/utils/util'
import type { ExtractPropTypes } from 'vue'

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
