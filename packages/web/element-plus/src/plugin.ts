import { ElInfiniteScroll } from '@element-plus/components/src/infinite-scroll'
import { ElLoading } from '@element-plus/components/src/loading'
import { ElMessage } from '@element-plus/components/src/message'
import { ElMessageBox } from '@element-plus/components/src/message-box'
import { ElNotification } from '@element-plus/components/src/notification'
import { ElPopoverDirective } from '@element-plus/components/src/popover'

import type { Plugin } from 'vue'

export default [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopoverDirective,
] as Plugin[]
