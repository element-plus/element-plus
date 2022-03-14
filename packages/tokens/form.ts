import type { InjectionKey, SetupContext, UnwrapRef } from 'vue'
import type { ValidateFieldsError, ValidateError } from 'async-validator'
import type { ComponentSize } from '@element-plus/constants'
import type {
  FormProps,
  FormEmits,
  FormItemProp,
  FormItemProps,
  FormValidateCallback,
  FormLabelWidthContext,
} from '@element-plus/components/form'

export type ValidationResult = Promise<true | ValidateFieldsError | undefined>
export interface ValidateFailure {
  errors: ValidateError[] | null
  fields: ValidateFieldsError
}

export type FormContext = FormProps &
  UnwrapRef<FormLabelWidthContext> & {
    emit: SetupContext<FormEmits>['emit']

    // expose
    addField: (field: FormItemContext) => void
    removeField: (field: FormItemContext) => void
    resetFields: (props?: FormItemProp) => void
    clearValidate: (props?: FormItemProp) => void
    validateField: (
      props?: FormItemProp,
      callback?: FormValidateCallback
    ) => ValidationResult
  }

export interface FormItemContext extends FormItemProps {
  $el: HTMLDivElement | undefined
  size: ComponentSize
  validateState: string
  validate: (
    trigger: string,
    callback?: FormValidateCallback
  ) => ValidationResult
  resetField(): void
  clearValidate(): void
}

export const formContextKey: InjectionKey<FormContext> =
  Symbol('formContextKey')
export const formItemContextKey: InjectionKey<FormItemContext> =
  Symbol('formItemContextKey')
