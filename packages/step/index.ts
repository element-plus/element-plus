import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import Step from '../steps/src/item.vue'

Step.install = (app: App): void => {
  app.component(Step.name, Step)
}

const _Step: SFCWithInstall<typeof Step> = Step

export default _Step
