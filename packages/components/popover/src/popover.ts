import { buildProps, isBoolean } from '@element-plus/utils'
import {
  useTooltipContentProps,
  useTooltipTriggerProps,
} from '@element-plus/components/tooltip'
import { dropdownProps } from '@element-plus/components/dropdown'
import { EVENT_CODE } from '@element-plus/constants'

import type { ExtractPublicPropTypes, PropType } from 'vue'
import type Popover from './popover.vue'
import type { Placement } from '@element-plus/components/popper'
import type { Options } from '@popperjs/core'
import type {
  GTooltipContentProps,
  UseTooltipTriggerProps,
} from '@element-plus/components/tooltip'

export interface PopoverProps {
  /**
   * @description how the popover is triggered, not valid in controlled mode
   */
  trigger?: UseTooltipTriggerProps['trigger']
  /**
   * @description When you click the mouse to focus on the trigger element, you can define a set of keyboard codes to control the display of popover through the keyboard, not valid in controlled mode
   */
  triggerKeys?: UseTooltipTriggerProps['triggerKeys']
  /**
   * @description popover placement
   */
  placement?: Placement
  /**
   * @description whether Popover is disabled
   */
  disabled?: UseTooltipTriggerProps['disabled']
  /**
   * @description whether popover is visible
   */
  visible?: GTooltipContentProps['visible']
  /**
   * @description popover transition animation
   */
  transition?: GTooltipContentProps['transition']
  /**
   * @description parameters for [popper.js](https://popper.js.org/docs/v2/)
   */
  popperOptions?: Partial<Options>
  /**
   * @description [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Popover
   */
  tabindex?: string | number
  /**
   * @description popover content, can be replaced with a default `slot`
   */
  content?: GTooltipContentProps['content']
  /**
   * @description custom style for popover
   */
  popperStyle?: GTooltipContentProps['popperStyle']
  /**
   * @description custom class name for popover
   */
  popperClass?: GTooltipContentProps['popperClass']
  /**
   * @description whether the mouse can enter the popover
   */
  enterable?: GTooltipContentProps['enterable']
  /**
   * @description Tooltip theme, built-in theme: `dark` / `light`
   */
  effect?: GTooltipContentProps['effect']
  /**
   * @description whether popover dropdown is teleported to the body
   */
  teleported?: GTooltipContentProps['teleported']
  /**
   * @description which select dropdown appends to
   */
  appendTo?: GTooltipContentProps['appendTo']
  /**
   * @description popover title
   */
  title?: string
  /**
   * @description popover width
   */
  width?: string | number
  /**
   * @description popover offset
   */
  offset?: number
  /**
   * @description delay of appearance, in millisecond, not valid in controlled mode
   */
  showAfter?: number
  /**
   * @description delay of disappear, in millisecond, not valid in controlled mode
   */
  hideAfter?: number
  /**
   * @description timeout in milliseconds to hide tooltip, not valid in controlled mode
   */
  autoClose?: number
  /**
   * @description whether a tooltip arrow is displayed or not. For more info, please refer to [GPopper](https://github.com/element-plus/element-plus/tree/dev/packages/components/popper)
   */
  showArrow?: boolean
  /**
   * @description when popover inactive and `persistent` is `false` , popover will be destroyed
   */
  persistent?: boolean
  /**
   * @description update:visible event handler
   */
  'onUpdate:visible'?: (visible: boolean) => void
}

/**
 * @deprecated Removed after 3.0.0, Use `PopoverProps` instead.
 */
export const popoverProps = buildProps({
  /**
   * @description how the popover is triggered, not valid in controlled mode
   */
  trigger: useTooltipTriggerProps.trigger,
  /**
   * @description When you click the mouse to focus on the trigger element, you can define a set of keyboard codes to control the display of popover through the keyboard, not valid in controlled mode
   */
  triggerKeys: useTooltipTriggerProps.triggerKeys,
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
   * @description which select dropdown appends to
   */
  appendTo: useTooltipContentProps.appendTo,
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
   * @description delay of appearance, in millisecond, not valid in controlled mode
   */
  showAfter: {
    type: Number,
    default: 0,
  },
  /**
   * @description delay of disappear, in millisecond, not valid in controlled mode
   */
  hideAfter: {
    type: Number,
    default: 200,
  },
  /**
   * @description timeout in milliseconds to hide tooltip, not valid in controlled mode
   */
  autoClose: {
    type: Number,
    default: 0,
  },
  /**
   * @description whether a tooltip arrow is displayed or not. For more info, please refer to [GPopper](https://github.com/element-plus/element-plus/tree/dev/packages/components/popper)
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

/**
 * @deprecated Removed after 3.0.0, Use `PopoverProps` instead.
 */
export type PopoverPropsPublic = ExtractPublicPropTypes<typeof popoverProps>

export const popoverEmits = {
  'update:visible': (value: boolean) => isBoolean(value),
  'before-enter': () => true,
  'before-leave': () => true,
  'after-enter': () => true,
  'after-leave': () => true,
}
export type PopoverEmits = typeof popoverEmits

export type PopoverInstance = InstanceType<typeof Popover> & unknown

/**
 * @description default values for PopoverProps
 */
export const popoverPropsDefaults = {
  trigger: 'hover',
  triggerKeys: () => [
    EVENT_CODE.enter,
    EVENT_CODE.numpadEnter,
    EVENT_CODE.space,
  ],
  placement: 'bottom',
  visible: null,
  popperOptions: () => ({}),
  tabindex: 0,
  content: '',
  popperStyle: undefined,
  enterable: true,
  effect: 'light',
  teleported: true,
  width: 150,
  offset: undefined,
  showAfter: 0,
  hideAfter: 200,
  autoClose: 0,
  showArrow: true,
  persistent: true,
} as const
