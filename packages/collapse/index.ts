import { App } from 'vue'
import Collapse from './src/collapse.vue'
import CollapseItem from './src/collapse-item.vue'

export default (app: App): void => {
  app.component(Collapse.name, Collapse)
  app.component(CollapseItem.name, CollapseItem)
}

export { Collapse, CollapseItem }
