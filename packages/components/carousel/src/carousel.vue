<template>
  <div
    ref="root"
    :class="carouselClasses"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave"
  >
    <transition v-if="arrowDisplay" name="carousel-arrow-left">
      <button
        v-show="
          (arrow === 'always' || hover) && (props.loop || activeIndex > 0)
        "
        type="button"
        :class="[ns.e('arrow'), ns.em('arrow', 'left')]"
        :aria-label="t('el.carousel.leftArrow')"
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
        :aria-label="t('el.carousel.rightArrow')"
        @mouseenter="handleButtonEnter('right')"
        @mouseleave="handleButtonLeave"
        @click.stop="throttledArrowClick(activeIndex + 1)"
      >
        <ElIcon>
          <ArrowRight />
        </ElIcon>
      </button>
    </transition>
    <div
      :class="carouselContainer"
      :style="containerStyle"
      @transitionend="handleTransitionEnd"
    >
      <PlaceholderItem />
      <slot />
    </div>
    <ul v-if="indicatorPosition !== 'none'" :class="indicatorsClasses">
      <li
        v-for="(item, index) in items"
        v-show="isTwoLengthShow(index)"
        :key="index"
        :class="[
          ns.e('indicator'),
          ns.em('indicator', direction),
          ns.is('active', index === activeIndex),
        ]"
        @mouseenter="throttledIndicatorHover(index)"
        @click.stop="handleIndicatorClick(index)"
      >
        <button
          :class="ns.e('button')"
          :aria-label="t('el.carousel.indicator', { index: index + 1 })"
        >
          <span v-if="hasLabel">{{ item.props.label }}</span>
        </button>
      </li>
    </ul>
    <svg
      v-if="props.motionBlur"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      style="display: none"
    >
      <defs>
        <filter id="elCarouselHorizontal">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12,0" />
        </filter>
        <filter id="elCarouselVertical">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0,10" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { computed, unref } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { carouselEmits, carouselProps } from './carousel'
import { useCarousel } from './use-carousel'

const COMPONENT_NAME = 'ElCarousel'
defineOptions({
  name: COMPONENT_NAME,
})

const props = defineProps(carouselProps)
const emit = defineEmits(carouselEmits)
const {
  root,
  activeIndex,
  arrowDisplay,
  hasLabel,
  hover,
  isCardType,
  items,
  isVertical,
  containerStyle,
  handleButtonEnter,
  handleButtonLeave,
  isTransitioning,
  handleIndicatorClick,
  handleMouseEnter,
  handleMouseLeave,
  handleTransitionEnd,
  setActiveItem,
  prev,
  next,
  PlaceholderItem,
  isTwoLengthShow,
  throttledArrowClick,
  throttledIndicatorHover,
} = useCarousel(props, emit, COMPONENT_NAME)
const ns = useNamespace('carousel')

const { t } = useLocale()

const carouselClasses = computed(() => {
  const classes = [ns.b(), ns.m(props.direction)]
  if (unref(isCardType)) {
    classes.push(ns.m('card'))
  }
  return classes
})

const carouselContainer = computed(() => {
  const classes = [ns.e('container')]
  if (props.motionBlur && unref(isTransitioning) && items.value.length > 1) {
    classes.push(
      unref(isVertical)
        ? `${ns.namespace.value}-transitioning-vertical`
        : `${ns.namespace.value}-transitioning`
    )
  }
  return classes
})

const indicatorsClasses = computed(() => {
  const classes = [ns.e('indicators'), ns.em('indicators', props.direction)]
  if (unref(hasLabel)) {
    classes.push(ns.em('indicators', 'labels'))
  }
  if (props.indicatorPosition === 'outside') {
    classes.push(ns.em('indicators', 'outside'))
  }
  if (unref(isVertical)) {
    classes.push(ns.em('indicators', 'right'))
  }
  return classes
})

defineExpose({
  /** @description active slide index */
  activeIndex,
  /** @description manually switch slide, index of the slide to be switched to, starting from 0; or the `name` of corresponding `el-carousel-item` */
  setActiveItem,
  /** @description switch to the previous slide */
  prev,
  /** @description switch to the next slide */
  next,
})
</script>
