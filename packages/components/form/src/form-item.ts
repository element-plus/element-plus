import { componentSizes } from '@element-plus/constants'
import { buildProps, definePropType, iconPropType } from '@element-plus/utils'
import { QuestionFilled } from '@element-plus/icons-vue'
import type { ExtractPropTypes, PropType } from 'vue'
import type { Arrayable } from '@element-plus/utils'
import type { FormItemRule } from '@element-plus/tokens'
import type { Placement } from '@element-plus/components/popper'

export const formItemValidateStates = [
  '',
  'error',
  'validating',
  'success',
] as const
export type FormItemValidateState = typeof formItemValidateStates[number]

export type FormItemProp = Arrayable<string>

export const formItemProps = buildProps({
  label: String,
  labelWidth: {
    type: [String, Number],
    default: '',
  },
  prop: {
    type: definePropType<FormItemProp>([String, Array]),
  },
  required: {
    type: Boolean,
    default: undefined,
  },
  rules: {
    type: definePropType<Arrayable<FormItemRule>>([Object, Array]),
  },
  error: String,
  validateStatus: {
    type: String,
    values: formItemValidateStates,
  },
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
    type: String,
    values: componentSizes,
  },
  showHelper: {
    type: Boolean,
    default: false,
  },
  helperMessage: {
    type: String,
  },
  helperIcon: {
    type: iconPropType,
    default: () => QuestionFilled,
  },
  helperIconColor: String,
  helperPlacement: {
    type: String as PropType<Placement>,
    default: 'top-start',
  },
} as const)
export type FormItemProps = ExtractPropTypes<typeof formItemProps>
