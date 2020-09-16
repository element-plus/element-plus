import { App } from 'vue'
import Tooltip from './src/index'
export default (app: App): void => {
  app.component(Tooltip.name, Tooltip)
}
