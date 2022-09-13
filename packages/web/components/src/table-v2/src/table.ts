import { buildProps, definePropType } from '@element-plus/utils'
import {
  virtualizedGridProps,
  virtualizedScrollbarProps,
} from '@element-plus/components/src/virtual-list'
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

import type { CSSProperties, ExtractPropTypes } from 'vue'
import type { SortOrder } from './constants'
import type {
  Column,
  ColumnCommonParams,
  DataGetter,
  KeyType,
  RowCommonParams,
  SortBy,
  SortState,
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
  params: ColumnCommonParams<T> &
    RowCommonParams & { cellData: T; rowData: any }
) => any

export type ExtractHeaderPropGetter<T> = (params: {
  columns: Column<T>[]
  headerIndex: number
}) => any

export type ExtractHeaderCellPropGetter<T> = (
  params: ColumnCommonParams<T> & { headerIndex: number }
) => any

export type ExtractRowPropGetter<T> = (
  params: { columns: Column<T>[] } & RowCommonParams
) => any

export type HeaderClassNameGetter<T> = (params: {
  columns: Column<T>[]
  headerIndex: number
}) => string

export type RowClassNameGetter<T> = (
  params: { columns: Column<T>[] } & RowCommonParams
) => string

/**
 * Handler types
 */
export type ColumnSortHandler<T> = (params: ColumnSortParams<T>) => void
export type ColumnResizeHandler<T> = (column: Column<T>, width: number) => void
export type ExpandedRowsChangeHandler = (expandedRowKeys: KeyType[]) => void

export const tableV2Props = buildProps({
  cache: tableV2GridProps.cache,
  estimatedRowHeight: tableV2RowProps.estimatedRowHeight,
  rowKey,
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
   * Cell attributes
   */
  cellProps: {
    type: definePropType<Record<string, any> | ExtraCellPropGetter<any>>([
      Object,
      Function,
    ]),
  },
  /**
   * Data models
   */
  columns,
  data: dataType,
  dataGetter: {
    type: definePropType<DataGetter<any>>(Function),
  },
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
  // disabled: Boolean,
  fixed: Boolean,
  style: {
    type: definePropType<CSSProperties>(Object),
  },
  width: requiredNumber,
  height: requiredNumber,
  maxHeight: Number,
  useIsScrolling: Boolean,
  indentSize: {
    type: Number,
    default: 12,
  },
  iconSize: {
    type: Number,
    default: 12,
  },
  hScrollbarSize: virtualizedGridProps.hScrollbarSize,
  vScrollbarSize: virtualizedGridProps.vScrollbarSize,
  scrollbarAlwaysOn: virtualizedScrollbarProps.alwaysOn,

  /**
   * Sorting
   */
  sortBy: {
    type: definePropType<SortBy>(Object),
    default: () => ({} as { key: KeyType; order: SortOrder }),
  },
  sortState: {
    type: definePropType<SortState>(Object),
    default: undefined,
  },

  /**
   * Handlers
   */
  onColumnSort: {
    type: definePropType<ColumnSortHandler<any>>(Function),
  },
  onExpandedRowsChange: {
    type: definePropType<ExpandedRowsChangeHandler>(Function),
  },
  onEndReached: {
    type: definePropType<(distance: number) => void>(Function),
  },
  onRowExpand: tableV2RowProps.onRowExpand,
  onScroll: tableV2GridProps.onScroll,
  onRowsRendered: tableV2GridProps.onRowsRendered,
  rowEventHandlers: tableV2RowProps.rowEventHandlers,
} as const)

export type TableV2Props = ExtractPropTypes<typeof tableV2Props>
