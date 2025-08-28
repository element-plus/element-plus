import { ElInfiniteScroll } from '@element-plus/components'
import { ElLoading } from '@element-plus/components'
import { ElMessage } from '@element-plus/components'
import { ElMessageBox } from '@element-plus/components'
import { ElNotification } from '@element-plus/components'
import { ElPopoverDirective } from '@element-plus/components'

import type { Plugin } from 'vue'

export default [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopoverDirective,
] as Plugin[]
