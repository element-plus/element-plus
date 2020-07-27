import type { App } from 'vue'
import ButtonInstall from '@element-plus/button/index'
import TagInstall from '@element-plus/tag/index'

export const installAll = (app: App): void => {
  ButtonInstall(app)
  TagInstall(app)
}
