import { withInstall, withNoopInstall } from '@element-plus/utils'
import Table from './src/table.vue'
import TableColumn from './src/tableColumn'

import type { ComponentInstance } from 'vue'
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

export type TableInstance = ComponentInstance<typeof Table> &
  ComponentExposed<typeof Table>

export type TableColumnInstance = ComponentInstance<typeof TableColumn> &
  ComponentExposed<typeof TableColumn>

export type {
  SummaryMethod,
  Table,
  TableEmits,
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
