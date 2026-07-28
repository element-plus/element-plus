import { buildProps, definePropType, mutable } from '@element-plus/utils'
import { componentSizes } from '@element-plus/constants'

import type { ClassValue } from '@element-plus/utils'
import type { ExtractPropTypes, ExtractPublicPropTypes, StyleValue } from 'vue'
import type Sizes from './sizes.vue'

export const paginationSizesProps = buildProps({
  pageSize: {
    type: Number,
    required: true,
  },
  pageSizes: {
    type: definePropType<number[]>(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100] as const),
  },
  popperClass: {
    type: definePropType<ClassValue>([String, Array, Object, Boolean]),
    default: undefined,
  },
  popperStyle: {
    type: definePropType<StyleValue>([String, Array, Object, Boolean]),
    default: undefined,
  },
  disabled: Boolean,
  teleported: Boolean,
  size: {
    type: String,
    values: componentSizes,
  },
  appendSizeTo: String,
} as const)

export type PaginationSizesProps = ExtractPropTypes<typeof paginationSizesProps>
export type PaginationSizesPropsPublic = ExtractPublicPropTypes<
  typeof paginationSizesProps
>

export type SizesInstance = InstanceType<typeof Sizes> & unknown
