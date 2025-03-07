// @ts-nocheck
import { useSizeProp } from '@element-plus/hooks'
import type {
  CSSProperties,
  ComponentInternalInstance,
  PropType,
  Ref,
  VNode,
} from 'vue'
import type { ComponentSize } from '@element-plus/constants'
import type { Nullable } from '@element-plus/utils'
import type { Store } from '../store'
import type { TableColumnCtx } from '../table-column/defaults'
import type TableLayout from '../table-layout'
import type {
  TableOverflowTooltipFormatter,
  TableOverflowTooltipOptions,
} from '../util'

export type DefaultRow = any

interface TableRefs {
  tableWrapper: HTMLElement
  headerWrapper: HTMLElement
  footerWrapper: HTMLElement
  fixedBodyWrapper: HTMLElement
  rightFixedBodyWrapper: HTMLElement
  bodyWrapper: HTMLElement
  appendWrapper: HTMLElement
  [key: string]: any
}

interface TableState {
  isGroup: Ref<boolean>
  resizeState: Ref<{
    width: any
    height: any
  }>
  doLayout: () => void
  debouncedUpdateLayout: () => void
}

interface TreeProps {
  hasChildren?: string
  children?: string
  checkStrictly?: boolean
}

type HoverState<T> = Nullable<{
  cell: HTMLElement
  column: TableColumnCtx<T>
  row: T
}>

type RIS<T> = { row: T; $index: number; store: Store<T>; expanded: boolean }

type RenderExpanded<T> = ({
  row,
  $index,
  store,
  expanded: boolean,
}: RIS<T>) => VNode

type SummaryMethod<T> = (data: {
  columns: TableColumnCtx<T>[]
  data: T[]
}) => (string | VNode)[]

interface Table<T> extends ComponentInternalInstance {
  $ready: boolean
  hoverState?: HoverState<T>
  renderExpanded: RenderExpanded<T>
  store: Store<T>
  layout: TableLayout<T>
  refs: TableRefs
  tableId: string
  state: TableState
}

type ColumnCls<T> = string | ((data: { row: T; rowIndex: number }) => string)
type ColumnStyle<T> =
  | CSSProperties
  | ((data: { row: T; rowIndex: number }) => CSSProperties)
type CellCls<T> =
  | string
  | ((data: {
      row: T
      rowIndex: number
      column: TableColumnCtx<T>
      columnIndex: number
    }) => string)
type CellStyle<T> =
  | CSSProperties
  | ((data: {
      row: T
      rowIndex: number
      column: TableColumnCtx<T>
      columnIndex: number
    }) => CSSProperties)
type Layout = 'fixed' | 'auto'
interface TableProps<T> {
  data: T[]
  size?: ComponentSize
  width?: string | number
  height?: string | number
  maxHeight?: string | number
  fit?: boolean
  stripe?: boolean
  border?: boolean
  rowKey?: string | ((row: T) => string)
  context?: Table<T>
  showHeader?: boolean
  showSummary?: boolean
  sumText?: string
  summaryMethod?: SummaryMethod<T>
  rowClassName?: ColumnCls<T>
  rowStyle?: ColumnStyle<T>
  cellClassName?: CellCls<T>
  cellStyle?: CellStyle<T>
  headerRowClassName?: ColumnCls<T>
  headerRowStyle?: ColumnStyle<T>
  headerCellClassName?: CellCls<T>
  headerCellStyle?: CellStyle<T>
  highlightCurrentRow?: boolean
  currentRowKey?: string | number
  emptyText?: string
  expandRowKeys?: string[]
  defaultExpandAll?: boolean
  defaultSort?: Sort
  tooltipEffect?: string
  tooltipOptions?: TableOverflowTooltipOptions
  spanMethod?: (data: {
    row: T
    rowIndex: number
    column: TableColumnCtx<T>
    columnIndex: number
  }) =>
    | number[]
    | {
        rowspan: number
        colspan: number
      }
    | undefined
  selectOnIndeterminate?: boolean
  indent?: number
  treeProps?: TreeProps
  lazy?: boolean
  load?: (row: T, treeNode: TreeNode, resolve: (data: T[]) => void) => void
  className?: string
  style?: CSSProperties
  tableLayout?: Layout
  scrollbarAlwaysOn?: boolean
  flexible?: boolean
  showOverflowTooltip?: boolean | TableOverflowTooltipOptions
  tooltipFormatter?: TableOverflowTooltipFormatter<T>
  appendFilterPanelTo?: string
  scrollbarTabindex?: number | string
}

