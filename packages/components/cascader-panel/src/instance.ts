import { CascaderNode } from './types'

import type CascaderPanel from './index.vue'
import type Menu from './menu.vue'

export type CascaderMenuInstance = InstanceType<typeof Menu> & unknown
export type CascaderPanelExpose = {
  getCheckedNodes: (leafOnly: boolean) => CascaderNode[] | undefined
  clearCheckedNodes: () => void
}

export type CascaderPanelInstance = InstanceType<typeof CascaderPanel> &
  CascaderPanelExpose
