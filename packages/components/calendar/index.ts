import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Calendar from './src/index.vue'

Calendar.install = (app: App): void => {
  app.component(Calendar.name, Calendar)
}

const _Calendar: SFCWithInstall<typeof Calendar> = Calendar

export default _Calendar
