<template>
  <transition name="el-scrollbar-fade">
    <div
      v-show="always || visible"
      ref="instance"
      :class="['el-scrollbar__bar', 'is-' + bar.key]"
      @mousedown="clickTrackHandler"
    >
      <div
        ref="thumb"
        class="el-scrollbar__thumb"
        :style="thumbStyle"
        @mousedown="clickThumbHandler"
      ></div>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  onBeforeUnmount,
  ref,
  toRef,
} from 'vue'
import { useEventListener } from '@vueuse/core'
import { scrollbarContextKey } from '@element-plus/tokens'
import { throwError } from '@element-plus/utils/error'
import { BAR_MAP, renderThumbStyle } from './util'

import { barProps } from './bar'

const COMPONENT_NAME = 'Bar'
export default defineComponent({
  name: COMPONENT_NAME,
  props: barProps,

  setup(props) {
    const scrollbar = inject(scrollbarContextKey)
    if (!scrollbar)
      throwError(COMPONENT_NAME, 'can not inject scrollbar context')

    const instance = ref<HTMLDivElement>()
    const thumb = ref<HTMLDivElement>()

    const barStore = ref({})
    const visible = ref(false)

    let cursorDown = false
    let cursorLeave = false
    let onselectstartStore:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null = null

    const bar = computed(
      () => BAR_MAP[props.vertical ? 'vertical' : 'horizontal']
    )

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

    const clickThumbHandler = (e: MouseEvent) => {
      // prevent click event of middle and right button
      e.stopPropagation()
      if (e.ctrlKey || [1, 2].includes(e.button)) return

      window.getSelection()?.removeAllRanges()
      startDrag(e)

      const el = e.currentTarget as HTMLDivElement
      if (!el) return
      barStore.value[bar.value.axis] =
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
      const thumbPositionPercentage =
        ((offset - thumbHalf) * 100 * offsetRatio.value) /
        instance.value[bar.value.offset]

      scrollbar.wrapElement[bar.value.scroll] =
        (thumbPositionPercentage *
          scrollbar.wrapElement[bar.value.scrollSize]) /
        100
    }

    const startDrag = (e: MouseEvent) => {
      e.stopImmediatePropagation()
      cursorDown = true
      document.addEventListener('mousemove', mouseMoveDocumentHandler)
      document.addEventListener('mouseup', mouseUpDocumentHandler)
      onselectstartStore = document.onselectstart
      document.onselectstart = () => false
    }

    const mouseMoveDocumentHandler = (e: MouseEvent) => {
      if (!instance.value || !thumb.value) return
      if (cursorDown === false) return

      const prevPage = barStore.value[bar.value.axis]
      if (!prevPage) return

      const offset =
        (instance.value.getBoundingClientRect()[bar.value.direction] -
          e[bar.value.client]) *
        -1
      const thumbClickPosition = thumb.value[bar.value.offset] - prevPage
      const thumbPositionPercentage =
        ((offset - thumbClickPosition) * 100 * offsetRatio.value) /
        instance.value[bar.value.offset]
      scrollbar.wrapElement[bar.value.scroll] =
        (thumbPositionPercentage *
          scrollbar.wrapElement[bar.value.scrollSize]) /
        100
    }

    const mouseUpDocumentHandler = () => {
      cursorDown = false
      barStore.value[bar.value.axis] = 0
      document.removeEventListener('mousemove', mouseMoveDocumentHandler)
      document.removeEventListener('mouseup', mouseUpDocumentHandler)
      document.onselectstart = onselectstartStore
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

    onBeforeUnmount(() =>
      document.removeEventListener('mouseup', mouseUpDocumentHandler)
    )

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

    return {
      instance,
      thumb,
      bar,
      thumbStyle,
      visible,
      clickTrackHandler,
      clickThumbHandler,
    }
  },
})
</script>
