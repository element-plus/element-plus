import { NOOP } from '@vue/shared'
import { buildProps, definePropType } from '@element-plus/utils/props'
import type { ITabType, Pane } from './token'
import type { ExtractPropTypes } from 'vue'

export interface Scrollable {
  next?: boolean
  prev?: number
}

export const tabNavProps = buildProps({
  panes: {
    type: definePropType<Pane[]>(Array),
    default: () => [],
  },
  currentName: {
    type: String,
    default: '',
  },
  editable: Boolean,
  onTabClick: {
    type: definePropType<(tab: Pane, tabName: string, ev: Event) => void>(
      Function
    ),
    default: NOOP,
  },
  onTabRemove: {
    type: definePropType<(tab: Pane, ev: Event) => void>(Function),
    default: NOOP,
  },
  type: {
    type: definePropType<ITabType>(String),
    default: '',
  },
  stretch: Boolean,
} as const)

export type TabNavProps = ExtractPropTypes<typeof tabNavProps>
