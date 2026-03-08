/* eslint-disable @typescript-eslint/no-unused-vars */

import { buildProps } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type Popper from './popper.vue'

const effects = ['light', 'dark'] as const
const triggers = ['click', 'contextmenu', 'hover', 'focus'] as const

export const Effect = {
  LIGHT: 'light',
  DARK: 'dark',
} as const

export const roleTypes = [
  'dialog',
  'grid',
  'group',
  'listbox',
  'menu',
  'navigation',
  'tooltip',
  'tree',
] as const

export type PopperEffect =
  | (typeof effects)[number]
  | (string & NonNullable<unknown>)
export type PopperTrigger = (typeof triggers)[number]

export interface PopperProps {
  /**
   * @description role determines how aria attributes are distributed
   */
  role?: (typeof roleTypes)[number]
}

/**
 * @deprecated Removed after 3.0.0, Use `PopperProps` instead.
 */
export const popperProps = buildProps({
  role: {
    type: String,
    values: roleTypes,
    default: 'tooltip',
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `PopperProps` instead.
 */
export type PopperPropsPublic = ExtractPublicPropTypes<typeof popperProps>

export type PopperInstance = InstanceType<typeof Popper> & unknown

/** @deprecated use `popperProps` instead, and it will be deprecated in the next major version */
export const usePopperProps = popperProps

/** @deprecated use `PopperProps` instead, and it will be deprecated in the next major version */
export type UsePopperProps = PopperProps
