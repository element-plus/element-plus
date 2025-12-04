<template>
  <div ref="scrollbarRef" :class="ns.b()">
    <div
      ref="wrapRef"
      :class="wrapKls"
      :style="wrapStyle"
      :tabindex="tabindex"
      @scroll="handleScroll"
    >
      <component
        :is="tag"
        :id="id"
        ref="resizeRef"
        :class="resizeKls"
        :style="viewStyle"
        :role="role"
        :aria-label="ariaLabel"
        :aria-orientation="ariaOrientation"
      >
        <slot />
      </component>
    </div>
    <template v-if="!native">
      <bar ref="barRef" :always="always" :min-size="minSize" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  nextTick,
  onActivated,
  onMounted,
  onUpdated,
  provide,
  reactive,
  ref,
  watch,
} from 'vue'
import { useEventListener, useResizeObserver } from '@vueuse/core'
import { addUnit, debugWarn, isNumber, isObject } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import Bar from './bar.vue'
import { scrollbarContextKey } from './constants'
import { scrollbarEmits, scrollbarProps } from './scrollbar'

import type { ScrollbarDirection } from './scrollbar'
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
let stopWrapResizeObserver: (() => void) | undefined = undefined
let stopResizeListener: (() => void) | undefined = undefined
let wrapScrollTop = 0
let wrapScrollLeft = 0
let direction = '' as ScrollbarDirection
const distanceScrollState = {
  bottom: false,
  top: false,
  right: false,
  left: false,
}

const scrollbarRef = ref<HTMLDivElement>()
const wrapRef = ref<HTMLDivElement>()
const resizeRef = ref<HTMLElement>()
const barRef = ref<BarInstance>()

const wrapStyle = computed<StyleValue>(() => {
  const style: CSSProperties = {}
  const height = addUnit(props.height)
  const maxHeight = addUnit(props.maxHeight)
  if (height) style.height = height
  if (maxHeight) style.maxHeight = maxHeight
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

const shouldSkipDirection = (direction: ScrollbarDirection) => {
  return distanceScrollState[direction] ?? false
}

const DIRECTION_PAIRS: Record<ScrollbarDirection, ScrollbarDirection> = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left',
}
const updateTriggerStatus = (arrivedStates: Record<string, boolean>) => {
  const oppositeDirection = DIRECTION_PAIRS[direction]
  if (!oppositeDirection) return

  const arrived = arrivedStates[direction]
  const oppositeArrived = arrivedStates[oppositeDirection]

  if (arrived && !distanceScrollState[direction]) {
    distanceScrollState[direction] = true
  }

  if (!oppositeArrived && distanceScrollState[oppositeDirection]) {
    distanceScrollState[oppositeDirection] = false
  }
}

const handleScroll = () => {
  if (wrapRef.value) {
    barRef.value?.handleScroll(wrapRef.value)
    const prevTop = wrapScrollTop
    const prevLeft = wrapScrollLeft
    wrapScrollTop = wrapRef.value.scrollTop
    wrapScrollLeft = wrapRef.value.scrollLeft

    const arrivedStates = {
      bottom:
        wrapScrollTop + wrapRef.value.clientHeight >=
        wrapRef.value.scrollHeight - props.distance,
      top: wrapScrollTop <= props.distance && prevTop !== 0,
      right:
        wrapScrollLeft + wrapRef.value.clientWidth >=
          wrapRef.value.scrollWidth - props.distance &&
        prevLeft !== wrapScrollLeft,
      left: wrapScrollLeft <= props.distance && prevLeft !== 0,
    }

    emit('scroll', {
      scrollTop: wrapScrollTop,
      scrollLeft: wrapScrollLeft,
    })

    if (prevTop !== wrapScrollTop) {
      direction = wrapScrollTop > prevTop ? 'bottom' : 'top'
    }
    if (prevLeft !== wrapScrollLeft) {
      direction = wrapScrollLeft > prevLeft ? 'right' : 'left'
    }
    if (props.distance > 0) {
      if (shouldSkipDirection(direction)) {
        return
      }
      updateTriggerStatus(arrivedStates)
    }
    if (arrivedStates[direction]) emit('end-reached', direction)
  }
}

function scrollTo(xCord: number, yCord?: number): void
function scrollTo(options: ScrollToOptions): void
function scrollTo(arg1: unknown, arg2?: number) {
  if (isObject(arg1)) {
    wrapRef.value!.scrollTo(arg1)
  } else if (isNumber(arg1) && isNumber(arg2)) {
    wrapRef.value!.scrollTo(arg1, arg2)
  }
}

const setScrollTop = (value: number) => {
  if (!isNumber(value)) {
    debugWarn(COMPONENT_NAME, 'value must be a number')
    return
  }
  wrapRef.value!.scrollTop = value
}

const setScrollLeft = (value: number) => {
  if (!isNumber(value)) {
    debugWarn(COMPONENT_NAME, 'value must be a number')
    return
  }
  wrapRef.value!.scrollLeft = value
}

const update = () => {
  barRef.value?.update()
  distanceScrollState[direction] = false
}

watch(
  () => props.noresize,
  (noresize) => {
    if (noresize) {
      stopResizeObserver?.()
      stopWrapResizeObserver?.()
      stopResizeListener?.()
    } else {
      ;({ stop: stopResizeObserver } = useResizeObserver(resizeRef, update))
      ;({ stop: stopWrapResizeObserver } = useResizeObserver(wrapRef, update))
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

onActivated(() => {
  if (wrapRef.value) {
    wrapRef.value.scrollTop = wrapScrollTop
    wrapRef.value.scrollLeft = wrapScrollLeft
  }
})

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
