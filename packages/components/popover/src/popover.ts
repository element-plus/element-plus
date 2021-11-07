import { buildProps, definePropType } from '@element-plus/utils/props'
import { popperProps } from '@element-plus/components/popper'
import { UPDATE_VISIBLE_EVENT } from '@element-plus/utils/constants'
import type { ExtractPropTypes } from 'vue'
import type { TriggerType } from '@element-plus/components/popper'

export const SHOW_EVENT = 'show'
export const HIDE_EVENT = 'hide'

export const popoverProps = buildProps({
  ...popperProps,
  content: {
    type: String,
  },
  trigger: {
    type: definePropType<TriggerType>(String),
    default: 'click',
  },
  title: {
    type: String,
  },
  transition: {
    type: String,
    default: 'fade-in-linear',
  },
  width: {
    type: [String, Number],
    default: 150,
  },
  appendToBody: {
    type: Boolean,
    default: true,
  },
  tabindex: {
    type: [String, Number],
  },
} as const)
export type PopoverProps = ExtractPropTypes<typeof popoverProps>

export const popoverEmits = {
  [UPDATE_VISIBLE_EVENT]: (val: boolean) => typeof val === 'boolean',
  'after-enter': () => true,
  'after-leave': () => true,
  SHOW_EVENT: () => true,
  HIDE_EVENT: () => true,
}
export type PopoverEmits = typeof popoverEmits
