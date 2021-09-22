import type { InjectionKey } from 'vue'
import type { FieldErrorList } from 'async-validator'
import type { ComponentSize } from '@element-plus/utils/types'

export interface ElFormContext {
  registerLabelWidth(width: number, oldWidth: number): void
  deregisterLabelWidth(width: number): void
  autoLabelWidth: string | undefined
  emit: (evt: string, ...args: any[]) => void
  addField: (field: ElFormItemContext) => void
  removeField: (field: ElFormItemContext) => void
  labelSuffix: string
  inline?: boolean
  inlineMessage?: boolean
  model?: Record<string, unknown>
  size?: string
  showMessage?: boolean
  labelPosition?: string
  labelWidth?: string | number
  rules?: Record<string, unknown>
  statusIcon?: boolean
  hideRequiredAsterisk?: boolean
  disabled?: boolean
}

export interface ValidateFieldCallback {
  (isValid?: string, invalidFields?: FieldErrorList): void
}

export interface ElFormItemContext {
  prop?: string
  size?: ComponentSize
  validateState: string
  $el: HTMLDivElement
  validate(trigger: string, callback?: ValidateFieldCallback): void
  updateComputedLabelWidth(width: number): void
  evaluateValidationEnabled(): void
  resetField(): void
  clearValidate(): void
}

export const elFormKey: InjectionKey<ElFormContext> = Symbol('elForm')
export const elFormItemKey: InjectionKey<ElFormItemContext> =
  Symbol('elFormItem')
