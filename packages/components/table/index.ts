import { withInstall, withNoopInstall } from '@element-plus/utils'
import Table from './src/table.vue'
import TableColumn from './src/tableColumn'

export const ElTable = withInstall(Table, {
  TableColumn,
})
export default ElTable
export const ElTableColumn = withNoopInstall(TableColumn)

export type {
  SummaryMethod,
  Table,
  TableProps,
  TableRefs,
  ColumnCls,
  ColumnStyle,
  TreeNode,
  RenderRowData,
  Sort,
  Filter,
} from './src/table/defaults'
