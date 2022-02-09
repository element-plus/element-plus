import { withInstallFunction } from '@element-plus/utils-v2'

import Message from './src/message-method'

export const ElMessage = withInstallFunction(Message, '$message')
export default ElMessage

export * from './src/message'
