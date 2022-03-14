import type {
  RuleItem,
  ValidateError,
  ValidateFieldsError,
} from 'async-validator'
import type { Arrayable } from '@element-plus/utils'
import type { useFormLabelWidth } from './utils'

export interface FormItemRule extends RuleItem {
  trigger?: Arrayable<string>
}
export type FormRules = Partial<Record<string, Arrayable<FormItemRule>>>

export type FormValidationResult = Promise<boolean>
export type FormValidateCallback = (
  isValid: boolean,
  invalidFields?: ValidateFieldsError
) => void
export interface FormValidateFailure {
  errors: ValidateError[] | null
  fields: ValidateFieldsError
}

export type FormLabelWidthContext = ReturnType<typeof useFormLabelWidth>
