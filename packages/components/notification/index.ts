import { withInstallFunction } from '@element-plus/utils/with-install'

import Notify from './src/notify'

export const ElNotification = withInstallFunction(Notify, '$notify')
export default ElNotification

export * from './src/notification'
