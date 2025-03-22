import { buildProps, definePropType } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type { TabsPaneContext } from './constants'
import type TabBar from './tab-bar.vue'

export const tabBarProps = buildProps({
  tabs: {
    type: definePropType<TabsPaneContext[]>(Array),
    default: () => [],
  },
})

export type TabBarProps = ExtractPropTypes<typeof tabBarProps>
export type TabBarInstance = InstanceType<typeof TabBar> & unknown
