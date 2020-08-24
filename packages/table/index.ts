import { App } from 'vue'
import Table from './src/index.vue'
export default (app: App): void => {
  app.component(Table.name, Table)
}
