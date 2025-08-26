import { buildProps, definePropType } from '@element-plus/utils'

import type { ComputedRef, ExtractPropTypes, Ref } from 'vue'

export type ScrollDirection = 'horizontal' | 'vertical'

export const marqueeProps = buildProps({
  /**
   * @description 滚动方向
   */
  direction: {
    type: definePropType<ScrollDirection>(String),
    values: ['horizontal', 'vertical'],
    default: 'horizontal',
  },
  /**
   * @description 滚动速度（像素/秒）
   */
  speed: {
    type: Number,
    default: 50,
  },
  /**
   * @description 是否自动开始滚动
   */
  autoStart: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 是否显示控制按钮
   */
  showControls: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 是否循环滚动
   */
  loop: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 鼠标悬停时是否暂停
   */
  pauseOnHover: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 暂停状态按钮文案
   */
  pauseButtonText: {
    type: String,
    default: '',
  },
  /**
   * @description 继续状态按钮文案
   */
  resumeButtonText: {
    type: String,
    default: '',
  },
  /**
   * @description 重置按钮文案
   */
  resetButtonText: {
    type: String,
    default: '',
  },
} as const)

export type MarqueeProps = ExtractPropTypes<typeof marqueeProps>
export type MarqueePropsPublic = ExtractPropTypes<typeof marqueeProps>

export const marqueeEmits = {
  scrollStart: () => true,
  scrollPause: () => true,
  scrollResume: () => true,
  scrollEnd: () => true,
}

export type MarqueeEmits = typeof marqueeEmits

export type MarqueeInstance = {
  /** 当前是否暂停 */
  isPaused: Ref<boolean>
  /** 当前滚动位置 */
  scrollPosition: Ref<number>
  /** 是否需要滚动 */
  shouldScroll: ComputedRef<boolean>
  /** 暂停滚动 */
  pauseScroll: () => void
  /** 恢复滚动 */
  resumeScroll: () => void
  /** 切换暂停状态 */
  togglePause: () => void
  /** 重置滚动 */
  resetScroll: () => void
  /** 开始滚动 */
  startScroll: () => void
  /** 停止滚动 */
  stopScroll: () => void
  /** 获取滚动状态 */
  getScrollStatus: () => {
    isPaused: boolean
    scrollPosition: number
    shouldScroll: boolean
    isScrolling: boolean
  }
  /** 容器引用 */
  containerRef: Ref<HTMLElement | undefined>
  /** 文本引用 */
  textRef: Ref<HTMLElement | undefined>
}
