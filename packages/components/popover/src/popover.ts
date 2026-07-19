import { buildProps, isBoolean } from '@element-plus/utils'
import {
  useTooltipContentPropsDefaults,
  useTooltipProps,
  useTooltipTriggerPropsDefaults,
} from '@element-plus/components/tooltip'
import { dropdownProps } from '@element-plus/components/dropdown'
import { popperArrowPropsDefaults } from '@element-plus/components/popper'
import { omit } from 'lodash-unified'

import type { UseTooltipProps } from '@element-plus/components/tooltip'
import type { ExtractPublicPropTypes } from 'vue'
import type Popover from './popover.vue'

export interface PopoverProps extends Omit<
  UseTooltipProps,
  'ariaLabel' | 'rawContent'
> {
  /**
   * @description [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Popover
   */
  tabindex?: string | number
  /**
   * @description popover title
   */
  title?: string
  /**
   * @description popover width
   */
  width?: string | number
}

/**
 * @deprecated Removed after 3.0.0, Use `PopoverProps` instead.
 */
export const popoverProps = buildProps({
  ...omit(useTooltipProps, ['ariaLabel', 'rawContent']),
  /**
   * @description popover placement
   */
  placement: dropdownProps.placement,
  /**
   * @description [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Popover
   */
  tabindex: dropdownProps.tabindex,
  /**
   * @description Tooltip theme, built-in theme: `dark` / `light`
   */
  effect: {
    ...useTooltipProps.effect,
    default: 'light',
  },
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
    ...useTooltipProps.offset,
    default: undefined,
  },
  /**
   * @description when popover inactive and `persistent` is `false` , popover will be destroyed
   */
  persistent: {
    ...useTooltipProps.persistent,
    default: true,
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
  ...useTooltipContentPropsDefaults,
  ...useTooltipTriggerPropsDefaults,
  ...popperArrowPropsDefaults,
  title: undefined,
  tabindex: 0,
  effect: 'light',
  width: 150,
  offset: undefined,
  showArrow: true,
  persistent: true,
} as const
