<template>
  <div
    ref="root"
    :class="carouselClasses"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave"
  >
    <div class="el-carousel__container" :style="{ height: height }">
      <transition v-if="arrowDisplay" name="carousel-arrow-left">
        <button
          v-show="
            (arrow === 'always' || data.hover) &&
              (props.loop || data.activeIndex > 0)
          "
          type="button"
          class="el-carousel__arrow el-carousel__arrow--left"
          @mouseenter="handleButtonEnter('left')"
          @mouseleave="handleButtonLeave"
          @click.stop="throttledArrowClick(data.activeIndex - 1)"
        >
          <i class="el-icon-arrow-left"></i>
        </button>
      </transition>
      <transition v-if="arrowDisplay" name="carousel-arrow-right">
        <button
          v-show="
            (arrow === 'always' || data.hover) &&
              (props.loop || data.activeIndex < items.length - 1)
          "
          type="button"
          class="el-carousel__arrow el-carousel__arrow--right"
          @mouseenter="handleButtonEnter('right')"
          @mouseleave="handleButtonLeave"
          @click.stop="throttledArrowClick(data.activeIndex + 1)"
        >
          <i class="el-icon-arrow-right"></i>
        </button>
      </transition>
      <slot></slot>
    </div>
    <ul v-if="indicatorPosition !== 'none'" :class="indicatorsClasses">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="[
          'el-carousel__indicator',
          'el-carousel__indicator--' + direction,
          { 'is-active': index === data.activeIndex },
        ]"
        @mouseenter="throttledIndicatorHover(index)"
        @click.stop="handleIndicatorClick(index)"
      >
        <button class="el-carousel__button">
          <span v-if="hasLabel">{{ item.label }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  ref,
  provide,
  onMounted,
  onBeforeUnmount,
  watch,
  nextTick,
} from 'vue'
import throttle from 'lodash/throttle'
import {
  addResizeListener,
  removeResizeListener,
} from '@element-plus/utils/resize-event'
import { ICarouselProps, CarouselItem, InjectCarouselScope } from './carousel'

