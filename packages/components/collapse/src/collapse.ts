import {
  buildProps,
  definePropType,
  isArray,
  isNumber,
  isString,
  mutable,
} from '@element-plus/utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type { ExtractPublicPropTypes } from 'vue'
import type { Arrayable, Awaitable } from '@element-plus/utils'

export type CollapseActiveName = string | number
export type CollapseModelValue = Arrayable<CollapseActiveName>

export type CollapseIconPositionType = 'left' | 'right'

export const emitChangeFn = (value: CollapseModelValue) =>
  isNumber(value) || isString(value) || isArray(value)

export interface CollapseProps {
  /**
   * @description whether to activate accordion mode
   */
  accordion?: boolean
  /**
   * @description currently active panel, the type is `string` in accordion mode, otherwise it is `array`
   */
  modelValue?: CollapseModelValue
  /**
   * @description set expand icon position
   */
  expandIconPosition?: CollapseIconPositionType
  /**
   * @description before-collapse hook before the collapse state changes. If `false` is returned or a `Promise` is returned and then is rejected, will stop collapsing
   */
  beforeCollapse?: (name: CollapseActiveName) => Awaitable<boolean>
}

/**
 * @deprecated Removed after 3.0.0, Use `CollapseProps` instead.
 */
export const collapseProps = buildProps({
  /**
   * @description whether to activate accordion mode
   */
  accordion: Boolean,
  /**
   * @description currently active panel, the type is `string` in accordion mode, otherwise it is `array`
   */
  modelValue: {
    type: definePropType<CollapseModelValue>([Array, String, Number]),
    default: () => mutable([] as const),
  },
  /**
   * @description set expand icon position
   */
  expandIconPosition: {
    type: definePropType<CollapseIconPositionType>([String]),
    default: 'right',
  },
  /**
   * @description before-collapse hook before the collapse state changes. If `false` is returned or a `Promise` is returned and then is rejected, will stop collapsing
   */
  beforeCollapse: {
    type: definePropType<(name: CollapseActiveName) => Awaitable<boolean>>(
      Function
    ),
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `CollapseProps` instead.
 */
export type CollapsePropsPublic = ExtractPublicPropTypes<typeof collapseProps>

export const collapseEmits = {
  [UPDATE_MODEL_EVENT]: emitChangeFn,
  [CHANGE_EVENT]: emitChangeFn,
}
export type CollapseEmits = typeof collapseEmits
