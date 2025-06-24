import {
  computed,
  defineComponent,
  h,
  onBeforeUnmount,
  reactive,
  ref,
  unref,
  watch,
  withModifiers,
} from 'vue'
import { BAR_MAP } from '@element-plus/components/scrollbar'
import { cAF, rAF } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { HORIZONTAL, SCROLLBAR_MIN_SIZE, ScrollbarDirKey } from '../defaults'
import { virtualizedScrollbarProps } from '../props'
import { renderThumbStyle } from '../utils'

import type { CSSProperties } from 'vue'

interface ScrollState {
  isDragging: boolean
  traveled: number
  [key: string]: unknown
}

const ScrollBar = defineComponent({
  name: 'ElVirtualScrollBar',
  props: virtualizedScrollbarProps,
  emits: ['scroll', 'start-move', 'stop-move'],
  setup(props, { emit }) {
    const GAP = computed(() => props.startGap + props.endGap) // top 2 + bottom 2 | left 2 + right 2

    const nsVirtualScrollbar = useNamespace('virtual-scrollbar')
    const nsScrollbar = useNamespace('scrollbar')
    // DOM refs
    const trackRef = ref<HTMLElement>()
    const thumbRef = ref<HTMLElement>()

    // local variables
    let frameHandle: null | number = null
    let onselectstartStore: null | typeof document.onselectstart = null

    // data
    const state = reactive<ScrollState>({
      isDragging: false,
      traveled: 0,
    })

    const bar = computed(() => BAR_MAP[props.layout])

    const trackSize = computed(() => props.clientSize! - unref(GAP))

    const trackStyle = computed<CSSProperties>(() => ({
      position: 'absolute',
      width: `${
        HORIZONTAL === props.layout ? trackSize.value : props.scrollbarSize
      }px`,
      height: `${
        HORIZONTAL === props.layout ? props.scrollbarSize : trackSize.value
      }px`,
      [ScrollbarDirKey[props.layout]]: '2px',
      right: '2px',
      bottom: '2px',
      borderRadius: '4px',
    }))

    const thumbSize = computed(() => {
      const ratio = props.ratio!
      if (ratio >= 100) {
        return Number.POSITIVE_INFINITY
      }

      if (ratio >= 50) {
        return (ratio * trackSize.value) / 100
      }

      const SCROLLBAR_MAX_SIZE = trackSize.value / 3
      return Math.floor(
        Math.min(
          Math.max(ratio * trackSize.value, SCROLLBAR_MIN_SIZE),
          SCROLLBAR_MAX_SIZE
        )
      )
    })

    const thumbStyle = computed<CSSProperties>(() => {
      if (!Number.isFinite(thumbSize.value)) {
        return {
          display: 'none',
        }
      }

      const thumb = `${thumbSize.value}px`

      const style = renderThumbStyle(
        {
          bar: bar.value,
          size: thumb,
          move: state.traveled,
        },
        props.layout
      )

      return style
    })

    const totalSteps = computed(() =>
      Math.ceil(props.clientSize! - thumbSize.value - unref(GAP))
    )

    const attachEvents = () => {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)

      const thumbEl = unref(thumbRef)

      if (!thumbEl) return

      onselectstartStore = document.onselectstart
      document.onselectstart = () => false

      thumbEl.addEventListener('touchmove', onMouseMove, { passive: true })
      thumbEl.addEventListener('touchend', onMouseUp)
    }

    const detachEvents = () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)

      document.onselectstart = onselectstartStore
      onselectstartStore = null

      const thumbEl = unref(thumbRef)
      if (!thumbEl) return

      thumbEl.removeEventListener('touchmove', onMouseMove)
      thumbEl.removeEventListener('touchend', onMouseUp)
    }

    const onThumbMouseDown = (e: Event | KeyboardEvent | MouseEvent) => {
      e.stopImmediatePropagation()
      if (
        (e as KeyboardEvent).ctrlKey ||
        [1, 2].includes((e as MouseEvent).button)
      ) {
        return
      }

      state.isDragging = true
      state[bar.value.axis] =
        (e.currentTarget as HTMLElement)[bar.value.offset] -
        ((e as MouseEvent)[bar.value.client] -
          (e.currentTarget as HTMLElement).getBoundingClientRect()[
            bar.value.direction
          ])

      emit('start-move')
      attachEvents()
    }

    const onMouseUp = () => {
      state.isDragging = false
      state[bar.value.axis] = 0
      emit('stop-move')
      detachEvents()
    }

    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      const { isDragging } = state
      if (!isDragging) return
      if (!thumbRef.value || !trackRef.value) return

      const prevPage = state[bar.value.axis]
      if (!prevPage) return

      cAF(frameHandle!)
      // using the current track's offset top/left - the current pointer's clientY/clientX
      // to get the relative position of the pointer to the track.
      const offset =
        (trackRef.value.getBoundingClientRect()[bar.value.direction] -
          (e as MouseEvent)[bar.value.client]) *
        -1

      // find where the thumb was clicked on.
      const thumbClickPosition =
        thumbRef.value[bar.value.offset] - (prevPage as number)
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
        state.traveled = Math.max(0, Math.min(distance, totalSteps.value))
        emit('scroll', distance, totalSteps.value)
      })
    }

    const clickTrackHandler = (e: MouseEvent) => {
      const offset = Math.abs(
        (e.target as HTMLElement).getBoundingClientRect()[bar.value.direction] -
          e[bar.value.client]
      )
      const thumbHalf = thumbRef.value![bar.value.offset] / 2
      const distance = offset - thumbHalf

      state.traveled = Math.max(0, Math.min(distance, totalSteps.value))
      emit('scroll', distance, totalSteps.value)
    }

    watch(
      () => props.scrollFrom,
      (v) => {
        if (state.isDragging) return
        /**
         *  this is simply mapping the current scrollbar offset
         *
         *  formula 1:
         *    v = scrollOffset / (estimatedTotalSize - clientSize)
         *    traveled = v * (clientSize - thumbSize - GAP) --> v * totalSteps
         *
         *  formula 2:
         *    traveled = (v * clientSize) / (clientSize / totalSteps) --> (v * clientSize) * (totalSteps / clientSize) --> v * totalSteps
         */
        state.traveled = Math.ceil(v! * totalSteps.value)
      }
    )

    onBeforeUnmount(() => {
      detachEvents()
    })

    return () => {
      return h(
        'div',
        {
          role: 'presentation',
          ref: trackRef,
          class: [
            nsVirtualScrollbar.b(),
            props.class,
            (props.alwaysOn || state.isDragging) && 'always-on',
          ],
          style: trackStyle.value,
          onMousedown: withModifiers(clickTrackHandler, ['stop', 'prevent']),
          onTouchstartPrevent: onThumbMouseDown,
        },
        h(
          'div',
          {
            ref: thumbRef,
            class: nsScrollbar.e('thumb'),
            style: thumbStyle.value,
            onMousedown: onThumbMouseDown,
          },
          []
        )
      )
    }
  },
})

export default ScrollBar
