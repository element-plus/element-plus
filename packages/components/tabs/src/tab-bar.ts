import { buildProps, definePropType, mutable } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type { TabPaneName, TabsPaneContext } from './constants'
import type TabBar from './tab-bar.vue'

export const tabBarProps = buildProps({
  tabs: {
    type: definePropType<TabsPaneContext[]>(Array),
    default: () => mutable([] as const),
  },
  tabRefs: {
    type: definePropType<{ [key: TabPaneName]: HTMLDivElement }>(Object),
    default: () => mutable({} as const),
  },
} as const)

export type TabBarProps = ExtractPropTypes<typeof tabBarProps>
export type TabBarPropsPublic = __ExtractPublicPropTypes<typeof tabBarProps>
export type TabBarInstance = InstanceType<typeof TabBar> & unknown
