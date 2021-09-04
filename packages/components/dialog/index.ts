import { withInstall } from '@element-plus/utils/with-install'
import Dialog from './src/dialog.vue'

export const ElDialog = withInstall(Dialog)
export default ElDialog

export * from './src/use-dialog'
export * from './src/dialog'
