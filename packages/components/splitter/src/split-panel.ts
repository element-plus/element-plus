import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type SplitterPanel from './split-panel.vue'

export const splitterPanelProps = buildProps({
  min: {
    type: definePropType<string | number>([String, Number]),
  },
  max: {
    type: definePropType<string | number>([String, Number]),
  },
  size: {
    type: definePropType<string | number>([String, Number]),
  },
  defaultSize: {
    type: definePropType<string | number>([String, Number]),
  },
  resizable: {
    type: Boolean,
    default: true,
  },
  collapsible: {
    type: Boolean,
    default: false,
  },
} as const)

export type SplitterPanelProps = ExtractPropTypes<typeof splitterPanelProps>
export type SplitterPanelInstance = InstanceType<typeof SplitterPanel>
