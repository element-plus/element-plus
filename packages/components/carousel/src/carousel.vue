<template>
  <div
    ref="root"
    :class="carouselClasses"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave"
  >
    <div :class="ns.e('container')" :style="{ height: height }">
      <transition v-if="arrowDisplay" name="carousel-arrow-left">
        <button
          v-show="
            (arrow === 'always' || hover) && (props.loop || activeIndex > 0)
          "
          type="button"
          :class="[ns.e('arrow'), ns.em('arrow', 'left')]"
          @mouseenter="handleButtonEnter('left')"
          @mouseleave="handleButtonLeave"
          @click.stop="throttledArrowClick(activeIndex - 1)"
        >
          <ElIcon>
            <ArrowLeft />
          </ElIcon>
        </button>
      </transition>
      <transition v-if="arrowDisplay" name="carousel-arrow-right">
        <button
          v-show="
            (arrow === 'always' || hover) &&
            (props.loop || activeIndex < items.length - 1)
          "
          type="button"
          :class="[ns.e('arrow'), ns.em('arrow', 'right')]"
          @mouseenter="handleButtonEnter('right')"
          @mouseleave="handleButtonLeave"
          @click.stop="throttledArrowClick(activeIndex + 1)"
        >
          <ElIcon>
            <ArrowRight />
          </ElIcon>
        </button>
      </transition>
      <slot />
    </div>
    <ul v-if="indicatorPosition !== 'none'" :class="indicatorsClasses">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="[
          ns.e('indicator'),
          ns.em('indicator', direction),
          ns.is('active', index === activeIndex),
        ]"
        @mouseenter="throttledIndicatorHover(index)"
        @click.stop="handleIndicatorClick(index)"
      >
        <button :class="ns.e('button')">
          <span v-if="hasLabel">{{ item.label }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  computed,
  provide,
  onMounted,
  onBeforeUnmount,
  watch,
  nextTick,
} from 'vue'
import { throttle } from 'lodash-unified'
import { useResizeObserver } from '@vueuse/core'
import { debugWarn } from '@element-plus/utils'
import { ElIcon } from '@element-plus/components/icon'
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
import { useNamespace } from '@element-plus/hooks'
import { carouselContextKey } from '@element-plus/tokens'
import { carouselProps, carouselEmits } from './carousel'
import type { CarouselItemContext } from '@element-plus/tokens'

defineOptions({
  name: 'ElCarousel',
})
const props = defineProps(carouselProps)
const emit = defineEmits(carouselEmits)
const ns = useNamespace('carousel')

// refs
const activeIndex = ref(-1)
const timer = ref<ReturnType<typeof setInterval> | null>(null)
const hover = ref(false)
const root = ref<HTMLDivElement>()
const items = ref<CarouselItemContext[]>([])

// computed
const arrowDisplay = computed(
  () => props.arrow !== 'never' && props.direction !== 'vertical'
)

const hasLabel = computed(() => {
  return items.value.some((item) => item.label.toString().length > 0)
})

const carouselClasses = computed(() => {
  const classes = [ns.b(), ns.m(props.direction)]
  if (props.type === 'card') {
    classes.push(ns.m('card'))
  }
  return classes
})

const indicatorsClasses = computed(() => {
  const classes = [ns.e('indicators'), ns.em('indicators', props.direction)]
  if (hasLabel.value) {
    classes.push(ns.em('indicators', 'labels'))
  }
  if (props.indicatorPosition === 'outside' || props.type === 'card') {
    classes.push(ns.em('indicators', 'outside'))
  }
  return classes
})

// methods
const throttledArrowClick = throttle(
  (index) => {
    setActiveItem(index)
  },
  300,
  { trailing: true }
)

const throttledIndicatorHover = throttle((index) => {
  handleIndicatorHover(index)
}, 300)

function pauseTimer() {
  if (timer.value) {
    clearInterval(timer.value)
    timer.value = null
  }
}

function startTimer() {
  if (props.interval <= 0 || !props.autoplay || timer.value) return
  timer.value = setInterval(() => playSlides(), props.interval)
}

