import type { SetupContext, UnwrapRef } from 'vue'
import type {
  RuleItem,
  ValidateError,
  ValidateFieldsError,
} from 'async-validator'
import type { ComponentSize } from '@element-plus/constants'
import type { Arrayable } from '@element-plus/utils'
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

// Reference https://stackoverflow.com/questions/58434389/typescript-deep-keyof-of-a-nested-object/58436959
// Concatenates two strings with a dot in the middle, unless the last string is empty
// Join<"a","b"> => "a.b"
// Join<"a",""> => "a"
type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never
// Limit the recursion to avoid typescript error
type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[]
]
type Leaves<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T]
  : ''
export type FormRules<
  T extends MaybeRef<Record<string, any> | string> = string
> = Partial<
  Record<
    UnwrapRef<T> extends string ? UnwrapRef<T> : Leaves<UnwrapRef<T>>,
    Arrayable<FormItemRule>
  >
>

export type FormValidationResult = Promise<boolean>
export type FormValidateCallback = (
  isValid: boolean,
  invalidFields?: ValidateFieldsError
) => void
export interface FormValidateFailure {
  errors: ValidateError[] | null
  fields: ValidateFieldsError
}

export type FormContext = FormProps &
  UnwrapRef<FormLabelWidthContext> & {
    emit: SetupContext<FormEmits>['emit']

    // expose
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
  validateState: FormItemValidateState
  isGroup: boolean
  labelId: string
  inputIds: string[]
  hasLabel: boolean
  addInputId: (id: string) => void
  removeInputId: (id: string) => void
  validate: (
    trigger: string,
    callback?: FormValidateCallback
  ) => FormValidationResult
  resetField(): void
  clearValidate(): void
}
