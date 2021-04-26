import type { App } from 'vue'
import ElAffix from '@element-plus/affix'
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
import ElCol from '@element-plus/col'
import ElCollapse from '@element-plus/collapse'
import ElCollapseItem from '@element-plus/collapse-item'
import ElCollapseTransition from '@element-plus/collapse-transition'
import ElColorPicker from '@element-plus/color-picker'
import ElContainer from '@element-plus/container'
import ElDatePicker from '@element-plus/date-picker'
import ElDialog from '@element-plus/dialog'
import ElDivider from '@element-plus/divider'
import ElDrawer from '@element-plus/drawer'
import ElDropdown from '@element-plus/dropdown'
import ElDropdownItem from '@element-plus/dropdown-item'
import ElDropdownMenu from '@element-plus/dropdown-menu'
import ElEmpty from '@element-plus/empty'
import ElFooter from '@element-plus/footer'
import ElForm from '@element-plus/form'
import ElFormItem from '@element-plus/form-item'
import ElHeader from '@element-plus/header'
import ElIcon from '@element-plus/icon'
import ElImage from '@element-plus/image'
import ElImageViewer from '@element-plus/image-viewer'
import ElInfiniteScroll from '@element-plus/infinite-scroll'
import ElInput from '@element-plus/input'
import ElInputNumber from '@element-plus/input-number'
import ElLink from '@element-plus/link'
import ElLoading from '@element-plus/loading'
import ElMain from '@element-plus/main'
import ElMenu from '@element-plus/menu'
import ElMenuItem from '@element-plus/menu-item'
import ElMenuItemGroup from '@element-plus/menu-item-group'
import ElMessage from '@element-plus/message'
import ElMessageBox from '@element-plus/message-box'
import ElNotification from '@element-plus/notification'
import ElOption from '@element-plus/option'
import ElOptionGroup from '@element-plus/option-group'
import ElPageHeader from '@element-plus/page-header'
import ElPagination from '@element-plus/pagination'
import ElPopconfirm from '@element-plus/popconfirm'
import ElPopover from '@element-plus/popover'
import ElPopper from '@element-plus/popper'
import ElProgress from '@element-plus/progress'
import ElRadio from '@element-plus/radio'
import ElRadioButton from '@element-plus/radio-button'
import ElRadioGroup from '@element-plus/radio-group'
import ElRate from '@element-plus/rate'
import ElRow from '@element-plus/row'
import ElScrollbar from '@element-plus/scrollbar'
import ElSelect from '@element-plus/select'
import ElSlider from '@element-plus/slider'
import ElStep from '@element-plus/step'
import ElSteps from '@element-plus/steps'
import ElSubmenu from '@element-plus/submenu'
import ElSwitch from '@element-plus/switch'
import ElTabPane from '@element-plus/tab-pane'
import ElTable from '@element-plus/table'
import ElTableColumn from '@element-plus/table-column'
import ElTabs from '@element-plus/tabs'
import ElTag from '@element-plus/tag'
import ElTimePicker from '@element-plus/time-picker'
import ElTimeSelect from '@element-plus/time-select'
import ElTimeline from '@element-plus/timeline'
import ElTimelineItem from '@element-plus/timeline-item'
import ElTooltip from '@element-plus/tooltip'
import ElTransfer from '@element-plus/transfer'
import ElTree from '@element-plus/tree'
import ElUpload from '@element-plus/upload'
import ElSpace from '@element-plus/space'
import ElSkeleton from '@element-plus/skeleton'
import ElSkeletonItem from '@element-plus/skeleton-item'
import ElCheckTag from '@element-plus/check-tag'
import ElDescriptions from '@element-plus/descriptions'
import ElDescriptionsItem from '@element-plus/descriptions-item'
import ElResult from '@element-plus/result'

import { use, i18n } from '@element-plus/locale'
// if you encountered problems alike "Can't resolve './version'"
// please run `yarn bootstrap` first
import { version as version_ } from './version'
import type { InstallOptions } from '@element-plus/utils/config'
import { setConfig } from '@element-plus/utils/config'
import isServer from '@element-plus/utils/isServer'
import dayjs from 'dayjs'

type DWindow =  Window & typeof globalThis & {
  dayjs?: typeof dayjs
}

// expose Day.js to window to make full bundle i18n work
if (!isServer) {
  const _window: DWindow = window

  if (!_window.dayjs) {
    _window.dayjs = dayjs
  }
}

const version = version_ // version_ to fix tsc issue

const locale = use

const defaultInstallOpt: InstallOptions = {
  size: '' as ComponentSize,
  zIndex: 2000,
}

const components = [
  ElAffix,
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
  ElCheckTag,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPicker,
  ElContainer,
  ElDatePicker,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElEmpty,
  ElFooter,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElImage,
  ElImageViewer,
  ElInput,
  ElInputNumber,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  ElOptionGroup,
  ElPageHeader,
  ElPagination,
  ElPopconfirm,
  ElPopover,
  ElPopper,
  ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRate,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElSlider,
  ElStep,
  ElSteps,
  ElSubmenu,
  ElSwitch,
  ElTabPane,
  ElTable,
  ElTableColumn,
  ElTabs,
  ElTag,
  ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTransfer,
  ElTree,
  ElUpload,
  ElSpace,
  ElSkeleton,
  ElSkeletonItem,
  ElDescriptions,
  ElDescriptionsItem,
  ElResult,
]

const plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
]

const install = (app: App, opt: InstallOptions): void => {
  const option = Object.assign(defaultInstallOpt, opt)
  locale(option.locale)
  if (option.i18n) {
    i18n(option.i18n)
  }
  app.config.globalProperties.$ELEMENT = option
  setConfig(option)

  components.forEach(component => {
    app.component(component.name, component)
  })

  plugins.forEach(plugin => {
    app.use(plugin)
  })
}

export {
  ElAffix,
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
  ElCheckTag,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPicker,
  ElContainer,
  ElDatePicker,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElEmpty,
  ElFooter,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElImage,
  ElImageViewer,
  ElInfiniteScroll,
  ElInput,
  ElInputNumber,
  ElLink,
  ElLoading,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElOption,
  ElOptionGroup,
  ElPageHeader,
  ElPagination,
  ElPopconfirm,
  ElPopover,
  ElPopper,
  ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRate,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElSlider,
  ElStep,
  ElSteps,
  ElSubmenu,
  ElSwitch,
  ElTabPane,
  ElTable,
  ElTableColumn,
  ElTabs,
  ElTag,
  ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTransfer,
  ElTree,
  ElUpload,
  ElSpace,
  ElSkeleton,
  ElSkeletonItem,
  ElDescriptions,
  ElDescriptionsItem,
  ElResult,
  version,
  install,
  locale,
}

export default {
  version,
  install,
}
