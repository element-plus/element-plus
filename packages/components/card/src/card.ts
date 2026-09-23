import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPublicPropTypes, InjectionKey, StyleValue } from 'vue'
import type { ClassValue } from '@element-plus/utils'

export interface CardProps {
  /**
   * @description title of the card. Also accepts a DOM passed by `slot#header`
   */
  header?: string
  /**
   * @description content of footer. Also accepts a DOM passed by `slot#footer`
   */
  footer?: string
  /**
   * @description CSS style of card body
   */
  bodyStyle?: StyleValue
  /**
   * @description custom class name of card header
   */
  headerClass?: ClassValue
  /**
   * @description custom class name of card body
   */
  bodyClass?: ClassValue
  /**
   * @description custom class name of card footer
   */
  footerClass?: ClassValue
  /**
   * @description when to show card shadows
   */
  shadow?: 'always' | 'hover' | 'never'
}

/**
 * @deprecated Removed after 3.0.0, Use `CardProps` instead.
 */
export const cardProps = buildProps({
  /**
   * @description title of the card. Also accepts a DOM passed by `slot#header`
   */
  header: {
    type: String,
    default: '',
  },
  /**
   * @description content of footer. Also accepts a DOM passed by `slot#footer`
   */
  footer: {
    type: String,
    default: '',
  },
  /**
   * @description CSS style of card body
   */
  bodyStyle: {
    type: definePropType<StyleValue>([String, Object, Array, Boolean]),
    default: '',
  },
  /**
   * @description custom class name of card footer
   */
  headerClass: {
    type: definePropType<ClassValue>([String, Array, Object, Boolean]),
    default: undefined,
  },
  /**
   * @description custom class name of card body
   */
  bodyClass: {
    type: definePropType<ClassValue>([String, Array, Object, Boolean]),
    default: undefined,
  },
  /**
   * @description custom class name of card footer
   */
  footerClass: {
    type: definePropType<ClassValue>([String, Array, Object, Boolean]),
    default: undefined,
  },
  /**
   * @description when to show card shadows
   */
  shadow: {
    type: String,
    values: ['always', 'hover', 'never'],
    default: undefined,
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `CardProps` instead.
 */
export type CardPropsPublic = ExtractPublicPropTypes<typeof cardProps>
export interface CardConfigContext {
  shadow?: CardProps['shadow']
}

export const cardContextKey: InjectionKey<CardConfigContext> =
  Symbol('cardContextKey')
