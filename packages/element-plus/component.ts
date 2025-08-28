import { ElAffix } from '@element-plus/components'
import { ElAlert } from '@element-plus/components'
import { ElAutocomplete } from '@element-plus/components'
import { ElAvatar } from '@element-plus/components'
import { ElBacktop } from '@element-plus/components'
import { ElBadge } from '@element-plus/components'
import {
  ElBreadcrumb,
  ElBreadcrumbItem,
} from '@element-plus/components'
import { ElButton, ElButtonGroup } from '@element-plus/components'
import { ElCalendar } from '@element-plus/components'
import { ElCard } from '@element-plus/components'
import { ElCarousel, ElCarouselItem } from '@element-plus/components'
import { ElCascader } from '@element-plus/components'
import { ElCascaderPanel } from '@element-plus/components'
import { ElCheckTag } from '@element-plus/components'
import {
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
} from '@element-plus/components'
import { ElCol } from '@element-plus/components'
import { ElCollapse, ElCollapseItem } from '@element-plus/components'
import { ElCollapseTransition } from '@element-plus/components'
import { ElColorPickerPanel } from '@element-plus/components'
import { ElColorPicker } from '@element-plus/components'
import { ElConfigProvider } from '@element-plus/components'
import {
  ElAside,
  ElContainer,
  ElFooter,
  ElHeader,
  ElMain,
} from '@element-plus/components'
import { ElDatePicker } from '@element-plus/components'
import { ElDatePickerPanel } from '@element-plus/components'
import {
  ElDescriptions,
  ElDescriptionsItem,
} from '@element-plus/components'
import { ElDialog } from '@element-plus/components'
import { ElDivider } from '@element-plus/components'
import { ElDrawer } from '@element-plus/components'
import {
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
} from '@element-plus/components'
import { ElEmpty } from '@element-plus/components'
import { ElForm, ElFormItem } from '@element-plus/components'
import { ElIcon } from '@element-plus/components'
import { ElImage } from '@element-plus/components'
import { ElImageViewer } from '@element-plus/components'
import { ElInput } from '@element-plus/components'
import { ElInputNumber } from '@element-plus/components'
import { ElInputTag } from '@element-plus/components'
import { ElLink } from '@element-plus/components'
import {
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
} from '@element-plus/components'
import { ElPageHeader } from '@element-plus/components'
import { ElPagination } from '@element-plus/components'
import { ElPopconfirm } from '@element-plus/components'
import { ElPopover } from '@element-plus/components'
import { ElPopper } from '@element-plus/components'
import { ElProgress } from '@element-plus/components'
import {
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
} from '@element-plus/components'
import { ElRate } from '@element-plus/components'
import { ElResult } from '@element-plus/components'
import { ElRow } from '@element-plus/components'
import { ElScrollbar } from '@element-plus/components'
import {
  ElOption,
  ElOptionGroup,
  ElSelect,
} from '@element-plus/components'
import { ElSelectV2 } from '@element-plus/components'
import { ElSkeleton, ElSkeletonItem } from '@element-plus/components'
import { ElSlider } from '@element-plus/components'
import { ElSpace } from '@element-plus/components'
import { ElStatistic } from '@element-plus/components'
import { ElCountdown } from '@element-plus/components'
import { ElStep, ElSteps } from '@element-plus/components'
import { ElSwitch } from '@element-plus/components'
import { ElTable, ElTableColumn } from '@element-plus/components'
import { ElAutoResizer, ElTableV2 } from '@element-plus/components'
import { ElTabPane, ElTabs } from '@element-plus/components'
import { ElTag } from '@element-plus/components'
import { ElText } from '@element-plus/components'
import { ElTimePicker } from '@element-plus/components'
import { ElTimeSelect } from '@element-plus/components'
import { ElTimeline, ElTimelineItem } from '@element-plus/components'
import { ElTooltip } from '@element-plus/components'
// import { ElTooltipV2 } from '@element-plus/components'
import { ElTransfer } from '@element-plus/components'
import { ElTree } from '@element-plus/components'
import { ElTreeSelect } from '@element-plus/components'
import { ElTreeV2 } from '@element-plus/components'
import { ElUpload } from '@element-plus/components'
import { ElWatermark } from '@element-plus/components'
import { ElTour, ElTourStep } from '@element-plus/components'
import { ElAnchor, ElAnchorLink } from '@element-plus/components'
import { ElSegmented } from '@element-plus/components'
import { ElMention } from '@element-plus/components'
import { ElSplitter, ElSplitterPanel } from '@element-plus/components'

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
  ElColorPickerPanel,
  ElColorPicker,
  ElConfigProvider,
  ElContainer,
  ElAside,
  ElFooter,
  ElHeader,
  ElMain,
  ElDatePicker,
  ElDatePickerPanel,
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
  // ElTooltipV2,
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
