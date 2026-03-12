import { withInstall, withNoopInstall } from '@element-plus/utils'
import Table from './src/table.vue'
import TableColumn from './src/tableColumn'

import type { SFCWithInstall } from '@element-plus/utils'

export const GTable: SFCWithInstall<typeof Table> & {
  TableColumn: typeof TableColumn
} = withInstall(Table, {
  TableColumn,
})
export default GTable
export const GTableColumn: SFCWithInstall<typeof TableColumn> =
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
  TreeNode,
  RenderRowData,
  Sort,
  Filter,
  TableColumnCtx,
  TableTooltipData,
  TableConfigContext,
} from './src/table/defaults'
