import type { InjectionKey, StyleValue } from 'vue'

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
export interface CardConfigContext {
  shadow?: string
}

export const cardContextKey: InjectionKey<CardConfigContext> =
  Symbol('cardContextKey')
