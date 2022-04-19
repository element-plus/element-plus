import type { CSSProperties, RendererElement, RendererNode, VNode } from 'vue'

export type Alignment = 'left' | 'center' | 'right'
export type FixedDirection = 'left' | 'right'
export type KeyType = string | number | symbol

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

export type HeaderCellRendererParams<T> = {
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
export type HeaderClassGetter<T> = (
  params: ColumnCommonParams<T> & { headerIndex: number }
) => string

/**
 * Renderer/Getter types
 */
export type CellRenderer<T> = (params: CellRendererParams<T>) => VNode

export type HeaderCellRenderer<T> = (
  params: HeaderCellRendererParams<T>
) => VNode

export type Column<T = any> = {
  key: KeyType
  /**
   * Attributes
   */
  align?: Alignment
  class?: string | ClassNameGetter<T>
  fixed?: true | FixedDirection
  title?: string
  hidden?: boolean
  headerClass?: HeaderClassGetter<T> | string
  maxWidth?: number
  minWidth?: number
  resizable?: boolean
  style?: CSSProperties
  sortable?: boolean
  width: number
  /**
   * Renderers
   */
  cellRenderer?: CellRenderer<T>
  headerCellRenderer?: HeaderCellRenderer<T>
  /**
   * Extendable sections
   */
  [key: string]: any
}

export type Columns<T> = Column<T>[]

export type CustomizedCellsType = VNode<
  RendererNode,
  RendererElement,
  {
    [key: string]: any
  }
>[]

export type DefaultCellsType = VNode<
  RendererNode,
  RendererElement,
  {
    [key: string]: any
  }
>[][]

export type ColumnCellsType = DefaultCellsType | CustomizedCellsType
