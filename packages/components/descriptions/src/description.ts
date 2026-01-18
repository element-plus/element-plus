import { buildProps } from '@element-plus/utils'
import { useSizeProp } from '@element-plus/hooks'
import { ComponentSize } from '@element-plus/constants'

import type { ExtractPublicPropTypes } from 'vue'
import type Description from './description.vue'

export interface DescriptionProps {
  /**
   * @description with or without border
   * @default false
   */
  border?: boolean
  /**
   * @description numbers of `Descriptions Item` in one line
   * @default 3
   */
  column?: number
  /**
   * @description direction of list
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * @description size of list
   * @default ''
   */
  size?: ComponentSize
  /**
   * @description title text, display on the top left
   * @default ''
   */
  title?: string
  /**
   * @description extra text, display on the top right
   * @default ''
   */
  extra?: string
  /**
   * @description width of every label column
   */
  labelWidth?: string | number
}

/**
 * @deprecated Removed after 3.0.0, Use `DescriptionProps` instead.
 */
export const descriptionProps = buildProps({
  /**
   * @description with or without border
   */
  border: Boolean,
  /**
   * @description numbers of `Descriptions Item` in one line
   */
  column: {
    type: Number,
    default: 3,
  },
  /**
   * @description direction of list
   */
  direction: {
    type: String,
    values: ['horizontal', 'vertical'],
    default: 'horizontal',
  },
  /**
   * @description size of list
   */
  size: useSizeProp,
  /**
   * @description title text, display on the top left
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * @description extra text, display on the top right
   */
  extra: {
    type: String,
    default: '',
  },
  /**
   * @description width of every label column
   */
  labelWidth: {
    type: [String, Number],
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `DescriptionProps` instead.
 */
export type DescriptionPropsPublic = ExtractPublicPropTypes<
  typeof descriptionProps
>
export type DescriptionInstance = InstanceType<typeof Description> & unknown
