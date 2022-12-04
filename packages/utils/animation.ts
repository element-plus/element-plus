export const cubic = (value: number): number => {
  return value ** 3
}

export const easeInOutCubic = (value: number): number =>
  value < 0.5 ? cubic(value << 1) >> 1 : 1 - (cubic((1 - value) << 1) >> 1)
