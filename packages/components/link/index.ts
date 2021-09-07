import Link from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Link.install = (app: App): void => {
  app.component(Link.name, Link)
}

const _Link = Link as SFCWithInstall<typeof Link>

export default _Link
export const ElLink = _Link
