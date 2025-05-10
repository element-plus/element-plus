// 滚动方向
export type Direction = 'vertical' | 'horizontal'

// 滚动目标元素在可视区的位置
export type Align = 'start' | 'center' | 'end'

// 组件属性
export interface Props {
  // 虚拟滚动列表数据
  listData: any[]
  // 滚动方向
  direction?: Direction
  // 可视窗内展示的首条元素下标
  index?: number,
  // 子元素平均高度或宽度，不传默认计算
  averageSpace?: number
}

// 组装虚拟元素属性
export interface VirtualItem<T = any> {
  index: number
  data: T
}

// 组件实例
export interface VirtualScrollInstance {
  scrollToIndex: (index: number, align?: Align) => Promise<void>
}
