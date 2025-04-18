import type DateTable from './date-table.vue'
import type Calendar from './calendar.vue'

export type DateTableInstance = InstanceType<typeof DateTable> & unknown
export type CalendarDateTableInstance = DateTableInstance
export type CalendarInstance = InstanceType<typeof Calendar> & unknown
