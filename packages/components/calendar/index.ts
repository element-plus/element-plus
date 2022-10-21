import { withInstall } from '@element-plus/utils'
import Calendar from './src/calendar.vue'

export const ElCalendar = withInstall(Calendar)
export default ElCalendar

export * from './src/calendar'
export type {
  CalendarDateTableInstance,
  DateTableInstance,
} from './src/instance'
