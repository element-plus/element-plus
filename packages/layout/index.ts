import { App } from 'vue'
import Row from './src/row'
import Col from './src/col'
export default (app: App) => {
  app.component(Row.name, Row)
  app.component(Col.name, Col)
}
