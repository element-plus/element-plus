import { App } from 'vue'
import Divider from './src/index.vue'

Divider.install = (app: App): void => {
  app.component(Divider.name, Divider)
}

export default Divider