type TableTooltipData<T = any> = Parameters<TableOverflowTooltipFormatter<T>>[0]

interface Sort {
  prop: string
  order: 'ascending' | 'descending'
  init?: any
  silent?: any
}

interface Filter<T> {
  column: TableColumnCtx<T>
  values: string[]
  silent: any
}

interface TreeNode {
  expanded?: boolean
  loading?: boolean
  noLazyChildren?: boolean
  indent?: number
  level?: number
  display?: boolean
}

interface RenderRowData<T> {
  store: Store<T>
  _self: Table<T>
  column: TableColumnCtx<T>
  row: T
  $index: number
  treeNode?: TreeNode
  expanded: boolean
}

export default {
  /**
   * @description table data
   */
  data: {
    type: Array as PropType<DefaultRow[]>,
    default: () => [],
  },
  /**
   * @description size of Table
   */
  size: useSizeProp,
  width: [String, Number],
  /**
   * @description table's height. By default it has an `auto` height. If its value is a number, the height is measured in pixels; if its value is a string, the value will be assigned to element's style.height, the height is affected by external styles
   */
  height: [String, Number],
  /**
   * @description table's max-height. The legal value is a number or the height in px
   */
  maxHeight: [String, Number],
  /**
   * @description whether width of column automatically fits its container
   */
  fit: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether Table is striped
   */
  stripe: Boolean,
  /**
   * @description whether Table has vertical border
   */
  border: Boolean,
  /**
   * @description key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used
   */
  rowKey: [String, Function] as PropType<TableProps<DefaultRow>['rowKey']>,
  /**
   * @description whether Table header is visible
   */
  showHeader: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether to display a summary row
   */
  showSummary: Boolean,
  /**
   * @description displayed text for the first column of summary row
   */
  sumText: String,
  /**
   * @description custom summary method
   */
  summaryMethod: Function as PropType<TableProps<DefaultRow>['summaryMethod']>,
  /**
   * @description function that returns custom class names for a row, or a string assigning class names for every row
   */
  rowClassName: [String, Function] as PropType<
    TableProps<DefaultRow>['rowClassName']
  >,
  /**
   * @description function that returns custom style for a row, or an object assigning custom style for every row
   */
  rowStyle: [Object, Function] as PropType<TableProps<DefaultRow>['rowStyle']>,
  /**
   * @description function that returns custom class names for a cell, or a string assigning class names for every cell
   */
  cellClassName: [String, Function] as PropType<
    TableProps<DefaultRow>['cellClassName']
  >,
  /**
   * @description function that returns custom style for a cell, or an object assigning custom style for every cell
   */
  cellStyle: [Object, Function] as PropType<
    TableProps<DefaultRow>['cellStyle']
  >,
  /**
   * @description function that returns custom class names for a row in table header, or a string assigning class names for every row in table header
   */
  headerRowClassName: [String, Function] as PropType<
    TableProps<DefaultRow>['headerRowClassName']
  >,
  /**
   * @description function that returns custom style for a row in table header, or an object assigning custom style for every row in table header
   */
  headerRowStyle: [Object, Function] as PropType<
    TableProps<DefaultRow>['headerRowStyle']
  >,
  /**
   * @description function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header
   */
  headerCellClassName: [String, Function] as PropType<
    TableProps<DefaultRow>['headerCellClassName']
  >,
  /**
   * @description function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header
   */
  headerCellStyle: [Object, Function] as PropType<
    TableProps<DefaultRow>['headerCellStyle']
  >,
  /**
   * @description whether current row is highlighted
   */
  highlightCurrentRow: Boolean,
  /**
   * @description key of current row, a set only prop
   */
  currentRowKey: [String, Number],
  /**
   * @description displayed text when data is empty. You can customize this area with `#empty`
   */
  emptyText: String,
  /**
   * @description set expanded rows by this prop, prop's value is the keys of expand rows, you should set row-key before using this prop
   */
  expandRowKeys: Array as PropType<TableProps<DefaultRow>['expandRowKeys']>,
  /**
   * @description whether expand all rows by default, works when the table has a column type="expand" or contains tree structure data
   */
  defaultExpandAll: Boolean,
  /**
   * @description set the default sort column and order. property `prop` is used to set default sort column, property `order` is used to set default sort order
   */
  defaultSort: Object as PropType<TableProps<DefaultRow>['defaultSort']>,
  /**
   * @description the `effect` of the overflow tooltip
   */
  tooltipEffect: String,
  /**
   * @description the options for the overflow tooltip, [see the following tooltip component](tooltip.html#attributes)
   */
  tooltipOptions: Object as PropType<TableProps<DefaultRow>['tooltipOptions']>,
  /**
   * @description method that returns rowspan and colspan
   */
  spanMethod: Function as PropType<TableProps<DefaultRow>['spanMethod']>,
  /**
   * @description controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected
   */
  selectOnIndeterminate: {
    type: Boolean,
    default: true,
  },
  /**
   * @description horizontal indentation of tree data
   */
  indent: {
    type: Number,
    default: 16,
  },
  /**
   * @description configuration for rendering nested data
   */
  treeProps: {
    type: Object as PropType<TableProps<DefaultRow>['treeProps']>,
    default: () => {
      return {
        hasChildren: 'hasChildren',
        children: 'children',
        checkStrictly: false,
      }
    },
  },
  /**
   * @description whether to lazy loading data
   */
  lazy: Boolean,
  /**
   * @description method for loading child row data, only works when `lazy` is true
   */
  load: Function as PropType<TableProps<DefaultRow>['load']>,
  style: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
  },
  className: {
    type: String,
    default: '',
  },
  /**
   * @description sets the algorithm used to lay out table cells, rows, and columns
   */
  tableLayout: {
    type: String as PropType<Layout>,
    default: 'fixed',
  },
  /**
   * @description always show scrollbar
   */
  scrollbarAlwaysOn: Boolean,
  /**
   * @description ensure main axis minimum-size doesn't follow the content
   */
  flexible: Boolean,
  /**
   * @description whether to hide extra content and show them in a tooltip when hovering on the cell.It will affect all the table columns
   */
  showOverflowTooltip: [Boolean, Object] as PropType<
    TableProps<DefaultRow>['showOverflowTooltip']
  >,
  /**
   * @description function that formats cell tooltip content, works when `show-overflow-tooltip` is `true`
   */
  tooltipFormatter: Function as PropType<
    TableProps<DefaultRow>['tooltipFormatter']
  >,
  appendFilterPanelTo: String,
  scrollbarTabindex: {
    type: [Number, String],
    default: undefined,
  },
  /**
   * @description whether to allow drag the last column
   */
  allowDragLastColumn: {
    type: Boolean,
    default: true,
  },
}
export type {
  SummaryMethod,
  Table,
  TableProps,
  TableRefs,
  ColumnCls,
  ColumnStyle,
  CellCls,
  CellStyle,
  TreeNode,
  RenderRowData,
  Sort,
  Filter,
  TableColumnCtx,
  TreeProps,
  TableTooltipData,
}
