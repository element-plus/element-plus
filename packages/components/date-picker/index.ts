import DatePicker from './src/date-picker'

import type { App, ComponentPublicInstance } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils'
import type { DatePickerExpose } from './src/date-picker.type'
import type { DatePickerProps } from './src/props/date-picker'

const _DatePicker = DatePicker as SFCWithInstall<typeof DatePicker>

_DatePicker.install = (app: App) => {
  app.component(_DatePicker.name, _DatePicker)
}

export default _DatePicker
export const ElDatePicker = _DatePicker
export * from './src/constants'
export * from './src/props/date-picker'

export type DatePickerInstance = ComponentPublicInstance<
  DatePickerProps,
  DatePickerExpose
>
