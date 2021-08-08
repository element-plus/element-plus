import Rate from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Rate.install = (app: App): void => {
  app.component(Rate.name, Rate)
}

const _Rate = Rate as SFCWithInstall<typeof Rate>

export default _Rate
export const ElRate = _Rate
