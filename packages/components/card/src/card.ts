import { buildProps, definePropType } from '@element-plus/utils'

import type {
  ExtractPropTypes,
  InjectionKey,
  StyleValue,
  __ExtractPublicPropTypes,
} from 'vue'

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
    type: definePropType<StyleValue>([String, Object, Array]),
    default: '',
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
export type CardProps = ExtractPropTypes<typeof cardProps>
export type CardPropsPublic = __ExtractPublicPropTypes<typeof cardProps>
export interface CardConfigContext {
  shadow?: string
}

export const cardContextKey: InjectionKey<CardConfigContext> =
  Symbol('cardContextKey')
