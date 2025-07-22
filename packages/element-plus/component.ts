import { ElAffix } from '@element-plus/components/affix'
import { ElAlert } from '@element-plus/components/alert'
import { ElAutocomplete } from '@element-plus/components/autocomplete'
import { ElAvatar } from '@element-plus/components/avatar'
import { ElBacktop } from '@element-plus/components/backtop'
import { ElBadge } from '@element-plus/components/badge'
import {
  ElBreadcrumb,
  ElBreadcrumbItem,
} from '@element-plus/components/breadcrumb'
import { ElButton, ElButtonGroup } from '@element-plus/components/button'
import { ElCalendar } from '@element-plus/components/calendar'
import { ElCard } from '@element-plus/components/card'
import { ElCarousel, ElCarouselItem } from '@element-plus/components/carousel'
import { ElCascader } from '@element-plus/components/cascader'
import { ElCascaderPanel } from '@element-plus/components/cascader-panel'
import { ElCheckTag } from '@element-plus/components/check-tag'
import {
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
} from '@element-plus/components/checkbox'
import { ElCol } from '@element-plus/components/col'
import { ElCollapse, ElCollapseItem } from '@element-plus/components/collapse'
import { ElCollapseTransition } from '@element-plus/components/collapse-transition'
import { ElColorPicker } from '@element-plus/components/color-picker'
import { ElConfigProvider } from '@element-plus/components/config-provider'
import {
  ElAside,
  ElContainer,
  ElFooter,
  ElHeader,
  ElMain,
} from '@element-plus/components/container'
import { ElDatePicker } from '@element-plus/components/date-picker'
import {
  ElDescriptions,
  ElDescriptionsItem,
} from '@element-plus/components/descriptions'
import { ElDialog } from '@element-plus/components/dialog'
import { ElDivider } from '@element-plus/components/divider'
import { ElDrawer } from '@element-plus/components/drawer'
import {
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
} from '@element-plus/components/dropdown'
import { ElEmpty } from '@element-plus/components/empty'
import { ElForm, ElFormItem } from '@element-plus/components/form'
import { ElIcon } from '@element-plus/components/icon'
import { ElImage } from '@element-plus/components/image'
import { ElImageViewer } from '@element-plus/components/image-viewer'
import { ElInput } from '@element-plus/components/input'
import { ElInputNumber } from '@element-plus/components/input-number'
import { ElInputTag } from '@element-plus/components/input-tag'
import { ElLink } from '@element-plus/components/link'
import {
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
} from '@element-plus/components/menu'
import { ElPageHeader } from '@element-plus/components/page-header'
import { ElPagination } from '@element-plus/components/pagination'
import { ElPopconfirm } from '@element-plus/components/popconfirm'
import { ElPopover } from '@element-plus/components/popover'
import { ElPopper } from '@element-plus/components/popper'
import { ElProgress } from '@element-plus/components/progress'
import {
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
} from '@element-plus/components/radio'
import { ElRate } from '@element-plus/components/rate'
import { ElResult } from '@element-plus/components/result'
import { ElRow } from '@element-plus/components/row'
import { ElScrollbar } from '@element-plus/components/scrollbar'
import {
  ElOption,
  ElOptionGroup,
  ElSelect,
} from '@element-plus/components/select'
import { ElSelectV2 } from '@element-plus/components/select-v2'
import { ElSkeleton, ElSkeletonItem } from '@element-plus/components/skeleton'
import { ElSlider } from '@element-plus/components/slider'
import { ElSpace } from '@element-plus/components/space'
import { ElStatistic } from '@element-plus/components/statistic'
import { ElCountdown } from '@element-plus/components/countdown'
import { ElStep, ElSteps } from '@element-plus/components/steps'
import { ElSwitch } from '@element-plus/components/switch'
import { ElTable, ElTableColumn } from '@element-plus/components/table'
import { ElAutoResizer, ElTableV2 } from '@element-plus/components/table-v2'
import { ElTabPane, ElTabs } from '@element-plus/components/tabs'
import { ElTag } from '@element-plus/components/tag'
import { ElText } from '@element-plus/components/text'
import { ElTimePicker } from '@element-plus/components/time-picker'
import { ElTimeSelect } from '@element-plus/components/time-select'
import { ElTimeline, ElTimelineItem } from '@element-plus/components/timeline'
import { ElTooltip } from '@element-plus/components/tooltip'
import { ElTooltipV2 } from '@element-plus/components/tooltip-v2'
import { ElTransfer } from '@element-plus/components/transfer'
import { ElTree } from '@element-plus/components/tree'
import { ElTreeSelect } from '@element-plus/components/tree-select'
import { ElTreeV2 } from '@element-plus/components/tree-v2'
import { ElUpload } from '@element-plus/components/upload'
import { ElWatermark } from '@element-plus/components/watermark'
import { ElTour, ElTourStep } from '@element-plus/components/tour'
import { ElAnchor, ElAnchorLink } from '@element-plus/components/anchor'
import { ElSegmented } from '@element-plus/components/segmented'
import { ElMention } from '@element-plus/components/mention'
import { ElSplitter, ElSplitterPanel } from '@element-plus/components/splitter'

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
  ElInputTag,
  ElLink,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
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
  ElStatistic,
  ElCountdown,
  ElSteps,
  ElStep,
  ElSwitch,
  ElTable,
  ElTableColumn,
  ElTableV2,
  ElTabs,
  ElTabPane,
  ElTag,
  ElText,
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
  ElWatermark,
  ElTour,
  ElTourStep,
  ElAnchor,
  ElAnchorLink,
  ElSegmented,
  ElMention,
  ElSplitter,
  ElSplitterPanel,
] as Plugin[]
