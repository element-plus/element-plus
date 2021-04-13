import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import InputNumber from './src/index.vue'

InputNumber.install = (app: App): void => {
  app.component(InputNumber.name, InputNumber)
}

const _InputNumber: SFCWithInstall<typeof InputNumber> = InputNumber

export default _InputNumber
