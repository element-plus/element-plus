import ElementPlus from 'element-plus'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'

import VPApp, { globals, NotFound } from '../vitepress'
import { define } from '../utils/types'

// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

import type { Theme } from 'vitepress'

export default define<Theme>({
  NotFound,
  Layout: VPApp,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
})
