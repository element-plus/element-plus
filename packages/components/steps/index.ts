import { withInstall, withNoopInstall } from '@element-plus/utils'
import Steps from './src/steps.vue'
import Step from './src/item.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GSteps: SFCWithInstall<typeof Steps> & {
  Step: typeof Step
} = withInstall(Steps, {
  Step,
})
export default GSteps
export const GStep: SFCWithInstall<typeof Step> = withNoopInstall(Step)

export * from './src/item'
export * from './src/steps'
export * from './src/tokens'
