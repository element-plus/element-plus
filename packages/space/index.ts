import { App } from 'vue'
import Space from './src/index'

Space.install = (app: App): void => {
  app.component(Space.name, Space)
}

export default Space
