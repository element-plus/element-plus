import { App } from 'vue'
import Steps from './src/index.vue'
import Step from './src/item.vue'

export default (app: App): void => {
  app.component(Steps.name, Steps)
  app.component(Step.name, Step)
}

export { Steps, Step }
