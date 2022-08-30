import { buildProps } from '@element-plus/utils'
import {
  CircleCheckFilled,
  CircleCloseFilled,
  InfoFilled,
  WarningFilled,
} from '@element-plus/icons-vue'
import type { Component, ExtractPropTypes } from 'vue'
import type Result from './result.vue'

export const IconMap = {
  success: 'icon-success',
  warning: 'icon-warning',
  error: 'icon-error',
  info: 'icon-info',
} as const

export const IconComponentMap: Record<
  typeof IconMap[keyof typeof IconMap],
  Component
> = {
  [IconMap.success]: CircleCheckFilled,
  [IconMap.warning]: WarningFilled,
  [IconMap.error]: CircleCloseFilled,
  [IconMap.info]: InfoFilled,
}

export const resultProps = buildProps({
  title: {
    type: String,
    default: '',
  },
  subTitle: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    values: ['success', 'warning', 'info', 'error'],
    default: 'info',
  },
} as const)

export type ResultProps = ExtractPropTypes<typeof resultProps>

export type ResultInstance = InstanceType<typeof Result>
