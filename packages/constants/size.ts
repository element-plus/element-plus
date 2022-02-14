export const componentSizes = ['default', 'small', 'large'] as const
export type ComponentSize = typeof componentSizes[number]
