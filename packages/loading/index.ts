import { App } from 'vue'
import Loading from './src/index'
import directive from './src/directive'

export default (app: App): void => {
  app.use(directive)
  app.config.globalProperties.$loading = Loading
  app.component(Loading.name, Loading)
}
