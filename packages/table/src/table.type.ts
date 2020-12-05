import { Ref, ComponentInternalInstance, VNode } from 'vue'

interface fn {
  (...args: any[]): any
}

interface AnyObject {
  [key: string]: any
}

interface WatcherPropsData {
  data: Ref<any[]>
  rowKey: Ref<string>
}

interface StoreCurrent {
  updateCurrentRow: (_currentRow: any) => void
  updateCurrentRowData: () => void
  setCurrentRowKey: (key: string) => void
  states: {
    _currentRowKey: Ref<string>
    currentRow: Ref<AnyObject>
  }
}

interface StoreExpand {
  setExpandRowKeys: (rowKeys: string[]) => void
  toggleRowExpansion: (row, expanded: boolean | undefined) => void
  updateExpandRows: () => void
  isRowExpanded: (row: AnyObject) => boolean
  states: {
    expandRows: Ref<AnyObject[]>
    defaultExpandAll: Ref<boolean>
  }
}

interface StoreTree {
  updateTreeExpandKeys: (value: string[]) => void
  toggleTreeExpansion: (row, expanded) => void
  loadOrToggle: (row: any) => void
  states: {
    expandRowKeys: Ref<string[]>
    treeData: Ref<AnyObject>
    indent: Ref<number>
    lazy: Ref<boolean>
    lazyTreeNodeMap: Ref<AnyObject>
    lazyColumnIdentifier: Ref<string>
    childrenColumnName: Ref<string>
  }
}

interface StoreMutations {
  setData: (states: StoreStates, data: AnyObject[]) => void
  insertColumn: (
    states: StoreStates,
    column: AnyObject,
    index: number | undefined,
    parent: AnyObject,
  ) => void
  removeColumn: (
    states: StoreStates,
    column: AnyObject,
    parent: AnyObject,
  ) => void
  sort: (states: StoreStates, options: Sort) => void
  changeSortCondition: (states: StoreStates, options: Sort) => void
  filterChange: (states: StoreStates, options: Filter) => void
  toggleAllSelection: () => void
  rowSelectedChanged: (states: StoreStates, row: AnyObject) => void
  setHoverRow: (states: StoreStates, row: AnyObject) => void
  setCurrentRow: (states: StoreStates, row: AnyObject) => void
}

interface StoreStates {
  rowKey: Ref<string>
  data: Ref<AnyObject[]>
  _data: Ref<AnyObject[]>
  isComplex: Ref<boolean>
  _columns: Ref<TableColumnCtx[]>
  originColumns: Ref<TableColumnCtx[]>
  columns: Ref<TableColumnCtx[]>
  fixedColumns: Ref<TableColumnCtx[]>
  rightFixedColumns: Ref<TableColumnCtx[]>
  leafColumns: Ref<TableColumnCtx[]>
  fixedLeafColumns: Ref<TableColumnCtx[]>
  rightFixedLeafColumns: Ref<TableColumnCtx[]>
  leafColumnsLength: Ref<number>
  fixedLeafColumnsLength: Ref<number>
  rightFixedLeafColumnsLength: Ref<number>
  isAllSelected: Ref<boolean>
  selection: Ref<AnyObject[]>
  reserveSelection: Ref<boolean>
  selectOnIndeterminate: Ref<boolean>
  selectable: (item: AnyObject, i: number) => Ref<boolean>
  filters: AnyObject
  filteredData: Ref<AnyObject[]>
  sortingColumn: AnyObject
  sortProp: Ref<null> | Ref<string>
  sortOrder: Ref<null> | Ref<string>
  hoverRow: Ref<unknown>
  expandRows: Ref<AnyObject[]>
  defaultExpandAll: Ref<boolean>
  expandRowKeys: Ref<string[]>
  treeData: Ref<AnyObject>
  indent: Ref<number>
  lazy: Ref<boolean>
  lazyTreeNodeMap: Ref<AnyObject>
  lazyColumnIdentifier: Ref<string>
  childrenColumnName: Ref<string>
  _currentRowKey: Ref<string>
  currentRow: Ref<AnyObject>
}

interface Store {
  assertRowKey: () => void
  updateColumns: () => void
  scheduleLayout: (needUpdateColumns?: boolean, immediate?: boolean) => void
  isSelected: (row: any) => boolean
  clearSelection: () => void
  cleanSelection: () => void
  toggleRowSelection: (row: any, selected?: any[], emitChange?: boolean) => void
  _toggleAllSelection: () => void
  updateSelectionByRowKey: () => void
  updateAllSelected: () => void
  updateFilters: (columns: any | any[], values: any[]) => AnyObject
  updateSort: (column: any, prop: string, order: string) => void
  execFilter: () => void
  execSort: () => void
  execQuery: (ignore?: { filter?: any; }) => void
  clearFilter: (columnKeys: string | string[]) => void
  clearSort: () => void
  setExpandRowKeysAdapter: (val: string[]) => void
  toggleRowExpansionAdapter: (row, expanded) => void
  setExpandRowKeys?: (rowKeys: string[]) => void
  toggleRowExpansion: (row, expanded?: boolean | undefined) => void
  updateExpandRows: () => void
  isRowExpanded: (row: AnyObject) => boolean
  updateCurrentRow: (_currentRow: any) => void
  updateCurrentRowData: () => void
  setCurrentRowKey: (key: string | number) => void
  updateTreeExpandKeys?: (value: string[]) => void
  toggleTreeExpansion?: (row, expanded) => void
  loadOrToggle: (row: any) => void
  commit: (name: string, ...args) => void
  updateTableScrollY: () => void
  toggleAllSelection?: () => void
  mutations: StoreMutations
  states: StoreStates
}

