import type { App } from 'vue'
import ElButton from '@element-plus/button'
import ElBadge from '@element-plus/badge'

export {
  ElButton, ElBadge,
}

export default function install(app: App): void {
  ElButton(app)
  ElBadge(app)
}
