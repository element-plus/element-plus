import { isNil } from 'lodash-unified'
import { buildProps, definePropType, isString } from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type { ComputedRef, ExtractPublicPropTypes, InjectionKey } from 'vue'
import type { ColorFormats } from '@ctrl/tinycolor'
import type ColorPickerPanel from './color-picker-panel.vue'
import type Color from './utils/color'

/** Color format options for the format selector (subset of ColorFormats used by panel) */
export const COLOR_FORMAT_OPTIONS: { value: ColorFormats; label: string }[] = [
  { value: 'rgb', label: 'RGB' },
  { value: 'prgb', label: 'PRGB' },
  { value: 'hex', label: 'HEX' },
  { value: 'hex3', label: 'HEX3' },
  { value: 'hex4', label: 'HEX4' },
  { value: 'hex6', label: 'HEX6' },
  { value: 'hex8', label: 'HEX8' },
  { value: 'name', label: 'NAME' },
  { value: 'hsl', label: 'HSL' },
  { value: 'hsv', label: 'HSV' },
]

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
  colorFormat?: ColorFormats
  /**
   * @description whether to disable the color picker
   */
  disabled?: boolean
  /**
   * @description whether to show the format selector so user can change color format manually
   */
  allowFormatSelect?: boolean
  /**
   * @description predefined color options
   */
  predefine?: string[]
  /**
   * @description whether to trigger form validation
   */
  validateEvent?: boolean
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
  colorFormat: {
    type: definePropType<ColorFormats>(String),
  },
  /**
   * @description whether to disable the color picker
   */
  disabled: Boolean,
  /**
   * @description whether to show the format selector so user can change color format manually
   */
  allowFormatSelect: Boolean,
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
  'update:colorFormat': (val: ColorFormats) => isString(val),
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
