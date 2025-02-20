import { buildProps, definePropType, iconPropType } from '@element-plus/utils'
import { EVENT_CODE } from '@element-plus/constants'
import { createCollectionWithScope } from '@element-plus/components/collection'
import {
  useTooltipContentProps,
  useTooltipTriggerProps,
} from '@element-plus/components/tooltip'

import { type Placement, roleTypes } from '@element-plus/components/popper'
import type { Options } from '@popperjs/core'
import type { ButtonProps, ButtonType } from '@element-plus/components/button'
import type { ComponentInternalInstance, ComputedRef } from 'vue'
import type { Nullable } from '@element-plus/utils'

export interface IElDropdownInstance {
  instance?: ComponentInternalInstance
  dropdownSize?: ComputedRef<string>
  handleClick?: () => void
  commandHandler?: (...arg: any[]) => void
  show?: () => void
  hide?: () => void
  trigger?: ComputedRef<string>
  hideOnClick?: ComputedRef<boolean>
  triggerElm?: ComputedRef<Nullable<HTMLButtonElement>>
}

export const dropdownProps = buildProps({
  /**
   * @description how to trigger
   */
  trigger: useTooltipTriggerProps.trigger,
  triggerKeys: {
    type: definePropType<string[]>(Array),
    default: () => [
      EVENT_CODE.enter,
      EVENT_CODE.numpadEnter,
      EVENT_CODE.space,
      EVENT_CODE.down,
    ],
  },
  effect: {
    ...useTooltipContentProps.effect,
    default: 'light',
  },
  /**
   * @description menu button type, refer to `Button` Component, only works when `split-button` is true
   */
  type: {
    type: definePropType<ButtonType>(String),
  },
  /**
   * @description placement of pop menu
   */
  placement: {
    type: definePropType<Placement>(String),
    default: 'bottom',
  },
  /**
   * @description [popper.js](https://popper.js.org/docs/v2/) parameters
   */
  popperOptions: {
    type: definePropType<Partial<Options>>(Object),
    default: () => ({}),
  },
  id: String,
  /**
   * @description menu size, also works on the split button
   */
  size: {
    type: String,
    default: '',
  },
  /**
   * @description whether a button group is displayed
   */
  splitButton: Boolean,
  /**
   * @description whether to hide menu after clicking menu-item
   */
  hideOnClick: {
    type: Boolean,
    default: true,
  },
  loop: {
    type: Boolean,
    default: true,
  },
  /**
   * @description delay time before show a dropdown (only works when trigger is `hover`)
   */
  showTimeout: {
    type: Number,
    default: 150,
  },
  /**
   * @description delay time before hide a dropdown (only works when trigger is `hover`)
   */
  hideTimeout: {
    type: Number,
    default: 150,
  },
  /**
   * @description [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Dropdown
   */
  tabindex: {
    type: definePropType<number | string>([Number, String]),
    default: 0,
  },
  /**
   * @description the max height of menu
   */
  maxHeight: {
    type: definePropType<number | string>([Number, String]),
    default: '',
  },
  /**
   * @description custom class name for Dropdown's dropdown
   */
  popperClass: {
    type: String,
    default: '',
  },
  /**
   * @description whether to disable
   */
  disabled: Boolean,
  /**
   * @description the ARIA role attribute for the dropdown menu. Depending on the use case, you may want to change this to 'navigation'
   */
  role: {
    type: String,
    values: roleTypes,
    default: 'menu',
  },
  buttonProps: {
    type: definePropType<ButtonProps>(Object),
  },
  /**
   * @description whether the dropdown popup is teleported to the body
   */
  teleported: useTooltipContentProps.teleported,
  /**
   * @description when dropdown inactive and `persistent` is `false` , dropdown menu will be destroyed
   */
  persistent: {
    type: Boolean,
    default: true,
  },
} as const)

export const dropdownItemProps = buildProps({
  /**
   * @description a command to be dispatched to Dropdown's `command` callback
   */
  command: {
    type: [Object, String, Number],
    default: () => ({}),
  },
  /**
   * @description whether the item is disabled
   */
  disabled: Boolean,
  /**
   * @description whether a divider is displayed
   */
  divided: Boolean,
  textValue: String,
  /**
   * @description custom icon
   */
  icon: {
    type: iconPropType,
  },
} as const)

export const dropdownMenuProps = buildProps({
  onKeydown: { type: definePropType<(e: KeyboardEvent) => void>(Function) },
})

export const FIRST_KEYS = [
  EVENT_CODE.down,
  EVENT_CODE.pageDown,
  EVENT_CODE.home,
]

export const LAST_KEYS = [EVENT_CODE.up, EVENT_CODE.pageUp, EVENT_CODE.end]

export const FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS]

const {
  ElCollection,
  ElCollectionItem,
  COLLECTION_INJECTION_KEY,
  COLLECTION_ITEM_INJECTION_KEY,
} = createCollectionWithScope('Dropdown')

export {
  ElCollection,
  ElCollectionItem,
  COLLECTION_INJECTION_KEY as DROPDOWN_COLLECTION_INJECTION_KEY,
  COLLECTION_ITEM_INJECTION_KEY as DROPDOWN_COLLECTION_ITEM_INJECTION_KEY,
}
