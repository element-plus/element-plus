import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import CollapseItem from '../collapse/src/collapse-item.vue'

CollapseItem.install = (app: App): void => {
  app.component(CollapseItem.name, CollapseItem)
}

const _CollapseItem: SFCWithInstall<typeof CollapseItem> = CollapseItem

export default _CollapseItem
