import { App } from 'vue'
import CollapseItem from '../collapse/src/collapse-item.vue'

CollapseItem.install = (app: App): void => {
  app.component(CollapseItem.name, CollapseItem)
}

export default CollapseItem
