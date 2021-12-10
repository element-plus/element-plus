import { buildProps } from '@element-plus/utils/props'
import {
  WarningFilled,
  CircleCheckFilled,
  CircleCloseFilled,
  InfoFilled,
} from '@element-plus/icons-vue'
import type { Component, ExtractPropTypes } from 'vue'

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
    values: ['success', 'warning', 'info', 'error'],
    default: 'info',
  },
} as const)

export type ResultProps = ExtractPropTypes<typeof resultProps>
