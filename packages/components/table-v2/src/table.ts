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
import type {
  Column,
  ColumnCommonParams,
  RowCommonParams,
  SortOrder,
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
    type: definePropType<any | ExtractRowPropGetter<any>>([Object, Function]),
  },
  rowHeight: Number,
  /**
   * Data models
   */
  columns,
  data: dataType,
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
  height: Number,
  maxHeight: Number,

  sortBy: {
    type: definePropType<{ key: KeyType; order: SortOrder }>(Object),
    default: () => ({} as { key: KeyType; order: SortOrder }),
  },

  /**
   * Handlers
   */
  onColumnSort: {
    type: definePropType<ColumnSortParams<any>>(Function),
  },
  onExpandedRowsChange: Function,
  onRowExpand: Function,
  onScroll: tableV2GridProps.onScroll,
  rowEventHandlers: tableV2RowProps.rowEventHandlers,
} as const)

export type TableV2Props = ExtractPropTypes<typeof tableV2Props>
