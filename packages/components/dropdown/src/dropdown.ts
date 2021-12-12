import { EVENT_CODE } from '@element-plus/utils/aria'
import { buildProps, definePropType } from '@element-plus/utils/props'
import { createCollectionWithScope } from '@element-plus/components/collection'

import type {
  ComponentInternalInstance,
  Component,
  ComputedRef,
  Ref,
} from 'vue'
import type { Nullable } from '@element-plus/utils/types'

export interface IElDropdownInstance {
  instance?: ComponentInternalInstance
  dropdownSize?: ComputedRef<string>
  visible?: Ref<boolean>
  handleClick?: () => void
  commandHandler?: (...arg) => void
  show?: () => void
  hide?: () => void
  trigger?: ComputedRef<string>
  hideOnClick?: ComputedRef<boolean>
  triggerElm?: ComputedRef<Nullable<HTMLButtonElement>>
}

export const dropdownItemProps = buildProps({
  command: {
    type: [Object, String, Number],
    default: () => ({}),
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: definePropType<string | Component>([String, Object]),
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