interface Sort {
  prop: string
  order: string
  init?: any
  silent?: any
}

interface Filter {
  column: AnyObject
  values: string[]
  silent: any
}

interface TableLayout {
  observers: TableHeader[]
  table: Table
  store: Store
  columns: TableColumnCtx[]
  fit: boolean
  showHeader: boolean
  height: Ref<null | string | number>
  scrollX: Ref<boolean>
  scrollY: Ref<boolean>
  bodyWidth: Ref<null | string | number>
  fixedWidth: Ref<null | string | number>
  rightFixedWidth: Ref<null | string | number>
  tableHeight: Ref<null | string | number>
  headerHeight: Ref<number>
  appendHeight: Ref<number>
  footerHeight: Ref<number>
  viewportHeight: Ref<null | string | number>
  bodyHeight: Ref<null | string | number>
  fixedBodyHeight: Ref<null | string | number>
  gutterWidth: number
  updateScrollY: () => void
  setHeight: (value: string, prop?: string) => void
  setMaxHeight: (value: string) => void
  getFlattenColumns: () => AnyObject[]
  updateElsHeight: () => void
  headerDisplayNone: (elm: HTMLElement) => void
  updateColumnsWidth: () => void
  addObserver: (observer: TableHeader) => void
  removeObserver: (observer: TableHeader) => void
  notifyObservers: (event: string) => void
}

interface TreeNode {
  expanded?: boolean
  loading?: boolean
  noLazyChildren?: boolean
  indent?: number
  level?: number
}

interface RenderRowData {
  store: Store
  _self: Table | AnyObject
  column: any
  row: any
  $index: number | string
  treeNode?: TreeNode
}

interface TableFooter {
  fixed: string
  store: unknown
  summaryMethod: () => void
  sumText: string
  border: boolean
  defaultSort: Sort
}

interface TableProps {
  data: any[]
  size: string
  width: string | number
  height: string | number
  maxHeight: string | number
  fit: boolean
  stripe: boolean
  border: boolean
  rowKey: string | fn
  context: unknown
  showHeader: boolean
  showSummary: boolean
  sumText: string
  summaryMethod: fn
  rowClassName: string | fn
  rowStyle: unknown | fn
  cellClassName: string | fn
  cellStyle: unknown | fn
  headerRowClassName: string | fn
  headerRowStyle: unknown | fn
  headerCellClassName: string | fn
  headerCellStyle: unknown | fn
  highlightCurrentRow: boolean
  currentRowKey: string | number
  emptyText: string
  expandRowKeys: any[]
  defaultExpandAll: boolean
  defaultSort: unknown
  tooltipEffect: string
  spanMethod: fn
  selectOnIndeterminate: boolean
  indent: number
  treeProps: any
  lazy: boolean
  load: fn
}

interface TableRefs {
  headerWrapper: HTMLElement
  footerWrapper: HTMLElement
  fixedBodyWrapper: HTMLElement
  rightFixedBodyWrapper: HTMLElement
  bodyWrapper: HTMLElement
  [key: string]: unknown
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

interface Table extends ComponentInternalInstance {
  $ready: boolean
  hoverState?: null | {
    cell: HTMLElement
    column: TableColumnCtx
    row: AnyObject
  }
  renderExpanded: fn
  store: Store
  layout: TableLayout
  refs: TableRefs
  tableId: string
  state: TableState
}

interface TableHeader extends ComponentInternalInstance {
  state: {
    onColumnsChange
    onScrollableChange
  }
  filterPanels: Ref<AnyObject>
}

interface TableColumnCtx {
  id?: string
  realWidth: number
  type: string
  label: string
  className: string
  labelClassName: string
  property: string
  prop: string
  width: number
  minWidth: number
  renderHeader: fn
  sortable: boolean | string
  sortMethod: fn
  sortBy: string | fn | unknown[]
  resizable: {
    type: boolean
    default: true
  }
  columnKey: string
  align: string
  headerAlign: string
  showTooltipWhenOverflow: boolean
  showOverflowTooltip: boolean
  fixed: boolean | string
  formatter: fn
  selectable: fn
  reserveSelection: boolean
  filterMethod: fn
  filteredValue: unknown[]
  filters: unknown[]
  filterPlacement: string
  filterMultiple: {
    type: boolean
    default: true
  }
  index: number | fn
  sortOrders: unknown[]
  renderCell: (data: AnyObject) => void
  colSpan: number
  rowSpan: number
  children: TableColumnCtx[]
  level: number
  filterable: boolean | fn
  order: string
  isColumnGroup: boolean
  columns: TableColumnCtx[]
}

interface TableColumn extends ComponentInternalInstance {
  vnode: {
    vParent: ComponentInternalInstance
  } & VNode
  columnId: string
  columnConfig: Ref<AnyObject>
}

export {
  TreeNode,
  RenderRowData,
  TableFooter,
  TableProps,
  WatcherPropsData,
  Store,
  Table,
  AnyObject,
  TableHeader,
  TableColumnCtx,
  TableLayout,
  fn,
  TableColumn,
}
