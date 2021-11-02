import { buildProps, definePropType } from '@element-plus/utils/props'

import type { ExtractPropTypes, StyleValue } from 'vue'

export const tableV2HeaderRowProps = buildProps({
  isScrolling: {
    type: Boolean,
  },
  class: {
    type: String,
  },
  style: {
    type: definePropType<StyleValue>(Object),
  },
  columns: {
    type: Array,
    required: true,
  },
  headerIndex: {
    type: Number,
  },
  expandColumnKey: {
    type: String,
  },
  variant: {
    type: definePropType<any>([String, Function, Object]),
    default: 'div',
  },
} as const)

export type TableV2HeaderRowProps = ExtractPropTypes<
  typeof tableV2HeaderRowProps
>
