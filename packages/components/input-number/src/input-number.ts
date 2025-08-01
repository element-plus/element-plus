import { isNil } from 'lodash-unified'
import { useAriaProps, useSizeProp } from '@element-plus/hooks'
import { buildProps, definePropType, isNumber } from '@element-plus/utils'
import {
  CHANGE_EVENT,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'

import type {
  ExtractPropTypes,
  HTMLAttributes,
  __ExtractPublicPropTypes,
} from 'vue'
import type InputNumber from './input-number.vue'

export const inputNumberProps = buildProps({
  /**
   * @description same as `id` in native input
   */
  id: {
    type: String,
    default: undefined,
  },
  /**
   * @description incremental step
   */
  step: {
    type: Number,
    default: 1,
  },
  /**
   * @description whether input value can only be multiple of step
   */
  stepStrictly: Boolean,
  /**
   * @description the maximum allowed value
   */
  max: {
    type: Number,
    default: Number.MAX_SAFE_INTEGER,
  },
  /**
   * @description the minimum allowed value
   */
  min: {
    type: Number,
    default: Number.MIN_SAFE_INTEGER,
  },
  /**
   * @description binding value
   */
  modelValue: {
    type: [Number, null],
  },
  /**
   * @description same as `readonly` in native input
   */
  readonly: Boolean,
  /**
   * @description whether the component is disabled
   */
  disabled: Boolean,
  /**
   * @description size of the component
   */
  size: useSizeProp,
  /**
   * @description whether to enable the control buttons
   */
  controls: {
    type: Boolean,
    default: true,
  },
  /**
   * @description position of the control buttons
   */
  controlsPosition: {
    type: String,
    default: '',
    values: ['', 'right'],
  },
  /**
   * @description value should be set when input box is cleared
   */
  valueOnClear: {
    type: [String, Number, null],
    validator: (val: 'min' | 'max' | number | null) =>
      val === null || isNumber(val) || ['min', 'max'].includes(val),
    default: null,
  },
  /**
   * @description same as `name` in native input
   */
  name: String,
  /**
   * @description same as `placeholder` in native input
   */
  placeholder: String,
  /**
   * @description precision of input value
   */
  precision: {
    type: Number,
    validator: (val: number) =>
      val >= 0 && val === Number.parseInt(`${val}`, 10),
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
  ...useAriaProps(['ariaLabel']),
  /**
   * @description native input mode for virtual keyboards
   */
  inputmode: {
    type: definePropType<HTMLAttributes['inputmode']>(String),
    default: undefined,
  },
  /**
   * @description alignment for the inner input text
   */
  align: {
    type: definePropType<'left' | 'right' | 'center'>(String),
    default: 'center',
  },
  /**
   * @description whether to disable scientific notation input (e.g. 'e', 'E')
   */
  disabledScientific: Boolean,
} as const)
export type InputNumberProps = ExtractPropTypes<typeof inputNumberProps>
export type InputNumberPropsPublic = __ExtractPublicPropTypes<
  typeof inputNumberProps
>

export const inputNumberEmits = {
  [CHANGE_EVENT]: (cur: number | undefined, prev: number | undefined) =>
    prev !== cur,
  blur: (e: FocusEvent) => e instanceof FocusEvent,
  focus: (e: FocusEvent) => e instanceof FocusEvent,
  [INPUT_EVENT]: (val: number | null | undefined) =>
    isNumber(val) || isNil(val),
  [UPDATE_MODEL_EVENT]: (val: number | undefined) =>
    isNumber(val) || isNil(val),
}
export type InputNumberEmits = typeof inputNumberEmits

export type InputNumberInstance = InstanceType<typeof InputNumber> & unknown
