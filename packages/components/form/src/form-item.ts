import { buildProps, definePropType } from '@element-plus/utils/props'
import { isValidComponentSize } from '@element-plus/utils/validators'
import type { ExtractPropTypes } from 'vue'
import type { FormItemRule } from './form'
import type { ComponentSize } from '@element-plus/utils/types'

export const formItemProps = buildProps({
  label: String,
  labelWidth: {
    type: [String, Number],
    default: '',
  },
  prop: String,
  required: {
    type: Boolean,
    default: undefined,
  },
  rules: {
    type: definePropType<FormItemRule | FormItemRule[]>([Object, Array]),
  },
  error: String,
  validateStatus: String,
  for: String,
  inlineMessage: {
    type: [String, Boolean],
    default: '',
  },
  showMessage: {
    type: Boolean,
    default: true,
  },
  size: {
    type: definePropType<ComponentSize>(String),
    validator: isValidComponentSize,
  },
} as const)

export type FormItemProps = ExtractPropTypes<typeof formItemProps>
