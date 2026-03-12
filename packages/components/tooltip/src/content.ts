import { buildProps, definePropType } from '@element-plus/utils'
import {
  popperContentProps,
  popperContentPropsDefaults,
} from '@element-plus/components/popper'
import {
  useAriaProps,
  useDelayedToggleProps,
  useDelayedTogglePropsDefaults,
} from '@element-plus/hooks'
import { teleportProps } from '@element-plus/components/teleport'

import type { AriaProps, UseDelayedToggleProps } from '@element-plus/hooks'
import type { PopperContentProps } from '@element-plus/components/popper'
import type TooltipContent from './content.vue'
import type { ExtractPublicPropTypes } from 'vue'

export interface GTooltipContentProps
  extends UseDelayedToggleProps, Omit<PopperContentProps, 'visible'> {
  /**
   * @description which element the tooltip CONTENT appends to
   */
  appendTo?: string | HTMLElement
  /**
   * @description display content, can be overridden by `slot#content`
   */
  content?: string
  /**
   * @description whether `content` is treated as HTML string
   */
  rawContent?: boolean
  /**
   * @description when tooltip inactive and `persistent` is `false` , popconfirm will be destroyed
   */
  persistent?: boolean
  // because model toggle prop is generated dynamically
  // so the typing cannot be evaluated by typescript as type:
  // [name]: { type: Boolean, default: null }
  // so we need to declare that again for type checking.
  /**
   * @description visibility of Tooltip
   */
  visible?: boolean | null
  /**
   * @description animation name
   */
  transition?: string
  /**
   * @description whether tooltip content is teleported, if `true` it will be teleported to where `append-to` sets
   */
  teleported?: boolean
  /**
   * @description whether Tooltip is disabled
   */
  disabled?: boolean
  ariaLabel?: AriaProps['ariaLabel']
}

export const useTooltipContentPropsDefaults = {
  ...useDelayedTogglePropsDefaults,
  ...popperContentPropsDefaults,
  content: '',
  visible: null,
  teleported: true,
} as const

/**
 * @deprecated Removed after 3.0.0, Use `GTooltipContentProps` instead.
 */
export const useTooltipContentProps = buildProps({
  ...useDelayedToggleProps,
  ...popperContentProps,
  /**
   * @description which element the tooltip CONTENT appends to
   */
  appendTo: {
    type: teleportProps.to.type,
  },
  /**
   * @description display content, can be overridden by `slot#content`
   */
  content: {
    type: String,
    default: '',
  },
  /**
   * @description whether `content` is treated as HTML string
   */
  rawContent: Boolean,
  /**
   * @description when tooltip inactive and `persistent` is `false` , popconfirm will be destroyed
   */
  persistent: Boolean,
  // because model toggle prop is generated dynamically
  // so the typing cannot be evaluated by typescript as type:
  // [name]: { type: Boolean, default: null }
  // so we need to declare that again for type checking.
  /**
   * @description visibility of Tooltip
   */
  visible: {
    type: definePropType<boolean | null>(Boolean),
    default: null,
  },
  /**
   * @description animation name
   */
  transition: String,
  /**
   * @description whether tooltip content is teleported, if `true` it will be teleported to where `append-to` sets
   */
  teleported: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether Tooltip is disabled
   */
  disabled: Boolean,
  ...useAriaProps(['ariaLabel']),
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `GTooltipContentProps` instead.
 */
export type GTooltipContentPropsPublic = ExtractPublicPropTypes<
  typeof useTooltipContentProps
>

export type TooltipContentInstance = InstanceType<typeof TooltipContent> &
  unknown
