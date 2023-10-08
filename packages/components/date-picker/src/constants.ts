import type { InjectionKey, SetupContext } from 'vue'
import type { UseNamespaceReturn } from '@element-plus/hooks'

interface DatePickerContext {
  slots: SetupContext['slots']
  pickerNs: UseNamespaceReturn
}
export interface DatePickerFormat {
  extractTimeFormat: ((format: string) => string) | undefined
  extractDateFormat: ((format: string) => string) | undefined
}

export const ROOT_PICKER_INJECTION_KEY: InjectionKey<DatePickerContext> =
  Symbol()

export const ROOT_PICKER_INJECTION_FORMAT: InjectionKey<DatePickerFormat> =
  Symbol('FORMAT')
