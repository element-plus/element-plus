import type { App } from 'vue'
import ElButton from '@element-plus/button'
import ElBadge from '@element-plus/badge'
import ElTag from '@element-plus/tag'

export {
  ElButton, ElBadge, ElTag,
}

export default function install(app: App): void {
  ElButton(app)
  ElBadge(app)
  ElTag(app)
}
