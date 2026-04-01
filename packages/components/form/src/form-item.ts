import { componentSizes } from '@element-plus/constants'
import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type { ComponentSize } from '@element-plus/constants'
import type { Arrayable } from '@element-plus/utils'
import type { FormItemRule } from './types'

export const formItemValidateStates = [
  '',
  'error',
  'validating',
  'success',
] as const
export type FormItemValidateState = (typeof formItemValidateStates)[number]

export type FormItemProp = Arrayable<string>

export interface FormItemProps {
  /**
   * @description Label text.
   */
  label?: string
  /**
   * @description Width of label, e.g. `'50px'`. `'auto'` is supported.
   */
  labelWidth?: string | number
  /**
   * @description Position of label. If set to `'left'` or `'right'`, `label-width` prop is also required. The default is extend from `form label-position`.
   */
  labelPosition?: 'left' | 'right' | 'top' | ''
  /**
   * @description  A key of `model`. It could be an array of property paths (e.g `['a', 'b', '0']`). In the use of `validate` and `resetFields` method, the attribute is required.
   */
  prop?: FormItemProp
  /**
   * @description Whether the field is required or not, will be determined by validation rules if omitted.
   */
  required?: boolean
  /**
   * @description Message to display when the field is required.
   */
  requiredMessage?: string
  /**
   * @description Validation rules of form, see the [following table](#formitemrule), more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).
   */
  rules?: Arrayable<FormItemRule>
  /**
   * @description Field error message, set its value and the field will validate error and show this message immediately.
   */
  error?: string
  /**
   * @description Validation state of formItem.
   */
  validateStatus?: FormItemValidateState
  /**
   * @description Same as for in native label.
   */
  for?: string
  /**
   * @description Inline style validate message.
   */
  inlineMessage?: boolean
  /**
   * @description Whether to show the error message.
   */
  showMessage?: boolean
  /**
   * @description Control the size of components in this form-item.
   */
  size?: ComponentSize
}

/**
 * @deprecated Removed after 3.0.0, Use `FormItemProps` instead.
 */
export const formItemProps = buildProps({
  /**
   * @description Label text.
   */
  label: String,
  /**
   * @description Width of label, e.g. `'50px'`. `'auto'` is supported.
   */
  labelWidth: {
    type: [String, Number],
  },
  /**
   * @description Position of label. If set to `'left'` or `'right'`, `label-width` prop is also required. The default is extend from `form label-position`.
   */
  labelPosition: {
    type: String,
    values: ['left', 'right', 'top', ''],
    default: '',
  },
  /**
   * @description  A key of `model`. It could be an array of property paths (e.g `['a', 'b', '0']`). In the use of `validate` and `resetFields` method, the attribute is required.
   */
  prop: {
    type: definePropType<FormItemProp>([String, Array]),
  },
  /**
   * @description Whether the field is required or not, will be determined by validation rules if omitted.
   */
  required: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description Validation rules of form, see the [following table](#formitemrule), more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).
   */
  rules: {
    type: definePropType<Arrayable<FormItemRule>>([Object, Array]),
  },
  /**
   * @description Field error message, set its value and the field will validate error and show this message immediately.
   */
  error: String,
  /**
   * @description Validation state of formItem.
   */
  validateStatus: {
    type: String,
    values: formItemValidateStates,
  },
  /**
   * @description Same as for in native label.
   */
  for: String,
  /**
   * @description Inline style validate message.
   */
  inlineMessage: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description Whether to show the error message.
   */
  showMessage: {
    type: Boolean,
    default: true,
  },
  /**
   * @description Control the size of components in this form-item.
   */
  size: {
    type: String,
    values: componentSizes,
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `FormItemProps` instead.
 */
export type FormItemPropsPublic = ExtractPublicPropTypes<typeof formItemProps>
