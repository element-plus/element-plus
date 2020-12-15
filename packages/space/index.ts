import { App } from 'vue'
import Space from './src/index.vue'

Space.install = (app: App): void => {
  app.component(Space.name, Space)
}

export default Space
