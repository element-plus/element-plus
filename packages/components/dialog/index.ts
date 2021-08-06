import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Dialog from './src/index.vue'

Dialog.install = (app: App): void => {
  app.component(Dialog.name, Dialog)
}

const _Dialog = Dialog as SFCWithInstall<typeof Dialog>

export default _Dialog
export {
  default as useDialog,
  useDialogProps,
  useDialogEmits,
} from './src/useDialog'

export const ElDialog = _Dialog
