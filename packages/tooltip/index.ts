import { App } from 'vue'
import Tooltip from './src/index'

Tooltip.install = (app: App): void => {
  app.component(Tooltip.name, Tooltip)
}

export default Tooltip
