import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Transfer from './src/index.vue'

Transfer.install = (app: App): void => {
  app.component(Transfer.name, Transfer)
}

const _Transfer: SFCWithInstall<typeof Transfer> = Transfer

export default _Transfer
