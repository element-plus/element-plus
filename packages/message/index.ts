import Message from './src/message'
import type { SFCWithInstall } from '@element-plus/utils/types'

const _Message: SFCWithInstall<typeof Message> = Message as SFCWithInstall<typeof Message>

_Message.install = app => {
  app.config.globalProperties.$message = _Message
}

export default _Message
