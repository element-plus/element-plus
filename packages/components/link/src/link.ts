import { buildProps, iconPropType } from '@element-plus/utils'

import type { Component, ExtractPublicPropTypes, PropType } from 'vue'
import type Link from './link.vue'

export interface LinkProps {
  /**
   * @description type
   */
  type?: 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'default'
  /**
   * @description when underlines should appear
   */
  underline?: boolean | 'always' | 'never' | 'hover'

  /**
   * @description whether the component is disabled
   */
  disabled?: boolean
  /**
   * @description same as native hyperlink's `href`
   */
  href?: string
  /**
   * @description same as native hyperlink's `target`
   */
  target?:
    | '_blank'
    | '_parent'
    | '_self'
    | '_top'
    | (string & NonNullable<unknown>)

  /**
   * @description icon component
   */
  icon?: string | Component
}

/**
 * @deprecated Removed after 3.0.0, Use `LinkProps` instead.
 */
export const linkProps = buildProps({
  /**
   * @description type
   */
  type: {
    type: String,
    values: ['primary', 'success', 'warning', 'info', 'danger', 'default'],
    default: undefined,
  },
  /**
   * @description when underlines should appear
   */
  underline: {
    type: [Boolean, String],
    values: [true, false, 'always', 'never', 'hover'],
    default: undefined,
  },
  /**
   * @description whether the component is disabled
   */
  disabled: Boolean,
  /**
   * @description same as native hyperlink's `href`
   */
  href: { type: String, default: '' },
  /**
   * @description same as native hyperlink's `target`
   */
  target: {
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | string>,
    default: '_self',
  },
  /**
   * @description icon component
   */
  icon: {
    type: iconPropType,
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `LinkProps` instead.
 */
export type LinkPropsPublic = ExtractPublicPropTypes<typeof linkProps>

export const linkEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type LinkEmits = typeof linkEmits

export type LinkInstance = InstanceType<typeof Link> & unknown
export interface LinkConfigContext {
  type?: LinkProps['type']
  underline?: LinkProps['underline']
}
