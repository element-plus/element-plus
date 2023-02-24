import { provideGlobalConfig } from '@element-plus/hooks'
import { INSTALLED_KEY } from '@element-plus/constants'
import { version } from '../version'

import type { App, Plugin } from 'vue'
import type { ConfigProviderContext } from '@element-plus/tokens'

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, options?: ConfigProviderContext) => {
    if ((app as any)[INSTALLED_KEY]) return
    ;(app as any)[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))

    if (options) provideGlobalConfig(options, app, true)
  }

  return {
    version,
    install,
  }
}
