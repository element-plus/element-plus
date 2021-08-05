import Result from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Result.install = (app: App): void => {
  app.component(Result.name, Result)
}

const _Result: SFCWithInstall<typeof Result> = Result

export default _Result
