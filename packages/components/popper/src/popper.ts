import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes, PropType } from 'vue'

const effects = ['light', 'dark'] as const
const triggers = ['click', 'contextmenu', 'hover', 'focus'] as const

export const Effect = {
  LIGHT: 'light',
  DARK: 'dark',
}

export type PopperEffect = typeof effects[number]
export type PopperTrigger = typeof triggers[number]

export const usePopperProps = buildProps({
  role: {
    type: String as PropType<
      'dialog' | 'grid' | 'listbox' | 'menu' | 'tooltip' | 'tree'
    >,
    default: 'tooltip',
  },
} as const)

export type UsePopperProps = ExtractPropTypes<typeof usePopperProps>
