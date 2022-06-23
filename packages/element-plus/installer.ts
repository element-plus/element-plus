import { provideGlobalConfig } from '@element-plus/hooks'
import { INSTALLED_KEY } from '@element-plus/constants'
import { version } from './version'
import type { Mutable } from '@element-plus/utils'
import type { IconUsed } from '@element-plus/hooks'
import type { App, Plugin } from '@vue/runtime-core'
import type { ConfigProviderContext } from '@element-plus/tokens'

export const installerFactory = (
  components: Plugin[] = [],
  icons: IconUsed
) => {
  const install = (app: App, options: Mutable<ConfigProviderContext> = {}) => {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))

    options.icons ||= icons
    provideGlobalConfig(options, app, true)
  }

  return {
    version,
    install,
  }
}
