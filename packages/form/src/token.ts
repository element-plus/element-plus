import type { InjectionKey } from 'vue'
import type { Emitter } from 'mitt'
export interface ElFormContext {
  registerLabelWidth(width: number, oldWidth: number): void
  deregisterLabelWidth(width: number): void
  autoLabelWidth: string | undefined
  formMitt: Emitter
  emit: (evt: string, ...args: any[]) => void

  model?: Record<string, unknown>
  size?: string
  showMessage?: boolean
  labelPosition?: string
  labelWidth?: string
  rules?: Record<string, unknown>
  statusIcon?: boolean
  hideRequiredAsterisk?: boolean
}

export interface ElFormItemContext {
  updateComputedLabelWidth(width: number): void
}

// TODO: change it to symbol
export const elFormKey: InjectionKey<ElFormContext> = 'elForm' as any

export const elFormItemKey: InjectionKey<ElFormItemContext> = 'elFormItem' as any
