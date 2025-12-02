import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type Splitter from './splitter.vue'

export const splitterProps = buildProps({
  layout: {
    type: String,
    default: 'horizontal',
    values: ['horizontal', 'vertical'] as const,
  },
  lazy: Boolean,
} as const)

export type SplitterProps = ExtractPropTypes<typeof splitterProps>
export type SplitterPropsPublic = __ExtractPublicPropTypes<typeof splitterProps>
export type SplitterInstance = InstanceType<typeof Splitter> & unknown

/* eslint-disable @typescript-eslint/no-unused-vars */
export const splitterEmits = {
  resizeStart: (index: number, sizes: number[]) => true,
  resize: (index: number, sizes: number[]) => true,
  resizeEnd: (index: number, sizes: number[]) => true,
  collapse: (index: number, type: 'start' | 'end', sizes: number[]) => true,
}
/* eslint-enable @typescript-eslint/no-unused-vars */

export type SplitterEmits = typeof splitterEmits
