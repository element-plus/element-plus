import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import OptionGroup from '../select/src/option-group.vue'

OptionGroup.install = (app: App): void => {
  app.component(OptionGroup.name, OptionGroup)
}

const _OptionGroup: SFCWithInstall<typeof OptionGroup> = OptionGroup

export default _OptionGroup
