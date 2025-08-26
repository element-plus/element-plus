<template>
  <div class="el-marquee__container">
    <div
      ref="containerRef"
      class="el-marquee__scroll-content"
      :class="`el-marquee__scroll-content--${direction}`"
      @mouseenter="pauseScroll"
      @mouseleave="resumeScroll"
    >
      <div
        ref="textRef"
        class="el-marquee__scroll-text"
        :class="`el-marquee__scroll-text--${direction}`"
        :style="scrollStyle"
      >
        <!-- 原始内容 -->
        <slot />
        <!-- 副本内容，用于无缝滚动 -->
        <slot />
        <!-- 副本内容，用于无缝滚动 -->
        <slot />
        <!-- 副本内容，用于无缝滚动 -->
        <slot />
      </div>
    </div>

    <!-- 控制按钮 -->
    <div v-if="showControls" class="el-marquee__scroll-controls">
      <el-button
        size="small"
        :icon="isPaused ? VideoPlay : VideoPause"
        type="primary"
        text
        @click="togglePause"
      >
        {{
          isPaused
            ? props.resumeButtonText || '继续'
            : props.pauseButtonText || '暂停'
        }}
      </el-button>
      <el-button
        size="small"
        :icon="Refresh"
        type="primary"
        text
        @click="resetScroll"
      >
        {{ props.resetButtonText || '重置' }}
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { Refresh, VideoPause, VideoPlay } from '@element-plus/icons-vue'
import ElButton from '@element-plus/components/button'
import { marqueeEmits, marqueeProps } from './marquee'

const COMPONENT_NAME = 'ElMarquee'
defineOptions({
  name: COMPONENT_NAME,
  inheritAttrs: false,
})

const props = defineProps(marqueeProps)
const emit = defineEmits(marqueeEmits)

// 响应式数据
const isPaused = ref(false)
const scrollPosition = ref(0)
const containerRef = ref<HTMLElement>()
const textRef = ref<HTMLElement>()
const animationId = ref<number>()

// 计算属性
const scrollStyle = computed(() => {
  if (props.direction === 'horizontal') {
    return {
      transform: `translateX(-${scrollPosition.value}px)`,
      transition: isPaused.value ? 'none' : 'transform linear',
    }
  } else {
    return {
      transform: `translateY(-${scrollPosition.value}px)`,
      transition: isPaused.value ? 'none' : 'transform linear',
    }
  }
})

// 计算是否需要滚动
const shouldScroll = computed(() => {
  if (props.direction === 'horizontal') {
    const textWidth = textRef.value?.offsetWidth || 0
    const containerWidth = containerRef.value?.offsetWidth || 0
    const should = textWidth > containerWidth
    return should
  } else {
    const textHeight = textRef.value?.offsetHeight || 0
    const containerHeight = containerRef.value?.offsetHeight || 0
    const should = textHeight > containerHeight
    return should
  }
})

// 滚动动画
const startScroll = (force = false) => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value)
  }

  // 如果不需要滚动且不是强制滚动，直接返回
  if (!force && !shouldScroll.value) {
    return
  }

  const animate = () => {
    if (!isPaused.value) {
      scrollPosition.value += props.speed / 60 // 60fps

      // 检查是否需要重置位置
      if (props.direction === 'horizontal') {
        const textWidth = textRef.value?.offsetWidth || 0
        // 横向滚动：当第一个副本完全滚出容器时重置
        // 由于有4份内容，每份占 textWidth/4，当滚动到 textWidth/4 时重置
        if (scrollPosition.value >= textWidth / 4) {
          if (props.loop) {
            // 无缝滚动：重置到第二个副本的开始位置，实现无缝衔接
            scrollPosition.value = 0
          } else {
            isPaused.value = true
            emit('scrollEnd')
            return
          }
        }
      } else {
        const textHeight = textRef.value?.offsetHeight || 0
        const containerHeight = containerRef.value?.offsetHeight || 0

        // 竖向滚动：当第一个副本完全滚出容器时重置
        if (
          textHeight > containerHeight &&
          scrollPosition.value >= textHeight / 4
        ) {
          if (props.loop) {
            // 无缝滚动：重置到第二个副本的开始位置
            scrollPosition.value = 0
          } else {
            isPaused.value = true
            emit('scrollEnd')
            return
          }
        }
      }

      animationId.value = requestAnimationFrame(animate)
    }
  }

  animationId.value = requestAnimationFrame(animate)
}

// 停止滚动
const stopScroll = () => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value)
    animationId.value = undefined
  }
}

// 获取滚动状态
const getScrollStatus = () => {
  return {
    isPaused: isPaused.value,
    scrollPosition: scrollPosition.value,
    shouldScroll: shouldScroll.value,
    isScrolling: !!animationId.value,
  }
}

// 暂停滚动
const pauseScroll = () => {
  if (props.pauseOnHover) {
    isPaused.value = true
    emit('scrollPause')
  }
}

// 恢复滚动
const resumeScroll = () => {
  if (props.pauseOnHover) {
    isPaused.value = false
    emit('scrollResume')
    // 强制恢复滚动，确保动画继续
    if (shouldScroll.value || props.autoStart) {
      startScroll(true)
    }
  }
}

// 切换暂停状态
const togglePause = () => {
  isPaused.value = !isPaused.value
  if (isPaused.value) {
    emit('scrollPause')
    // 暂停时停止动画
    if (animationId.value) {
      cancelAnimationFrame(animationId.value)
      animationId.value = undefined
    }
  } else {
    emit('scrollResume')
    // 恢复时重新开始滚动
    if (shouldScroll.value || props.autoStart) {
      startScroll(true)
    }
  }
}

// 重置滚动
const resetScroll = () => {
  scrollPosition.value = 0
  isPaused.value = false
  emit('scrollResume')
  if (shouldScroll.value) {
    startScroll()
  }
}

// 生命周期
onMounted(async () => {
  // 强制等待 DOM 更新完成
  await nextTick()

  // 延迟检查滚动状态，确保 DOM 尺寸已计算
  setTimeout(() => {
    if (props.autoStart) {
      emit('scrollStart')
      // 强制开始滚动，即使 shouldScroll 为 false
      startScroll(true)
    }
  }, 100)
})

onUnmounted(() => {
  stopScroll()
})

// 监听方向变化，重置滚动位置
watch(
  () => props.direction,
  () => {
    scrollPosition.value = 0
    if (!isPaused.value && props.autoStart && shouldScroll.value) {
      startScroll()
    }
  }
)

// 监听速度变化，重新开始滚动
watch(
  () => props.speed,
  () => {
    if (!isPaused.value && props.autoStart && shouldScroll.value) {
      stopScroll()
      startScroll()
    }
  }
)

defineExpose({
  /** @description 当前是否暂停 */
  isPaused,
  /** @description 当前滚动位置 */
  scrollPosition,
  /** @description 是否需要滚动 */
  shouldScroll,
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
  /** @description 容器引用 */
  containerRef,
  /** @description 文本引用 */
  textRef,
})
</script>
