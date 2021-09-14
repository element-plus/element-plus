import { withInstall } from '@element-plus/utils/with-install'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

export const ElButton = withInstall(Button, {
  ButtonGroup,
})
export const ElButtonGroup = ButtonGroup
export default ElButton

export * from './src/button'
