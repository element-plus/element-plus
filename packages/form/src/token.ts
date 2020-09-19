import { InjectionKey } from 'vue'
export interface ElFormContext {
  registerLabelWidth(width: number, oldWidth: number): void
  deregisterLabelWidth(width: number): void
  autoLabelWidth: string | undefined
}

export interface ElFormItemContext {
  updateComputedLabelWidth(width: number): void
}

// TODO: change it to symbol
export const elFormKey: InjectionKey<ElFormContext> = 'elForm' as any

export const elFormItemKey: InjectionKey<ElFormItemContext> = 'elFormItem' as any
