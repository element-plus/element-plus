import Input from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Input.install = (app: App): void => {
  app.component(Input.name, Input)
}

const _Input: SFCWithInstall<typeof Input> = Input

export default _Input
export const ElInput = _Input
