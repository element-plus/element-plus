import { App } from 'vue'
import Col from './src/col'

Col.install = (app: App): void => {
  app.component(Col.name, Col)
}

export default Col
