import { buildProps, definePropType } from '@element-plus/utils/props'
import { Effect } from '@element-plus/components/popper'
import type { ComponentInternalInstance, ComputedRef, Ref } from 'vue'
import type { Nullable } from '@element-plus/utils/types'
import type { Placement } from '@element-plus/components/popper'
import type { TriggerType } from '@element-plus/hooks/use-popper/use-target-events'
import type { ButtonType } from '@element-plus/components/button'

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
  disabled: {
    type: Boolean,
    default: false,
  },
} as const)

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
