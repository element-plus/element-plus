export type TimeList = [number | undefined, number, undefined | number]

export const buildTimeList = (value: number, bound: number): TimeList => {
  return [
    value > 0 ? value - 1 : undefined,
    value,
    value < bound ? value + 1 : undefined,
  ]
}
