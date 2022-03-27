import { buildProps, definePropType } from '@element-plus/utils'

import type { CSSProperties, ExtractPropTypes } from 'vue'

export const tooltipV2ArrowProps = buildProps({
  width: {
    type: Number,
    default: 4,
  },
  height: {
    type: Number,
    default: 4,
  },
  style: {
    type: definePropType<CSSProperties | null>(Object),
    default: null,
  },
})

export type TooltipV2ArrowProps = ExtractPropTypes<typeof tooltipV2ArrowProps>
