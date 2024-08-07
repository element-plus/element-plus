import {
  buildProps,
  definePropType,
  iconPropType,
  isBoolean,
  isNumber,
  isString,
  isValidComponentSize,
} from '@element-plus/utils'
import {
  CHANGE_EVENT,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import { useAriaProps } from '@element-plus/hooks'
import type { ComponentSize } from '@element-plus/constants'
import type Switch from './switch.vue'
import type { ExtractPropTypes, PropType } from 'vue'

export const switchProps = buildProps({
  /**
   * @description binding value, it should be equivalent to either `active-value` or `inactive-value`, by default it's `boolean` type
   */
  modelValue: {
    type: [Boolean, String, Number],
    default: false,
  },
  /**
   * @description whether Switch is disabled
   */
  disabled: Boolean,
  /**
   * @description whether Switch is in loading state
   */
  loading: Boolean,
  /**
   * @description size of Switch
   */
  size: {
    type: String as PropType<ComponentSize>,
    validator: isValidComponentSize,
  },
  /**
   * @description width of Switch
   */
  width: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description whether icon or text is displayed inside dot, only the first character will be rendered for text
   */
  inlinePrompt: Boolean,
  /**
   * @description component of the icon displayed in action when in `off` state
   */
  inactiveActionIcon: {
    type: iconPropType,
  },
  /**
   * @description component of the icon displayed in action when in `on` state
   */
  activeActionIcon: {
    type: iconPropType,
  },
  /**
   * @description component of the icon displayed when in `on` state, overrides `active-text`
   */
  activeIcon: {
    type: iconPropType,
  },
  /**
   * @description component of the icon displayed when in `off` state, overrides `inactive-text`
   */
  inactiveIcon: {
    type: iconPropType,
  },
  /**
   * @description text displayed when in `on` state
   */
  activeText: {
    type: String,
    default: '',
  },
  /**
   * @description text displayed when in `off` state
   */
  inactiveText: {
    type: String,
    default: '',
  },
  /**
   * @description switch value when in `on` state
   */
  activeValue: {
    type: [Boolean, String, Number],
    default: true,
  },
  /**
   * @description switch value when in `off` state
   */
  inactiveValue: {
    type: [Boolean, String, Number],
    default: false,
  },
  /**
   * @description input name of Switch
   */
  name: {
    type: String,
    default: '',
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
  /**
   * @description before-change hook before the switch state changes. If `false` is returned or a `Promise` is returned and then is rejected, will stop switching
   */
  beforeChange: {
    type: definePropType<() => Promise<boolean> | boolean>(Function),
  },
  /**
   * @description id for input
   */
  id: String,
  /**
   * @description tabindex for input
   */
  tabindex: {
    type: [String, Number],
  },
  ...useAriaProps(['ariaLabel']),
} as const)

export type SwitchProps = ExtractPropTypes<typeof switchProps>

export const switchEmits = {
  [UPDATE_MODEL_EVENT]: (val: boolean | string | number) =>
    isBoolean(val) || isString(val) || isNumber(val),
  [CHANGE_EVENT]: (val: boolean | string | number) =>
    isBoolean(val) || isString(val) || isNumber(val),
  [INPUT_EVENT]: (val: boolean | string | number) =>
    isBoolean(val) || isString(val) || isNumber(val),
}
export type SwitchEmits = typeof switchEmits

export type SwitchInstance = InstanceType<typeof Switch>
