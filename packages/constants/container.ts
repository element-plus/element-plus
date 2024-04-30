export const directionTypes = ['horizontal', 'vertical'] as const

export type DirectionType = typeof directionTypes[number]
