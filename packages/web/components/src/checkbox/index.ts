import { withInstall, withNoopInstall } from '@element-plus/utils'

import Checkbox from './src/checkbox.vue'
import CheckboxButton from './src/checkbox-button.vue'
import CheckboxGroup from './src/checkbox-group.vue'

export const ElCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup,
})
export default ElCheckbox

export const ElCheckboxButton = withNoopInstall(CheckboxButton)
export const ElCheckboxGroup = withNoopInstall(CheckboxGroup)

export * from './src/checkbox-group'
export * from './src/checkbox'
