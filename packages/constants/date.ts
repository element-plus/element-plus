export const datePickTypes = [
  'year',
  'years',
  'month',
  'months',
  'date',
  'dates',
  'week',
  'quarter',
  'quarters',
  'datetime',
  'datetimerange',
  'daterange',
  'monthrange',
  'yearrange',
  'quarterrange',
] as const

export const WEEK_DAYS = [
  'sun',
  'mon',
  'tue',
  'wed',
  'thu',
  'fri',
  'sat',
] as const

export type DatePickType = (typeof datePickTypes)[number]
