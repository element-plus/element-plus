export const align = ['left', 'center', 'right'] as const

export type Align = (typeof align)[number]
