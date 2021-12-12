import ElementPlus from 'element-plus'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'

import VPApp, { globals, NotFound } from '../vitepress'

// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

export default {
  NotFound,
  Layout: VPApp,
  logo: '/images/element-plus-logo-small.svg',
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
}
