import { withInstall, withNoopInstall } from '@element-plus/utils'

import Descriptions from './src/description.vue'
import DescriptionsItem from './src/description-item'

export const ElDescriptions = withInstall(Descriptions, {
  DescriptionsItem,
})

export const ElDescriptionsItem = withNoopInstall(DescriptionsItem)

export default ElDescriptions

export * from './src/description'
