import { buildProps } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type TabPane from './tab-pane.vue'

export const tabPaneProps = buildProps({
  label: {
    type: String,
    default: '',
  },
  name: {
    type: [String, Number],
  },
  closable: Boolean,
  disabled: Boolean,
  lazy: Boolean,
} as const)

export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>

export type TabPaneInstance = InstanceType<typeof TabPane>
