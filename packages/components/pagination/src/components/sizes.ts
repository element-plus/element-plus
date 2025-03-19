import { buildProps, definePropType } from '@element-plus/utils'
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
    default: () => [10, 20, 30, 40, 50, 100],
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
})

export type PaginationSizesProps = ExtractPropTypes<typeof paginationSizesProps>

export type SizesInstance = InstanceType<typeof Sizes> & unknown
