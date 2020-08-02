<template>
  <div
    :class="carouselClasses"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave"
  >
    <div class="el-carousel__container" :style="{ height: height }">
      <transition v-if="arrowDisplay" name="carousel-arrow-left">
        <button
          v-show="(arrow === 'always' || hover) && (loop || activeIndex > 0)"
          type="button"
          class="el-carousel__arrow el-carousel__arrow--left"
          @mouseenter="handleButtonEnter('left')"
          @mouseleave="handleButtonLeave"
          @click.stop="throttledArrowClick(activeIndex - 1)"
        >
          <i class="el-icon-arrow-left"></i>
        </button>
      </transition>
      <transition v-if="arrowDisplay" name="carousel-arrow-right">
        <button
          v-show="
            (arrow === 'always' || hover) &&
              (loop || activeIndex < items.length - 1)
          "
          type="button"
          class="el-carousel__arrow el-carousel__arrow--right"
          @mouseenter="handleButtonEnter('right')"
          @mouseleave="handleButtonLeave"
          @click.stop="throttledArrowClick(activeIndex + 1)"
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
          { 'is-active': index === activeIndex },
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
import { reactive, computed, ref, provide, onMounted } from 'vue'
import throttle from 'throttle-debounce'

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
  setup(props: ICarouselProps, ctx) {
    // init here
    const data = reactive({
      items: [],
      activeIndex: -1,
      containerWidth: 0,
      timer: null,
      hover: false,
    })

    // refs
    const root = ref(null)

    // computed
    const arrowDisplay = computed(
      () => props.arrow !== 'never' && props.direction !== 'vertical',
    )

    const hasLabel = computed(() =>
      data.items.some(item => item.label.toString().length > 0),
    )

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
    function handleMouseEnter() {
      data.hover = true
      pauseTimer()
    }

    function pauseTimer() {
      if (data.timer) {
        clearInterval(this.timer)
        data.timer = null
      }
    }

    function updateItems() {
      data.items = this.$children.filter(
        child => child.$options.name === 'ElCarouselItem',
      )
    }

    // lifecycle
    onMounted(() => {
      console.log(ctx.slots)
    })

    // provide
    provide('injectCarouselScope', {
      direction: props.direction,
      offsetWidth: (root as HTMLElement).offsetWidth,
      offsetHeight: (root as HTMLElement).offsetHeight,
      type: props.type,
      items: data.items,
      loop: props.loop,
      updateItems: () => {
        console.log('object')
      },
    })
    return {
      arrowDisplay,
      carouselClasses,
      indicatorsClasses,

      handleMouseEnter,

      root,
    }
  },
}
</script>
<style scoped></style>
