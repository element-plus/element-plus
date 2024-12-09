import { isNil } from 'lodash-unified'
import { buildProps, definePropType, isString } from '@element-plus/utils'
import { useAriaProps, useSizeProp } from '@element-plus/hooks'
import { useTooltipContentProps } from '@element-plus/components/tooltip'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type { ComputedRef, ExtractPropTypes, InjectionKey } from 'vue'
import type ColorPicker from './color-picker.vue'

export const colorPickerProps = buildProps({
  /**
   * @description binding value
   */
  modelValue: String,
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
  disabled: Boolean,
  /**
   * @description size of ColorPicker
   */
  size: useSizeProp,
  /**
   * @description custom class name for ColorPicker's dropdown
   */
  popperClass: {
    type: String,
    default: '',
  },
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
  ...useAriaProps(['ariaLabel']),
} as const)
export const colorPickerEmits = {
  [UPDATE_MODEL_EVENT]: (val: string | null) => isString(val) || isNil(val),
  [CHANGE_EVENT]: (val: string | null) => isString(val) || isNil(val),
  activeChange: (val: string | null) => isString(val) || isNil(val),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
}

export type ColorPickerProps = ExtractPropTypes<typeof colorPickerProps>
export type ColorPickerEmits = typeof colorPickerEmits
export type ColorPickerInstance = InstanceType<typeof ColorPicker>

export interface ColorPickerContext {
  currentColor: ComputedRef<string>
}

export const colorPickerContextKey: InjectionKey<ColorPickerContext> = Symbol(
  'colorPickerContextKey'
)
