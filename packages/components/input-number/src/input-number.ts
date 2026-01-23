import { isNil } from 'lodash-unified'
import { buildProps, definePropType, isNumber } from '@element-plus/utils'
import { useAriaProps, useSizeProp } from '@element-plus/hooks'
import {
  CHANGE_EVENT,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'

import type { ExtractPublicPropTypes, HTMLAttributes } from 'vue'
import type { ComponentSize } from '@element-plus/constants'
import type InputNumber from './input-number.vue'

/**
 * @description input-number component props
 */
export interface InputNumberProps {
  /**
   * @description same as `id` in native input
   */
  id?: string
  /**
   * @description incremental step
   */
  step?: number
  /**
   * @description whether input value can only be multiple of step
   */
  stepStrictly?: boolean
  /**
   * @description the maximum allowed value
   */
  max?: number
  /**
   * @description the minimum allowed value
   */
  min?: number
  /**
   * @description binding value
   */
  modelValue?: number | null
  /**
   * @description same as `readonly` in native input
   */
  readonly?: boolean
  /**
   * @description whether the component is disabled
   */
  disabled?: boolean
  /**
   * @description size of the component
   */
  size?: ComponentSize
  /**
   * @description whether to enable the control buttons
   */
  controls?: boolean
  /**
   * @description position of the control buttons
   */
  controlsPosition?: '' | 'right'
  /**
   * @description value should be set when input box is cleared
   */
  valueOnClear?: 'min' | 'max' | number | null
  /**
   * @description same as `name` in native input
   */
  name?: string
  /**
   * @description same as `placeholder` in native input
   */
  placeholder?: string
  /**
   * @description precision of input value
   */
  precision?: number
  /**
   * @description whether to trigger form validation
   */
  validateEvent?: boolean
  /**
   * @description native aria-label attribute
   */
  ariaLabel?: string
  /**
   * @description native input mode for virtual keyboards
   */
  inputmode?: HTMLAttributes['inputmode']
  /**
   * @description alignment for the inner input text
   */
  align?: 'left' | 'right' | 'center'
  /**
   * @description whether to disable scientific notation input (e.g. 'e', 'E')
   */
  disabledScientific?: boolean
  /**
   * @description format content
   */
  formatter?: (value: string) => string
  /**
   * @description parse content
   */
  parser?: (value: string) => string
}

/**
 * @deprecated Removed after 3.0.0, Use `InputNumberProps` instead.
 */
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
  disabled: {
    type: Boolean,
    default: undefined,
  },
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
    type: definePropType<'min' | 'max' | number | null>([String, Number, null]),
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
  /**
   * @description format content
   */
  formatter: {
    type: Function,
  },
  /**
   * @description parse content
   */
  parser: {
    type: Function,
  },
} as const)

export type InputNumberPropsPublic = ExtractPublicPropTypes<
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
