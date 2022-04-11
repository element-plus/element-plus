import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type { Column } from './types'

export const tableV2CellProps = buildProps({
  class: String,
  cellData: {
    type: definePropType<any>([String, Boolean, Number, Object]),
  },
  column: {
    type: definePropType<Column<any>>(Object),
  },
  columnIndex: Number,
  rowData: {
    type: definePropType<any>(Object),
  },
  rowIndex: Number,
} as const)

export type TableV2CellProps = ExtractPropTypes<typeof tableV2CellProps>
