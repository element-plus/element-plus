import Link from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Link.install = (app: App): void => {
  app.component(Link.name, Link)
}

const _Link: SFCWithInstall<typeof Link> = Link

export default _Link
