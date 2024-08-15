import { buildProps } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type TabPane from './tab-pane.vue'

export const tabPaneProps = buildProps({
  /**
   * @description title of the tab
   */
  label: {
    type: String,
    default: '',
  },
  /**
   * @description identifier corresponding to the name of Tabs, representing the alias of the tab-pane, the default is ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is '0'
   */
  name: {
    type: [String, Number],
  },
  /**
   * @description whether Tab is closable
   */
  closable: Boolean,
  /**
   * @description whether Tab is disabled
   */
  disabled: Boolean,
  /**
   * @description whether Tab is lazily rendered
   */
  lazy: Boolean,
} as const)

export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>

export type TabPaneInstance = InstanceType<typeof TabPane>
