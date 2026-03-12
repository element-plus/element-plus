import { GAffix } from '@element-plus/components/affix'
import { GAlert } from '@element-plus/components/alert'
import { GAutocomplete } from '@element-plus/components/autocomplete'
import { GAvatar, GAvatarGroup } from '@element-plus/components/avatar'
import { GBacktop } from '@element-plus/components/backtop'
import { GBadge } from '@element-plus/components/badge'
import {
  GBreadcrumb,
  GBreadcrumbItem,
} from '@element-plus/components/breadcrumb'
import { GButton, GButtonGroup } from '@element-plus/components/button'
import { GCalendar } from '@element-plus/components/calendar'
import { GCard } from '@element-plus/components/card'
import { GCarousel, GCarouselItem } from '@element-plus/components/carousel'
import { GCascader } from '@element-plus/components/cascader'
import { GCascaderPanel } from '@element-plus/components/cascader-panel'
import { GCheckTag } from '@element-plus/components/check-tag'
import {
  GCheckbox,
  GCheckboxButton,
  GCheckboxGroup,
} from '@element-plus/components/checkbox'
import { GCol } from '@element-plus/components/col'
import { GCollapse, GCollapseItem } from '@element-plus/components/collapse'
import { GCollapseTransition } from '@element-plus/components/collapse-transition'
import { GColorPickerPanel } from '@element-plus/components/color-picker-panel'
import { GColorPicker } from '@element-plus/components/color-picker'
import { GConfigProvider } from '@element-plus/components/config-provider'
import {
  GAside,
  GContainer,
  GFooter,
  GHeader,
  GMain,
} from '@element-plus/components/container'
import { GDatePicker } from '@element-plus/components/date-picker'
import { GDatePickerPanel } from '@element-plus/components/date-picker-panel'
import {
  GDescriptions,
  GDescriptionsItem,
} from '@element-plus/components/descriptions'
import { GDialog } from '@element-plus/components/dialog'
import { GDivider } from '@element-plus/components/divider'
import { GDrawer } from '@element-plus/components/drawer'
import {
  GDropdown,
  GDropdownItem,
  GDropdownMenu,
} from '@element-plus/components/dropdown'
import { GEmpty } from '@element-plus/components/empty'
import { GForm, GFormItem } from '@element-plus/components/form'
import { GIcon } from '@element-plus/components/icon'
import { GImage } from '@element-plus/components/image'
import { GImageViewer } from '@element-plus/components/image-viewer'
import { GInput } from '@element-plus/components/input'
import { GInputNumber } from '@element-plus/components/input-number'
import { GInputTag } from '@element-plus/components/input-tag'
import { GLink } from '@element-plus/components/link'
import {
  GMenu,
  GMenuItem,
  GMenuItemGroup,
  GSubMenu,
} from '@element-plus/components/menu'
import { GPageHeader } from '@element-plus/components/page-header'
import { GPagination } from '@element-plus/components/pagination'
import { GPopconfirm } from '@element-plus/components/popconfirm'
import { GPopover } from '@element-plus/components/popover'
import { GPopper } from '@element-plus/components/popper'
import { GProgress } from '@element-plus/components/progress'
import {
  GRadio,
  GRadioButton,
  GRadioGroup,
} from '@element-plus/components/radio'
import { GRate } from '@element-plus/components/rate'
import { GResult } from '@element-plus/components/result'
import { GRow } from '@element-plus/components/row'
import { GScrollbar } from '@element-plus/components/scrollbar'
import {
  GOption,
  GOptionGroup,
  GSelect,
} from '@element-plus/components/select'
import { GSelectV2 } from '@element-plus/components/select-v2'
import { GSkeleton, GSkeletonItem } from '@element-plus/components/skeleton'
import { GSlider } from '@element-plus/components/slider'
import { GSpace } from '@element-plus/components/space'
import { GStatistic } from '@element-plus/components/statistic'
import { GCountdown } from '@element-plus/components/countdown'
import { GStep, GSteps } from '@element-plus/components/steps'
import { GSwitch } from '@element-plus/components/switch'
import { GTable, GTableColumn } from '@element-plus/components/table'
import { GAutoResizer, GTableV2 } from '@element-plus/components/table-v2'
import { GTabPane, GTabs } from '@element-plus/components/tabs'
import { GTag } from '@element-plus/components/tag'
import { GText } from '@element-plus/components/text'
import { GTimePicker } from '@element-plus/components/time-picker'
import { GTimeSelect } from '@element-plus/components/time-select'
import { GTimeline, GTimelineItem } from '@element-plus/components/timeline'
import { GTooltip } from '@element-plus/components/tooltip'
import { GTransfer } from '@element-plus/components/transfer'
import { GTree } from '@element-plus/components/tree'
import { GTreeSelect } from '@element-plus/components/tree-select'
import { GTreeV2 } from '@element-plus/components/tree-v2'
import { GUpload } from '@element-plus/components/upload'
import { GWatermark } from '@element-plus/components/watermark'
import { GTour, GTourStep } from '@element-plus/components/tour'
import { GAnchor, GAnchorLink } from '@element-plus/components/anchor'
import { GSegmented } from '@element-plus/components/segmented'
import { GMention } from '@element-plus/components/mention'
import { GSplitter, GSplitterPanel } from '@element-plus/components/splitter'

import type { Plugin } from 'vue'

export default [
  GAffix,
  GAlert,
  GAutocomplete,
  GAutoResizer,
  GAvatar,
  GAvatarGroup,
  GBacktop,
  GBadge,
  GBreadcrumb,
  GBreadcrumbItem,
  GButton,
  GButtonGroup,
  GCalendar,
  GCard,
  GCarousel,
  GCarouselItem,
  GCascader,
  GCascaderPanel,
  GCheckTag,
  GCheckbox,
  GCheckboxButton,
  GCheckboxGroup,
  GCol,
  GCollapse,
  GCollapseItem,
  GCollapseTransition,
  GColorPickerPanel,
  GColorPicker,
  GConfigProvider,
  GContainer,
  GAside,
  GFooter,
  GHeader,
  GMain,
  GDatePicker,
  GDatePickerPanel,
  GDescriptions,
  GDescriptionsItem,
  GDialog,
  GDivider,
  GDrawer,
  GDropdown,
  GDropdownItem,
  GDropdownMenu,
  GEmpty,
  GForm,
  GFormItem,
  GIcon,
  GImage,
  GImageViewer,
  GInput,
  GInputNumber,
  GInputTag,
  GLink,
  GMenu,
  GMenuItem,
  GMenuItemGroup,
  GSubMenu,
  GPageHeader,
  GPagination,
  GPopconfirm,
  GPopover,
  GPopper,
  GProgress,
  GRadio,
  GRadioButton,
  GRadioGroup,
  GRate,
  GResult,
  GRow,
  GScrollbar,
  GSelect,
  GOption,
  GOptionGroup,
  GSelectV2,
  GSkeleton,
  GSkeletonItem,
  GSlider,
  GSpace,
  GStatistic,
  GCountdown,
  GSteps,
  GStep,
  GSwitch,
  GTable,
  GTableColumn,
  GTableV2,
  GTabs,
  GTabPane,
  GTag,
  GText,
  GTimePicker,
  GTimeSelect,
  GTimeline,
  GTimelineItem,
  GTooltip,
  GTransfer,
  GTree,
  GTreeSelect,
  GTreeV2,
  GUpload,
  GWatermark,
  GTour,
  GTourStep,
  GAnchor,
  GAnchorLink,
  GSegmented,
  GMention,
  GSplitter,
  GSplitterPanel,
] as Plugin[]