const playSlides = () => {
  if (activeIndex.value < items.value.length - 1) {
    activeIndex.value = activeIndex.value + 1
  } else if (props.loop) {
    activeIndex.value = 0
  }
}

function setActiveItem(index) {
  if (typeof index === 'string') {
    const filteredItems = items.value.filter((item) => item.name === index)
    if (filteredItems.length > 0) {
      index = items.value.indexOf(filteredItems[0])
    }
  }
  index = Number(index)
  if (Number.isNaN(index) || index !== Math.floor(index)) {
    debugWarn('Carousel', 'index must be an integer.')
    return
  }
  const length = items.value.length
  const oldIndex = activeIndex.value
  if (index < 0) {
    activeIndex.value = props.loop ? length - 1 : 0
  } else if (index >= length) {
    activeIndex.value = props.loop ? 0 : length - 1
  } else {
    activeIndex.value = index
  }
  if (oldIndex === activeIndex.value) {
    resetItemPosition(oldIndex)
  }
}

function resetItemPosition(oldIndex) {
  items.value.forEach((item, index) => {
    item.translateItem(index, activeIndex.value, oldIndex)
  })
}

function addItem(item) {
  items.value.push(item)
}

function removeItem(uid) {
  const index = items.value.findIndex((item) => item.uid === uid)
  if (index !== -1) {
    items.value.splice(index, 1)
    if (activeIndex.value === index) next()
  }
}

function itemInStage(item, index) {
  const length = items.value.length
  if (
    (index === length - 1 && item.inStage && items.value[0].active) ||
    (item.inStage && items.value[index + 1] && items.value[index + 1].active)
  ) {
    return 'left'
  } else if (
    (index === 0 && item.inStage && items.value[length - 1].active) ||
    (item.inStage && items.value[index - 1] && items.value[index - 1].active)
  ) {
    return 'right'
  }
  return false
}

function handleMouseEnter() {
  hover.value = true
  if (props.pauseOnHover) {
    pauseTimer()
  }
}

function handleMouseLeave() {
  hover.value = false
  startTimer()
}

function handleButtonEnter(arrow) {
  if (props.direction === 'vertical') return
  items.value.forEach((item, index) => {
    if (arrow === itemInStage(item, index)) {
      item.hover = true
    }
  })
}

function handleButtonLeave() {
  if (props.direction === 'vertical') return
  items.value.forEach((item) => {
    item.hover = false
  })
}

function handleIndicatorClick(index) {
  activeIndex.value = index
}

function handleIndicatorHover(index) {
  if (props.trigger === 'hover' && index !== activeIndex.value) {
    activeIndex.value = index
  }
}

function prev() {
  setActiveItem(activeIndex.value - 1)
}

function next() {
  setActiveItem(activeIndex.value + 1)
}

// watch
watch(
  () => activeIndex.value,
  (current, prev) => {
    resetItemPosition(prev)
    if (prev > -1) {
      emit('change', current, prev)
    }
  }
)
watch(
  () => props.autoplay,
  (current) => {
    current ? startTimer() : pauseTimer()
  }
)
watch(
  () => props.loop,
  () => {
    setActiveItem(activeIndex.value)
  }
)

// lifecycle
onMounted(() => {
  nextTick(() => {
    const resizeObserver = useResizeObserver(root.value, resetItemPosition)
    if (props.initialIndex < items.value.length && props.initialIndex >= 0) {
      activeIndex.value = props.initialIndex
    }
    startTimer()

    onBeforeUnmount(() => {
      if (root.value) resizeObserver.stop()
      pauseTimer()
    })
  })
})

// provide
provide(carouselContextKey, {
  root,
  direction: props.direction,
  type: props.type,
  items,
  loop: props.loop,
  addItem,
  removeItem,
  setActiveItem,
})

defineExpose({
  /** @description manually switch slide */
  setActiveItem,
  /** @description switch to the previous slide */
  prev,
  /** @description switch to the next slide */
  next,
})
</script>
