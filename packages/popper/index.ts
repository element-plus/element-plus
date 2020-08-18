import type { App } from 'vue'
import Popper from './src/index.vue'

export default (app: App) => {
  app.component(Popper.name, Popper)
}
