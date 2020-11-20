import type { App } from 'vue'
import ElAlert from '@element-plus/alert'
import ElAside from '@element-plus/aside'
import ElAutocomplete from '@element-plus/autocomplete'
import ElAvatar from '@element-plus/avatar'
import ElBacktop from '@element-plus/backtop'
import ElBadge from '@element-plus/badge'
import ElBreadcrumb from '@element-plus/breadcrumb'
import ElBreadcrumbItem from '@element-plus/breadcrumb-item'
import ElButton from '@element-plus/button'
import ElButtonGroup from '@element-plus/button-group'
import ElCalendar from '@element-plus/calendar'
import ElCard from '@element-plus/card'
import ElCarousel from '@element-plus/carousel'
import ElCarouselItem from '@element-plus/carousel-item'
import ElCascader from '@element-plus/cascader'
import ElCascaderPanel from '@element-plus/cascader-panel'
import ElCheckbox from '@element-plus/checkbox'
import ElCheckboxButton from '@element-plus/checkbox-button'
import ElCheckboxGroup from '@element-plus/checkbox-group'
// import ElDropdown from '@element-plus/dropdown'
// import ElTag from '@element-plus/tag'
// import ElLayout from '@element-plus/layout'
// import ElDivider from '@element-plus/divider'
// import ElTimeline from '@element-plus/timeline'
// import ElProgress from '@element-plus/progress'
// import ElIcon from '@element-plus/icon'
// import ElImage from '@element-plus/image'
// import ElLink from '@element-plus/link'
// import ElRate from '@element-plus/rate'
// import ElSwitch from '@element-plus/switch'
// import ElContainer from '@element-plus/container'
// import ElNotification from '@element-plus/notification'
// import ElPageHeader from '@element-plus/page-header'
// import ElRadio from '@element-plus/radio'
// import ElScrollBar from '@element-plus/scrollbar'
// import ElSteps from '@element-plus/steps'
// import ElCollapse from '@element-plus/collapse'
// import ElPopper from '@element-plus/popper'
// import ElTimePicker from '@element-plus/time-picker'
// import ElDatePicker from '@element-plus/date-picker'
// import ElTabs from '@element-plus/tabs'
// import ElTooltip from '@element-plus/tooltip'
// import ElSlider from '@element-plus/slider'
// import ElInput from '@element-plus/input'
// import ElLoading from '@element-plus/loading'
// import ElTransfer from '@element-plus/transfer'
// import ElDialog from '@element-plus/dialog'
// import ElInfiniteScroll from '@element-plus/infinite-scroll'
// import ElMessage from '@element-plus/message'
// import ElDrawer from '@element-plus/drawer'
// import ElTableInstall, {
//   Table as ElTable,
//   TableColumn as ElTableColumn,
// } from '@element-plus/table'
// import ElPopconfirm from '@element-plus/popconfirm'
// import ElForm from '@element-plus/form'
// import ElUpload from '@element-plus/upload'
// import ElTree from '@element-plus/tree'
// import ElColorPicker from '@element-plus/color-picker'
// import ElSelect from '@element-plus/select'
// import ElTimeSelect from '@element-plus/time-select'
// import ElPagination from '@element-plus/pagination'
// import ElMessageBox from '@element-plus/message-box'
// import ElInputNumber from '@element-plus/input-number'
// import ElPopover from '@element-plus/popover'
// import ElMenu from '@element-plus/menu'
// import ElCollapseTransition from '@element-plus/transition'
import { use } from '@element-plus/locale'

interface InstallOptions {
  size: ComponentSize
  zIndex: number
  locale?: any
}

const defaultInstallOpt: InstallOptions =  {
  size: '' as ComponentSize,
  zIndex: 2000,
}

const components = [
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElButtonGroup,
  ElCalendar,
  ElCard,
  ElCarousel,
  ElCarouselItem,
  ElCascader,
  ElCascaderPanel,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
]

const install = (app: App, opt: InstallOptions): void => {
  const option = Object.assign(defaultInstallOpt, opt)
  use(option.locale)

  components.forEach(component => {
    app.component(component.name, component)
  })

  // Vue.use(InfiniteScroll)
  // Vue.use(Loading.directive)

  app.config.globalProperties.$ELEMENT = option

  // Vue.prototype.$loading = Loading.service
  // Vue.prototype.$msgbox = MessageBox
  // Vue.prototype.$alert = MessageBox.alert
  // Vue.prototype.$confirm = MessageBox.confirm
  // Vue.prototype.$prompt = MessageBox.prompt
  // Vue.prototype.$notify = Notification
  // Vue.prototype.$message = Message
}

const elementUI = {
  version: '0.0.1',
  locale: use,
  install,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElButtonGroup,
  ElCalendar,
  ElCard,
  ElCarousel,
  ElCarouselItem,
  ElCascader,
  ElCascaderPanel,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
}

export default elementUI
