import { buildProps } from '@element-plus/utils/props'
import {
  WarningFilled,
  CircleCheckFilled,
  CircleCloseFilled,
  InfoFilled,
} from '@element-plus/icons'
import type { Indexable } from '@element-plus/utils/types'
import type { Component, ExtractPropTypes } from 'vue'

export const IconMap: Indexable<string> = {
  success: 'icon-success',
  warning: 'icon-warning',
  error: 'icon-error',
  info: 'icon-info',
}

export const IconComponentMap: Indexable<Component> = {
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
    default: 'info',
  },
} as const)

export type ResultProps = ExtractPropTypes<typeof resultProps>
