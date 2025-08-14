<template>
  <div class="el-auto-scroll-text-container">
    <el-alert
      :title="title"
      :type="type"
      :description="description"
      :closable="closable"
      :show-icon="showIcon"
      :center="center"
      :effect="effect"
      :class="[
        'el-auto-scroll-alert',
        `el-scroll-${direction}`,
        { 'el-is-paused': isPaused },
      ]"
      @close="handleClose"
    >
      <template #default>
        <div
          ref="containerRef"
          class="el-scroll-content"
          :class="`el-scroll-${direction}`"
          @mouseenter="pauseScroll"
          @mouseleave="resumeScroll"
        >
          <div
            ref="textRef"
            class="el-scroll-text"
            :class="`el-scroll-${direction}`"
            :style="scrollStyle"
          >
            <span class="el-text-item">{{ text }}</span>
            <span class="el-text-item">{{ text }}</span>
            <span class="el-text-item">{{ text }}</span>
          </div>
        </div>
      </template>
    </el-alert>

    <!-- 控制按钮 -->
    <div v-if="showControls" class="el-scroll-controls">
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
import ElAlert from '@element-plus/components/alert'
import ElButton from '@element-plus/components/button'
import { autoScrollTextEmits, autoScrollTextProps } from './auto-scroll-text'

const COMPONENT_NAME = 'ElAutoScrollText'
defineOptions({
  name: COMPONENT_NAME,
  inheritAttrs: false,
})

const props = defineProps(autoScrollTextProps)
const emit = defineEmits(autoScrollTextEmits)

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
        // 横向滚动：当第一个文本完全滚出容器时重置
        if (scrollPosition.value > textWidth / 3) {
          if (props.loop) {
            // 无缝滚动：重置到开始位置，第二个文本无缝衔接
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

        // 竖向滚动：当文本完全滚出容器时重置
        if (
          textHeight > containerHeight &&
          scrollPosition.value >= textHeight
        ) {
          if (props.loop) {
            // 无缝滚动：重置到开始位置
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

// 处理关闭事件
const handleClose = () => {
  emit('close')
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

// 监听文本变化，重置滚动位置
watch(
  () => props.text,
  () => {
    scrollPosition.value = 0
    if (!isPaused.value && props.autoStart && shouldScroll.value) {
      startScroll()
    }
  }
)

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
