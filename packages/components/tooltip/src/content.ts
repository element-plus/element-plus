import { buildProps, definePropType } from '@element-plus/utils'
import { popperContentProps } from '@element-plus/components/popper'
import { useAriaProps, useDelayedToggleProps } from '@element-plus/hooks'
import { teleportProps } from '@element-plus/components/teleport'

import type TooltipContent from './content.vue'
import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'

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

export type ElTooltipContentProps = ExtractPropTypes<
  typeof useTooltipContentProps
>
export type ElTooltipContentPropsPublic = __ExtractPublicPropTypes<
  typeof useTooltipContentProps
>

export type TooltipContentInstance = InstanceType<typeof TooltipContent> &
  unknown
