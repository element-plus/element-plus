import { App } from 'vue'
import directive from './src/directive'
import Popover from './src/index.vue'

export default (app: App): void => {
  app.component(Popover.name, Popover)
  app.directive('popover', directive)
}
