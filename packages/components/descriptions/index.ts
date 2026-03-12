import { withInstall, withNoopInstall } from '@element-plus/utils'
import Descriptions from './src/description.vue'
import DescriptionsItem from './src/description-item'

import type { SFCWithInstall } from '@element-plus/utils'

export const GDescriptions: SFCWithInstall<typeof Descriptions> & {
  DescriptionsItem: typeof DescriptionsItem
} = withInstall(Descriptions, {
  DescriptionsItem,
})

export const GDescriptionsItem: SFCWithInstall<typeof DescriptionsItem> =
  withNoopInstall(DescriptionsItem)

export default GDescriptions

export * from './src/description'
export * from './src/description-item'
