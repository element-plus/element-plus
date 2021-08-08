import Progress from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Progress.install = (app: App): void => {
  app.component(Progress.name, Progress)
}

const _Progress = Progress as SFCWithInstall<typeof Progress>

export default _Progress
export const ElProgress = _Progress
