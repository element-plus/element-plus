import { App } from 'vue'
import Pagination from './src/index'
export default (app: App): void => {
  app.component(Pagination.name, Pagination)
}
