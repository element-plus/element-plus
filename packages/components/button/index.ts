import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

Button.install = (app: App): void => {
  app.component(Button.name, Button)
  app.component(ButtonGroup.name, ButtonGroup)
}

Button.ButtonGroup = ButtonGroup

const _Button = Button as any as SFCWithInstall<typeof Button> & {
  ButtonGroup: typeof ButtonGroup
}

export default _Button
export const ElButton = _Button
export const ElButtonGroup = ButtonGroup
