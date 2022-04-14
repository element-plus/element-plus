import { buildProps, definePropType } from '@element-plus/utils'
import { column } from './common'

import type { ExtractPropTypes } from 'vue'

export const tableV2CellProps = buildProps({
  class: String,
  cellData: {
    type: definePropType<any>([String, Boolean, Number, Object]),
  },
  column,
  columnIndex: Number,
  rowData: {
    type: definePropType<any>(Object),
  },
  rowIndex: Number,
} as const)

export type TableV2CellProps = ExtractPropTypes<typeof tableV2CellProps>
