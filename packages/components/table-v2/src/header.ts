import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type { Column } from './types'

const requiredNumberType = {
  type: Number,
  required: true,
} as const

export const tableV2HeaderProps = buildProps({
  class: String,
  columns: {
    type: definePropType<Column<any>[]>(Array),
    required: true,
  },
  fixedHeaderData: {
    type: definePropType<any[]>(Array),
  },
  headerData: {
    type: definePropType<any[]>(Array),
    required: true,
  },
  headerHeight: {
    type: definePropType<number | number[]>([Number, Array]),
    required: true,
  },
  rowWidth: requiredNumberType,
  rowHeight: requiredNumberType,

  height: requiredNumberType,
  width: requiredNumberType,
} as const)

export type TableV2HeaderProps = ExtractPropTypes<typeof tableV2HeaderProps>
