import Loading from './src'
import vLoading from './src/directive'

import type { App } from 'vue'

// installer and everything in all
const ElLoading = {
  install(app: App) {
    app.directive('loading', vLoading)
    app.config.globalProperties.$loading = Loading
  },
  directive: vLoading,
  service: Loading,
}

export default ElLoading

export { ElLoading }

export const ElLoadingDirective = vLoading
export const ElLoadingService = Loading

export * from './src/loading.type'
