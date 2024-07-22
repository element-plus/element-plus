import { buildProps, definePropType } from '@element-plus/utils'
import { useAriaProps } from '@element-plus/hooks'

import type { PopperEffect } from '@element-plus/components/popper'
import type { ExtractPropTypes } from 'vue'
import type { Placement, Strategy, VirtualElement } from '@floating-ui/dom'

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
  arrowPadding: {
    type: definePropType<number>(Number),
    default: 5,
  },
  effect: {
    type: definePropType<PopperEffect>(String),
    default: 'light',
  },
  contentClass: String,
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
  offset: {
    type: Number,
    default: 8,
  },
  strategy: {
    type: definePropType<Strategy>(String),
    values: tooltipV2Strategies,
    default: 'absolute',
  },
  showArrow: Boolean,
  ...useAriaProps(['ariaLabel']),
} as const)

export type TooltipV2ContentProps = ExtractPropTypes<
  typeof tooltipV2ContentProps
>
