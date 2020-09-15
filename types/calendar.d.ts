import { ElementUIComponent } from './component'

export type DateType = Date | string | number

/** Calendar Component */
export declare class ElCalendar extends ElementUIComponent {
  /** Binding value */
  value: DateType

  /** Specify the display range of the calendar */
  range: DateType[]

  /** First day of week */
  firstDayOfWeek: number
}
