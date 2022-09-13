import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'

const EventHandler = {
  type: definePropType<(e: Event) => boolean | void>(Function),
} as const

export const tooltipV2TriggerProps = buildProps({
  onBlur: EventHandler,
  onClick: EventHandler,
  onFocus: EventHandler,
  onMouseDown: EventHandler,
  onMouseEnter: EventHandler,
  onMouseLeave: EventHandler,
} as const)

export type TooltipV2TriggerProps = ExtractPropTypes<
  typeof tooltipV2TriggerProps
>
