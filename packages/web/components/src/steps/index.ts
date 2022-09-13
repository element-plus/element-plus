import { withInstall, withNoopInstall } from '@element-plus/utils'

import Steps from './src/steps.vue'
import Step from './src/item.vue'

export const ElSteps = withInstall(Steps, {
  Step,
})
export default ElSteps
export const ElStep = withNoopInstall(Step)

export * from './src/item'
export * from './src/steps'
