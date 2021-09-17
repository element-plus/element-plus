import type { PropType, ComponentInternalInstance, Ref, VNode } from 'vue'
import type { DefaultRow, Table } from '../table/defaults'

type CI<T> = { column: TableColumnCtx<T>; $index: number }

type Filters = {
  text: string
  value: string
}[]

type FilterMethods<T> = (value, row: T, column: TableColumnCtx<T>) => void

type ValueOf<T> = T[keyof T]

interface TableColumnCtx<T> {
  id: string
  realWidth: number
  type: string
  label: string
  className: string
  labelClassName: string
  property: string
  prop: string
  width: string | number
  minWidth: string | number
  renderHeader: (data: CI<T>) => VNode
  sortable: boolean | string
  sortMethod: (a: T, b: T) => number
  sortBy: string | ((row: T, index: number) => string) | string[]
  resizable: boolean
  columnKey: string
  rawColumnKey: string
  align: string
  headerAlign: string
  showTooltipWhenOverflow: boolean
  showOverflowTooltip: boolean
  fixed: boolean | string
  formatter: (
    row: T,
    column: TableColumnCtx<T>,
    cellValue,
    index: number
  ) => VNode
  selectable: (row: T, index: number) => boolean
  reserveSelection: boolean
  filterMethod: FilterMethods<T>
  filteredValue: string[]
  filters: Filters
  filterPlacement: string
  filterMultiple: boolean
  index: number | ((index: number) => number)
  sortOrders: ('ascending' | 'descending' | null)[]
  renderCell: (data: any) => void
  colSpan: number
  rowSpan: number
  children: TableColumnCtx<T>[]
  level: number
  filterable: boolean | FilterMethods<T> | Filters
  order: string
  isColumnGroup: boolean
  columns: TableColumnCtx<T>[]
  getColumnIndex: () => number
  no: number
  filterOpened?: boolean
}

interface TableColumn<T> extends ComponentInternalInstance {
  vnode: {
    vParent: TableColumn<T> | Table<T>
  } & VNode
  vParent: TableColumn<T> | Table<T>
  columnId: string
  columnConfig: Ref<Partial<TableColumnCtx<T>>>
}

export type { Filters, FilterMethods, TableColumnCtx, TableColumn, ValueOf }

export default {
  type: {
    type: String,
    default: 'default',
  },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
  width: {
    type: [String, Number],
    default: '',
  },
  minWidth: {
    type: [String, Number],
    default: '',
  },
  renderHeader: Function as PropType<
    TableColumnCtx<DefaultRow>['renderHeader']
  >,
  sortable: {
    type: [Boolean, String],
    default: false,
  },
  sortMethod: Function as PropType<TableColumnCtx<DefaultRow>['sortMethod']>,
  sortBy: [String, Function, Array] as PropType<
    TableColumnCtx<DefaultRow>['sortBy']
  >,
  resizable: {
    type: Boolean,
    default: true,
  },
  columnKey: String,
  align: String,
  headerAlign: String,
  showTooltipWhenOverflow: Boolean,
  showOverflowTooltip: Boolean,
  fixed: [Boolean, String],
  formatter: Function as PropType<TableColumnCtx<DefaultRow>['formatter']>,
  selectable: Function as PropType<TableColumnCtx<DefaultRow>['selectable']>,
  reserveSelection: Boolean,
  filterMethod: Function as PropType<
    TableColumnCtx<DefaultRow>['filterMethod']
  >,
  filteredValue: Array as PropType<TableColumnCtx<DefaultRow>['filteredValue']>,
  filters: Array as PropType<TableColumnCtx<DefaultRow>['filters']>,
  filterPlacement: String,
  filterMultiple: {
    type: Boolean,
    default: true,
  },
  index: [Number, Function] as PropType<TableColumnCtx<DefaultRow>['index']>,
  sortOrders: {
    type: Array as PropType<TableColumnCtx<DefaultRow>['sortOrders']>,
    default: () => {
      return ['ascending', 'descending', null]
    },
    validator: (val: TableColumnCtx<unknown>['sortOrders']) => {
      return val.every(
        (order: string) => ['ascending', 'descending', null].indexOf(order) > -1
      )
    },
  },
}
