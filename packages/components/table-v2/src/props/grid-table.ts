import { buildProp, definePropType } from '@element-plus/utils/props'
import { virtualizedGridProps } from '@element-plus/components/virtual-list'

import { tableV2HeaderProps } from './table-header'
import { tableV2ColumnRendererProps } from './column'

import type { ExtractPropTypes } from 'vue'
import type { TableV2ColumnProps } from './column'

const { headerHeight, fixedData } = tableV2HeaderProps

export const gridTableProps = {
  ...virtualizedGridProps,
  ...tableV2ColumnRendererProps,
  headerHeight,
  fixedData,
  headerWidth: buildProp({
    type: Number,
    required: true,
  } as const),
  height: buildProp({
    type: Number,
    required: true,
  }),
  columns: buildProp({
    type: definePropType<TableV2ColumnProps[]>(Array),
    required: true,
  }),
} as const

export type GridTableProps = ExtractPropTypes<typeof gridTableProps>
