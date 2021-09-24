import { withInstall, withNoopInstall } from '@element-plus/utils/with-install'

import Radio from './src/radio.vue'
import RadioButton from './src/radio-button.vue'
import RadioGroup from './src/radio-group.vue'

export const ElRadio = withInstall(Radio, {
  RadioButton,
  RadioGroup,
})
export default ElRadio
export const ElRadioGroup = withNoopInstall(RadioGroup)
export const ElRadioButton = withNoopInstall(RadioButton)

export * from './src/token'
