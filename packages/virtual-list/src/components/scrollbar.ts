import { computed, defineComponent, ref, reactive, onMounted, onBeforeUnmount, watch, h, withModifiers } from 'vue'
import { on, off } from '@element-plus/utils/dom'
import { rAF, cAF } from '@element-plus/utils/raf'
import isServer from '@element-plus/utils/isServer'
import { NOOP } from '@vue/shared'

import { DefaultScrollBarProps, SCROLLBAR_MIN_SIZE, HORIZONTAL, ScrollbarDirKey } from '../defaults'
import { renderThumbStyle } from '../utils'
import { BAR_MAP } from '../../../scrollbar/src/util'

import type { CSSProperties } from 'vue'

type SyntheticMouseEvent = TouchEvent | MouseEvent

const ScrollBar = defineComponent({
  name: 'ElVirtualScrollBar',
  props: DefaultScrollBarProps,
  emits: ['scroll', 'start-move', 'stop-move'],
  setup(props, { emit }) {
    // DOM refs
    const trackRef = ref(null)
    const thumbRef = ref(null)

    // local variables
    let frameHandle: null | number = null
    let onselectstartStore = null

    // data
    const state = reactive({
      isDragging: false,
      traveled: 0,
    })

    const bar = computed(() => BAR_MAP[props.layout])

    const trackStyle = computed<CSSProperties>(() => ({
      display: props.visible ? null : 'none',
      position: 'absolute',
      width: HORIZONTAL === props.layout ? '100%' : '6px',
      height: HORIZONTAL === props.layout ? '6px' : '100%',
      [ScrollbarDirKey[props.layout]]: '2px',
      right: '2px',
      bottom: '2px',
      borderRadius: '4px',
    }))

    const thumbSize = computed(() => {

      if (props.ratio >= 100) {
        return Number.POSITIVE_INFINITY
      }

      if (props.ratio >= 50) {
        return props.ratio * props.clientSize / 100
      }

      const SCROLLBAR_MAX_SIZE = props.clientSize / 3
      return Math.floor(
        Math.min(
          Math.max(props.ratio * props.clientSize, SCROLLBAR_MIN_SIZE),
          SCROLLBAR_MAX_SIZE,
        ),
      )
    })

    // const sizeRange = computed(() => props.size - thumbSize.value)

    const thumbStyle = computed<CSSProperties>(() => {

      if (!Number.isFinite(thumbSize.value)) {
        return {
          display: 'none',
        }
      }

      const thumb = `${thumbSize.value}px`

      const style: CSSProperties = renderThumbStyle({
        bar: bar.value,
        size: thumb,
        move: state.traveled,
      }, props.layout)

      return style
    })

    const totalSteps = computed(() => Math.floor((props.clientSize - thumbSize.value - 4)))

    const attachEvents = () => {

      on(window, 'mousemove', onMouseMove)
      on(window, 'mouseup', onMouseUp)

      const thumbEl = thumbRef.value

      onselectstartStore = document.onselectstart
      document.onselectstart = () => false

      on(thumbEl, 'touchmove', onMouseMove)
      on(thumbEl, 'touchend', onMouseUp)
    }

    const detachEvents = () => {
      off(window, 'mousemove', onMouseMove)
      off(window, 'mouseup', onMouseUp)

      document.onselectstart = onselectstartStore
      onselectstartStore = null

      const thumbEl = thumbRef.value
      off(thumbEl, 'touchmove', onMouseMove)
      off(thumbEl, 'touchend', onMouseUp)
    }

    const onThumbMouseDown = (e: SyntheticMouseEvent) => {

      e.stopImmediatePropagation()
      if (e.ctrlKey || [1, 2].includes((e as MouseEvent).button)) {
        return
      }

      state.isDragging = true
      state[bar.value.axis] = (
        e.currentTarget[bar.value.offset]
        - (
          e[bar.value.client]
            - (e.currentTarget as HTMLElement).getBoundingClientRect()[bar.value.direction])
      )

      emit('start-move')
      attachEvents()
    }

    const onMouseUp = () => {
      state.isDragging = false
      state[bar.value.axis] = 0
      emit('stop-move')
      detachEvents()
    }

    const onMouseMove = (e: SyntheticMouseEvent) => {
      const { isDragging } = state
      if (!isDragging) return

      const prevPage = state[bar.value.axis]
      if (!prevPage) return

      cAF(frameHandle)
      // using the current track's offset top/left - the current pointer's clientY/clientX
      // to get the relative position of the pointer to the track.
      const offset = (
        (
          trackRef.value.getBoundingClientRect()[bar.value.direction]
          - e[bar.value.client]) * -1
      )

      // find where the thumb was clicked on.
      const thumbClickPosition = thumbRef.value[bar.value.offset] - prevPage
      /**
       *  +--------------+                                   +--------------+
       *  |              -  <--------- thumb.offsetTop       |              |
       *  |             |+|             <--+                 |              |
       *  |              -                 |                 |              |
       *  |   Content    |                 |                 |              |
       *  |              |                 |                 |              |
       *  |              |                 |                 |              |
       *  |              |                 |                 |              -
       *  |              |                 +-->              |             |+|
       *  |              |                                   |              -
       *  +--------------+                                   +--------------+
       */

      // using the current position - prev position to

      const distance = offset - thumbClickPosition
      // get how many steps in total.
      // gap of 2 on top, 2 on bottom, in total 4.
      // using totalSteps ÷ totalSize getting each step's size * distance to get the new
      // scroll offset to scrollTo
      frameHandle = rAF(() => {
        state.traveled =
          Math.max(
            2,
            Math.min(
              distance,
              totalSteps.value, // 2 is the top value
            ),
          )
        emit('scroll', distance, totalSteps.value)
      })
    }

    const onScrollbarTouchStart = (e: Event) => e.preventDefault()

    watch(() => props.scrollFrom, v => {
      // this is simply mapping the current scrollbar offset
      if (state.isDragging) return
      state.traveled = Math.ceil(v * props.clientSize / (props.clientSize / totalSteps.value ))
    })

    onMounted(() => {
      if (isServer) return

      on(trackRef.value, 'touchstart', onScrollbarTouchStart)
      on(thumbRef.value, 'touchstart', onThumbMouseDown)
    })

    onBeforeUnmount(() => {
      off(trackRef.value, 'touchstart', onScrollbarTouchStart)
      detachEvents()
    })

    return () => {
      return h('div', {
        role: 'presentation',
        ref: trackRef,
        class: 'el-virtual-scrollbar',
        style: trackStyle.value,
        onMousedown: withModifiers(NOOP, ['stop', 'prevent']),
      }, h('div', {
        ref: thumbRef,
        class: 'el-scrollbar__thumb',
        style: thumbStyle.value,
        onMousedown: onThumbMouseDown,
      }, null))
    }
  },
})

export default ScrollBar
