import { buildProps, definePropType } from '@element-plus/utils'
import { tooltipV2Sides } from './common'

import type { CSSProperties, ExtractPropTypes } from 'vue'
import type { TooltipV2Sides } from './common'

export const tooltipV2ArrowProps = buildProps({
  width: {
    type: Number,
    default: 10,
  },
  height: {
    type: Number,
    default: 10,
  },
  style: {
    type: definePropType<CSSProperties | null>(Object),
    default: null,
  },
} as const)

export const tooltipV2ArrowSpecialProps = buildProps({
  side: {
    type: definePropType<TooltipV2Sides>(String),
    values: tooltipV2Sides,
    required: true,
  },
} as const)

export type TooltipV2ArrowProps = ExtractPropTypes<typeof tooltipV2ArrowProps>
