import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type SplitterPanel from './split-panel.vue'

export const splitterPanelProps = buildProps({
  min: {
    type: [String, Number],
  },
  max: {
    type: [String, Number],
  },
  size: {
    type: [String, Number],
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
export type SplitterPanelInstance = InstanceType<typeof SplitterPanel> & unknown
