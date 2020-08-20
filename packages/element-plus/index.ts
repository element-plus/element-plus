import type { App } from 'vue'
import ElAlert from '@element-plus/alert'
import ElAvatar from '@element-plus/avatar'
import ElBacktop from '@element-plus/backtop'
import ElButton from '@element-plus/button'
import ElBadge from '@element-plus/badge'
import ElCard from '@element-plus/card'
import ElCheckbox from '@element-plus/checkbox'
import ElTag from '@element-plus/tag'
import ElLayout from '@element-plus/layout'
import ElDivider from '@element-plus/divider'
import ElTimeline from '@element-plus/timeline'
import ElProgress from '@element-plus/progress'
import ElBreadcrumb from '@element-plus/breadcrumb'
import ElIcon from '@element-plus/icon'
import ElLink from '@element-plus/link'
import ElRate from '@element-plus/rate'
import ElSwitch from '@element-plus/switch'
import ElContainer from '@element-plus/container'
import ElNotification from '@element-plus/notification'
import ElPageHeader from '@element-plus/page-header'
import ElRadio from '@element-plus/radio'
import ElScrollBar from '@element-plus/scrollbar'
import ElSteps from '@element-plus/steps'
import ElCollapse from '@element-plus/collapse'
import ElPopper from '@element-plus/popper'
import ElTimePicker from '@element-plus/time-picker'

export {
  ElAlert,
  ElAvatar,
  ElBacktop,
  ElLayout,
  ElButton,
  ElBadge,
  ElCard,
  ElCheckbox,
  ElDivider,
  ElTag,
  ElTimeline,
  ElProgress,
  ElBreadcrumb,
  ElIcon,
  ElLink,
  ElRate,
  ElSwitch,
  ElContainer,
  ElNotification,
  ElPageHeader,
  ElScrollBar,
  ElSteps,
  ElRadio,
  ElCollapse,
  ElTimePicker
}

export default function install(app: App): void {
  ElAlert(app)
  ElAvatar(app)
  ElBacktop(app)
  ElButton(app)
  ElBadge(app)
  ElCard(app)
  ElCheckbox(app)
  ElTag(app)
  ElLayout(app)
  ElDivider(app)
  ElTimeline(app)
  ElProgress(app)
  ElBreadcrumb(app)
  ElIcon(app)
  ElLink(app)
  ElRate(app)
  ElSwitch(app)
  ElContainer(app)
  ElNotification(app)
  ElPageHeader(app)
  ElScrollBar(app)
  ElSteps(app)
  ElRadio(app)
  ElCollapse(app)
  ElPopper(app)
  ElTimePicker(app)
}
