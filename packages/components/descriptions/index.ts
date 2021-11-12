import { withInstall, withNoopInstall } from '@element-plus/utils/with-install'

import Descriptions from './src/descriptions.vue'
import DescriptionsItem from './src/descriptions-item'

export const ElDescriptions = withInstall(Descriptions, {
  DescriptionsItem,
})
export default ElDescriptions

export const ElDescriptionsItem = withNoopInstall(DescriptionsItem)
