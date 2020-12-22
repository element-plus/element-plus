import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Link from './src/index.vue'

Link.install = (app: App): void => {
  app.component(Link.name, Link)
}

const _Link: SFCWithInstall<typeof Link> = Link

export default _Link
