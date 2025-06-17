import Loading from './src/service'
import vLoading from './src/directive'

import type { App, AppContext, Directive } from 'vue'
import type { ElementLoading, LoadingBinding } from './src/directive'

// installer and everything in all
export const ElLoading = {
  install(app: App) {
    Loading._context = app._context
    ;(
      vLoading as Directive<ElementLoading, LoadingBinding> & {
        _context: AppContext | null
      }
    )._context = app._context
    app.directive('loading', vLoading)
    app.config.globalProperties.$loading = Loading
  },
  directive: vLoading,
  service: Loading,
}

export default ElLoading
export { vLoading, vLoading as ElLoadingDirective, Loading as ElLoadingService }

export * from './src/types'
