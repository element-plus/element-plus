import { withInstall } from '@element-plus/utils'
import Calendar from './src/calendar.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GCalendar: SFCWithInstall<typeof Calendar> = withInstall(Calendar)
export default GCalendar

export * from './src/calendar'
export type {
  CalendarDateTableInstance,
  DateTableInstance,
  CalendarInstance,
} from './src/instance'
