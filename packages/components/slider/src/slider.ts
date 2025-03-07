import { placements } from '@popperjs/core'
import {
  buildProps,
  definePropType,
  isArray,
  isNumber,
} from '@element-plus/utils'
import {
  CHANGE_EVENT,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import { useAriaProps, useSizeProp } from '@element-plus/hooks'
import type { Arrayable } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type { SliderMarkerProps } from './marker'
import type Slider from './slider.vue'

type SliderMarks = Record<number, string | SliderMarkerProps['mark']>

export interface SliderInitData {
  firstValue: number
  secondValue: number
  oldValue?: Arrayable<number>
  dragging: boolean
  sliderSize: number
}

export const sliderProps = buildProps({
  /**
   * @description binding value
   */
  modelValue: {
    type: definePropType<Arrayable<number>>([Number, Array]),
    default: 0,
  },
  id: {
    type: String,
    default: undefined,
  },
  /**
   * @description minimum value
   */
  min: {
    type: Number,
    default: 0,
  },
  /**
   * @description maximum value
   */
  max: {
    type: Number,
    default: 100,
  },
  /**
   * @description step size
   */
  step: {
    type: Number,
    default: 1,
  },
  /**
   * @description whether to display an input box, works when `range` is false
   */
  showInput: Boolean,
  /**
   * @description whether to display control buttons when `show-input` is true
   */
  showInputControls: {
    type: Boolean,
    default: true,
  },
  /**
   * @description size of the slider wrapper, will not work in vertical mode
   */
  size: useSizeProp,
  /**
   * @description size of the input box, when set `size`, the default is the value of `size`
   */
  inputSize: useSizeProp,
  /**
   * @description whether to display breakpoints
   */
  showStops: Boolean,
  /**
   * @description whether to display tooltip value
   */
  showTooltip: {
    type: Boolean,
    default: true,
  },
  /**
   * @description format to display tooltip value
   */
  formatTooltip: {
    type: definePropType<(val: number) => number | string>(Function),
    default: undefined,
  },
  /**
   * @description whether Slider is disabled
   */
  disabled: Boolean,
  /**
   * @description whether to select a range
   */
  range: Boolean,
  /**
   * @description vertical mode
   */
  vertical: Boolean,
  /**
   * @description slider height, required in vertical mode
   */
  height: String,
  /**
   * @description debounce delay when typing, in milliseconds, works when `show-input` is true
   */
  debounce: {
    type: Number,
    default: 300,
  },
  /**
   * @description when `range` is true, screen reader label for the start of the range
   */
  rangeStartLabel: {
    type: String,
    default: undefined,
  },
  /**
   * @description when `range` is true, screen reader label for the end of the range
   */
  rangeEndLabel: {
    type: String,
    default: undefined,
  },
  /**
   * @description format to display the `aria-valuenow` attribute for screen readers
   */
  formatValueText: {
    type: definePropType<(val: number) => string>(Function),
    default: undefined,
  },
  /**
   * @description custom class name for the tooltip
   */
  tooltipClass: {
    type: String,
    default: undefined,
  },
  /**
   * @description position of Tooltip
   */
  placement: {
    type: String,
    values: placements,
    default: 'top',
  },
  /**
   * @description marks, type of key must be `number` and must in closed interval `[min, max]`, each mark can custom style
   */
  marks: {
    type: definePropType<SliderMarks>(Object),
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
  /**
   * @description when slider tooltip inactive and `persistent` is `false` , popconfirm will be destroyed. `persistent` always be `false` when `show-tooltip ` is `false`
   */
  persistent: {
    type: Boolean,
    default: true,
  },
  ...useAriaProps(['ariaLabel']),
} as const)
export type SliderProps = ExtractPropTypes<typeof sliderProps>

const isValidValue = (value: Arrayable<number>) =>
  isNumber(value) || (isArray(value) && value.every(isNumber))
export const sliderEmits = {
  [UPDATE_MODEL_EVENT]: isValidValue,
  [INPUT_EVENT]: isValidValue,
  [CHANGE_EVENT]: isValidValue,
}
export type SliderEmits = typeof sliderEmits

export type SliderInstance = InstanceType<typeof Slider>
