import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'
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
  collapsible: Boolean,
} as const)

export type SplitterPanelProps = ExtractPropTypes<typeof splitterPanelProps>
export type SplitterPanelPropsPublic = ExtractPublicPropTypes<
  typeof splitterPanelProps
>
export type SplitterPanelInstance = InstanceType<typeof SplitterPanel> & unknown

export const splitterPanelEmits = {
  'update:size': (value: number | string) =>
    typeof value === 'number' || typeof value === 'string',
}

export type SplitterPanelEmits = typeof splitterPanelEmits
