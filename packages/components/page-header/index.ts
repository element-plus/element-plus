import PageHeader from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

PageHeader.install = (app: App): void => {
  app.component(PageHeader.name, PageHeader)
}

const _PageHeader: SFCWithInstall<typeof PageHeader> = PageHeader

export default _PageHeader

