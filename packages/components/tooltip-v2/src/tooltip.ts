import { tooltipV2RootProps } from './root'
import { tooltipV2TriggerProps } from './trigger'
import { tooltipV2ArrowProps } from './arrow'
import { tooltipV2ContentProps } from './content'

import type { ExtractPropTypes } from 'vue'

export const tooltipV2Props = {
  ...tooltipV2RootProps,
  ...tooltipV2ArrowProps,
  ...tooltipV2TriggerProps,
  ...tooltipV2ContentProps,
} as const

export type TooltipV2Props = ExtractPropTypes<typeof tooltipV2Props>
