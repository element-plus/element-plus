import { buildProps, isBoolean, isNumber, isString } from '@element-plus/utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { useSizeProp } from '@element-plus/hooks'

import type { ExtractPublicPropTypes } from 'vue'
import type { ComponentSize } from '@element-plus/constants'
import type Radio from './radio.vue'

export interface RadioPropsBase {
  /**
   * @description binding value
   */
  modelValue?: string | number | boolean
  /**
   * @description size of the Radio
   */
  size?: ComponentSize
  /**
   * @description whether Radio is disabled
   */
  disabled?: boolean
  /**
   * @description the label of Radio
   */
  label?: string | number | boolean
  /**
   * @description the value of Radio
   */
  value?: string | number | boolean
  /**
   * @description native `name` attribute
   */
  name?: string
}

export interface RadioProps extends RadioPropsBase {
  /**
   * @description whether to add a border around Radio
   */
  border?: boolean
}

/**
 * @deprecated Removed after 3.0.0, Use `RadioPropsBase` instead.
 */
export const radioPropsBase = buildProps({
  /**
   * @description binding value
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  /**
   * @description size of the Radio
   */
  size: useSizeProp,
  /**
   * @description whether Radio is disabled
   */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description the label of Radio
   */
  label: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  /**
   * @description the value of Radio
   */
  value: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  /**
   * @description native `name` attribute
   */
  name: {
    type: String,
    default: undefined,
  },
})

/**
 * @deprecated Removed after 3.0.0, Use `RadioProps` instead.
 */
export const radioProps = buildProps({
  ...radioPropsBase,
  /**
   * @description whether to add a border around Radio
   */
  border: Boolean,
} as const)

export const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val: string | number | boolean | undefined) =>
    isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val: string | number | boolean | undefined) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

/**
 * @deprecated Removed after 3.0.0, Use `RadioProps` instead.
 */
export type RadioPropsPublic = ExtractPublicPropTypes<typeof radioProps>
export type RadioEmits = typeof radioEmits
export type RadioInstance = InstanceType<typeof Radio> & unknown

/**
 * @description default values for RadioProps
 */
export const radioPropsDefaults = {
  modelValue: undefined,
  disabled: undefined,
  label: undefined,
  value: undefined,
  name: undefined,
  border: false,
} as const
