import { isNumber } from './util'

export const isValidWidthUnit = (val: string | number): boolean => {
  if (isNumber(val)) {
    return true
  }
  return (
    ['px', 'rem', 'em', 'vw', '%', 'vmin', 'vmax'].some((unit) =>
      val.endsWith(unit)
    ) || val.startsWith('calc')
  )
}

export const isValidComponentSize = (val: string) =>
  ['', 'large', 'default', 'small'].includes(val)

export const isValidDatePickType = (val: string) =>
  [
    'year',
    'month',
    'date',
    'dates',
    'week',
    'datetime',
    'datetimerange',
    'daterange',
    'monthrange',
  ].includes(val)
