import { buildProps, definePropType } from '@element-plus/utils/props'
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
    content: {
      type: String,
      default: '',
    },
    rawContent: {
      type: Boolean,
      default: false,
    },
    persistent: Boolean,
    ariaLabel: String,
    // because model toggle prop is generated dynamically
    // so the typing cannot be evaluated by typescript as type:
    // [name]: { type: Boolean, default: null }
    // so we need to declare that again for type checking.
    visible: {
      type: definePropType<boolean | null>(Boolean),
      default: null,
    },
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
