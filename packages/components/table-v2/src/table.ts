import { buildProps, definePropType } from '@element-plus/utils'

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
  /**
   * extra props deriver
   */
  cellProps: {
    type: definePropType<any | ExtraCellPropGetter<any>>([Object, Function]),
  },
  headerClassName: {
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
  rowClassName: {
    type: definePropType<string | RowClassNameGetter<any>>([String, Function]),
  },
  rowProps: {
    type: definePropType<any | ExtractRowPropGetter<any>>([Object, Function]),
  },

  /**
   * Data models
   */
  columns: {
    type: definePropType<Column<any>[]>(Array),
    required: true,
  },
  fixedData: {
    type: definePropType<any[]>(Array),
  },
  data: {
    type: definePropType<any[]>(Array),
  },

  /**
   * Expanded keys
   */
  expandedRowKeys: {
    type: definePropType<KeyType[]>(Array),
  },
  defaultExpandedRowKeys: {
    type: definePropType<KeyType[]>(Array),
  },

  /**
   * Attributes
   */
  classNames: {
    type: definePropType<string | string[]>([String, Array]),
  },
  disabled: Boolean,
  footerHeight: {
    type: definePropType<number | number[]>([Number, Array]),
  },
  headerHeight: {
    type: definePropType<number | number[]>([Number, Array]),
  },
  style: {
    type: definePropType<StyleValue>([String, Array, Object]),
  },
  sortBy: {
    type: definePropType<{ key: KeyType; order: SortOrder }>(Object),
  },

  /**
   * Handlers
   */
  onColumnSort: {
    type: definePropType<ColumnSortParams<any>>(Function),
  },
} as const)

export type TableV2Props = ExtractPropTypes<typeof tableV2Props>
