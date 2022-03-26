import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'

const EventHandler = {
  type: definePropType<(e: Event) => boolean | void>(Function),
} as const

export const tooltipTriggerV2Props = buildProps({
  asChild: Boolean,
  onBlur: EventHandler,
  onClick: EventHandler,
  onFocus: EventHandler,
  onMouseDown: EventHandler,
  onMouseEnter: EventHandler,
  onMouseLeave: EventHandler,
} as const)

export type TooltipTriggerV2Props = ExtractPropTypes<
  typeof tooltipTriggerV2Props
>
