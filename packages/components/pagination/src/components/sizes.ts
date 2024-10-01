import { buildProps, definePropType, mutable } from '@element-plus/utils'
import { componentSizes } from '@element-plus/constants'
import type { ExtractPropTypes } from 'vue'
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
    type: String,
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

export type SizesInstance = InstanceType<typeof Sizes>
