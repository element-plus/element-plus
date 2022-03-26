import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'

const effects = ['light', 'dark'] as const
const triggers = ['click', 'contextmenu', 'hover', 'focus'] as const

export const Effect = {
  LIGHT: 'light',
  DARK: 'dark',
}

export type PopperEffect = typeof effects[number]
export type PopperTrigger = typeof triggers[number]

export const usePopperProps = buildProps({
  autoClose: {
    type: Number,
    default: 0,
  },
  cutoff: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
} as const)

export type UsePopperProps = ExtractPropTypes<typeof usePopperProps>
