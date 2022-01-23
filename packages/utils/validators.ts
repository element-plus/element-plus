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
