import { buildProps } from '@element-plus/utils/props'
import {
  usePopperTriggerProps,
  usePopperContentProps,
} from '@element-plus/components/popper'
import { useDelayedToggleProps } from '@element-plus/hooks'

import type { ExtractPropTypes, PropType } from 'vue'

const triggers = ['hover', 'focus', 'click', 'contextmenu'] as const

export type Trigger = typeof triggers[number]

export const useTooltipContentProps = {
  ...useDelayedToggleProps,
  ...usePopperContentProps,
  ...buildProps({
    persistent: Boolean,
    ariaLabel: String,
    transition: {
      type: String,
      default: 'el-fade-in-linear',
    },
    teleported: {
      type: Boolean,
      default: true,
    },
  }),
}

export const useTooltipTriggerProps = {
  ...usePopperTriggerProps,
  trigger: {
    type: [String, Array] as PropType<Trigger | Trigger[]>,
    default: 'hover',
  },
}

export const useTooltipProps = buildProps({
  openDelay: {
    type: Number,
  },
  visibleArrow: {
    type: Boolean,
    default: undefined,
  },
  hideAfter: {
    type: Number,
    default: 200,
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
})

export type ElTooltipContentProps = ExtractPropTypes<
  typeof useTooltipContentProps
>

export type ElTooltipTriggerProps = ExtractPropTypes<
  typeof useTooltipTriggerProps
>

export type ElTooltipProps = ExtractPropTypes<typeof useTooltipProps> &
  ElTooltipContentProps &
  ElTooltipTriggerProps
