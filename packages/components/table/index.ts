import Table from './src/table.vue'
import TableColumn from './src/tableColumn'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Table.install = (app: App): void => {
  app.component(Table.name, Table)
  app.component(TableColumn.name, TableColumn)
}

Table.TableColumn = TableColumn

const _Table = Table as any as SFCWithInstall<typeof Table> & {
  TableColumn: typeof TableColumn
}

export default _Table
export const ElTable = _Table
export const ElTableColumn = TableColumn
