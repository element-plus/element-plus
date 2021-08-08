import Select from './src/select.vue'
import Option from './src/option.vue'
import OptionGroup from './src/option-group.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Select.install = (app: App): void => {
  app.component(Select.name, Select)
  app.component(Option.name, Option)
  app.component(OptionGroup.name, OptionGroup)
}

Select.Option = Option
Select.OptionGroup = OptionGroup

const _Select = Select as any as SFCWithInstall<typeof Select> & {
  Option: typeof Option
  OptionGroup: typeof OptionGroup
}

export default _Select
export const ElSelect = _Select
export const ElOption = Option
export const ElOptionGroup = OptionGroup

export * from './src/token'
