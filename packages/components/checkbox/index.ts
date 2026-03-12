import { withInstall, withNoopInstall } from '@element-plus/utils'
import Checkbox from './src/checkbox.vue'
import CheckboxButton from './src/checkbox-button.vue'
import CheckboxGroup from './src/checkbox-group.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GCheckbox: SFCWithInstall<typeof Checkbox> & {
  CheckboxButton: typeof CheckboxButton
  CheckboxGroup: typeof CheckboxGroup
} = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup,
})
export default GCheckbox

export const GCheckboxButton: SFCWithInstall<typeof CheckboxButton> =
  withNoopInstall(CheckboxButton)
export const GCheckboxGroup: SFCWithInstall<typeof CheckboxGroup> =
  withNoopInstall(CheckboxGroup)

export * from './src/checkbox-group'
export * from './src/checkbox'
export * from './src/constants'
