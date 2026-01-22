import { isNil } from 'lodash-unified'
import { buildProps, definePropType, isString } from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type { ComputedRef, ExtractPublicPropTypes, InjectionKey } from 'vue'
import type ColorPickerPanel from './color-picker-panel.vue'
import type Color from './utils/color'

export interface ColorPickerPanelProps {
  /**
   * @description binding value
   */
  modelValue?: string | null
  /**
   * @description whether the color picker is bordered
   */
  border?: boolean
  /**
   * @description whether to display the alpha slider
   */
  showAlpha?: boolean
  /**
   * @description color format of v-model
   */
  colorFormat?: string
  /**
   * @description whether to disable the color picker
   */
  disabled?: boolean
  /**
   * @description predefined color options
   */
  predefine?: string[]
  /**
   * @description whether to trigger form validation
   */
  validateEvent?: boolean
  /**
   * @description class names will passed to <hue-slider />
   */
  hueSliderClass?: any
  /**
   * @description styles will passed to <hue-slider />
   */
  hueSliderStyle?: CSSStyleValue
}

/**
 * @deprecated Removed after 3.0.0, Use `ColorPickerPanelProps` instead.
 */
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

/**
 * @deprecated Removed after 3.0.0, Use `ColorPickerPanelProps` instead.
 */
export type ColorPickerPanelPropsPublic = ExtractPublicPropTypes<
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
