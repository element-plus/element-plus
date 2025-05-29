import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type Splitter from './splitter.vue'

export const splitterProps = buildProps({
  layout: {
    type: String,
    default: 'horizontal',
    values: ['horizontal', 'vertical'] as const,
  },
} as const)

export type SplitterProps = ExtractPropTypes<typeof splitterProps>
export type SplitterInstance = InstanceType<typeof Splitter> & unknown
