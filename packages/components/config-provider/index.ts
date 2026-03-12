import { withInstall } from '@element-plus/utils'
import ConfigProvider from './src/config-provider'

import type { SFCWithInstall } from '@element-plus/utils'

export const GConfigProvider: SFCWithInstall<typeof ConfigProvider> =
  withInstall(ConfigProvider)
export default GConfigProvider

export * from './src/config-provider'
export * from './src/config-provider-props'
export * from './src/constants'
export * from './src/hooks/use-global-config'
