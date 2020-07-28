import type { App } from 'vue'
import ElButton from '@element-plus/button'
import ElBadge from '@element-plus/badge'
import ElTag from '@element-plus/tag'
import ElRow from '@element-plus/row'
import ElCol from '@element-plus/col'

export {
  ElButton, ElBadge, ElTag, ElRow, ElCol,
}

export default function install(app: App): void {
  ElButton(app)
  ElBadge(app)
  ElTag(app)
  ElRow(app)
  ElCol(app)
}
