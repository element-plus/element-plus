import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import CheckboxGroup from '../checkbox/src/checkbox-group.vue'

CheckboxGroup.install = (app: App): void => {
  app.component(CheckboxGroup.name, CheckboxGroup)
}

const _CheckboxGroup: SFCWithInstall<typeof CheckboxGroup> = CheckboxGroup

export default _CheckboxGroup
