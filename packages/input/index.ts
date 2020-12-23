import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Input from './src/index.vue'

Input.install = (app: App): void => {
  app.component(Input.name, Input)
}

const _Input: SFCWithInstall<typeof Input> = Input

export default _Input
