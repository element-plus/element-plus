import type { Dayjs } from 'dayjs'

export type GetDisabledHoursState = (
  role: string,
  comparingDate?: Dayjs
) => number[]

export type GetDisabledMinutesState = (
  hour: number,
  role: string,
  comparingDate?: Dayjs
) => number[]

export type GetDisabledSecondsState = (
  hour: number,
  minute: number,
  role: string,
  comparingDate?: Dayjs
) => number[]
