import { App } from 'vue'
import Scrollbar from './src/index'
export default (app: App): void => {
  app.component(Scrollbar.name, Scrollbar)
}
