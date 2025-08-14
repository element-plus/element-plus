import { buildProps, definePropType } from '@element-plus/utils'

import type { ComputedRef, ExtractPropTypes, Ref } from 'vue'
import type AutoScrollText from './auto-scroll-text.vue'

export type ScrollDirection = 'horizontal' | 'vertical'
export type AlertType = 'success' | 'warning' | 'info' | 'error'
export type AlertEffect = 'light' | 'dark'

export const autoScrollTextProps = buildProps({
  /**
   * @description 滚动文本内容
   */
  text: {
    type: String,
    required: true,
  },
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
   * @description Alert 标题
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * @description Alert 类型
   */
  type: {
    type: definePropType<AlertType>(String),
    values: ['success', 'warning', 'info', 'error'],
    default: 'info',
  },
  /**
   * @description Alert 描述
   */
  description: {
    type: String,
    default: '',
  },
  /**
   * @description 是否可关闭
   */
  closable: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 是否显示图标
   */
  showIcon: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 是否居中
   */
  center: {
    type: Boolean,
    default: false,
  },
  /**
   * @description Alert 主题
   */
  effect: {
    type: definePropType<AlertEffect>(String),
    values: ['light', 'dark'],
    default: 'light',
  },
} as const)

export type AutoScrollTextProps = ExtractPropTypes<typeof autoScrollTextProps>
export type AutoScrollTextPropsPublic = ExtractPropTypes<
  typeof autoScrollTextProps
>

export const autoScrollTextEmits = {
  close: () => true,
  scrollStart: () => true,
  scrollPause: () => true,
  scrollResume: () => true,
  scrollEnd: () => true,
}

export type AutoScrollTextEmits = typeof autoScrollTextEmits

export type AutoScrollTextInstance = InstanceType<typeof AutoScrollText> & {
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
