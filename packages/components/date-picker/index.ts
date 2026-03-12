import { withInstall } from '@element-plus/utils'
import DatePicker from './src/date-picker'

import type { SFCWithInstall } from '@element-plus/utils'

export const GDatePicker: SFCWithInstall<typeof DatePicker> =
  withInstall(DatePicker)

export default GDatePicker
export * from './src/props'
export type { DatePickerInstance } from './src/instance'
