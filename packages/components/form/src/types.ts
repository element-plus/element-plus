import type { SetupContext, UnwrapRef } from 'vue'
import type {
  RuleItem,
  ValidateError,
  ValidateFieldsError,
} from 'async-validator'
import type { ComponentSize } from '@element-plus/constants'
import type { Arrayable, FieldPath } from '@element-plus/utils'
import type { MaybeRef } from '@vueuse/core'
import type {
  FormItemProp,
  FormItemProps,
  FormItemValidateState,
} from './form-item'
import type { FormEmits, FormProps } from './form'
import type { useFormLabelWidth } from './utils'

export type FormLabelWidthContext = ReturnType<typeof useFormLabelWidth>
export interface FormItemRule extends RuleItem {
  trigger?: Arrayable<string>
}

export type FormRules<
  T extends MaybeRef<Record<string, any> | string> = string,
> = Partial<
  Record<
    UnwrapRef<T> extends string ? UnwrapRef<T> : FieldPath<UnwrapRef<T>>,
    Arrayable<FormItemRule>
  >
>

export type FormValidationResult = Promise<boolean>
export type FormValidateCallback = (
  isValid: boolean,
  invalidFields?: ValidateFieldsError
) => Promise<void> | void
export interface FormValidateFailure {
  errors: ValidateError[] | null
  fields: ValidateFieldsError
}

export type FormContext = FormProps &
  UnwrapRef<FormLabelWidthContext> & {
    emit: SetupContext<FormEmits>['emit']
    getField: (prop: FormItemProp) => FormItemContext | undefined
    addField: (field: FormItemContext) => void
    removeField: (field: FormItemContext) => void
    resetFields: (props?: Arrayable<FormItemProp>) => void
    clearValidate: (props?: Arrayable<FormItemProp>) => void
    validateField: (
      props?: Arrayable<FormItemProp>,
      callback?: FormValidateCallback
    ) => FormValidationResult
  }

export interface FormItemContext extends FormItemProps {
  $el: HTMLDivElement | undefined
  size: ComponentSize
  validateMessage: string
  validateState: FormItemValidateState
  isGroup: boolean
  labelId: string
  inputIds: string[]
  hasLabel: boolean
  fieldValue: any
  propString: string
  addInputId: (id: string) => void
  removeInputId: (id: string) => void
  validate: (
    trigger: string,
    callback?: FormValidateCallback
  ) => FormValidationResult
  resetField(): void
  clearValidate(): void
}
