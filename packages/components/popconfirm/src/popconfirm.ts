import { buttonTypes } from '@element-plus/components/button'
import { QuestionFilled } from '@element-plus/icons-vue'
import { buildProps, iconPropType } from '@element-plus/utils'
import {
  useTooltipContentProps,
  useTooltipTriggerProps,
} from '@element-plus/components/tooltip'

import type { Component, ExtractPublicPropTypes } from 'vue'
import type { ButtonType } from '@element-plus/components/button'
import type { Measurable } from '@element-plus/components/popper'
import type Popconfirm from './popconfirm.vue'

export interface PopconfirmProps {
  /**
   * @description Title
   */
  title?: string
  /**
   * @description Confirm button text
   */
  confirmButtonText?: string
  /**
   * @description Cancel button text
   */
  cancelButtonText?: string
  /**
   * @description Confirm button type
   */
  confirmButtonType?: ButtonType
  /**
   * @description Cancel button type
   */
  cancelButtonType?: ButtonType
  /**
   * @description Icon Component
   */
  icon?: string | Component
  /**
   * @description Icon color
   */
  iconColor?: string
  /**
   * @description is hide Icon
   */
  hideIcon?: boolean
  /**
   * @description delay of disappear, in millisecond
   */
  hideAfter?: number
  /**
   * @description Tooltip theme, built-in theme: `dark` / `light`
   */
  effect?: 'light' | 'dark'
  /**
   * @description whether popconfirm is teleported to the body
   */
  teleported?: boolean
  /**
   * @description when popconfirm inactive and `persistent` is `false` , popconfirm will be destroyed
   */
  persistent?: boolean
  /**
   * @description popconfirm width, min width 150px
   */
  width?: string | number
  /**
   * @description Indicates whether virtual triggering is enabled
   */
  virtualTriggering?: boolean
  /**
   * @description Indicates the reference element to which the popper is attached
   */
  virtualRef?: Measurable
}

/**
 * @deprecated Removed after 3.0.0, Use `PopconfirmProps` instead.
 */
export const popconfirmProps = buildProps({
  /**
   * @description Title
   */
  title: String,
  /**
   * @description Confirm button text
   */
  confirmButtonText: String,
  /**
   * @description Cancel button text
   */
  cancelButtonText: String,
  /**
   * @description Confirm button type
   */
  confirmButtonType: {
    type: String,
    values: buttonTypes,
    default: 'primary',
  },
  /**
   * @description Cancel button type
   */
  cancelButtonType: {
    type: String,
    values: buttonTypes,
    default: 'text',
  },
  /**
   * @description Icon Component
   */
  icon: {
    type: iconPropType,
    default: () => QuestionFilled,
  },
  /**
   * @description Icon color
   */
  iconColor: {
    type: String,
    default: '#f90',
  },
  /**
   * @description is hide Icon
   */
  hideIcon: Boolean,
  /**
   * @description delay of disappear, in millisecond
   */
  hideAfter: {
    type: Number,
    default: 200,
  },
  /**
   * @description Tooltip theme, built-in theme: `dark` / `light`
   */
  effect: {
    ...useTooltipContentProps.effect,
    default: 'light',
  },
  /**
   * @description whether popconfirm is teleported to the body
   */
  teleported: useTooltipContentProps.teleported,
  /**
   * @description when popconfirm inactive and `persistent` is `false` , popconfirm will be destroyed
   */
  persistent: useTooltipContentProps.persistent,
  /**
   * @description popconfirm width, min width 150px
   */
  width: {
    type: [String, Number],
    default: 150,
  },
  virtualTriggering: useTooltipTriggerProps.virtualTriggering,
  virtualRef: useTooltipTriggerProps.virtualRef,
} as const)

export const popconfirmEmits = {
  /**
   * @description triggers when click confirm button
   */
  confirm: (e: MouseEvent) => e instanceof MouseEvent,
  /**
   * @description triggers when click cancel button
   */
  cancel: (e: MouseEvent) => e instanceof MouseEvent,
}

export type PopconfirmEmits = typeof popconfirmEmits

/**
 * @deprecated Removed after 3.0.0, Use `PopconfirmProps` instead.
 */
export type PopconfirmPropsPublic = ExtractPublicPropTypes<
  typeof popconfirmProps
>

export type PopconfirmInstance = InstanceType<typeof Popconfirm> & unknown
