import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Avatar from './src/index.vue'

Avatar.install = (app: App): void => {
  app.component(Avatar.name, Avatar)
}

const _Avatar = Avatar as SFCWithInstall<typeof Avatar>

export default _Avatar
export const ElAvatar = _Avatar
