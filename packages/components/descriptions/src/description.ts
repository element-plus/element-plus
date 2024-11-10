import { buildProps } from '@element-plus/utils'
import { useSizeProp } from '@element-plus/hooks'

import type { ExtractPropTypes } from 'vue'
import type Description from './description.vue'

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
    default: '',
  },
} as const)

export type DescriptionProps = ExtractPropTypes<typeof descriptionProps>
export type DescriptionInstance = InstanceType<typeof Description>
