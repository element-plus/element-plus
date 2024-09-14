import { buildProps, isBoolean } from '@element-plus/utils'
import {
  useTooltipContentProps,
  useTooltipTriggerProps,
} from '@element-plus/components/tooltip'
import { dropdownProps } from '@element-plus/components/dropdown'
import type { ExtractPropTypes, PropType } from 'vue'
import type Popover from './popover.vue'

export const popoverProps = buildProps({
  /**
   * @description how the popover is triggered
   */
  trigger: useTooltipTriggerProps.trigger,
  /**
   * @description popover placement
   */
  placement: dropdownProps.placement,
  /**
   * @description whether Popover is disabled
   */
  disabled: useTooltipTriggerProps.disabled,
  /**
   * @description whether popover is visible
   */
  visible: useTooltipContentProps.visible,
  /**
   * @description popover transition animation
   */
  transition: useTooltipContentProps.transition,
  /**
   * @description parameters for [popper.js](https://popper.js.org/docs/v2/)
   */
  popperOptions: dropdownProps.popperOptions,
  /**
   * @description [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Popover
   */
  tabindex: dropdownProps.tabindex,
  /**
   * @description popover content, can be replaced with a default `slot`
   */
  content: useTooltipContentProps.content,
  /**
   * @description custom style for popover
   */
  popperStyle: useTooltipContentProps.popperStyle,
  /**
   * @description custom class name for popover
   */
  popperClass: useTooltipContentProps.popperClass,
  enterable: {
    ...useTooltipContentProps.enterable,
    default: true,
  },
  /**
   * @description Tooltip theme, built-in theme: `dark` / `light`
   */
  effect: {
    ...useTooltipContentProps.effect,
    default: 'light',
  },
  /**
   * @description whether popover dropdown is teleported to the body
   */
  teleported: useTooltipContentProps.teleported,
  /**
   * @description popover title
   */
  title: String,
  /**
   * @description popover width
   */
  width: {
    type: [String, Number],
    default: 150,
  },
  /**
   * @description popover offset
   */
  offset: {
    type: Number,
    default: undefined,
  },
  /**
   * @description delay of appearance, in millisecond
   */
  showAfter: {
    type: Number,
    default: 0,
  },
  /**
   * @description delay of disappear, in millisecond
   */
  hideAfter: {
    type: Number,
    default: 200,
  },
  /**
   * @description timeout in milliseconds to hide tooltip
   */
  autoClose: {
    type: Number,
    default: 0,
  },
  /**
   * @description whether a tooltip arrow is displayed or not. For more info, please refer to [ElPopper](https://github.com/element-plus/element-plus/tree/dev/packages/components/popper)
   */
  showArrow: {
    type: Boolean,
    default: true,
  },
  /**
   * @description when popover inactive and `persistent` is `false` , popover will be destroyed
   */
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
