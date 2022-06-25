import { buildProps, definePropType } from '@element-plus/utils'
import {
  ON_RELEASE_FOCUS_EVT,
  ON_TRAP_FOCUS_EVT,
} from '../../../tokens/focus-trap'

import type { ExtractPropTypes } from 'vue'
import type FocusTrap from './focus-trap.vue'

export const focusTrapProps = buildProps({
  loop: {
    type: Boolean,
    default: false,
  },
  trapped: {
    type: Boolean,
    default: false,
  },
  focusTrapEl: {
    type: definePropType<HTMLElement>(Object),
    default: undefined,
  },
  focusStartEl: {
    type: definePropType<'container' | 'first' | HTMLElement>([Object, String]),
    default: 'first',
  },
} as const)
export type FocusTrapProps = ExtractPropTypes<typeof focusTrapProps>

export const focusTrapEmits = [
  ON_TRAP_FOCUS_EVT,
  ON_RELEASE_FOCUS_EVT,
  'focusin',
  'focusout',
  'focusout-prevented',
  'release-requested',
]

export const FocusTrapEmits = typeof focusTrapEmits

export type FocusTrapInstance = InstanceType<typeof FocusTrap>
