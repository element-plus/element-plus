import { buildProp, definePropType } from '@element-plus/utils/props'
import { virtualizedGridProps } from '@element-plus/components/virtual-list'

import { tableV2HeaderProps } from './table-header'
import { headerRenderer } from './column'

import type { ExtractPropTypes } from 'vue'
import type { MappedColumn } from '../helpers/column'

const { headerHeight, fixedData } = tableV2HeaderProps

export const gridTableProps = {
  ...virtualizedGridProps,
  headerRenderer,
  rowRenderer: buildProp({
    type: Function,
  }),
  headerHeight,
  fixedData,
  headerWidth: buildProp({
    type: Number,
  } as const),
  height: buildProp({
    type: Number,
    required: true,
  }),
  columns: buildProp({
    type: definePropType<MappedColumn[]>(Array),
    required: true,
  }),
} as const

export type GridTableProps = ExtractPropTypes<typeof gridTableProps>
