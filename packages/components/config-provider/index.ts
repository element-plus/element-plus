import withInstall from '@element-plus/utils/with-install'
import { ConfigProvider } from './config-provider'


const ElConfigProvider = withInstall(ConfigProvider)

export default ElConfigProvider

export {
  ElConfigProvider,
}
