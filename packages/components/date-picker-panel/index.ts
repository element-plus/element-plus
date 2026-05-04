import { withInstall } from '@element-plus/utils'
import DatePickerPanel from './src/date-picker-panel'

import type { SFCWithInstall } from '@element-plus/utils'

export const ElDatePickerPanel: SFCWithInstall<typeof DatePickerPanel> =
  withInstall(DatePickerPanel)

export default ElDatePickerPanel
export * from './src/constants'
export * from './src/props/date-picker-panel'
export * from './src/types'
export type { DatePickerPanelInstance } from './src/instance'
