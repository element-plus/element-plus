import { buildProps, definePropType } from '@element-plus/utils/props'
import type { Pane } from './token'
import type { ExtractPropTypes } from 'vue'

export const tabBar = buildProps({
  tabs: {
    type: definePropType<Pane[]>(Array),
    default: () => [],
  },
} as const)

export type TabBar = ExtractPropTypes<typeof tabBar>
