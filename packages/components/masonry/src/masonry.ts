import type { ComponentInstance } from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import type Masonry from './masonry.vue'

export interface MasonryProps<T = any> {
  /** @description Items to lay out */
  items?: T[]
  /** @description Field name or function returning a unique, stable item key */
  itemKey: (keyof T & string) | ((item: T) => string | number)
  /** @description Number of equal-width columns */
  columns?: number
  /** @description Horizontal and vertical spacing in pixels */
  gutter?: number
}

export type MasonryInstance = ComponentInstance<typeof Masonry> &
  ComponentExposed<typeof Masonry>
