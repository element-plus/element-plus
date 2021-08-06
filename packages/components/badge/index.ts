import { App } from 'vue'
import Badge from './src/index.vue'

import type { SFCWithInstall } from '@element-plus/utils/types'

Badge.install = (app: App): void => {
  app.component(Badge.name, Badge)
}

const _Badge = Badge as SFCWithInstall<typeof Badge>

export default _Badge
export const ElBadge = _Badge
