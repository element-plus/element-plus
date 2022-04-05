import { withInstall, withNoopInstall } from '@element-plus/utils'

import Steps from './src/index.vue'
import Step from './src/item.vue'

export const ElSteps = withInstall(Steps, {
  Step,
})
export default ElSteps
export const ElStep = withNoopInstall(Step)
