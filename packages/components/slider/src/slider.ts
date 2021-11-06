import { buildProps, definePropType } from '@element-plus/utils/props'
import { isArray, isNumber } from '@element-plus/utils/util'
import {
  UPDATE_MODEL_EVENT,
  CHANGE_EVENT,
  INPUT_EVENT,
} from '@element-plus/utils/constants'
import type { ExtractPropTypes } from 'vue'
import type { ComponentSize } from '@element-plus/utils/types'

export const sliderProps = buildProps({
  modelValue: {
    type: definePropType<number | number[]>([Number, Array]),
    default: 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  showInput: {
    type: Boolean,
    default: false,
  },
  showInputControls: {
    type: Boolean,
    default: true,
  },
  inputSize: {
    type: definePropType<ComponentSize>(String),
    default: 'small',
  },
  showStops: {
    type: Boolean,
    default: false,
  },
  showTooltip: {
    type: Boolean,
    default: true,
  },
  formatTooltip: {
    type: definePropType<(val: number) => number | string>(Function),
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  range: {
    type: Boolean,
    default: false,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  height: {
    type: String,
    default: '',
  },
  debounce: {
    type: Number,
    default: 300,
  },
  label: {
    type: String,
    default: undefined,
  },
  tooltipClass: {
    type: String,
    default: undefined,
  },
  marks: Object,
} as const)
export type SliderProps = ExtractPropTypes<typeof sliderProps>

export const sliderEmits = {
  [UPDATE_MODEL_EVENT]: (val: number | number[]) =>
    isNumber(val) || isArray(val),
  [CHANGE_EVENT]: (val: number | number[]) => isNumber(val) || isArray(val),
  [INPUT_EVENT]: (val: number | number[]) => isNumber(val) || isArray(val),
}
export type SliderEmits = typeof sliderEmits
