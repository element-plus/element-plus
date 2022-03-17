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
          <span v-if="hasLabel">{{ item.props.label }}</span>
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
  shallowRef,
  unref,
} from 'vue'
import { throttle } from 'lodash-unified'
import { useResizeObserver } from '@vueuse/core'
import { debugWarn, isString } from '@element-plus/utils'
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
const COMPONENT_NAME = 'ElCarousel'
const THROTTLE_TIME = 300

// refs
const activeIndex = ref(-1)
const timer = ref<ReturnType<typeof setInterval> | null>(null)
const hover = ref(false)
const root = ref<HTMLDivElement>()
const items = ref<Array<CarouselItemContext>>([])

// computed
const arrowDisplay = computed(
  () => props.arrow !== 'never' && !unref(isVertical)
)

const hasLabel = computed(() => {
  return items.value.some((item) => item.props.label.toString().length > 0)
})

const carouselClasses = computed(() => {
  const classes = [ns.b(), ns.m(props.direction)]
  if (unref(isCardType)) {
    classes.push(ns.m('card'))
  }
  return classes
})

const indicatorsClasses = computed(() => {
  const classes = [ns.e('indicators'), ns.em('indicators', props.direction)]
  if (hasLabel.value) {
    classes.push(ns.em('indicators', 'labels'))
  }
  if (props.indicatorPosition === 'outside' || unref(isCardType)) {
    classes.push(ns.em('indicators', 'outside'))
  }
  return classes
})

const isCardType = computed(() => props.type === 'card')
const isVertical = computed(() => props.direction === 'vertical')

// methods
const throttledArrowClick = throttle(
  (index: number) => {
    setActiveItem(index)
  },
  THROTTLE_TIME,
  { trailing: true }
)

const throttledIndicatorHover = throttle((index: number) => {
  handleIndicatorHover(index)
}, THROTTLE_TIME)

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

function setActiveItem(index: number | string) {
  if (isString(index)) {
    const filteredItems = items.value.filter(
      (item) => item.props.name === index
    )
    if (filteredItems.length > 0) {
      index = items.value.indexOf(filteredItems[0])
    }
  }
  index = Number(index)
  if (Number.isNaN(index) || index !== Math.floor(index)) {
    debugWarn(COMPONENT_NAME, 'index must be an integer.')
    return
  }
  const itemCount = items.value.length
  const oldIndex = activeIndex.value
  if (index < 0) {
    activeIndex.value = props.loop ? itemCount - 1 : 0
  } else if (index >= itemCount) {
    activeIndex.value = props.loop ? 0 : itemCount - 1
  } else {
    activeIndex.value = index
  }
  if (oldIndex === activeIndex.value) {
    resetItemPosition(oldIndex)
  }
}

function resetItemPosition(oldIndex?: number) {
  items.value.forEach((item, index) => {
    item.translateItem(index, activeIndex.value, oldIndex)
  })
}

function addItem(item: CarouselItemContext) {
  items.value.push(item)
}

function removeItem(uid?: number) {
  const index = items.value.findIndex((item) => item.uid === uid)
  if (index !== -1) {
    items.value.splice(index, 1)
    if (activeIndex.value === index) next()
  }
}

function itemInStage(item: CarouselItemContext, index: number) {
  const length = items.value.length
  if (
    (index === length - 1 &&
      item.states.inStage &&
      items.value[0].states.active) ||
    (item.states.inStage &&
      items.value[index + 1] &&
      items.value[index + 1].states.active)
  ) {
    return 'left'
  } else if (
    (index === 0 &&
      item.states.inStage &&
      items.value[length - 1].states.active) ||
    (item.states.inStage &&
      items.value[index - 1] &&
      items.value[index - 1].states.active)
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

function handleButtonEnter(arrow: false | 'left' | 'right') {
  if (unref(isVertical)) return
  items.value.forEach((item, index) => {
    if (arrow === itemInStage(item, index)) {
      item.states.hover = true
    }
  })
}

function handleButtonLeave() {
  if (unref(isVertical)) return
  items.value.forEach((item) => {
    item.states.hover = false
  })
}

function handleIndicatorClick(index: number) {
  activeIndex.value = index
}

function handleIndicatorHover(index: number) {
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

const resizeObserver = shallowRef<ReturnType<typeof useResizeObserver>>()
// lifecycle
onMounted(async () => {
  await nextTick()

  resizeObserver.value = useResizeObserver(root.value, () => {
    resetItemPosition()
  })
  if (props.initialIndex < items.value.length && props.initialIndex >= 0) {
    activeIndex.value = props.initialIndex
  }
  startTimer()
})

onBeforeUnmount(() => {
  pauseTimer()
  if (root.value && resizeObserver.value) resizeObserver.value.stop()
})

// provide
provide(carouselContextKey, {
  root,
  isCardType,
  isVertical,
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
