import type { StyleValue, VNode } from 'vue'
import type { sortOrders } from './constants'

export type Alignment = 'left' | 'center' | 'right'
export type FixedDirection = 'left' | 'right'
export type KeyType = string | number | symbol
export type SortOrder = typeof sortOrders

/**
 * Param types
 */
export type CellRendererParams<T> = {
  cellData: T
} & RowCommonParams<T> &
  ColumnCommonParams<T>

export type ColumnCommonParams<T> = {
  columns: Column<T>[]
  column: Column<T>
  columnIndex: number
}

export type HeaderRendererParams<T> = {
  headerIndex: number
} & ColumnCommonParams<T>

export type RowCommonParams<T> = {
  rowData: T[]
  rowIndex: number
}

export type ClassNameGetterParams<T> = {
  cellData: T
} & RowCommonParams<T> &
  ColumnCommonParams<T>

export type DataGetterParams<T> = {
  columns: Column<T>[]
  column: Column<T>
  columnIndex: number
} & RowCommonParams<T>

export type DataGetter<T> = (params: DataGetterParams<T>) => T
export type ClassNameGetter<T> = (params: ClassNameGetterParams<T>) => string

/**
 * Renderer/Getter types
 */
export type CellRenderer<T> = (params: CellRendererParams<T>) => VNode

export type HeaderRenderer<T> = (params: HeaderRendererParams<T>) => VNode

export type Column<T = any> = {
  key: KeyType
  /**
   * Data part
   */
  dataKey?: string
  dataGetter?: DataGetter<T>
  /**
   * Attributes
   */
  align?: Alignment
  className?: any | ClassNameGetter<T>
  fixed?: true | FixedDirection
  title?: string
  hidden?: boolean
  maxWidth?: number
  minWidth?: number
  resizable?: boolean
  style?: StyleValue
  sortable?: boolean
  width: number
  /**
   * Renderers
   */
  cellRenderer?: CellRenderer<T>
  headerRenderer?: HeaderRenderer<T>
  /**
   * Extendable sections
   */
  [key: string]: any
}
