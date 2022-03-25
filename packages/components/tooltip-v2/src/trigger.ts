import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'

export const tooltipTriggerV2Props = buildProps({
  asChild: Boolean,
} as const)

export type TooltipTriggerV2Props = ExtractPropTypes<
  typeof tooltipTriggerV2Props
>
