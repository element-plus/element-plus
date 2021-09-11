import { withInstall, withNoopInstall } from '@element-plus/utils'

import Anchor from './src/anchor.vue'
import AnchorLink from './src/anchor-link.vue'

export const ElAnchor = withInstall(Anchor, {
  AnchorLink,
})
export const ElAnchorLink = withNoopInstall(AnchorLink)
export default ElAnchor

export * from './src/anchor'
export * from './src/anchor-link'
