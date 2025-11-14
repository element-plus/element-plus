import { isNil } from 'lodash-unified'
import { buildProps, definePropType, isString } from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type {
  ComputedRef,
  ExtractPropTypes,
  InjectionKey,
  __ExtractPublicPropTypes,
} from 'vue'
import type ColorPickerPanel from './color-picker-panel.vue'
import type Color from './utils/color'

export const colorPickerPanelProps = buildProps({
  /**
   * @description binding value
   */
  modelValue: {
    type: definePropType<string | null>(String),
    default: undefined,
  },
  /**
   * @description whether the color picker is bordered
   */
  border: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether to display the alpha slider
   */
  showAlpha: Boolean,
  /**
   * @description color format of v-model
   */
  colorFormat: String,
  /**
   * @description whether to disable the color picker
   */
  disabled: Boolean,
  /**
   * @description predefined color options
   */
  predefine: {
    type: definePropType<string[]>(Array),
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
} as const)
export const colorPickerPanelEmits = {
  [UPDATE_MODEL_EVENT]: (val: string | null) => isString(val) || isNil(val),
}

export type ColorPickerPanelProps = ExtractPropTypes<
  typeof colorPickerPanelProps
>
export type ColorPickerPanelPropsPublic = __ExtractPublicPropTypes<
  typeof colorPickerPanelProps
>
export type ColorPickerPanelEmits = typeof colorPickerPanelEmits
export type ColorPickerPanelInstance = InstanceType<typeof ColorPickerPanel> &
  unknown

export interface ColorPickerPanelContext {
  currentColor: ComputedRef<string>
}

export interface CommonColorContext {
  color: Color
}

export const ROOT_COMMON_COLOR_INJECTION_KEY: InjectionKey<CommonColorContext> =
  Symbol('colorCommonPickerKey')
export const colorPickerPanelContextKey: InjectionKey<ColorPickerPanelContext> =
  Symbol('colorPickerPanelContextKey')
