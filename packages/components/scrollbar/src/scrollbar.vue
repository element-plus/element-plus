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
let stopResizeListener: (() => void) | undefined = undefined
let wrapScrollTop = 0
let wrapScrollLeft = 0
let direction = '' as ScrollbarDirection
const distanceScrollState = {
  triggerBottom: false,
  triggerTop: false,
  triggerRight: false,
  triggerLeft: false,
}
type distanceScrollStateKey = keyof typeof distanceScrollState

const scrollbarRef = ref<HTMLDivElement>()
const wrapRef = ref<HTMLDivElement>()
const resizeRef = ref<HTMLElement>()
const barRef = ref<BarInstance>()

const wrapStyle = computed<StyleValue>(() => {
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

const shouldSkipDirection = (direction: ScrollbarDirection) => {
  return (
    (direction === 'top' && distanceScrollState.triggerTop) ||
    (direction === 'bottom' && distanceScrollState.triggerBottom) ||
    (direction === 'left' && distanceScrollState.triggerLeft) ||
    (direction === 'right' && distanceScrollState.triggerRight)
  )
}

const updateTriggerStatus = (arrivedStates: Record<string, boolean>) => {
  const _updateTriggerState = (to: string, from: string) => {
    const arrived = arrivedStates[to]
    const oppositeArrived = arrivedStates[from]
    const triggerKey = `trigger${
      to[0].toUpperCase() + to.slice(1)
    }` as distanceScrollStateKey
    const oppositeTriggerKey = `trigger${
      from[0].toUpperCase() + from.slice(1)
    }` as distanceScrollStateKey
    if (arrived && !distanceScrollState[triggerKey]) {
      distanceScrollState[triggerKey] = true
    }
    if (!oppositeArrived && distanceScrollState[oppositeTriggerKey]) {
      distanceScrollState[oppositeTriggerKey] = false
    }
  }
  // scroll bottom to top
  if (direction === 'top') {
    _updateTriggerState('top', 'bottom')
  }
  if (direction === 'bottom') {
    _updateTriggerState('bottom', 'top')
  }
  if (direction === 'left') {
    _updateTriggerState('left', 'right')
  }
  if (direction === 'right') {
    _updateTriggerState('right', 'left')
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
    if (props.distance) {
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
