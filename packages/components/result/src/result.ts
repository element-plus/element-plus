import { buildProps } from '@element-plus/utils'
import {
  CircleCheckFilled,
  CircleCloseFilled,
  InfoFilled,
  WarningFilled,
} from '@element-plus/icons-vue'

import type { Component, ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type Result from './result.vue'

export const IconMap = {
  primary: 'icon-primary',
  success: 'icon-success',
  warning: 'icon-warning',
  error: 'icon-error',
  info: 'icon-info',
} as const

export const IconComponentMap: Record<
  typeof IconMap[keyof typeof IconMap],
  Component
> = {
  [IconMap.primary]: InfoFilled,
  [IconMap.success]: CircleCheckFilled,
  [IconMap.warning]: WarningFilled,
  [IconMap.error]: CircleCloseFilled,
  [IconMap.info]: InfoFilled,
}

export const resultProps = buildProps({
  /**
   * @description title of result
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * @description sub title of result
   */
  subTitle: {
    type: String,
    default: '',
  },
  /**
   * @description icon type of result
   */
  icon: {
    type: String,
    values: ['primary', 'success', 'warning', 'info', 'error'],
    default: 'info',
  },
} as const)

export type ResultProps = ExtractPropTypes<typeof resultProps>
export type ResultPropsPublic = __ExtractPublicPropTypes<typeof resultProps>

export type ResultInstance = InstanceType<typeof Result> & unknown
