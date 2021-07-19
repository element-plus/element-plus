import Select from './src/select.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Select.install = (app: App): void => {
  app.component(Select.name, Select)
}

export default Select as SFCWithInstall<typeof Select>
