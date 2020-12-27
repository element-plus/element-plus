import { App } from 'vue'
import Result from './src/index.vue'

Result.install = (app: App): void => {
  app.component(Result.name, Result)
}

export default Result
