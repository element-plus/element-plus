<template>
  <transition :name="ns.b('fade')">
    <div
      v-show="always || visible"
      ref="instance"
      :class="[ns.e('bar'), ns.is(bar.key)]"
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
import { clamp, useEventListener } from '@vueuse/core'
import { getStyle, isClient, throwError } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { scrollbarContextKey } from './constants'
import { BAR_MAP } from './util'

import type { CSSProperties } from 'vue'
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
  ((this: GlobalEventHandlers, ev: Event) => any) | null = isClient
  ? document.onselectstart
  : null

const bar = computed(() => BAR_MAP[props.vertical ? 'vertical' : 'horizontal'])

const thumbStyle = computed<CSSProperties>(() => {
  const move = props.move ?? 0
  // `top`/`left` percentages resolve against the track and `translate` ones
  // against the thumb, so the thumb travels from the start to the end of the
  // track whatever their actual sizes are.
  return {
    [bar.value.size]: props.size,
    [bar.value.direction]: `${move}%`,
    transform: `translate${bar.value.axis}(${-move}%)`,
  }
})

// The track content box along the axis, which the thumb is laid out in
const getTrackBox = (track: HTMLDivElement) => {
  const [paddingStart, paddingEnd] = (
    props.vertical
      ? [getStyle(track, 'paddingTop'), getStyle(track, 'paddingBottom')]
      : [getStyle(track, 'paddingLeft'), getStyle(track, 'paddingRight')]
  ).map((padding) => Number.parseFloat(padding) || 0)
  const [border, clientSize] = props.vertical
    ? [track.clientTop, track.clientHeight]
    : [track.clientLeft, track.clientWidth]

  return {
    start:
      track.getBoundingClientRect()[bar.value.direction] +
      border +
      paddingStart,
    size: clientSize - paddingStart - paddingEnd,
  }
}

const scrollToThumbPosition = (
  thumbStart: number,
  trackSize: number,
  scrollSize: number
) => {
  const wrap = scrollbar.wrapElement
  if (!wrap || !thumb.value) return

  const travel = trackSize - thumb.value[bar.value.offset]
  const maxScroll =
    scrollSize - (props.vertical ? wrap.clientHeight : wrap.clientWidth)
  if (travel <= 0 || maxScroll <= 0) return

  wrap[bar.value.scroll] = clamp(thumbStart / travel, 0, 1) * maxScroll
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

  const track = getTrackBox(instance.value)
  const offset = e[bar.value.client] - track.start
  const thumbHalf = thumb.value[bar.value.offset] / 2

  scrollToThumbPosition(
    offset - thumbHalf,
    track.size,
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

  const track = getTrackBox(instance.value)
  const offset = e[bar.value.client] - track.start
  const thumbClickPosition = thumb.value[bar.value.offset] - prevPage

  scrollToThumbPosition(
    offset - thumbClickPosition,
    track.size,
    props.vertical ? baseScrollHeight : baseScrollWidth
  )
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
