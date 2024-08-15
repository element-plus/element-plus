import { withInstall } from '@element-plus/utils'
import Avatar from './src/avatar.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElAvatar: SFCWithInstall<typeof Avatar> = withInstall(Avatar)
export default ElAvatar

export * from './src/avatar'
export type { AvatarInstance } from './src/instance'
