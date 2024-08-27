import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { useAriaProps, useSizeProp } from '@element-plus/hooks'
import { isBoolean, isNumber, isString } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type Checkbox from './checkbox.vue'

export type CheckboxValueType = string | number | boolean

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
  disabled: Boolean,
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
  ...useAriaProps(['ariaControls']),
}

export const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
  change: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxEmits = typeof checkboxEmits
export type CheckboxInstance = InstanceType<typeof Checkbox>
