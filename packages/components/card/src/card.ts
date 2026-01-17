import { buildProps, definePropType, mutable } from '@element-plus/utils'

import type { ExtractPublicPropTypes, InjectionKey, StyleValue } from 'vue'

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
   * @description custom class name of card footer
   */
  headerClass?: string
  /**
   * @description custom class name of card body
   */
  bodyClass?: string
  /**
   * @description custom class name of card footer
   */
  footerClass?: string
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
    type: definePropType<StyleValue>([Object, Array, String]),
    default: () => mutable({} as const),
  },
  /**
   * @description custom class name of card footer
   */
  headerClass: String,
  /**
   * @description custom class name of card body
   */
  bodyClass: String,
  /**
   * @description custom class name of card footer
   */
  footerClass: String,
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
  shadow?: string
}

export const cardContextKey: InjectionKey<CardConfigContext> =
  Symbol('cardContextKey')
