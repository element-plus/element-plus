import { withInstall, withNoopInstall } from '@element-plus/utils'
import Avatar from './src/avatar.vue'
import AvatarGroup from './src/avatar-group'

import type { SFCWithInstall } from '@element-plus/utils'

export const ElAvatar: SFCWithInstall<typeof Avatar> & {
  AvatarGroup: typeof AvatarGroup
} = withInstall(Avatar, {
  AvatarGroup,
})
export const ElAvatarGroup: SFCWithInstall<typeof AvatarGroup> =
  withNoopInstall(AvatarGroup)
export default ElAvatar

export * from './src/avatar'
export * from './src/constants'
export {
  avatarGroupProps,
  type AvatarGroupProps,
  type AvatarGroupPropsPublic,
} from './src/avatar-group'
export type { AvatarInstance, AvatarGroupInstance } from './src/instance'
