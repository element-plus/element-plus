import { ElAffix } from '@element-plus/components/src/affix'
import { ElAlert } from '@element-plus/components/src/alert'
import { ElAutocomplete } from '@element-plus/components/src/autocomplete'
import { ElAvatar } from '@element-plus/components/src/avatar'
import { ElBacktop } from '@element-plus/components/src/backtop'
import { ElBadge } from '@element-plus/components/src/badge'
import {
  ElBreadcrumb,
  ElBreadcrumbItem,
} from '@element-plus/components/src/breadcrumb'
import { ElButton, ElButtonGroup } from '@element-plus/components/src/button'
import { ElCalendar } from '@element-plus/components/src/calendar'
import { ElCard } from '@element-plus/components/src/card'
import {
  ElCarousel,
  ElCarouselItem,
} from '@element-plus/components/src/carousel'
import { ElCascader } from '@element-plus/components/src/cascader'
import { ElCascaderPanel } from '@element-plus/components/src/cascader-panel'
import { ElCheckTag } from '@element-plus/components/src/check-tag'
import {
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
} from '@element-plus/components/src/checkbox'
import { ElCol } from '@element-plus/components/src/col'
import {
  ElCollapse,
  ElCollapseItem,
} from '@element-plus/components/src/collapse'
import { ElCollapseTransition } from '@element-plus/components/src/collapse-transition'
import { ElColorPicker } from '@element-plus/components/src/color-picker'
import { ElConfigProvider } from '@element-plus/components/src/config-provider'
import {
  ElAside,
  ElContainer,
  ElFooter,
  ElHeader,
  ElMain,
} from '@element-plus/components/src/container'
import { ElDatePicker } from '@element-plus/components/src/date-picker'
import {
  ElDescriptions,
  ElDescriptionsItem,
} from '@element-plus/components/src/descriptions'
import { ElDialog } from '@element-plus/components/src/dialog'
import { ElDivider } from '@element-plus/components/src/divider'
import { ElDrawer } from '@element-plus/components/src/drawer'
import {
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
} from '@element-plus/components/src/dropdown'
import { ElEmpty } from '@element-plus/components/src/empty'
import { ElForm, ElFormItem } from '@element-plus/components/src/form'
import { ElIcon } from '@element-plus/components/src/icon'
import { ElImage } from '@element-plus/components/src/image'
import { ElImageViewer } from '@element-plus/components/src/image-viewer'
import { ElInput } from '@element-plus/components/src/input'
import { ElInputNumber } from '@element-plus/components/src/input-number'
import { ElLink } from '@element-plus/components/src/link'
import {
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
} from '@element-plus/components/src/menu'
import { ElPageHeader } from '@element-plus/components/src/page-header'
import { ElPagination } from '@element-plus/components/src/pagination'
import { ElPopconfirm } from '@element-plus/components/src/popconfirm'
import { ElPopover } from '@element-plus/components/src/popover'
import { ElPopper } from '@element-plus/components/src/popper'
import { ElProgress } from '@element-plus/components/src/progress'
import {
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
} from '@element-plus/components/src/radio'
import { ElRate } from '@element-plus/components/src/rate'
import { ElResult } from '@element-plus/components/src/result'
import { ElRow } from '@element-plus/components/src/row'
import { ElScrollbar } from '@element-plus/components/src/scrollbar'
import {
  ElOption,
  ElOptionGroup,
  ElSelect,
} from '@element-plus/components/src/select'
import { ElSelectV2 } from '@element-plus/components/src/select-v2'
import {
  ElSkeleton,
  ElSkeletonItem,
} from '@element-plus/components/src/skeleton'
import { ElSlider } from '@element-plus/components/src/slider'
import { ElSpace } from '@element-plus/components/src/space'
import { ElStep, ElSteps } from '@element-plus/components/src/steps'
import { ElSwitch } from '@element-plus/components/src/switch'
import { ElTable, ElTableColumn } from '@element-plus/components/src/table'
import { ElAutoResizer, ElTableV2 } from '@element-plus/components/src/table-v2'
import { ElTabPane, ElTabs } from '@element-plus/components/src/tabs'
import { ElTag } from '@element-plus/components/src/tag'
import { ElTimePicker } from '@element-plus/components/src/time-picker'
import { ElTimeSelect } from '@element-plus/components/src/time-select'
import {
  ElTimeline,
  ElTimelineItem,
} from '@element-plus/components/src/timeline'
import { ElTooltip } from '@element-plus/components/src/tooltip'
import { ElTooltipV2 } from '@element-plus/components/src/tooltip-v2'
import { ElTransfer } from '@element-plus/components/src/transfer'
import { ElTree } from '@element-plus/components/src/tree'
import { ElTreeSelect } from '@element-plus/components/src/tree-select'
import { ElTreeV2 } from '@element-plus/components/src/tree-v2'
import { ElUpload } from '@element-plus/components/src/upload'
import type { Plugin } from 'vue'

export default [
  ElAffix,
  ElAlert,
  ElAutocomplete,
  ElAutoResizer,
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
  ElCheckTag,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPicker,
  ElConfigProvider,
  ElContainer,
  ElAside,
  ElFooter,
  ElHeader,
  ElMain,
  ElDatePicker,
  ElDescriptions,
  ElDescriptionsItem,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElEmpty,
  ElForm,
  ElFormItem,
  ElIcon,
  ElImage,
  ElImageViewer,
  ElInput,
  ElInputNumber,
  ElLink,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
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
  ElResult,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElOption,
  ElOptionGroup,
  ElSelectV2,
  ElSkeleton,
  ElSkeletonItem,
  ElSlider,
  ElSpace,
  ElSteps,
  ElStep,
  ElSwitch,
  ElTable,
  ElTableColumn,
  ElTableV2,
  ElTabs,
  ElTabPane,
  ElTag,
  ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTooltipV2,
  ElTransfer,
  ElTree,
  ElTreeSelect,
  ElTreeV2,
  ElUpload,
] as Plugin[]
