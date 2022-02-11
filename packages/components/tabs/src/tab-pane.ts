import { buildProps } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'

export const tabPaneProps = buildProps({
  label: {
    type: String,
    default: '',
  },
  name: {
    type: [String, Number],
    default: '',
  },
  closable: Boolean,
  disabled: Boolean,
  lazy: Boolean,
} as const)

export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>
