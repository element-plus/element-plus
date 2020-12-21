import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import RadioButton from '../radio/src/radio-button.vue'

RadioButton.install = (app: App): void => {
  app.component(RadioButton.name, RadioButton)
}

const _RadioButton: SFCWithInstall<typeof RadioButton> = RadioButton

export default _RadioButton
