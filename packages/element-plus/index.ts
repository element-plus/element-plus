
import { setConfig } from '@element-plus/utils/config'
import { warn } from '@element-plus/utils/error'

// if you encountered problems alike "Can't resolve './version'"
// please run `yarn bootstrap` first
import { install as installComponents } from '@element-plus/components'
import { version as version_ } from './version'

import type { App } from 'vue'
import type { InstallOptions } from '@element-plus/utils/config'

export * from '@element-plus/components'
export * from '@element-plus/hooks'

const version = version_ // version_ to fix tsc issue

const defaultInstallOpt: InstallOptions = {
  size: '' as ComponentSize,
  zIndex: 2000,
}

const install = (app: App, opt: InstallOptions): void => {
  const option = Object.assign(defaultInstallOpt, opt)

  app.config.globalProperties.$ELEMENT = option
  // app.provide() ? is this better? I think its not that flexible but worth implement
  setConfig(option)

  installComponents(app)
}

const locale = () => {
  warn('[locale]', 'set locale is deprecated,'
    + 'please refer to https://element-plus/#/en-US/component/i18n'
    + 'for more detail',
  )
}

export {
  version,
  install,
  locale,
}

export default {
  version,
  install,
  locale,
}
