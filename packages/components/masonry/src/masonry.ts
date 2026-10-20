import type { ComponentInstance } from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import type Masonry from './masonry.vue'

export type MasonryResponsiveValue =
  number | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>>

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
  /** @description Horizontal and vertical spacing in pixels, or a responsive configuration */
  gutter?: MasonryResponsiveValue
}

export type MasonryInstance = ComponentInstance<typeof Masonry> &
  ComponentExposed<typeof Masonry>
