import { withInstall, withNoopInstall } from '@element-plus/utils'
import Anchor from './src/anchor.vue'
import AnchorLink from './src/anchor-link.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GAnchor: SFCWithInstall<typeof Anchor> & {
  AnchorLink: typeof AnchorLink
} = withInstall(Anchor, {
  AnchorLink,
})
export const GAnchorLink: SFCWithInstall<typeof AnchorLink> =
  withNoopInstall(AnchorLink)
export default GAnchor

export * from './src/anchor'
