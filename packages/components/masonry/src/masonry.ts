import { buildProps, definePropType } from '@element-plus/utils'

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

export const masonryProps = buildProps({
  items: {
    type: definePropType<MasonryProps['items']>(Array),
    default: () => [],
  },
  itemKey: {
    type: definePropType<MasonryProps['itemKey']>([String, Function]),
    required: true,
  },
  columns: {
    type: Number,
    default: 3,
  },
  gutter: {
    type: Number,
    default: 0,
  },
} as const)

export type MasonryInstance = ComponentInstance<typeof Masonry> &
  ComponentExposed<typeof Masonry>
