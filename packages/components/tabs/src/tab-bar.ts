import { buildProps, definePropType, mutable } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type { TabPaneName, TabsPaneContext } from './constants'
import type TabBar from './tab-bar.vue'

/**
 * @deprecated Removed after 3.0.0, Use `TabBarProps` instead.
 */
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

export type TabBarProps = {
  tabs?: TabsPaneContext[]
  tabRefs?: { [key: TabPaneName]: HTMLDivElement }
}

/**
 * @deprecated Removed after 3.0.0, Use `TabBarProps` instead.
 */
export type TabBarPropsPublic = ExtractPublicPropTypes<typeof tabBarProps>
export type TabBarInstance = InstanceType<typeof TabBar> & unknown
