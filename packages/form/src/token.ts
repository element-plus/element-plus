import type { ComputedRef, InjectionKey, Ref } from 'vue'
import type {
  FieldErrorList,
} from 'async-validator'

export interface ElFormContext {
  registerLabelWidth(width: number, oldWidth: number): void
  deregisterLabelWidth(width: number): void
  autoLabelWidth: string | undefined
  emit: (evt: string, ...args: any[]) => void
  addField: (field: ElFormItemContext) => void
  removeField: (field: ElFormItemContext) => void

  labelSuffix: string
  inline?: boolean
  model?: Record<string, unknown>
  size?: string
  disabled?: boolean
  showMessage?: boolean
  labelPosition?: string
  labelWidth?: string
  rules?: Record<string, unknown>
  statusIcon?: boolean
  hideRequiredAsterisk?: boolean
}

export interface ValidateFieldCallback {
  (message?: string, invalidFields?: FieldErrorList): void
}

export interface ElFormItemContext {
  prop?: string
  validateState: Ref<string> | string
  elFormItemSize: ComputedRef<string> | string
  validate(trigger?: string, callback?: ValidateFieldCallback): void
  updateComputedLabelWidth(width: number): void
  resetField(): void
  clearValidate(): void
}

export const elFormKey: InjectionKey<ElFormContext> = Symbol('elForm')
export const elFormItemKey: InjectionKey<ElFormItemContext> = Symbol('elFormItem')
