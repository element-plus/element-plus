import { withInstall, withNoopInstall } from '@element-plus/utils/with-install'

import Steps from './src/steps.vue'
import Step from './src/step.vue'

export const ElSteps = withInstall(Steps, {
  Step,
})
export default ElSteps
export const ElStep = withNoopInstall(Step)

export * from './src/step'
export * from './src/steps'
