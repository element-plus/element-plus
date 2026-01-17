import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type Divider from './divider.vue'

export type BorderStyle = CSSStyleDeclaration['borderStyle']

export interface DividerProps {
  direction?: 'horizontal' | 'vertical'
  contentPosition?: 'left' | 'center' | 'right'
  borderStyle?: BorderStyle
}

export const dividerProps = buildProps({
  /**
   * @description Set divider's direction
   */
  direction: {
    type: String,
    values: ['horizontal', 'vertical'],
    default: 'horizontal',
  },
  /**
   * @description Set the style of divider
   */
  contentPosition: {
    type: String,
    values: ['left', 'center', 'right'],
    default: 'center',
  },
  /**
   * @description the position of the customized content on the divider line
   */
  borderStyle: {
    type: definePropType<BorderStyle>(String),
    default: 'solid',
  },
} as const)
export type DividerPropsPublic = ExtractPublicPropTypes<typeof dividerProps>

export type DividerInstance = InstanceType<typeof Divider> & unknown
