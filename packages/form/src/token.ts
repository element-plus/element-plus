import type { InjectionKey } from 'vue'
import type { Emitter } from 'mitt'
import type {
  FieldErrorList,
} from 'async-validator'

export interface ElFormContext {
  registerLabelWidth(width: number, oldWidth: number): void
  deregisterLabelWidth(width: number): void
  autoLabelWidth: string | undefined
  formMitt: Emitter
  emit: (evt: string, ...args: any[]) => void
  labelSuffix: string
  inline?: boolean
  model?: Record<string, unknown>
  size?: string
  showMessage?: boolean
  labelPosition?: string
  labelWidth?: string
  rules?: Record<string, unknown>
  statusIcon?: boolean
  hideRequiredAsterisk?: boolean
  disabled?: boolean
}

export interface ValidateFieldCallback {
  (isValid?: boolean, invalidFields?: FieldErrorList): void
}

export interface ElFormItemContext {
  prop?: string
  formItemMitt: Emitter
  size: ComponentSize
  validateState: string
  validate(callback?: ValidateFieldCallback): void
  updateComputedLabelWidth(width: number): void
  addValidateEvents(): void
  removeValidateEvents(): void
  resetField(): void
  clearValidate(): void
}

// TODO: change it to symbol
export const elFormKey: InjectionKey<ElFormContext> = 'elForm' as any

export const elFormItemKey: InjectionKey<ElFormItemContext> = 'elFormItem' as any

export const elFormEvents = {
  addField: 'el.form.addField',
  removeField: 'el.form.removeField',
} as const
