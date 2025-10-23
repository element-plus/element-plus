import { withInstall, withNoopInstall } from '@element-plus/utils'
import Table from './src/table.vue'
import TableColumn from './src/tableColumn'

import type { SFCWithInstall } from '@element-plus/utils'

export const ElTable: SFCWithInstall<typeof Table> & {
  TableColumn: typeof TableColumn
} = withInstall(Table, {
  TableColumn,
})
export default ElTable
export const ElTableColumn: SFCWithInstall<typeof TableColumn> =
  withNoopInstall(TableColumn)

export type TableInstance = InstanceType<typeof Table> & unknown

export type TableColumnInstance = InstanceType<typeof TableColumn> & unknown

export type {
  SummaryMethod,
  Table,
  TableProps,
  TableRefs,
  ColumnCls,
  ColumnStyle,
  CellCls,
  CellStyle,
  DefaultRow,
  TableTreeNode,
  RenderRowData,
  Sort,
  Filter,
  TableColumnCtx,
  TableTooltipData,
  TableSortOrder,
  TreeProps,
} from './src/table/defaults'

export type {
  Filters as TableFilters,
  FilterMethods,
  TableColumn,
  ValueOf as TableColumnValueOf,
} from './src/table-column/defaults'
export type { TableBodyProps } from './src/table-body/defaults'
export type { TableFooter } from './src/table-footer/index'
export type { TableHeader, TableHeaderProps } from './src/table-header/index'
export type { TreeData as TableTreeData } from './src/store/tree'
