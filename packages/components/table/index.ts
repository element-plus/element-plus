import { withInstall, withNoopInstall } from '@element-plus/utils'
import Table from './src/table.vue'
import TableColumn from './src/tableColumn'

import type { ComponentExposed } from 'vue-component-type-helpers'
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

export type TableColumnInstance = ComponentExposed<typeof TableColumn>

const t: TableColumnInstance
t.

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
} from './src/table/defaults'
