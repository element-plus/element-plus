import InputNumber from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

InputNumber.install = (app: App): void => {
  app.component(InputNumber.name, InputNumber)
}

const _InputNumber: SFCWithInstall<typeof InputNumber> = InputNumber

export default _InputNumber
export const ElInputNumber = _InputNumber
