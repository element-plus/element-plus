import Loading from './src/service'
import vLoading from './src/directive'

import type { App, AppContext, Directive } from 'vue'
import type { ElementLoading, LoadingBinding } from './src/directive'

// installer and everything in all
export const GLoading = {
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

export default GLoading
export { vLoading, vLoading as GLoadingDirective, Loading as GLoadingService }

export * from './src/types'
export type { LoadingInstance } from './src/loading'
