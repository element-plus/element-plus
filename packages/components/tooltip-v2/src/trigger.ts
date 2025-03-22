import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'

const EventHandler = {
  type: definePropType<(e: Event) => boolean | void>(Function),
}

export const tooltipV2TriggerProps = buildProps({
  onBlur: EventHandler,
  onClick: EventHandler,
  onFocus: EventHandler,
  onMouseDown: EventHandler,
  onMouseEnter: EventHandler,
  onMouseLeave: EventHandler,
})

export type TooltipV2TriggerProps = ExtractPropTypes<
  typeof tooltipV2TriggerProps
>
