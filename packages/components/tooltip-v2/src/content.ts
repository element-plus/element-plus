import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type {
  Padding,
  Placement,
  Strategy,
  VirtualElement,
} from '@floating-ui/dom'

const tooltipV2Strategies = ['absolute', 'fixed'] as const

const tooltipV2Placements = [
  'top-start',
  'top-end',
  'top',
  'bottom-start',
  'bottom-end',
  'bottom',
  'left-start',
  'left-end',
  'left',
  'right-start',
  'right-end',
  'right',
] as const

export const tooltipV2ContentProps = buildProps({
  ariaLabel: String,
  arrowPadding: {
    type: definePropType<Padding>([Number, Object]),
    default: 5,
  },
  /**
   * Placement of tooltip content relative to reference element (when absent it refers to trigger)
   */
  placement: {
    type: definePropType<Placement>(String),
    values: tooltipV2Placements,
    default: 'bottom',
  },
  /**
   * Reference element for tooltip content to set its position
   */
  reference: {
    type: definePropType<HTMLElement | VirtualElement | null>(Object),
    default: null,
  },
  strategy: {
    type: definePropType<Strategy>(String),
    values: tooltipV2Strategies,
    default: 'fixed',
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
} as const)

export type TooltipV2ContentProps = ExtractPropTypes<
  typeof tooltipV2ContentProps
>
