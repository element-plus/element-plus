<template>
  <div ref="scrollbarRef" :class="ns.b()">
    <div ref="wrapRef" :class="wrapKls" :style="style" @scroll="handleScroll">
      <component
        :is="tag"
        ref="resizeRef"
        :class="resizeKls"
        :style="viewStyle"
      >
        <slot />
      </component>
    </div>
    <template v-if="!native">
      <bar
        ref="barRef"
        :height="sizeHeight"
        :width="sizeWidth"
        :always="always"
        :ratio-x="ratioX"
        :ratio-y="ratioY"
      />
    </template>
  </div>
</template>
<script lang="ts" setup>
import {
  computed,
  nextTick,
  onMounted,
  onUpdated,
  provide,
  reactive,
  ref,
  watch,
} from 'vue'
import { useEventListener, useResizeObserver } from '@vueuse/core'
import {
  addUnit,
  debugWarn,
  isFunction,
  isNumber,
  isObject,
} from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { GAP, easeInOutQuad } from './util'
import Bar from './bar.vue'
import { scrollbarContextKey } from './constants'
import { scrollbarEmits, scrollbarProps } from './scrollbar'
import type { BarInstance } from './bar'
import type { CSSProperties, StyleValue } from 'vue'

const COMPONENT_NAME = 'ElScrollbar'

defineOptions({
  name: COMPONENT_NAME,
})

const props = defineProps(scrollbarProps)
const emit = defineEmits(scrollbarEmits)

const ns = useNamespace('scrollbar')

let stopResizeObserver: (() => void) | undefined = undefined
let stopResizeListener: (() => void) | undefined = undefined

const scrollbarRef = ref<HTMLDivElement>()
const wrapRef = ref<HTMLDivElement>()
const resizeRef = ref<HTMLElement>()

const sizeWidth = ref('0')
const sizeHeight = ref('0')
const barRef = ref<BarInstance>()
const ratioY = ref(1)
const ratioX = ref(1)

const style = computed<StyleValue>(() => {
  const style: CSSProperties = {}
  if (props.height) style.height = addUnit(props.height)
  if (props.maxHeight) style.maxHeight = addUnit(props.maxHeight)
  return [props.wrapStyle, style]
})

const wrapKls = computed(() => {
  return [
    props.wrapClass,
    ns.e('wrap'),
    { [ns.em('wrap', 'hidden-default')]: !props.native },
  ]
})

const resizeKls = computed(() => {
  return [ns.e('view'), props.viewClass]
})

const handleScroll = () => {
  if (wrapRef.value) {
    barRef.value?.handleScroll(wrapRef.value)

    emit('scroll', {
      scrollTop: wrapRef.value.scrollTop,
      scrollLeft: wrapRef.value.scrollLeft,
    })
  }
}

/** make scrolling easing in and out */
const easeScrollTo = (
  to: number,
  directions: 'scrollTop' | 'scrollLeft',
  duration?: number,
  callback?: () => void
) => {
  if (!duration) return (wrapRef.value![directions] = to)
  const startValue = wrapRef.value![directions]
  const byValue = to - startValue
  const increment = 20
  let timeElapsed = 0

  const startScroll = () => {
    timeElapsed += increment
    wrapRef.value![directions] = easeInOutQuad({
      timeElapsed,
      startValue,
      byValue,
      duration,
    })
    if (timeElapsed < duration) {
      requestAnimationFrame(startScroll)
    } else {
      if (callback && isFunction(callback)) {
        callback()
      }
    }
  }
  startScroll()
}

// TODO: refactor method overrides, due to script setup dts
// @ts-nocheck
function scrollTo(xCord: number, yCord?: number): void
function scrollTo(options: ScrollToOptions): void
function scrollTo(arg1: unknown, arg2?: number) {
  if (isObject(arg1)) {
    wrapRef.value!.scrollTo(arg1)
  } else if (isNumber(arg1) && isNumber(arg2)) {
    wrapRef.value!.scrollTo(arg1, arg2)
  }
}

const setScrollTop = (
  value: number,
  args?: { duration: number; callback?: () => void }
) => {
  if (!isNumber(value)) {
    debugWarn(COMPONENT_NAME, 'value must be a number')
    return
  }
  easeScrollTo(
    value,
    'scrollTop',
    args?.duration,
    () => isFunction(args?.callback) && args?.callback()
  )
}

const setScrollLeft = (
  value: number,
  args?: { duration: number; callback?: () => void }
) => {
  if (!isNumber(value)) {
    debugWarn(COMPONENT_NAME, 'value must be a number')
    return
  }
  easeScrollTo(
    value,
    'scrollLeft',
    args?.duration,
    () => isFunction(args?.callback) && args?.callback()
  )
}

const update = () => {
  if (!wrapRef.value) return
  const offsetHeight = wrapRef.value.offsetHeight - GAP
  const offsetWidth = wrapRef.value.offsetWidth - GAP

  const originalHeight = offsetHeight ** 2 / wrapRef.value.scrollHeight
  const originalWidth = offsetWidth ** 2 / wrapRef.value.scrollWidth
  const height = Math.max(originalHeight, props.minSize)
  const width = Math.max(originalWidth, props.minSize)

  ratioY.value =
    originalHeight /
    (offsetHeight - originalHeight) /
    (height / (offsetHeight - height))
  ratioX.value =
    originalWidth /
    (offsetWidth - originalWidth) /
    (width / (offsetWidth - width))

  sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : ''
  sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : ''
}

watch(
  () => props.noresize,
  (noresize) => {
    if (noresize) {
      stopResizeObserver?.()
      stopResizeListener?.()
    } else {
      ;({ stop: stopResizeObserver } = useResizeObserver(resizeRef, update))
      stopResizeListener = useEventListener('resize', update)
    }
  },
  { immediate: true }
)

watch(
  () => [props.maxHeight, props.height],
  () => {
    if (!props.native)
      nextTick(() => {
        update()
        if (wrapRef.value) {
          barRef.value?.handleScroll(wrapRef.value)
        }
      })
  }
)

provide(
  scrollbarContextKey,
  reactive({
    scrollbarElement: scrollbarRef,
    wrapElement: wrapRef,
  })
)

onMounted(() => {
  if (!props.native)
    nextTick(() => {
      update()
    })
})
onUpdated(() => update())

defineExpose({
  /** @description scrollbar wrap ref */
  wrapRef,
  /** @description update scrollbar state manually */
  update,
  /** @description scrolls to a particular set of coordinates */
  scrollTo,
  /** @description set distance to scroll top */
  setScrollTop,
  /** @description set distance to scroll left */
  setScrollLeft,
  /** @description handle scroll event */
  handleScroll,
})
</script>
