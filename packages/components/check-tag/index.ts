import { App } from 'vue'
import CheckTag from './src/index.vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

CheckTag.install = (app: App): void => {
  app.component(CheckTag.name, CheckTag)
}

const _CheckTag = CheckTag as SFCWithInstall<typeof CheckTag>

export default _CheckTag
export const ElCheckTag = _CheckTag
