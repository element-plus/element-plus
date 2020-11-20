import { App } from 'vue'
import ButtonGroup from '../button/src/button-group.vue'

ButtonGroup.install = (app: App): void => {
  app.component(ButtonGroup.name, ButtonGroup)
}

export default ButtonGroup
