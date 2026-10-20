import type { ComponentInstance } from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import type Masonry from './masonry.vue'

export type MasonryResponsiveValue<T = number> =
  T | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', T>>

type MasonryKeyField<T> = {
  [K in keyof T & string]-?: T[K] extends PropertyKey ? K : never
}[keyof T & string]

export interface MasonryProps<T = any> {
  /** @description Items to lay out */
  items?: T[]
  /** @description Field name or function returning a unique, stable string, number, or symbol key */
  itemKey?: MasonryKeyField<T> | ((item: T) => PropertyKey)
  /** @description Number of equal-width columns, or a responsive configuration */
  columns?: MasonryResponsiveValue
  /** @description Spacing in pixels, [horizontal, vertical] spacing, or a responsive configuration */
  gutter?: MasonryResponsiveValue<number | [number, number]>
}

export type MasonryInstance = ComponentInstance<typeof Masonry> &
  ComponentExposed<typeof Masonry>
