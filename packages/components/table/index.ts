import { withInstall, withNoopInstall } from '@element-plus/utils-v2'
import Table from './src/table.vue'
import TableColumn from './src/tableColumn'

export const ElTable = withInstall(Table, {
  TableColumn,
})
export default ElTable
export const ElTableColumn = withNoopInstall(TableColumn)
