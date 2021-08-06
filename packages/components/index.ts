import type { App } from 'vue'
// components
export * from './affix'
import { ElAffix } from './affix'
export * from './alert'
import { ElAlert } from './alert'
export * from './autocomplete'
import { ElAutocomplete } from './autocomplete'
export * from './avatar'
import { ElAvatar } from './avatar'
export * from './backtop'
import { ElBacktop } from './backtop'
export * from './badge'
import { ElBadge } from './badge'
export * from './breadcrumb'
import { ElBreadcrumb } from './breadcrumb'
export * from './button'
import { ElButton } from './button'
export * from './calendar'
import { ElCalendar } from './calendar'
export * from './card'
import { ElCard } from './card'
export * from './carousel'
import { ElCarousel } from './carousel'
export * from './cascader'
import { ElCascader } from './cascader'
export * from './cascader-panel'
import { ElCascaderPanel } from './cascader-panel'
export * from './checkbox'
import { ElCheckbox } from './checkbox'
export * from './col'
import { ElCol } from './col'
export * from './collapse'
import { ElCollapse } from './collapse'
export * from './collapse-transition'
import { ElCollapseTransition } from './collapse-transition'
export * from './color-picker'
import { ElColorPicker } from './color-picker'
export * from './container'
import { ElContainer } from './container'
export * from './config-provider'
import { ElConfigProvider } from './config-provider'
export * from './date-picker'
import { ElDatePicker } from './date-picker'
export * from './dialog'
import { ElDialog } from './dialog'
export * from './divider'
import { ElDivider } from './divider'
export * from './drawer'
import { ElDrawer } from './drawer'
export * from './dropdown'
import { ElDropdown } from './dropdown'
export * from './empty'
import { ElEmpty } from './empty'
export * from './form'
import { ElForm } from './form'
export * from './icon'
import { ElIcon } from './icon'
export * from './image'
import { ElImage } from './image'
export * from './image-viewer'
import { ElImageViewer } from './image-viewer'
export * from './input'
import { ElInput } from './input'
export * from './input-number'
import { ElInputNumber } from './input-number'
export * from './link'
import { ElLink } from './link'
export * from './menu'
import { ElMenu } from './menu'
export * from './page-header'
import { ElPageHeader } from './page-header'
export * from './pagination'
import { ElPagination } from './pagination'
export * from './popconfirm'
import { ElPopconfirm } from './popconfirm'
export * from './popper'
import { ElPopper } from './popper'
export * from './progress'
import { ElProgress } from './progress'
export * from './radio'
import { ElRadio } from './radio'
export * from './rate'
import { ElRate } from './rate'
export * from './row'
import { ElRow } from './row'
export * from './scrollbar'
import { ElScrollbar } from './scrollbar'
export * from './select'
import { ElSelect } from './select'
export * from './slider'
import { ElSlider } from './slider'
export * from './steps'
import { ElSteps } from './steps'
export * from './switch'
import { ElSwitch } from './switch'
export * from './table'
import { ElTable } from './table'
export * from './tabs'
import { ElTabs } from './tabs'
export * from './tag'
import { ElTag } from './tag'
export * from './time-picker'
import { ElTimePicker } from './time-picker'
export * from './time-select'
import { ElTimeSelect } from './time-select'
export * from './timeline'
import { ElTimeline } from './timeline'
export * from './tooltip'
import { ElTooltip } from './tooltip'
export * from './transfer'
import { ElTransfer } from './transfer'
export * from './tree'
import { ElTree } from './tree'
export * from './upload'
import { ElUpload } from './upload'
export * from './space'
import { ElSpace } from './space'
export * from './skeleton'
import { ElSkeleton } from './skeleton'
export * from './check-tag'
import { ElCheckTag } from './check-tag'
export * from './descriptions'
import { ElDescriptions } from './descriptions'
export * from './result'
import { ElResult } from './result'
export * from './select-v2'
import { ElSelectV2 } from './select-v2'

// plugins
export * from './infinite-scroll'
import { ElInfiniteScroll } from './infinite-scroll'
export * from './loading'
import { ElLoading } from './loading'
export * from './message'
import { ElMessage } from './message'
export * from './message-box'
import { ElMessageBox } from './message-box'
export * from './notification'
import { ElNotification } from './notification'
export * from './popover'
import { ElPopover, ElPopoverDirective } from './popover'

export const installer = (app: App) => {
  const components = [
    ElAffix,
    ElAlert,
    ElAutocomplete,
    ElAvatar,
    ElBacktop,
    ElBadge,
    ElBreadcrumb,
    ElButton,
    ElCalendar,
    ElCard,
    ElCarousel,
    ElCascader,
    ElCascaderPanel,
    ElCheckTag,
    ElCheckbox,
    ElCol,
    ElCollapse,
    ElCollapseTransition,
    ElColorPicker,
    ElConfigProvider,
    ElContainer,
    ElDatePicker,
    ElDescriptions,
    ElDialog,
    ElDivider,
    ElDrawer,
    ElDropdown,
    ElEmpty,
    ElForm,
    ElIcon,
    ElImage,
    ElImageViewer,
    ElInput,
    ElInputNumber,
    ElLink,
    ElMenu,
    ElPageHeader,
    ElPagination,
    ElPopconfirm,
    ElPopover,
    ElPopper,
    ElProgress,
    ElRadio,
    ElRate,
    ElResult,
    ElRow,
    ElScrollbar,
    ElSelect,
    ElSelectV2,
    ElSkeleton,
    ElSlider,
    ElSpace,
    ElSteps,
    ElSwitch,
    ElTable,
    ElTabs,
    ElTag,
    ElTimePicker,
    ElTimeSelect,
    ElTimeline,
    ElTooltip,
    ElTransfer,
    ElTree,
    ElUpload,
  ]

  const plugins = [
    ElInfiniteScroll,
    ElLoading,
    ElMessage,
    ElMessageBox,
    ElNotification,
    ElPopoverDirective,
  ]

  components.forEach(c => {
    app.use(c)
  })

  plugins.forEach(p => {
    app.use(p)
  })
}
