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

type FormRuleValue<V> = V extends any[]
  ? Arrayable<FormItemRule>
  : V extends Record<string, any>
    ? Arrayable<FormItemRule> | { [K in keyof V]?: FormRuleValue<V[K]> }
    : Arrayable<FormItemRule>

export type FormRules<
  T extends MaybeRef<Record<string, any> | string> = string,
> =
  UnwrapRef<T> extends Record<string, any>
    ? {
        [P in FieldPath<UnwrapRef<T>>]?: P extends keyof UnwrapRef<T>
          ? FormRuleValue<UnwrapRef<T>[P]>
          : Arrayable<FormItemRule>
      }
    : Partial<Record<string, Arrayable<FormItemRule> | Record<string, any>>>

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
    removeField: (field: FormItemContext, oldPropString?: string) => void
    resetFields: (props?: Arrayable<FormItemProp>) => void
    setInitialValues: (initModel: Record<string, any>) => void
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
  setInitialValue: (value: any) => void
  getInitialValue: () => any
}
