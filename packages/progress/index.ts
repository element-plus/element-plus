import { App } from 'vue'
import Progress from './src/index.vue'

Progress.install = (app: App): void => {
  app.component(Progress.name, Progress)
}

export default Progress
