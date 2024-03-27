import { withInstall, withNoopInstall } from '@element-plus/utils'

import Radio from './src/radio.vue'
import RadioButton from './src/radio-button.vue'
import RadioGroup from './src/radio-group.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElRadio: SFCWithInstall<typeof Radio> & {
  RadioButton: typeof RadioButton
  RadioGroup: typeof RadioGroup
} = withInstall(Radio, {
  RadioButton,
  RadioGroup,
})
export default ElRadio
export const ElRadioGroup: SFCWithInstall<typeof RadioGroup> =
  withNoopInstall(RadioGroup)
export const ElRadioButton: SFCWithInstall<typeof RadioButton> =
  withNoopInstall(RadioButton)

export * from './src/radio'
export * from './src/radio-group'
export * from './src/radio-button'
export * from './src/constants'
