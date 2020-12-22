import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Steps from './src/index.vue'

Steps.install = (app: App): void => {
  app.component(Steps.name, Steps)
}

const _Steps: SFCWithInstall<typeof Steps> = Steps

export default _Steps
