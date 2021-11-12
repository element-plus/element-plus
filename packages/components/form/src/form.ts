import { buildProps, definePropType } from '@element-plus/utils/props'
import type { RuleItem } from 'async-validator'
import type { ExtractPropTypes } from 'vue'
import type { ComponentSize } from '@element-plus/utils/types'

export interface FormItemRule extends RuleItem {
  trigger?: string
}

export type FormRulesMap<T extends string = string> = Partial<
  Record<T, FormItemRule | FormItemRule[]>
>

export const formProps = buildProps({
  model: Object,
  rules: {
    type: definePropType<FormRulesMap>(Object),
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
    type: definePropType<ComponentSize>(String),
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
  validate: () => true,
}

export type FormEmits = typeof formEmits
