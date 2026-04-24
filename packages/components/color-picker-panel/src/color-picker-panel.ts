import { isNil } from 'lodash-unified'
import { buildProps, definePropType, isString } from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type {
  ComputedRef,
  ExtractPublicPropTypes,
  InjectionKey,
  StyleValue,
} from 'vue'
import type { ColorFormats } from '@ctrl/tinycolor'
import type ColorPickerPanel from './color-picker-panel.vue'
import type Color from './utils/color'

type ClassObjectType = Record<string, boolean>
type ClassType = string | ClassObjectType | ClassType[]

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
   * @description predefined color options
   */
  predefine?: string[]
  /**
   * @description whether to trigger form validation
   */
  validateEvent?: boolean
  /**
   * @description class names will be passed to hue-slider
   */
  hueSliderClass?: ClassType
  /**
   * @description styles will be passed to hue-slider
   */
  hueSliderStyle?: StyleValue
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
  /**
   * @description class names will be passed to <hue-slider />
   */
  hueSliderClass: {
    type: definePropType<ClassType>([String, Array, Object]),
  },
  /**
   * @description styles will be passed to <hue-slider />
   */
  hueSliderStyle: {
    type: definePropType<StyleValue>([String, Array, Object]),
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
