<template>
  <transition :name="ns.b('fade')">
    <div
      v-show="always || visible"
      ref="instance"
      :class="[ns.e('bar'), ns.is(bar.key)]"
      :style="barStyle"
      @mousedown="clickTrackHandler"
      @click.stop
    >
      <div
        ref="thumb"
        :class="ns.e('thumb')"
        :style="thumbStyle"
        @mousedown="clickThumbHandler"
      />
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, inject, onBeforeUnmount, ref, toRef } from 'vue'
import { useEventListener } from '@vueuse/core'
import { isClient, throwError } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { scrollbarContextKey } from './constants'
import { BAR_MAP, GAP, renderThumbStyle } from './util'

import type { ThumbProps } from './thumb'

const COMPONENT_NAME = 'Thumb'
const props = defineProps<ThumbProps>()

const scrollbar = inject(scrollbarContextKey)
const ns = useNamespace('scrollbar')

if (!scrollbar) throwError(COMPONENT_NAME, 'can not inject scrollbar context')

const instance = ref<HTMLDivElement>()
const thumb = ref<HTMLDivElement>()

const thumbState = ref<Partial<Record<'X' | 'Y', number>>>({})
const visible = ref(false)

let cursorDown = false
let cursorLeave = false
let baseScrollHeight = 0
let baseScrollWidth = 0
let originalOnSelectStart:
  | ((this: GlobalEventHandlers, ev: Event) => any)
  | null = isClient ? document.onselectstart : null

const bar = computed(() => BAR_MAP[props.vertical ? 'vertical' : 'horizontal'])
const hasVerticalGap = computed(
  () => props.vertical && ((props.startGap ?? 0) > 0 || (props.endGap ?? 0) > 0)
)

const barStyle = computed(() => {
  if (!props.vertical) return undefined

  return {
    top: `${GAP / 2 + (props.startGap ?? 0)}px`,
    bottom: `${GAP / 2 + (props.endGap ?? 0)}px`,
  }
})

const thumbStyle = computed(() =>
  renderThumbStyle({
    size: props.size,
    move: props.move,
    bar: bar.value,
  })
)

const offsetRatio = computed(
  () =>
    // offsetRatioX = original width of thumb / current width of thumb / ratioX
    // offsetRatioY = original height of thumb / current height of thumb / ratioY
    // instance height = wrap height - GAP
    instance.value![bar.value.offset] ** 2 /
    scrollbar.wrapElement![bar.value.scrollSize] /
    props.ratio /
    thumb.value![bar.value.offset]
)

const getScrollDistance = (thumbPosition: number, scrollSize: number) => {
  if (!instance.value || !thumb.value || !scrollbar.wrapElement) return 0

  if (!hasVerticalGap.value) {
    const thumbPositionPercentage =
      (thumbPosition * 100 * offsetRatio.value) /
      instance.value[bar.value.offset]

    return (thumbPositionPercentage * scrollSize) / 100
  }

  const trackSize = instance.value[bar.value.offset]
  const thumbSize = thumb.value[bar.value.offset]
  const thumbRange = trackSize - thumbSize
  if (thumbRange <= 0) return 0

  const viewportSize = scrollbar.wrapElement[bar.value.offset] - GAP
  const scrollRange = scrollSize - viewportSize

  return (thumbPosition / thumbRange) * scrollRange
}

const clickThumbHandler = (e: MouseEvent) => {
  // prevent click event of middle and right button
  e.stopPropagation()
  if (e.ctrlKey || [1, 2].includes(e.button)) return

  window.getSelection()?.removeAllRanges()
  startDrag(e)

  const el = e.currentTarget as HTMLDivElement
  if (!el) return
  thumbState.value[bar.value.axis] =
    el[bar.value.offset] -
    (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction])
}

const clickTrackHandler = (e: MouseEvent) => {
  if (!thumb.value || !instance.value || !scrollbar.wrapElement) return

  const offset = Math.abs(
    (e.target as HTMLElement).getBoundingClientRect()[bar.value.direction] -
      e[bar.value.client]
  )
  const thumbHalf = thumb.value[bar.value.offset] / 2

  scrollbar.wrapElement[bar.value.scroll] = getScrollDistance(
    offset - thumbHalf,
    scrollbar.wrapElement[bar.value.scrollSize]
  )
}

const startDrag = (e: MouseEvent) => {
  e.stopImmediatePropagation()
  cursorDown = true
  baseScrollHeight = scrollbar.wrapElement!.scrollHeight
  baseScrollWidth = scrollbar.wrapElement!.scrollWidth
  document.addEventListener('mousemove', mouseMoveDocumentHandler)
  document.addEventListener('mouseup', mouseUpDocumentHandler)
  originalOnSelectStart = document.onselectstart
  document.onselectstart = () => false
}

const mouseMoveDocumentHandler = (e: MouseEvent) => {
  if (!instance.value || !thumb.value) return
  if (cursorDown === false) return

  const prevPage = thumbState.value[bar.value.axis]
  if (!prevPage) return

  const offset =
    (instance.value.getBoundingClientRect()[bar.value.direction] -
      e[bar.value.client]) *
    -1
  const thumbClickPosition = thumb.value[bar.value.offset] - prevPage

  if (bar.value.scroll === 'scrollLeft') {
    scrollbar.wrapElement![bar.value.scroll] = getScrollDistance(
      offset - thumbClickPosition,
      baseScrollWidth
    )
  } else {
    scrollbar.wrapElement![bar.value.scroll] = getScrollDistance(
      offset - thumbClickPosition,
      baseScrollHeight
    )
  }
}

const mouseUpDocumentHandler = () => {
  cursorDown = false
  thumbState.value[bar.value.axis] = 0
  document.removeEventListener('mousemove', mouseMoveDocumentHandler)
  document.removeEventListener('mouseup', mouseUpDocumentHandler)
  restoreOnselectstart()
  if (cursorLeave) visible.value = false
}

const mouseMoveScrollbarHandler = () => {
  cursorLeave = false
  visible.value = !!props.size
}

const mouseLeaveScrollbarHandler = () => {
  cursorLeave = true
  visible.value = cursorDown
}

onBeforeUnmount(() => {
  restoreOnselectstart()
  document.removeEventListener('mouseup', mouseUpDocumentHandler)
})

const restoreOnselectstart = () => {
  if (document.onselectstart !== originalOnSelectStart)
    document.onselectstart = originalOnSelectStart
}

useEventListener(
  toRef(scrollbar, 'scrollbarElement'),
  'mousemove',
  mouseMoveScrollbarHandler
)
useEventListener(
  toRef(scrollbar, 'scrollbarElement'),
  'mouseleave',
  mouseLeaveScrollbarHandler
)
</script>
