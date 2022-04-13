import { buildProps, definePropType } from '@element-plus/utils'
import {
  classType,
  columns,
  dataType,
  expandKeys,
  fixedDataType,
  requiredNumber,
  rowKey,
} from './common'
import { tableV2RowProps } from './row'
import { tableV2HeaderProps } from './header'
import { tableV2GridProps } from './grid'

import type { ExtractPropTypes, StyleValue } from 'vue'
import type { SortOrder } from './constants'
import type {
  Column,
  ColumnCommonParams,
  DataGetter,
  KeyType,
  RowCommonParams,
} from './types'

/**
 * Param types
 */
export type ColumnSortParams<T> = {
  column: Column<T>
  key: KeyType
  order: SortOrder
}

/**
 * Renderer/Getter types
 */

export type ExtraCellPropGetter<T> = (
  params: ColumnCommonParams<T> & RowCommonParams<T>
) => any

export type ExtractHeaderPropGetter<T> = (params: {
  columns: Column<T>[]
  headerIndex: number
}) => any

export type ExtractHeaderCellPropGetter<T> = (
  params: ColumnCommonParams<T> & { headerIndex: number }
) => any

export type ExtractRowPropGetter<T> = (
  params: { columns: Column<T>[] } & RowCommonParams<T>
) => any

export type HeaderClassNameGetter<T> = (params: {
  columns: Column<T>[]
  headerIndex: number
}) => string

export type RowClassNameGetter<T> = (
  params: { columns: Column<T>[] } & RowCommonParams<T>
) => string

/**
 * Handler types
 */
export type ColumnSortHandler<T> = (params: ColumnSortParams<T>) => void
export type ColumnResizeHandler<T> = (column: Column<T>, width: number) => void

export const tableV2Props = buildProps({
  cache: tableV2GridProps.cache,
  estimatedRowHeight: tableV2RowProps.estimatedRowHeight,
  rowKey,
  /**
   * extra props deriver
   */
  cellProps: {
    type: definePropType<any | ExtraCellPropGetter<any>>([Object, Function]),
  },
  // Header attributes
  headerClass: {
    type: definePropType<string | HeaderClassNameGetter<any>>([
      String,
      Function,
    ]),
  },
  headerProps: {
    type: definePropType<any | ExtractHeaderPropGetter<any>>([
      Object,
      Function,
    ]),
  },
  headerCellProps: {
    type: definePropType<any | ExtractHeaderCellPropGetter<any>>([
      Object,
      Function,
    ]),
  },
  headerHeight: tableV2HeaderProps.headerHeight,
  /**
   * Footer attributes
   */
  footerHeight: {
    type: Number,
    default: 0,
  },
  /**
   * Row attributes
   */
  rowClass: {
    type: definePropType<string | RowClassNameGetter<any>>([String, Function]),
  },
  rowProps: {
    type: definePropType<ExtractRowPropGetter<any> | any>([Object, Function]),
  },
  rowHeight: {
    type: Number,
    default: 50,
  },
  /**
   * Data models
   */
  columns,
  data: dataType,
  dataGetter: {
    type: definePropType<DataGetter<any>>(Function),
  },
  dataKey: String,
  fixedData: fixedDataType,
  /**
   * Expanded keys
   */
  expandColumnKey: tableV2RowProps.expandColumnKey,
  expandedRowKeys: expandKeys,
  defaultExpandedRowKeys: expandKeys,

  /**
   * Attributes
   */
  class: classType,
  disabled: Boolean,
  fixed: Boolean,
  style: {
    type: definePropType<StyleValue>([String, Array, Object]),
  },
  width: requiredNumber,
  height: requiredNumber,
  maxHeight: Number,

  /**
   * Sorting
   */
  sortBy: {
    type: definePropType<{ key: KeyType; order: SortOrder }>(Object),
    default: () => ({} as { key: KeyType; order: SortOrder }),
  },

  sortState: {
    type: definePropType<Record<KeyType, SortOrder>>(Object),
    default: undefined,
  },

  /**
   * Handlers
   */
  onColumnSort: {
    type: definePropType<ColumnSortHandler<any>>(Function),
  },
  onColumnResize: {
    type: definePropType<ColumnResizeHandler<any>>(Function),
  },
  onColumnResizeEnded: {
    type: definePropType<ColumnResizeHandler<any>>(Function),
  },
  onExpandedRowsChange: Function,
  onEndReached: {
    type: definePropType<(distance: number) => void>(Function),
  },
  onRowExpand: tableV2RowProps.onRowExpand,
  onScroll: tableV2GridProps.onScroll,
  onRowRendered: tableV2GridProps.onRowRendered,
  rowEventHandlers: tableV2RowProps.rowEventHandlers,
} as const)

export type TableV2Props = ExtractPropTypes<typeof tableV2Props>
