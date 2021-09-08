import type { ComponentInternalInstance, ComputedRef, Ref } from 'vue'

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
