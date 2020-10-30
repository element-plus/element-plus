import { App } from 'vue'
import Table from './src/table.vue'
import TableColumn from './src/tableColumn'

export default (app: App): void => {
  app.component(Table.name, Table)
  app.component(TableColumn.name, TableColumn)
}

export { Table, TableColumn }
