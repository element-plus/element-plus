import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import Button from './src/button.vue'

Button.install = (app: App): void => {
  app.component(Button.name, Button)
}

const _Button: SFCWithInstall<typeof Button> = Button

export default _Button
