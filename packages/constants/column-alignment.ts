export const columnAlignment = ['left', 'center', 'right'] as const

export type ColumnAlignment = typeof columnAlignment[number]
