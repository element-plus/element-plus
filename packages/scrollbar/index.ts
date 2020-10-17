import { App } from 'vue'
import Scrollbar from './src/index.vue'
export default (app: App): void => {
  app.component(Scrollbar.name, Scrollbar)
}

export const ElScrollbar = Scrollbar
