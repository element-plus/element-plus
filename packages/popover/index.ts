import { App } from 'vue'
import Popover from './src/index.vue'
export default (app: App): void => {
  app.component(Popover.name, Popover)
}
