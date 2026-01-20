import { isNil } from 'lodash-unified'
import { buildProps, definePropType, isString } from '@element-plus/utils'
import {
  useAriaProps,
  useEmptyValuesProps,
  useSizeProp,
} from '@element-plus/hooks'
import { useTooltipContentProps } from '@element-plus/components/tooltip'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type { ExtractPublicPropTypes } from 'vue'
import type ColorPicker from './color-picker.vue'
import type { UseEmptyValuesProps } from '@element-plus/hooks'
import type { ComponentSize } from '@element-plus/constants'
import type { ElTooltipContentProps } from '@element-plus/components/tooltip'

export interface ColorPickerProps extends UseEmptyValuesProps {
  /**
   * @description when color-picker inactive and persistent is false, the color panel will be destroyed
   */
  persistent?: boolean
  /**
   * @description binding value
   */
  modelValue?: string | null
  /**
   * @description ColorPicker id
   */
  id?: string
  /**
   * @description whether to display the alpha slider
   */
  showAlpha?: boolean
  /**
   * @description color format of v-model
   */
  colorFormat?: string
  /**
   * @description whether to disable the ColorPicker
   */
  disabled?: boolean
  /**
   * @description whether to show clear button
   */
  clearable?: boolean
  /**
   * @description size of ColorPicker
   */
  size?: ComponentSize
  /**
   * @description custom class name for ColorPicker's dropdown
   */
  popperClass?: ElTooltipContentProps['popperClass']
  /**
   * @description custom style for ColorPicker's dropdown
   */
  popperStyle?: ElTooltipContentProps['popperStyle']
  /**
   * @description ColorPicker tabindex
   */
  tabindex?: string | number
  /**
   * @description whether color-picker popper is teleported to the body
   */
  teleported?: ElTooltipContentProps['teleported']
  /**
   * @description which color-picker panel appends to
   */
  appendTo?: ElTooltipContentProps['appendTo']
  /**
   * @description predefined color options
   */
  predefine?: string[]
  /**
   * @description whether to trigger form validation
   */
  validateEvent?: boolean
  /**
   * @description native `aria-label` attribute
   */
  ariaLabel?: string
}

/**
 * @deprecated Removed after 3.0.0, Use `ColorPickerProps` instead.
 */
export const colorPickerProps = buildProps({
  /**
   * @description when color-picker inactive and persistent is false, the color panel will be destroyed
   */
  persistent: {
    type: Boolean,
    default: true,
  },
  /**
   * @description binding value
   */
  modelValue: {
    type: definePropType<string | null>(String),
    default: undefined,
  },
  /**
   * @description ColorPicker id
   */
  id: String,
  /**
   * @description whether to display the alpha slider
   */
  showAlpha: Boolean,
  /**
   * @description color format of v-model
   */
  colorFormat: String,
  /**
   * @description whether to disable the ColorPicker
   */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description whether to show clear button
   */
  clearable: {
    type: Boolean,
    default: true,
  },
  /**
   * @description size of ColorPicker
   */
  size: useSizeProp,
  /**
   * @description custom class name for ColorPicker's dropdown
   */
  popperClass: useTooltipContentProps.popperClass,
  /**
   * @description custom style for ColorPicker's dropdown
   */
  popperStyle: useTooltipContentProps.popperStyle,
  /**
   * @description ColorPicker tabindex
   */
  tabindex: {
    type: [String, Number],
    default: 0,
  },
  /**
   * @description whether color-picker popper is teleported to the body
   */
  teleported: useTooltipContentProps.teleported,
  /**
   * @description which color-picker panel appends to
   */
  appendTo: useTooltipContentProps.appendTo,
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
  ...useEmptyValuesProps,
  ...useAriaProps(['ariaLabel']),
} as const)
export const colorPickerEmits = {
  [UPDATE_MODEL_EVENT]: (val: string | null) => isString(val) || isNil(val),
  [CHANGE_EVENT]: (val: string | null) => isString(val) || isNil(val),
  activeChange: (val: string | null) => isString(val) || isNil(val),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
}

/**
 * @deprecated Removed after 3.0.0, Use `ColorPickerProps` instead.
 */
export type ColorPickerPropsPublic = ExtractPublicPropTypes<
  typeof colorPickerProps
>
export type ColorPickerEmits = typeof colorPickerEmits
export type ColorPickerInstance = InstanceType<typeof ColorPicker> & unknown

/**
 * @description default values for ColorPickerProps, used in components that extend ColorPickerProps
 */
export const ColorPickerPropsDefaults = {
  persistent: true,
  modelValue: undefined,
  clearable: true,
  tabindex: 0,
  validateEvent: true,
  disabled: undefined,
  teleported: true,
  valueOnClear: undefined,
  popperStyle: undefined,
} as const
