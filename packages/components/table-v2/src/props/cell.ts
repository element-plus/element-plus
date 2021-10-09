import { buildProps, definePropType } from '@element-plus/utils/props'

import type { ExtractPropTypes } from 'vue'
import type { MappedColumn } from '../helpers/column'

export const tableV2CellProps = buildProps({
  cellData: {
    type: Object,
  },
  column: {
    type: definePropType<MappedColumn>(Object),
  },
  columnIndex: {
    type: Number,
  },
  rowData: {
    type: Object,
  },
  rowIndex: {
    type: Number,
  },
} as const)

export type TableV2CellProps = ExtractPropTypes<typeof tableV2CellProps>
