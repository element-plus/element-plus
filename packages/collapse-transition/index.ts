import { App } from 'vue'
import CollapseTransition from '../transition/collapse-transition/index.vue'

CollapseTransition.install = (app: App): void => {
  app.component(CollapseTransition.name, CollapseTransition)
}

export default CollapseTransition
