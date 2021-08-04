import Loading from './src/index'
import vLoading from './src/directive'

import type { App } from 'vue'

export default {
  install(app: App) {
    app.directive('loading', vLoading)
    app.config.globalProperties.$loading = Loading
  },
  directive: vLoading,
  service: Loading,
}

export * from './src/loading.type'
