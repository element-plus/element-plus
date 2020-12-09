import { App } from 'vue'
import Table from './src/table.vue'

Table.install = (app: App): void => {
  app.component(Table.name, Table)
}

export default Table
