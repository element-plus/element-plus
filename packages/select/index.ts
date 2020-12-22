import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Select from './src/select.vue'
import Option from './src/option.vue'

Select.install = (app: App): void => {
  app.component(Select.name, Select)
}

const _Select: SFCWithInstall<typeof Select> = Select

export { Option }
export default _Select
