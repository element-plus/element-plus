import type { PropType, VNodeChild, CSSProperties } from 'vue'
import type { IElColumn } from './useColumn'

export type ItemSizer = ({ rowData, rowIndex }) => number

export const useTableProps = {
  className: String,

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

  columns: Array as PropType<IElColumn<any>[]>,

  defaultExpandedRowKeys: Array as PropType<string[]>,

  estimatedRowHeight: {
    type: [Number, Function] as PropType<number | ItemSizer>,
  },

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

  data: Array as PropType<any[]>,

  disabled: Boolean,

  fixed: {
    type: Boolean,
    default: false,
  },

  emptyRenderer: {
    type: [Object, Function] as PropType<VNodeChild | (() => VNodeChild)>,
  },

  fixedData: Array as PropType<any[]>,

  headerHeight: {
    type: Number,
    default: 50,
  },

  headerProps: [Object, Function] as PropType<
    any | ((opts: { columns: any[]; headerIdx: number; }) => any)
  >,

  height: Number,
  maxHeight: Number,

  rowHeight: {
    type: Number,
    default: 50,
  },

  rowRenderer: Function as PropType<
    (opts: { cells: any[]; columns: any[]; headerIdx: number; }) => VNodeChild
  >,

  rowProps: [Object, Function] as PropType<
    any | ((opts: { columns: any[]; rowData: any; rowIdx: number; }) => any)
  >,

  style: [String, Object] as PropType<string | CSSProperties>,

  sortBy: Object,

  sortState: Object,

  useIsScrolling: Boolean,

  overscan: {
    type: Number,
    default: 2,
  },

  width: Number,
}

const ON_COLUMN_SORT = 'column-sort'
const ON_ROW_EXPANDED = 'row-expanded'
const ON_EXPANDED_ROWS_CHANGED = 'expanded-rows-changed'
const ON_SCROLL = 'scroll'
const ON_ROWS_RENDERED = 'rows-rendered'
const ON_ROW_CLICKED = 'row-clicked'
const ON_ROW_DB_CLICKED = 'row-db-clicked'

// const ON_SCROLLBAR_PRESENCE_CHANGE = 'scrollbar-presence-change'

export const useTableEmits = [
  ON_COLUMN_SORT,
  ON_EXPANDED_ROWS_CHANGED,
  ON_ROW_CLICKED,
  ON_ROW_DB_CLICKED,
  ON_ROW_EXPANDED,
  ON_ROWS_RENDERED,
  ON_SCROLL,
]
