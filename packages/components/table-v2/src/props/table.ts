import {
  ON_COLUMN_SORT,
  ON_ROW_EXPANDED,
  ON_EXPANDED_ROWS_CHANGED,
  ON_ROW_CLICKED,
  ON_ROW_DB_CLICKED,
} from '../constants'
import { useGridCommonProps, useGridEmits } from './grid'

import type { ExtractPropTypes, PropType, VNodeChild } from 'vue'

export const useTableProps = {
  cellProps: [Object, Function] as PropType<
    | any
    | ((opts: {
        columns: any[]
        column: any
        columnIdx: number
        rowData: any
        rowIdx: number
      }) => any)
  >,

  defaultExpandedRowKeys: Array as PropType<string[]>,

  expandedRowKeys: Array as PropType<string[]>,

  expandIconProps: [Object, Function] as PropType<
    | any
    | ((opts: {
        rowData: any
        rowIdx: number
        depth: number
        expandable: boolean
        expanded: boolean
      }) => any)
  >,

  expandColumnKey: String,

  disabled: Boolean,

  fixed: {
    type: Boolean,
    default: false,
  },

  emptyRenderer: {
    type: [Object, Function] as PropType<VNodeChild | (() => VNodeChild)>,
  },

  headerHeight: {
    type: Number,
    default: 50,
  },

  headerProps: [Object, Function] as PropType<
    any | ((opts: { columns: any[]; headerIdx: number }) => any)
  >,

  maxHeight: Number,

  rowProps: [Object, Function] as PropType<
    any | ((opts: { columns: any[]; rowData: any; rowIdx: number }) => any)
  >,

  sortBy: Object,

  sortState: Object,

  cache: {
    type: Number,
    default: 2,
  },

  ...useGridCommonProps,
}

// const ON_SCROLLBAR_PRESENCE_CHANGE = 'scrollbar-presence-change'

export const useTableEmits = {
  [ON_COLUMN_SORT]: () => undefined,
  [ON_EXPANDED_ROWS_CHANGED]: () => undefined,
  [ON_ROW_CLICKED]: () => undefined,
  [ON_ROW_DB_CLICKED]: () => undefined,
  [ON_ROW_EXPANDED]: () => undefined,
  ...useGridEmits,
}

export type TableProps = ExtractPropTypes<typeof useTableProps>
