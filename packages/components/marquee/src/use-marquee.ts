import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

import type { MarqueeProps } from './marquee'

export const useMarquee = (props: MarqueeProps, emit: any) => {
  // 响应式数据
  const isPaused = ref(false)
  const scrollPosition = ref(0)
  const containerRef = ref<HTMLElement>()
  const textRef = ref<HTMLElement>()
  const animationId = ref<number>()
  const isInitialized = ref(false)

  // 计算单份内容的尺寸（单个副本的尺寸）
  const singleContentSize = computed(() => {
    if (!textRef.value || !isInitialized.value) return 0

    if (props.direction === 'horizontal') {
      if (textRef.value.children.length > 0) {
        // 计算第一个副本的宽度
        const firstCopy = textRef.value.children[0] as HTMLElement
        return firstCopy.offsetWidth || 0
      }
      return 0
    } else {
      if (textRef.value.children.length > 0) {
        // 计算第一个副本的高度
        const firstCopy = textRef.value.children[0] as HTMLElement
        return firstCopy.offsetHeight || 0
      }
      return 0
    }
  })

  // 计算容器尺寸
  const containerSize = computed(() => {
    if (props.direction === 'horizontal') {
      return containerRef.value?.offsetWidth || 0
    } else {
      return containerRef.value?.offsetHeight || 0
    }
  })

  // 计算所需的副本数量
  const requiredCopies = computed(() => {
    const singleSize = singleContentSize.value
    const containerSizeValue = containerSize.value

    if (singleSize === 0) {
      // 如果无法计算尺寸，至少返回3个副本
      return 3
    }

    if (containerSizeValue === 0) {
      // 如果容器尺寸为0，至少返回3个副本
      return 3
    }

    // 确保有足够的副本覆盖容器，避免空白
    const copies = Math.ceil((containerSizeValue * 2) / singleSize) + 1
    return Math.max(copies, 3)
  })

  // 计算是否需要滚动
  const shouldScroll = computed(() => {
    if (props.direction === 'horizontal') {
      const textWidth = textRef.value?.offsetWidth || 0
      const containerWidth = containerRef.value?.offsetWidth || 0
      return textWidth > containerWidth
    } else {
      const textHeight = textRef.value?.offsetHeight || 0
      const containerHeight = containerRef.value?.offsetHeight || 0
      return textHeight > containerHeight
    }
  })

  // 滚动动画
  const startScroll = (force = false) => {
    if (animationId.value) {
      cancelAnimationFrame(animationId.value)
    }

    if (!force && !shouldScroll.value) {
      return
    }

    let lastTime = performance.now()

    const animate = (currentTime: number) => {
      if (!isPaused.value) {
        const deltaTime = currentTime - lastTime
        lastTime = currentTime

        // 基于时间的平滑滚动，避免帧率不一致导致的抖动
        const deltaPosition = (props.speed * deltaTime) / 1000
        scrollPosition.value += deltaPosition

        if (props.direction === 'horizontal') {
          const singleWidth = singleContentSize.value
          if (singleWidth > 0 && scrollPosition.value >= singleWidth) {
            if (props.loop) {
              // 平滑重置，避免突然跳变
              scrollPosition.value = scrollPosition.value - singleWidth
            } else {
              isPaused.value = true
              emit('scrollEnd')
              return
            }
          }
        } else {
          const singleHeight = singleContentSize.value
          if (singleHeight > 0 && scrollPosition.value >= singleHeight) {
            if (props.loop) {
              // 平滑重置，避免突然跳变
              scrollPosition.value = scrollPosition.value - singleHeight
            } else {
              isPaused.value = true
              emit('scrollEnd')
              return
            }
          }
        }

        // 确保滚动位置不为负值
        if (scrollPosition.value < 0) {
          scrollPosition.value = 0
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
      if (animationId.value) {
        cancelAnimationFrame(animationId.value)
        animationId.value = undefined
      }
    } else {
      emit('scrollResume')
      if (shouldScroll.value || props.autoStart) {
        startScroll(true)
      }
    }
  }

  // 重置滚动
  const resetScroll = () => {
    // 先停止当前动画
    if (animationId.value) {
      cancelAnimationFrame(animationId.value)
      animationId.value = undefined
    }

    // 重置位置
    scrollPosition.value = 0

    isPaused.value = false
    emit('scrollResume')

    // 延迟重新开始滚动
    setTimeout(() => {
      if (shouldScroll.value) {
        startScroll()
      }
    }, 100)
  }

  // 计算属性
  const scrollStyle = computed(() => {
    if (props.direction === 'horizontal') {
      return {
        transform: `translateX(-${scrollPosition.value}px)`,
        transition: 'none',
        // 移除 willChange，避免不必要的性能开销
      }
    } else {
      return {
        transform: `translateY(-${scrollPosition.value}px)`,
        transition: 'none',
        // 移除 willChange，避免不必要的性能开销
      }
    }
  })

  // 初始化函数
  const initializeMarquee = async () => {
    await nextTick()

    // 等待 DOM 完全渲染
    await new Promise((resolve) => setTimeout(resolve, 100))

    // 再次等待，确保所有子组件都渲染完成
    await nextTick()

    isInitialized.value = true

    // 延迟开始滚动，确保尺寸计算准确
    setTimeout(() => {
      if (props.autoStart) {
        emit('scrollStart')
        startScroll(true)
      }
    }, 200)
  }

  // 生命周期
  onMounted(async () => {
    await initializeMarquee()
  })

  onUnmounted(() => {
    stopScroll()
  })

  // 监听方向变化，重置滚动位置
  watch(
    () => props.direction,
    async () => {
      scrollPosition.value = 0
      isInitialized.value = false
      await initializeMarquee()
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

  return {
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
  }
}
