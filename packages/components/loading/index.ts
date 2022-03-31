import { Loading } from './src/service'
import { vLoading } from './src/directive'

import type { App } from 'vue'

// installer and everything in all
export const ElLoading = {
  install(app: App) {
    app.directive('loading', vLoading)
    app.config.globalProperties.$loading = Loading
  },
  directive: vLoading,
  service: Loading,
}

export default ElLoading
export { vLoading, vLoading as ElLoadingDirective, Loading as ElLoadingService }

export * from './src/types'
