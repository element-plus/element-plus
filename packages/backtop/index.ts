import { App } from 'vue'
import Backtop from './src/index.vue'

Backtop.install = (app: App): void => {
  app.component(Backtop.name, Backtop)
}

export default Backtop