export default defineComponent({
  name: 'ElCarousel',
  props: {
    initialIndex: {
      type: Number,
      default: 0,
    },
    height: { type: String, default: '' },
    trigger: {
      type: String,
      default: 'hover',
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      default: 3000,
    },
    indicatorPosition: { type: String, default: '' },
    indicator: {
      type: Boolean,
      default: true,
    },
    arrow: {
      type: String,
      default: 'hover',
    },
    type: { type: String, default: '' },
    loop: {
      type: Boolean,
      default: true,
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(val: string) {
        return ['horizontal', 'vertical'].includes(val)
      },
    },
    pauseOnHover: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['change'],
  setup(props: ICarouselProps, { emit }) {
    // data
    const data = reactive<{
      activeIndex: number
      containerWidth: number
      timer: null | ReturnType<typeof setInterval>
      hover: boolean
    }>({
      activeIndex: -1,
      containerWidth: 0,
      timer: null,
      hover: false,
    })

    // refs
    const root = ref(null)
    const items = ref<CarouselItem[]>([])

    // computed
    const arrowDisplay = computed(
      () => props.arrow !== 'never' && props.direction !== 'vertical',
    )

    const hasLabel = computed(() => {
      return items.value.some(item => item.label.toString().length > 0)
    })

    const carouselClasses = computed(() => {
      const classes = ['el-carousel', 'el-carousel--' + props.direction]
      if (props.type === 'card') {
        classes.push('el-carousel--card')
      }
      return classes
    })

    const indicatorsClasses = computed(() => {
      const classes = [
        'el-carousel__indicators',
        'el-carousel__indicators--' + props.direction,
      ]
      if (hasLabel.value) {
        classes.push('el-carousel__indicators--labels')
      }
      if (props.indicatorPosition === 'outside' || props.type === 'card') {
        classes.push('el-carousel__indicators--outside')
      }
      return classes
    })

    // methods
    const throttledArrowClick = throttle(
      index => {
        setActiveItem(index)
      },
      300,
      { trailing: true },
    )

    const throttledIndicatorHover = throttle(index => {
      handleIndicatorHover(index)
    }, 300)

    function pauseTimer() {
      if (data.timer) {
        clearInterval(data.timer)
        data.timer = null
      }
    }

    function startTimer() {
      if (props.interval <= 0 || !props.autoplay || data.timer) return
      data.timer = setInterval(() => playSlides(), props.interval)
    }

    const playSlides = () => {
      if (data.activeIndex < items.value.length - 1) {
        data.activeIndex = data.activeIndex + 1
      } else if (props.loop) {
        data.activeIndex = 0
      }
    }

    function setActiveItem(index) {
      if (typeof index === 'string') {
        const filteredItems = items.value.filter(item => item.name === index)
        if (filteredItems.length > 0) {
          index = items.value.indexOf(filteredItems[0])
        }
      }
      index = Number(index)
      if (isNaN(index) || index !== Math.floor(index)) {
        console.warn('[Element Warn][Carousel]index must be an integer.')
        return
      }
      let length = items.value.length
      const oldIndex = data.activeIndex
      if (index < 0) {
        data.activeIndex = props.loop ? length - 1 : 0
      } else if (index >= length) {
        data.activeIndex = props.loop ? 0 : length - 1
      } else {
        data.activeIndex = index
      }
      if (oldIndex === data.activeIndex) {
        resetItemPosition(oldIndex)
      }
    }

    function resetItemPosition(oldIndex) {
      items.value.forEach((item, index) => {
        item.translateItem(index, data.activeIndex, oldIndex)
      })
    }

    function addItem(item) {
      items.value.push(item)
    }

    function removeItem(uid) {
      const index = items.value.findIndex(item => item.uid === uid)
      if (index !== -1) {
        items.value.splice(index, 1)
        if(data.activeIndex === index) next()
      }
    }

    function itemInStage(item, index) {
      const length = items.value.length
      if (
        (index === length - 1 && item.inStage && items.value[0].active) ||
        (item.inStage &&
          items.value[index + 1] &&
          items.value[index + 1].active)
      ) {
        return 'left'
      } else if (
        (index === 0 && item.inStage && items.value[length - 1].active) ||
        (item.inStage &&
          items.value[index - 1] &&
          items.value[index - 1].active)
      ) {
        return 'right'
      }
      return false
    }

    function handleMouseEnter() {
      data.hover = true
      if (props.pauseOnHover) {
        pauseTimer()
      }
    }

    function handleMouseLeave() {
      data.hover = false
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
      items.value.forEach(item => {
        item.hover = false
      })
    }

    function handleIndicatorClick(index) {
      data.activeIndex = index
    }

    function handleIndicatorHover(index) {
      if (props.trigger === 'hover' && index !== data.activeIndex) {
        data.activeIndex = index
      }
    }

    function prev() {
      setActiveItem(data.activeIndex - 1)
    }

    function next() {
      setActiveItem(data.activeIndex + 1)
    }

    // watch
    watch(
      () => data.activeIndex,
      (current, prev) => {
        resetItemPosition(prev)
        if (prev > -1) {
          emit('change', current, prev)
        }
      },
    )
    watch(
      () => props.autoplay,
      current => {
        current ? startTimer() : pauseTimer()
      },
    )
    watch(
      () => props.loop,
      () => {
        setActiveItem(data.activeIndex)
      },
    )

    // lifecycle
    onMounted(() => {
      nextTick(() => {
        addResizeListener(root.value, resetItemPosition)
        if (
          props.initialIndex < items.value.length &&
          props.initialIndex >= 0
        ) {
          data.activeIndex = props.initialIndex
        }
        startTimer()
      })
    })

    onBeforeUnmount(() => {
      if (root.value) removeResizeListener(root.value, resetItemPosition)
      pauseTimer()
    })

    // provide
    provide<InjectCarouselScope>('injectCarouselScope', {
      root,
      direction: props.direction,
      type: props.type,
      items,
      loop: props.loop,
      addItem,
      removeItem,
      setActiveItem,
    })

    return {
      data,
      props,
      items,

      arrowDisplay,
      carouselClasses,
      indicatorsClasses,
      hasLabel,

      handleMouseEnter,
      handleMouseLeave,
      handleIndicatorClick,
      throttledArrowClick,
      throttledIndicatorHover,
      handleButtonEnter,
      handleButtonLeave,

      prev,
      next,
      setActiveItem,

      root,
    }
  },
})
</script>
