import { buildProps, definePropType } from '@element-plus/utils'

import type { Measurable } from './constants'
import type Trigger from './trigger.vue'

export interface PopperTriggerProps {
  /** @description Indicates the reference element to which the popper is attached */
  virtualRef?: Measurable
  /** @description Indicates whether virtual triggering is enabled */
  virtualTriggering?: boolean
  onMouseenter?: (e: MouseEvent) => void
  onMouseleave?: (e: MouseEvent) => void
  onClick?: (e: PointerEvent) => void
  onKeydown?: (e: KeyboardEvent) => void
  onFocus?: (e: FocusEvent) => void
  onBlur?: (e: FocusEvent) => void
  onContextmenu?: (e: PointerEvent) => void
  id?: string
  open?: boolean
}

/**
 * @deprecated Removed after 3.0.0, Use `PopperTriggerProps` instead.
 */
export const popperTriggerProps = buildProps({
  /** @description Indicates the reference element to which the popper is attached */
  virtualRef: {
    type: definePropType<Measurable>(Object),
  },
  /** @description Indicates whether virtual triggering is enabled */
  virtualTriggering: Boolean,
  onMouseenter: {
    type: definePropType<(e: MouseEvent) => void>(Function),
  },
  onMouseleave: {
    type: definePropType<(e: MouseEvent) => void>(Function),
  },
  onClick: {
    type: definePropType<(e: PointerEvent) => void>(Function),
  },
  onKeydown: {
    type: definePropType<(e: KeyboardEvent) => void>(Function),
  },
  onFocus: {
    type: definePropType<(e: FocusEvent) => void>(Function),
  },
  onBlur: {
    type: definePropType<(e: FocusEvent) => void>(Function),
  },
  onContextmenu: {
    type: definePropType<(e: PointerEvent) => void>(Function),
  },
  id: String,
  open: Boolean,
} as const)

export type PopperTriggerInstance = InstanceType<typeof Trigger> & unknown

/** @deprecated use `popperTriggerProps` instead, and it will be deprecated in the next major version */
export const usePopperTriggerProps = popperTriggerProps

/** @deprecated use `PopperTriggerInstance` instead, and it will be deprecated in the next major version */
export type GPopperArrowTrigger = PopperTriggerInstance
