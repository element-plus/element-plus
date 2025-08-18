import type { InjectionKey } from 'vue'
import type { CommonPickerContext } from './composables/use-common-picker'

export const timeUnits = ['hours', 'minutes', 'seconds'] as const

export const PICKER_BASE_INJECTION_KEY = 'EP_PICKER_BASE'

export const PICKER_POPPER_OPTIONS_INJECTION_KEY = 'ElPopperOptions'

export const ROOT_COMMON_PICKER_INJECTION_KEY: InjectionKey<CommonPickerContext> =
  Symbol()

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
