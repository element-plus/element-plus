import { buildProps } from '@element-plus/utils-v2'
import {
  useTooltipContentProps,
  useTooltipTriggerProps,
  useTooltipProps,
} from '@element-plus/components/tooltip'
import { dropdownProps } from '@element-plus/components/dropdown'

import type { PropType } from 'vue'

const triggers = ['click', 'focus', 'hover', 'manual'] as const

export type Trigger = typeof triggers[number]

export const usePopoverProps = {
  trigger: {
    type: [String, Array] as PropType<Trigger | Trigger[]>,
    default: 'click',
  },
  placement: dropdownProps.placement,
  disabled: useTooltipTriggerProps.disabled,
  visible: useTooltipContentProps.visible,
  transition: useTooltipContentProps.transition,
  showArrow: useTooltipProps.showArrow,
  popperOptions: dropdownProps.popperOptions,
  tabindex: dropdownProps.tabindex,
  appendToBody: { type: Boolean, default: undefined },
  content: useTooltipContentProps.content,
  popperStyle: useTooltipContentProps.popperStyle,
  popperClass: useTooltipContentProps.popperClass,
  enterable: {
    ...useTooltipContentProps.enterable,
    default: true,
  },
  effect: {
    ...useTooltipContentProps.effect,
    default: 'light',
  },
  teleported: useTooltipContentProps.teleported,
  ...buildProps({
    title: String,

    width: {
      type: [String, Number],
      default: 150,
    },
    offset: {
      type: Number,
      default: 0,
    },
    showAfter: {
      type: Number,
      default: 0,
    },
    hideAfter: {
      type: Number,
      default: 200,
    },
    autoClose: {
      type: Number,
      default: 0,
    },
  }),
}
