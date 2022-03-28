import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'

/**
 * TODO: make this under constants or tokens
 */
export const tooltipV2CommonProps = buildProps({
  nowrap: Boolean,
} as const)

export type TooltipV2CommonProps = ExtractPropTypes<typeof tooltipV2CommonProps>
