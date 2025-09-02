import TagNavItem from '@element-plus/components/tag-nav/src/tag-nav-item.vue'
import TagNav from '@element-plus/components/tag-nav/src/tag-nav.vue'
import { withInstall, withNoopInstall } from '@element-plus/utils'

import type { SFCWithInstall } from '@element-plus/utils'

export const ElTagNav: SFCWithInstall<typeof TagNav> & {
  TagNavItem: typeof TagNavItem
} = withInstall(TagNav, { TagNavItem })
export const ElTagNavItem: SFCWithInstall<typeof TagNavItem> =
  withNoopInstall(TagNavItem)
export default ElTagNav

export * from './src/tag-nav-item'
export * from './src/tag-nav'
export * from './src/constants'
