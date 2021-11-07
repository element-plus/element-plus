import { withInstall } from '@element-plus/utils/with-install'
import Popover from './src/popover.vue'

import popoverDireceive, { VPopover } from './src/directive'
import type { App } from 'vue'

export const ElPopover = withInstall(Popover)
export default ElPopover

export const ElPopoverDirective = {
  install(app: App) {
    app.directive(VPopover, popoverDireceive)
  },
}
