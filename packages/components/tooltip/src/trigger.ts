import { buildProps, definePropType } from '@element-plus/utils'
import { popperTriggerProps } from '@element-plus/components/popper'
import { EVENT_CODE } from '@element-plus/constants'

import type { PopperTriggerProps } from '@element-plus/components/popper'
import type { Arrayable } from '@element-plus/utils'
import type { ExtractPublicPropTypes } from 'vue'

export type TooltipTriggerType = 'hover' | 'focus' | 'click' | 'contextmenu'

export interface UseTooltipTriggerProps extends PopperTriggerProps {
  /**
   * @description whether Tooltip is disabled
   */
  disabled?: boolean
  /**
   * @description How should the tooltip be triggered (to show), not valid in controlled mode
   */
  trigger?: Arrayable<TooltipTriggerType>
  /**
   * @description When you click the mouse to focus on the trigger element, you can define a set of keyboard codes to control the display of tooltip through the keyboard, not valid in controlled mode
   */
  triggerKeys?: string[]
  /**
   * @description when triggering tooltips through hover, whether to focus the trigger element, which improves accessibility
   */
  focusOnTarget?: boolean
}

export const useTooltipTriggerPropsDefaults = {
  trigger: 'hover',
  triggerKeys: () => [
    EVENT_CODE.enter,
    EVENT_CODE.numpadEnter,
    EVENT_CODE.space,
  ],
} as const

/**
 * @deprecated Removed after 3.0.0, Use `UseTooltipTriggerProps` instead.
 */
export const useTooltipTriggerProps = buildProps({
  ...popperTriggerProps,
  /**
   * @description whether Tooltip is disabled
   */
  disabled: Boolean,
  /**
   * @description How should the tooltip be triggered (to show), not valid in controlled mode
   */
  trigger: {
    type: definePropType<Arrayable<TooltipTriggerType>>([String, Array]),
    default: 'hover',
  },
  /**
   * @description When you click the mouse to focus on the trigger element, you can define a set of keyboard codes to control the display of tooltip through the keyboard, not valid in controlled mode
   */
  triggerKeys: {
    type: definePropType<string[]>(Array),
    default: () => [EVENT_CODE.enter, EVENT_CODE.numpadEnter, EVENT_CODE.space],
  },
  /**
   * @description when triggering tooltips through hover, whether to focus the trigger element, which improves accessibility
   */
  focusOnTarget: Boolean,
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `UseTooltipTriggerProps` instead.
 */
export type ElTooltipTriggerProps = UseTooltipTriggerProps

/**
 * @deprecated Removed after 3.0.0, Use `UseTooltipTriggerProps` instead.
 */
export type ElTooltipTriggerPropsPublic = ExtractPublicPropTypes<
  typeof useTooltipTriggerProps
>
