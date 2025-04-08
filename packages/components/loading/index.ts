import { Loading } from './src/service'
import { vLoading } from './src/directive'

import type { App, AppContext } from 'vue'

// installer and everything in all
export const ElLoading = {
  _context: null as AppContext | null,
  install(app: App) {
    app.directive('loading', vLoading)
    app.config.globalProperties.$loading = Loading
    ElLoading._context = app._context
  },
  directive: vLoading,
  service: Loading,
}

export default ElLoading
export { vLoading, vLoading as ElLoadingDirective, Loading as ElLoadingService }

export * from './src/types'
