import { App } from 'vue'
import ElCollapseTransition from './collapse-transition/index.vue'

export default (app: App): void => {
  app.component(ElCollapseTransition.name, ElCollapseTransition)
}


export { ElCollapseTransition }
