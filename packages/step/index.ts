import { App } from 'vue'
import Step from '../steps/src/item.vue'

Step.install = (app: App): void => {
  app.component(Step.name, Step)
}

export default Step
