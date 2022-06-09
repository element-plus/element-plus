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
import type { Component } from 'vue'

type IconType = Record<string, Component>

export const iconPropType = definePropType<string | Component>([
  String,
  Object,
  Function,
])

export const CloseComponents: IconType = {
  Close,
}

export const TypeComponents: IconType = {
  Close,
  SuccessFilled,
  InfoFilled,
  WarningFilled,
  CircleCloseFilled,
}

export const TypeComponentsMap: IconType = {
  success: SuccessFilled,
  warning: WarningFilled,
  error: CircleCloseFilled,
  info: InfoFilled,
}

export const ValidateComponentsMap: IconType = {
  validating: Loading,
  success: CircleCheck,
  error: CircleClose,
}
