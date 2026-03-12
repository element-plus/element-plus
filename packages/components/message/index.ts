import { withInstallFunction } from '@element-plus/utils'
import Message from './src/method'

export const GMessage = withInstallFunction(Message, '$message')
export default GMessage

export * from './src/message'
