import TimeSelect from './src/time-select.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

TimeSelect.install = (app: App): void => {
  app.component(TimeSelect.name, TimeSelect)
}

const _TimeSelect: SFCWithInstall<typeof TimeSelect> = TimeSelect

export default _TimeSelect
