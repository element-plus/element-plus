export const timeUnits = ['hours', 'minutes', 'seconds'] as const

export type TimeUnit = typeof timeUnits[number]
