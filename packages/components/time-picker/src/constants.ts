export const timeUnits = ['hours', 'minutes', 'seconds'] as const

export const DEFAULT_FORMATS_TIME = 'HH:mm:ss'
export const DEFAULT_FORMATS_DATE = 'YYYY-MM-DD'
export const DEFAULT_FORMATS_DATEPICKER = {
  date: DEFAULT_FORMATS_DATE,
  dates: DEFAULT_FORMATS_DATE,
  week: 'gggg[w]ww',
  year: 'YYYY',
  years: 'YYYY',
  month: 'YYYY-MM',
  months: 'YYYY-MM',
  datetime: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`,
  monthrange: 'YYYY-MM',
  yearrange: 'YYYY',
  daterange: DEFAULT_FORMATS_DATE,
  datetimerange: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`,
}

export type TimeUnit = typeof timeUnits[number]
