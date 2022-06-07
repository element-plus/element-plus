import type { Dayjs } from 'dayjs'

export const DEFAULT_FORMATS_TIME = 'HH:mm:ss'
export const DEFAULT_FORMATS_DATE = 'YYYY-MM-DD'
export const DEFAULT_FORMATS_DATEPICKER = {
  date: DEFAULT_FORMATS_DATE,
  dates: DEFAULT_FORMATS_DATE,
  week: 'gggg[w]ww',
  year: 'YYYY',
  month: 'YYYY-MM',
  datetime: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`,
  monthrange: 'YYYY-MM',
  daterange: DEFAULT_FORMATS_DATE,
  datetimerange: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`,
}

export interface PickerOptions {
  isValidValue: (date: Dayjs) => boolean
  handleKeydownInput: (event: KeyboardEvent) => void
  parseUserInput: (value: Dayjs) => Dayjs
  formatToString: (value: Dayjs) => string | string[]
  getRangeAvailableTime: (date: Dayjs) => Dayjs
  getDefaultValue: () => Dayjs
  panelReady: boolean
  handleClear: () => void
  handleFocusPicker?: () => void
}
