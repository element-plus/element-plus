import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type Splitter from './splitter.vue'
import type { Layout } from './type'

export const splitterProps = buildProps({
  layout: {
    type: definePropType<Layout>(String),
    default: 'horizontal',
  },
} as const)

export type SplitterProps = ExtractPropTypes<typeof splitterProps>
export type SplitterInstance = InstanceType<typeof Splitter>
