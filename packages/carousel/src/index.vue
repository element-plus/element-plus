<template>
  <div
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
              (props.loop || data.activeIndex < data.items.length - 1)
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
        v-for="(item, index) in data.items"
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
  reactive,
  computed,
  ref,
  provide,
  onMounted,
  VNode,
  VNodeNormalizedChildren,
  Component,
  onRenderTriggered,
  onBeforeUnmount,
  watch,
} from 'vue'
import { throttle } from 'throttle-debounce'

interface ICarouselProps {
  initialIndex: number
  height: string
  trigger: string
  autoplay: boolean
  interval: number
  indicatorPosition: string
  indicator: boolean
  arrow: string
  type: string
  loop: boolean
  direction: string
}

export default {
  name: 'ElCarousel',
  props: {
    initialIndex: {
      type: Number,
      default: 0,
    },
    height: String,
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
    indicatorPosition: String,
    indicator: {
      type: Boolean,
      default: true,
    },
    arrow: {
      type: String,
      default: 'hover',
    },
    type: String,
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
  },
  setup(props: ICarouselProps, { slots }) {
    // init here
    const data = reactive<{
      items: Component[]
      activeIndex: number
      containerWidth: number
      timer: null | ReturnType<typeof setInterval>
      hover: boolean
    }>({
      items: [],
      activeIndex: -1,
      containerWidth: 0,
      timer: null,
      hover: false,
    })

    // refs
    const root = ref(null)
    const itemUpdate = ref((cb) => null)

    // computed
    const arrowDisplay = computed(
      () => props.arrow !== 'never' && props.direction !== 'vertical',
    )

    const hasLabel = computed(() => {
      return data.items.some((item) => item.props.label.toString().length > 0)
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
    const throttledArrowClick = throttle(300, true, (index) => {
      setActiveItem(index)
    })
    const throttledIndicatorHover = throttle(300, (index) => {
      handleIndicatorHover(index)
    })

    function handleMouseEnter() {
      data.hover = true
      pauseTimer()
    }

    function handleMouseLeave() {
      data.hover = false
      startTimer()
    }

    function pauseTimer() {
      if (data.timer) {
        clearInterval(data.timer)
        data.timer = null
      }
    }

    function startTimer() {
      if (props.interval <= 0 || !props.autoplay || data.timer) return
      data.timer = setInterval(playSlides, props.interval)
    }

    function playSlides() {
      if (data.activeIndex < data.items.length - 1) {
        data.activeIndex++
      } else if (props.loop) {
        data.activeIndex = 0
      }
    }

    function setActiveItem(index) {
      if (typeof index === 'string') {
        const filteredItems = data.items.filter((item) => item.name === index)
        if (filteredItems.length > 0) {
          index = data.items.indexOf(filteredItems[0])
        }
      }
      index = Number(index)
      if (isNaN(index) || index !== Math.floor(index)) {
        console.warn('[Element Warn][Carousel]index must be an integer.')
        return
      }
      let length = data.items.length
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
      console.log('resetItemPosition')
      data.items.forEach((item, index) => {
        itemUpdate.value = (cb: (i: number, v: number, t: number) => void) =>
          cb(index, data.activeIndex, oldIndex)
      })
    }

    function updateItems() {
      data.items = slots.default().reduce((all, next) => {
        const VnodeInChillren: VNode = next.children[0]
        console.log(next.children)
        if (
          typeof next.children === 'string' ||
          !(next.children instanceof Array)
        ) {
          return all.concat([])
        }

        if ((VnodeInChillren?.type as Component).name === 'ElCarouselItem') {
          return all.concat(next.children.map((f) => (f as any).type))
        }
      }, [] as Component[])
    }

    function itemInStage(item, index) {
      const length = data.items.length
      if (
        (index === length - 1 && item.inStage && data.items[0].active) ||
        (item.inStage && data.items[index + 1] && data.items[index + 1].active)
      ) {
        return 'left'
      } else if (
        (index === 0 && item.inStage && data.items[length - 1].active) ||
        (item.inStage && data.items[index - 1] && data.items[index - 1].active)
      ) {
        return 'right'
      }
      return false
    }

    function handleButtonEnter(arrow) {
      if (props.direction === 'vertical') return
      data.items.forEach((item, index) => {
        if (arrow === itemInStage(item, index)) {
          item.hover = true
        }
      })
    }

    function handleButtonLeave() {
      if (props.direction === 'vertical') return
      data.items.forEach((item) => {
        item.hover = false
      })
    }

    function prev() {
      setActiveItem(data.activeIndex - 1)
    }

    function next() {
      setActiveItem(data.activeIndex + 1)
    }

    function handleIndicatorClick(index) {
      data.activeIndex = index
    }

    function handleIndicatorHover(index) {
      if (props.trigger === 'hover' && index !== data.activeIndex) {
        data.activeIndex = index
      }
    }

    // watch
    watch(
      () => data.activeIndex,
      (current, prev) => {
        console.log(current)
        resetItemPosition(prev)
        if (prev > -1) {
          //   this.$emit("change", val, oldVal);
        }
      },
    )

    // lifecycle
    onMounted(() => {
      updateItems()
    })

    // TODO: addResizeListener

    onRenderTriggered(() => {
      if (props.initialIndex < data.items.length && props.initialIndex >= 0) {
        data.activeIndex = props.initialIndex
      }
      startTimer()
    })

    onBeforeUnmount(() => {
      pauseTimer()
    })

    // provide
    provide('injectCarouselScope', {
      direction: props.direction,
      offsetWidth: (root as HTMLElement).offsetWidth,
      offsetHeight: (root as HTMLElement).offsetHeight,
      type: props.type,
      items: data.items,
      loop: props.loop,
      itemUpdate,
      updateItems: () => {
        updateItems()
      },
    })
    return {
      arrowDisplay,
      carouselClasses,
      indicatorsClasses,
      hasLabel,

      data,
      props,

      handleMouseEnter,
      handleMouseLeave,
      handleIndicatorClick,
      throttledArrowClick,
      throttledIndicatorHover,
      handleButtonEnter,
      handleButtonLeave,

      root,
    }
  },
}
</script>
