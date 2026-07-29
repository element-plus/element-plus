import { componentSizes } from '@element-plus/constants'
import { buildProps, definePropType, mutable } from '@element-plus/utils'

import type { ClassValue } from '@element-plus/utils'
import type { ExtractPropTypes, ExtractPublicPropTypes, StyleValue } from 'vue'
import type SizeInput from './size-input.vue'

export const paginationSizeInputProps = buildProps({
  pageSize: {
    type: Number,
    required: true,
  },
  pageSizes: {
    type: definePropType<number[]>(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100] as const),
  },
  min: {
    type: Number,
    default: 1,
  },
  max: Number,
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

export type PaginationSizeInputProps = ExtractPropTypes<
  typeof paginationSizeInputProps
>
export type PaginationSizeInputPropsPublic = ExtractPublicPropTypes<
  typeof paginationSizeInputProps
>

export type PaginationSizeInputInstance = InstanceType<typeof SizeInput> &
  unknown
