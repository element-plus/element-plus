import Steps from './src/index.vue'
import Step from './src/item.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Steps.install = (app: App): void => {
  app.component(Steps.name, Steps)
  app.component(Step.name, Step)
}

Steps.Step = Step

const _Steps = Steps as any as SFCWithInstall<typeof Steps> & {
  Step: typeof Step
}

export default _Steps
export const ElSteps = _Steps
export const ElStep = Step
