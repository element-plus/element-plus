import { App } from 'vue'
import Steps from './src/index.vue'

Steps.install = (app: App): void => {
  app.component(Steps.name, Steps)
}

export default Steps
