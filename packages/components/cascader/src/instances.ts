import type { ComputedRef } from 'vue'
import type Cascader from './cascader.vue'
import type { CascaderNode } from '@element-plus/components/cascader-panel'

export type CascaderExpose = {
  getCheckedNodes: (leafOnly: boolean) => CascaderNode[] | undefined
  cascaderPanelRef: ComputedRef<any>
  togglePopperVisible: (visible?: boolean) => void
  contentRef: ComputedRef<any>
  presentText: ComputedRef<string>
  focus: () => void
  blur: () => void
}

export type CascaderInstance = InstanceType<typeof Cascader> & CascaderExpose
