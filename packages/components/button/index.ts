import { withInstall, withNoopInstall } from '@element-plus/utils'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GButton: SFCWithInstall<typeof Button> & {
  ButtonGroup: typeof ButtonGroup
} = withInstall(Button, {
  ButtonGroup,
})
export const GButtonGroup: SFCWithInstall<typeof ButtonGroup> =
  withNoopInstall(ButtonGroup)
export default GButton

export * from './src/button'
export * from './src/constants'
export type { ButtonInstance, ButtonGroupInstance } from './src/instance'
