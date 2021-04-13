import MessageBox from './src/messageBox'
import type { SFCWithInstall } from '@element-plus/utils/types'

const _MessageBox: SFCWithInstall<typeof MessageBox> = MessageBox as SFCWithInstall<typeof MessageBox>

_MessageBox.install = app => {
  app.config.globalProperties.$msgbox = _MessageBox
  app.config.globalProperties.$messageBox = _MessageBox
  app.config.globalProperties.$alert = _MessageBox.alert
  app.config.globalProperties.$confirm = _MessageBox.confirm
  app.config.globalProperties.$prompt = _MessageBox.prompt
}

export default _MessageBox
