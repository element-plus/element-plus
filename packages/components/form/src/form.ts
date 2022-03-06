import { componentSizes } from '@element-plus/constants'
import {
  buildProps,
  definePropType,
  isArray,
  isString,
  isBoolean,
} from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type { FormItemProps } from './form-item'
import type { FormRules } from './types'
import type Form from './form.vue'

export const formProps = buildProps({
  model: Object,
  rules: {
    type: definePropType<FormRules>(Object),
  },
  labelPosition: String,
  labelWidth: {
    type: [String, Number],
    default: '',
  },
  labelSuffix: {
    type: String,
    default: '',
  },
  inline: Boolean,
  inlineMessage: Boolean,
  statusIcon: Boolean,
  showMessage: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    values: componentSizes,
  },
  disabled: Boolean,
  validateOnRuleChange: {
    type: Boolean,
    default: true,
  },
  hideRequiredAsterisk: {
    type: Boolean,
    default: false,
  },
  scrollToError: Boolean,
} as const)
export type FormProps = ExtractPropTypes<typeof formProps>

export const formEmits = {
  validate: (prop: FormItemProps['prop'], isValid: boolean, message: string) =>
    (isArray(prop) || isString(prop)) &&
    isBoolean(isValid) &&
    isString(message),
}
export type FormEmits = typeof formEmits

export type FormInstance = InstanceType<typeof Form>
