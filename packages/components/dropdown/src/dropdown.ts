import { buildProps, definePropType } from '@element-plus/utils/props'
import { isBool, isArray } from '@element-plus/utils/util'
import { Effect } from '@element-plus/components/popper'

import type { Nullable } from '@element-plus/utils/types'
import type {
  ComponentInternalInstance,
  ComputedRef,
  Ref,
  ExtractPropTypes,
} from 'vue'
import type { TriggerType } from '@element-plus/hooks/use-popper/use-target-events'
import type { ButtonType } from '@element-plus/components/button/src/button'
import type { Placement } from '@element-plus/components/popper'

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

export const dropdownProps = buildProps({
  trigger: {
    type: definePropType<TriggerType | 'contextmenu'>(String),
    default: 'hover',
  },
  type: {
    type: definePropType<ButtonType>(String),
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
  placement: {
    type: definePropType<Placement>(String),
    default: 'bottom',
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
    type: [Number, String],
    default: 0,
  },
  effect: {
    type: definePropType<Effect>(String),
    default: Effect.LIGHT,
  },
  maxHeight: {
    type: [Number, String],
    default: '',
  },
} as const)

export type DropdownProps = ExtractPropTypes<typeof dropdownProps>

export const dropdownEmits = {
  ['visible-change']: (value: boolean) => isBool(value),
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
  command: (...args: any[]) => isArray(args),
}

export type DropdownEmits = typeof dropdownEmits
