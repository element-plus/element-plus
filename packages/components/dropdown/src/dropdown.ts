import {
  EVENT_CODE,
  buildProps,
  definePropType,
  iconPropType,
} from '@element-plus/utils-v2'
import { createCollectionWithScope } from '@element-plus/components/collection'
import {
  useTooltipTriggerProps,
  useTooltipContentProps,
} from '@element-plus/components/tooltip'
import type { Options } from '@popperjs/core'

import type { ButtonType } from '@element-plus/components/button'
import type { Placement } from '@element-plus/components/popper'
import type { ComponentInternalInstance, ComputedRef } from 'vue'
import type { Nullable } from '@element-plus/utils-v2'

export interface IElDropdownInstance {
  instance?: ComponentInternalInstance
  dropdownSize?: ComputedRef<string>
  handleClick?: () => void
  commandHandler?: (...arg) => void
  show?: () => void
  hide?: () => void
  trigger?: ComputedRef<string>
  hideOnClick?: ComputedRef<boolean>
  triggerElm?: ComputedRef<Nullable<HTMLButtonElement>>
}

export const dropdownProps = {
  trigger: useTooltipTriggerProps.trigger,

  effect: {
    ...useTooltipContentProps.effect,
    default: 'light',
  },
  ...buildProps({
    type: {
      type: definePropType<ButtonType>(String),
    },
    placement: {
      type: definePropType<Placement>(String),
      default: 'bottom',
    },
    popperOptions: {
      type: definePropType<Partial<Options>>(Object),
      default: () => ({}),
    },
    size: {
      type: String,
      default: '',
    },
    splitButton: Boolean,
    hideOnClick: {
      type: Boolean,
      default: true,
    },
    loop: {
      type: Boolean,
    },
    showTimeout: {
      type: Number,
      default: 150,
    },
    hideTimeout: {
      type: Number,
      default: 150,
    },
    tabindex: {
      type: definePropType<number | string>([Number, String]),
      default: 0,
    },
    maxHeight: {
      type: definePropType<number | string>([Number, String]),
      default: '',
    },
    popperClass: {
      type: String,
      default: '',
    },
  } as const),
} as const

export const dropdownItemProps = buildProps({
  command: {
    type: [Object, String, Number],
    default: () => ({}),
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
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
