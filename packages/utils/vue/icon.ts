import {
  CircleCheck,
  CircleClose,
  CircleCloseFilled,
  Close,
  InfoFilled,
  Loading,
  SuccessFilled,
  WarningFilled,
} from '@element-plus/icons-vue'
import { definePropType } from './props'

import type { DefineComponent, VNode } from 'vue'

export type IconType = string | VNode | DefineComponent<object, object, any>

export type IconArrayType = Array<IconType> | Record<number, IconType>

export const iconPropType = definePropType<IconType>([String, Object])

export const iconArrayPropType = definePropType<IconArrayType>([Object, Array])

export const CloseComponents = {
  Close,
}

export const TypeComponents = {
  Close,
  SuccessFilled,
  InfoFilled,
  WarningFilled,
  CircleCloseFilled,
}

export const TypeComponentsMap = {
  success: SuccessFilled,
  warning: WarningFilled,
  error: CircleCloseFilled,
  info: InfoFilled,
}

export const ValidateComponentsMap = {
  validating: Loading,
  success: CircleCheck,
  error: CircleClose,
}
