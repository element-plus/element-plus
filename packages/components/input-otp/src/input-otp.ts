import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { isString } from '@element-plus/utils'

import type { InputHTMLAttributes } from 'vue'
import type { ComponentSize } from '@element-plus/constants'
import type { AriaProps } from '@element-plus/hooks'

export interface InputOtpProps extends Pick<AriaProps, 'ariaLabel'> {
  /**
   * @description The value of the OTP fields.
   *
   * Since numbers must not have leading zeros, `modelValue` is allowed to be a number only during initialization.
   *
   * @default undefined
   */
  modelValue?: string | number
  /**
   * @description The OTP fields length
   * @min 4
   * @max 8
   * @default 6
   */
  length?: number
  /**
   * @description Custom validator function
   * @default () => true
   */
  validate?: (char: string, index: number) => boolean
  /**
   * @description Native input mode for virtual keyboards
   */
  inputmode?: InputHTMLAttributes['inputmode']
  /**
   * @description The type of the OTP fields
   * @default 'outlined'
   */
  type?: 'outlined' | 'filled' | 'underlined'
  /**
   * @description The size of the OTP fields
   * @default 'default'
   */
  size?: ComponentSize
  /**
   * @description Whether the OTP fields are disabled
   * @default undefined
   */
  disabled?: boolean
  /**
   * @description Same as `readonly` in native input
   */
  readonly?: boolean
  /**
   * @description Same as `id` in native input
   */
  id?: string
  /**
   * @description Whether to trigger form validation
   */
  validateEvent?: boolean
}

export const inputOtpEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
  [CHANGE_EVENT]: (value: string) => isString(value),
  finish: (value: string) => isString(value),
  focus: (eve: FocusEvent) => eve instanceof FocusEvent,
  blur: (eve: FocusEvent) => eve instanceof FocusEvent,
}

export type InputOtpEmits = typeof inputOtpEmits
