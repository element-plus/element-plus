import { withInstallFunction } from '@element-plus/utils'
import Notify from './src/notify'

export const GNotification = withInstallFunction(Notify, '$notify')
export default GNotification

export * from './src/notification'
