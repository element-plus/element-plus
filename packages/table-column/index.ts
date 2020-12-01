import { App } from 'vue'
import TableColumn from '../table/src/tableColumn'

TableColumn.install = (app: App): void => {
  app.component(TableColumn.name, TableColumn)
}

export default TableColumn
