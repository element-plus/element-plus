import { withInstall, withNoopInstall } from '@element-plus/utils'
import Avatar from './src/avatar.vue'
import AvatarGroup from './src/avatar-group'

import type { SFCWithInstall } from '@element-plus/utils'

export const GAvatar: SFCWithInstall<typeof Avatar> & {
  AvatarGroup: typeof AvatarGroup
} = withInstall(Avatar, {
  AvatarGroup,
})
export const GAvatarGroup: SFCWithInstall<typeof AvatarGroup> =
  withNoopInstall(AvatarGroup)
export default GAvatar

export * from './src/avatar'
export * from './src/constants'
export * from './src/avatar-group-props'
export type { AvatarInstance, AvatarGroupInstance } from './src/instance'
