import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import DescriptionsItem from '../descriptions/src/description-item'

DescriptionsItem.install = (app: App): void => {
  app.component(DescriptionsItem.name, DescriptionsItem)
}

const _DescriptionsItem: SFCWithInstall<typeof DescriptionsItem> = DescriptionsItem

export default _DescriptionsItem
