import { App } from 'vue'
import Row from './src/index'
export default (app: App) => {
  app.component(Row.name, Row)
}
