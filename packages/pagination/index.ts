import { App } from 'vue'
import Pagination from './src/index'

Pagination.install = (app: App): void => {
  app.component(Pagination.name, Pagination)
}

export default Pagination

