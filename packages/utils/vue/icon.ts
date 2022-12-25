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

export type IconComponent =
  | string
  | VNode
  | DefineComponent<object, object, any>

export type IconArrayComponent =
  | Array<IconComponent>
  | Record<number, IconComponent>

export const iconPropType = definePropType<IconComponent>([String, Object])

export const iconArrayPropType = definePropType<IconArrayComponent>([
  Object,
  Array,
])

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
