import { buildProps } from '@element-plus/utils/props'
import type { ExtractPropTypes } from 'vue'

export const tabPaneProps = buildProps({
  label: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  closable: Boolean,
  disabled: Boolean,
  lazy: Boolean,
} as const)

export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>
