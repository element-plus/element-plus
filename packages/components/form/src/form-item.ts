import { componentSizes } from '@element-plus/constants'
import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type { Arrayable } from '@element-plus/utils'
import type { FormItemRule } from './types'

export const formItemValidateStates = [
  '',
  'error',
  'validating',
  'success',
] as const
export type FormItemValidateState = typeof formItemValidateStates[number]

export type FormItemProp = Arrayable<string>

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
    default: '',
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
    type: [String, Boolean],
    default: '',
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
export type FormItemProps = ExtractPropTypes<typeof formItemProps>
