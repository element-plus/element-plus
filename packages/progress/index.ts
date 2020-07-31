import { App } from 'vue'
import Progress from './src/index.vue'
export default (app: App): void => {
  app.component(Progress.name, Progress)
}
