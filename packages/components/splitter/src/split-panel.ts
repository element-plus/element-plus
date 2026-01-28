import { buildProps } from '@element-plus/utils'

import type { ExtractPublicPropTypes, Ref } from 'vue'
import type SplitterPanel from './split-panel.vue'

export interface SplitterPanelProps {
  min?: string | number
  max?: string | number
  size?: string | number
  resizable?: boolean
  collapsible?: boolean
}

/**
 * @deprecated Removed after 3.0.0, Use `SplitterPanelProps` instead.
 */
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

/**
 * @deprecated Removed after 3.0.0, Use `SplitterPanelProps` instead.
 */
export type SplitterPanelPropsPublic = ExtractPublicPropTypes<
  typeof splitterPanelProps
>
export type SplitterPanelExpose = {
  splitterPanelRef: Ref<HTMLDivElement>
}

export type SplitterPanelInstance = InstanceType<typeof SplitterPanel> &
  SplitterPanelExpose

export const splitterPanelEmits = {
  'update:size': (value: number | string) =>
    typeof value === 'number' || typeof value === 'string',
}

export type SplitterPanelEmits = typeof splitterPanelEmits
