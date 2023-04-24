import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'

/**
 * TODO: make this under constants or tokens
 */
export const tooltipV2CommonProps = buildProps({
  nowrap: Boolean,
} as const)

export type TooltipV2CommonProps = ExtractPropTypes<typeof tooltipV2CommonProps>

export enum TooltipV2Sides {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
}

export const tooltipV2Sides = Object.values(TooltipV2Sides)

export const tooltipV2OppositeSide = {
  [TooltipV2Sides.top]: TooltipV2Sides.bottom,
  [TooltipV2Sides.bottom]: TooltipV2Sides.top,
  [TooltipV2Sides.left]: TooltipV2Sides.right,
  [TooltipV2Sides.right]: TooltipV2Sides.left,
} as const

export const tooltipV2ArrowBorders = {
  [TooltipV2Sides.top]: [TooltipV2Sides.left, TooltipV2Sides.top],
  [TooltipV2Sides.bottom]: [TooltipV2Sides.bottom, TooltipV2Sides.right],
  [TooltipV2Sides.left]: [TooltipV2Sides.bottom, TooltipV2Sides.left],
  [TooltipV2Sides.right]: [TooltipV2Sides.top, TooltipV2Sides.right],
} as const
