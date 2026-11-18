<template>
  <div
    ref="containerRef"
    class="el-marquee"
    :class="`el-marquee--${direction}`"
    @mouseenter="pauseScroll"
    @mouseleave="resumeScroll"
  >
    <div
      ref="textRef"
      class="el-marquee__content"
      :class="`el-marquee__content--${direction}`"
      :style="scrollStyle"
    >
      <!-- 动态生成所需数量的副本 -->
      <template v-for="index in requiredCopies" :key="`copy-${index}`">
        <div class="el-marquee__copy" :class="`el-marquee__copy--${index}`">
          <slot :index="index" />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { marqueeEmits, marqueeProps } from './marquee'
import { useMarquee } from './use-marquee'

const COMPONENT_NAME = 'ElMarquee'
defineOptions({
  name: COMPONENT_NAME,
  inheritAttrs: false,
})

const props = defineProps(marqueeProps)
const emit = defineEmits(marqueeEmits)

const {
  // 状态
  isPaused,
  scrollPosition,
  shouldScroll,
  singleContentSize,
  containerSize,
  requiredCopies,
  isInitialized,

  // 引用
  containerRef,
  textRef,

  // 计算属性
  scrollStyle,

  // 方法
  pauseScroll,
  resumeScroll,
  togglePause,
  resetScroll,
  startScroll,
  stopScroll,
  getScrollStatus,
  initializeMarquee,
} = useMarquee(props, emit)

defineExpose({
  /** @description 当前是否暂停 */
  isPaused,
  /** @description 当前滚动位置 */
  scrollPosition,
  /** @description 是否需要滚动 */
  shouldScroll,
  /** @description 单份内容尺寸 */
  singleContentSize,
  /** @description 容器尺寸 */
  containerSize,
  /** @description 所需副本数量 */
  requiredCopies,
  /** @description 是否已初始化 */
  isInitialized,
  /** @description 暂停滚动 */
  pauseScroll,
  /** @description 恢复滚动 */
  resumeScroll,
  /** @description 切换暂停状态 */
  togglePause,
  /** @description 重置滚动 */
  resetScroll,
  /** @description 开始滚动 */
  startScroll,
  /** @description 停止滚动 */
  stopScroll,
  /** @description 获取滚动状态 */
  getScrollStatus,
  /** @description 初始化跑马灯 */
  initializeMarquee,
  /** @description 容器引用 */
  containerRef,
  /** @description 文本引用 */
  textRef,
})
</script>
