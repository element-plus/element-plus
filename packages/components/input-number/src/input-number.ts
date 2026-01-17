import { isNil } from 'lodash-unified'
import { isNumber } from '@element-plus/utils'
import {
  CHANGE_EVENT,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'

import type { HTMLAttributes } from 'vue'
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
  size?: '' | 'large' | 'default' | 'small'
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
}

export type InputNumberPropsPublic = InputNumberProps

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
