import { buildProps, isBoolean } from '@element-plus/utils'
import {
  useTooltipContentProps,
  useTooltipTriggerProps,
} from '@element-plus/components/src/tooltip'
import { dropdownProps } from '@element-plus/components/src/dropdown'
import type { ExtractPropTypes, PropType } from 'vue'
import type Popover from './popover.vue'

export const popoverProps = buildProps({
  trigger: useTooltipTriggerProps.trigger,
  placement: dropdownProps.placement,
  disabled: useTooltipTriggerProps.disabled,
  visible: useTooltipContentProps.visible,
  transition: useTooltipContentProps.transition,
  popperOptions: dropdownProps.popperOptions,
  tabindex: dropdownProps.tabindex,
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
  title: String,

  width: {
    type: [String, Number],
    default: 150,
  },
  offset: {
    type: Number,
    default: undefined,
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
  showArrow: {
    type: Boolean,
    default: true,
  },
  persistent: {
    type: Boolean,
    default: true,
  },
  'onUpdate:visible': {
    type: Function as PropType<(visible: boolean) => void>,
  },
} as const)
export type PopoverProps = ExtractPropTypes<typeof popoverProps>

export const popoverEmits = {
  'update:visible': (value: boolean) => isBoolean(value),
  'before-enter': () => true,
  'before-leave': () => true,
  'after-enter': () => true,
  'after-leave': () => true,
}
export type PopoverEmits = typeof popoverEmits

export type PopoverInstance = InstanceType<typeof Popover>
