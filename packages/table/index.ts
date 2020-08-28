import { App } from 'vue'
import Table from './src/table.vue'
import TableColumn from './src/table-column.vue'
export default (app: App): void => {
  app.component(Table.name, Table)
  app.component(TableColumn.name, TableColumn)
}

export {
  Table,
  TableColumn,
}
