import { buildProps, definePropType } from '@element-plus/utils/props'

import type { ExtractPropTypes, VNodeChild, VNodeTypes } from 'vue'
import type { StyleValue } from '@element-plus/utils/types'
import type { MappedColumn } from '../helpers/column'
import type { ColumnFixStats } from './column'

export const tableV2RowProps = buildProps({
  columns: {
    type: definePropType<MappedColumn[]>(Array),
    required: true,
  },

  cellRenderer: {
    // TODO: specify the type here.
    type: definePropType<(...args: any[]) => VNodeChild>(Function),
  },

  class: {
    type: String,
  },

  style: {
    type: definePropType<StyleValue>([String, Object, Array]),
  },

  depth: {
    type: Number,
  },

  estimatedRowHeight: {
    type: definePropType<number | (() => number)>([Number, Function]),
  },

  expandIconRenderer: {
    // TODO: specify the type here.
    type: definePropType<(...args: any[]) => VNodeChild>(Function),
  },

  expandColumnKey: {
    type: String,
  },

  rowKey: {
    type: definePropType<string | number>([Number, String]),
    required: true,
  },
  rowIndex: {
    type: Number,
    required: true,
  },
  data: {
    type: definePropType<any>(Object),
    required: true,
  },
  rowRenderer: {
    // TODO: specify the type here.
    type: definePropType<(...args: any[]) => VNodeChild>(Function),
  },
  rowEventHandlers: {
    type: definePropType<Record<string, (event: Event) => any>>(Object),
  },
  variant: {
    type: definePropType<VNodeTypes>([String, Object]),
    default: 'div',
  },
  isScrolling: {
    type: Boolean,
  },
} as const)

export const tableV2RowEmits = {
  'row-hover': () => true,
  'row-toggle': (_args: {
    toggle: boolean
    rowData: any
    rowIndex: number
    rowKey: string | number
  }) => true,
  'row-height-change': (
    rowKey: string | number,
    height: number,
    fixed: ColumnFixStats
  ) => true,
}

export type TableV2RowProps = ExtractPropTypes<typeof tableV2RowProps>
export type TableV2RowEmits = typeof tableV2RowEmits
