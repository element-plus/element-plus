import type CascaderPanel from './index.vue'
import type Menu from './menu.vue'

export type CascaderMenuInstance = InstanceType<typeof Menu> & unknown
export type CascaderPanelInstance = InstanceType<typeof CascaderPanel> & unknown
