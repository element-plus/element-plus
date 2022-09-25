import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'

import VPApp, { NotFound, globals } from '../vitepress'
import { define } from '../utils/types'
import 'uno.css'
import './style.css'
import type { Theme } from 'vitepress'

export default define<Theme>({
  NotFound,
  Layout: VPApp,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)

    // add pinia for store
    const pinia = createPinia()
    app.use(pinia)

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
})
