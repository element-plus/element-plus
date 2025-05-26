import ElementPlus, {
  ID_INJECTION_KEY,
  ZINDEX_INJECTION_KEY,
} from 'element-plus'
import { isClient } from '@vueuse/core'

import VPApp, { NotFound, globals } from '../vitepress'
import { define } from '../utils/types'
import 'uno.css'
import './style.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code-group.css'
import 'virtual:group-icons.css'
import type { Theme } from 'vitepress'

export default define<Theme>({
  NotFound,
  Layout: VPApp,
  enhanceApp: async ({ app, router }) => {
    app.use(ElementPlus)
    app.provide(ID_INJECTION_KEY, { prefix: 1024, current: 0 })
    app.provide(ZINDEX_INJECTION_KEY, { current: 0 })

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
    if (!isClient) return
    const nprogress = await import('nprogress')
    router.onBeforeRouteChange = nprogress.start
    router.onAfterRouteChanged = nprogress.done
  },
})
