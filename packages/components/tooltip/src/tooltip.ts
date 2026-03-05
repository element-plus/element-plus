import { buildProps } from '@element-plus/utils'
import { createModelToggleComposable } from '@element-plus/hooks'
import { popperArrowProps, popperProps } from '@element-plus/components/popper'
import { useTooltipContentProps } from './content'
import { useTooltipTriggerProps } from './trigger'

import type {
  PopperArrowProps,
  PopperProps,
} from '@element-plus/components/popper'
import type { ElTooltipContentProps } from './content'
import type { UseTooltipTriggerProps } from './trigger'
import type Tooltip from './tooltip.vue'
import type { ExtractPublicPropTypes } from 'vue'

export const {
  useModelToggleProps: useTooltipModelToggleProps,
  useModelToggleEmits: useTooltipModelToggleEmits,
  useModelToggle: useTooltipModelToggle,
} = createModelToggleComposable('visible' as const)

export interface UseTooltipProps
  extends
    PopperProps,
    ElTooltipContentProps,
    UseTooltipTriggerProps,
    PopperArrowProps {
  /**
   * @description whether the tooltip content has an arrow
   */
  showArrow?: boolean
  'onUpdate:visible'?: (value: boolean) => void
}

/**
 * @deprecated Removed after 3.0.0, Use `UseTooltipProps` instead.
 */
export const useTooltipProps = buildProps({
  ...popperProps,
  ...useTooltipModelToggleProps,
  ...useTooltipContentProps,
  ...useTooltipTriggerProps,
  ...popperArrowProps,
  /**
   * @description whether the tooltip content has an arrow
   */
  showArrow: {
    type: Boolean,
    default: true,
  },
})

export const tooltipEmits = [
  ...useTooltipModelToggleEmits,
  'before-show',
  'before-hide',
  'show',
  'hide',
  'open',
  'close',
] as const

/**
 * @deprecated Removed after 3.0.0, Use `UseTooltipProps` instead.
 */
export type ElTooltipProps = UseTooltipProps

/**
 * @deprecated Removed after 3.0.0, Use `UseTooltipProps` instead.
 */
export type ElTooltipPropsPublic = ExtractPublicPropTypes<
  typeof useTooltipProps
>

export type TooltipInstance = InstanceType<typeof Tooltip> & unknown
