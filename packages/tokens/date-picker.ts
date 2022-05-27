import type { InjectionKey, SetupContext } from 'vue'

interface DatePickerContext {
  slots: SetupContext['slots']
}

export const ROOT_PICKER_INJECTION_KEY: InjectionKey<DatePickerContext> =
  Symbol()
