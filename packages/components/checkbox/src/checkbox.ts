import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { useAriaProps, useSizeProp } from '@element-plus/hooks'
import { isBoolean, isNumber, isString } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type { ComponentSize } from '@element-plus/constants'
import type Checkbox from './checkbox.vue'
import type { AriaProps } from '@element-plus/hooks'

export type CheckboxValueType = string | number | boolean

export interface CheckboxProps extends Pick<
  AriaProps,
  'ariaLabel' | 'ariaControls'
> {
  /**
   * @description binding value
   */
  modelValue?: number | string | boolean
  /**
   * @description label of the Checkbox when used inside a `checkbox-group`
   */
  label?: string | boolean | number | object
  /**
   * @description value of the Checkbox when used inside a `checkbox-group`
   */
  value?: string | boolean | number | object
  /**
   * @description Set indeterminate state, only responsible for style control
   */
  indeterminate?: boolean
  /**
   * @description whether the Checkbox is disabled
   */
  disabled?: boolean
  /**
   * @description if the Checkbox is checked
   */
  checked?: boolean
  /**
   * @description native 'name' attribute
   */
  name?: string
  /**
   * @description value of the Checkbox if it's checked
   */
  trueValue?: string | number
  /**
   * @description value of the Checkbox if it's not checked
   */
  falseValue?: string | number
  /**
   * @deprecated use `trueValue` instead
   * @description value of the Checkbox if it's checked
   */
  trueLabel?: string | number
  /**
   * @deprecated use `falseValue` instead
   * @description value of the Checkbox if it's not checked
   */
  falseLabel?: string | number
  /**
   * @description input id
   */
  id?: string
  /**
   * @description whether to add a border around Checkbox
   */
  border?: boolean
  /**
   * @description size of the Checkbox
   */
  size?: ComponentSize
  /**
   * @description input tabindex
   */
  tabindex?: string | number
  /**
   * @description whether to trigger form validation
   */
  validateEvent?: boolean
}
/**
 * @deprecated Removed after 3.0.0, Use `CheckboxProps` instead.
 */
export const checkboxProps = {
  /**
   * @description binding value
   */
  modelValue: {
    type: [Number, String, Boolean],
    default: undefined,
  },
  /**
   * @description label of the Checkbox when used inside a `checkbox-group`
   */
  label: {
    type: [String, Boolean, Number, Object],
    default: undefined,
  },
  /**
   * @description value of the Checkbox when used inside a `checkbox-group`
   */
  value: {
    type: [String, Boolean, Number, Object],
    default: undefined,
  },
  /**
   * @description Set indeterminate state, only responsible for style control
   */
  indeterminate: Boolean,
  /**
   * @description whether the Checkbox is disabled
   */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description if the Checkbox is checked
   */
  checked: Boolean,
  /**
   * @description native 'name' attribute
   */
  name: {
    type: String,
    default: undefined,
  },
  /**
   * @description value of the Checkbox if it's checked
   */
  trueValue: {
    type: [String, Number],
    default: undefined,
  },
  /**
   * @description value of the Checkbox if it's not checked
   */
  falseValue: {
    type: [String, Number],
    default: undefined,
  },
  /**
   * @deprecated use `trueValue` instead
   * @description value of the Checkbox if it's checked
   */
  trueLabel: {
    type: [String, Number],
    default: undefined,
  },
  /**
   * @deprecated use `falseValue` instead
   * @description value of the Checkbox if it's not checked
   */
  falseLabel: {
    type: [String, Number],
    default: undefined,
  },
  /**
   * @description input id
   */
  id: {
    type: String,
    default: undefined,
  },
  /**
   * @description whether to add a border around Checkbox
   */
  border: Boolean,
  /**
   * @description size of the Checkbox
   */
  size: useSizeProp,
  /**
   * @description input tabindex
   */
  tabindex: [String, Number],
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
  ariaLabel: String,
  ...useAriaProps(['ariaControls']),
}

export const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
  change: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

/**
 * @deprecated Removed after 3.0.0, Use `CheckboxProps` instead.
 */
export type CheckboxPropsPublic = ExtractPublicPropTypes<typeof checkboxProps>
export type CheckboxEmits = typeof checkboxEmits
export type CheckboxInstance = InstanceType<typeof Checkbox> & unknown

export const checkboxPropsDefaults = {
  modelValue: undefined,
  label: undefined,
  value: undefined,
  disabled: undefined,
  name: undefined,
  trueValue: undefined,
  falseValue: undefined,
  trueLabel: undefined,
  falseLabel: undefined,
  id: undefined,
  validateEvent: true,
} as const
