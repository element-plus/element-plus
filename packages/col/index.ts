import { App } from 'vue'
import Col from './src/index'
export default (app: App) => {
  app.component(Col.name, Col)
}
