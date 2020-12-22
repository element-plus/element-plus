import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Main from '../container/src/main.vue'

Main.install = (app: App): void => {
  app.component(Main.name, Main)
}

const _Main: SFCWithInstall<typeof Main> = Main

export default _Main

