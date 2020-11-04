import { App } from 'vue'
import Loading from './src/index'
import vLoading from './src/directive'

export default (app: App): void => {
  app.directive('loading', vLoading)
  app.config.globalProperties.$loading = Loading
}

export { Loading, vLoading }
