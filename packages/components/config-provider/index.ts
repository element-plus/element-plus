import { withInstall } from '@element-plus/utils/with-install'
import { ConfigProvider } from './src'

export const ElConfigProvider = withInstall(ConfigProvider)
export default ElConfigProvider

export * from './src/config-provider'
