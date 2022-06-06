import { provideGlobalConfig } from '@element-plus/hooks'
import { version } from './version'
import type { App, Plugin } from '@vue/runtime-core'
import type { ConfigProviderContext } from '@element-plus/tokens'

const INSTALLED_KEY = Symbol('INSTALLED_KEY')

interface ElementPlusApp extends App {
  [INSTALLED_KEY]: boolean
}

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, options?: ConfigProviderContext) => {
    const typedApp = app as ElementPlusApp
    if (typedApp[INSTALLED_KEY]) return

    typedApp[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))

    if (options) provideGlobalConfig(options, app, true)
  }

  return {
    version,
    install,
  }
}
