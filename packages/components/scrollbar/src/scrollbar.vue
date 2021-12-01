<template>
  <div ref="scrollbar$" class="el-scrollbar">
    <div
      ref="wrap$"
      :class="[
        wrapClass,
        'el-scrollbar__wrap',
        native ? '' : 'el-scrollbar__wrap--hidden-default',
      ]"
      :style="style"
      @scroll="handleScroll"
    >
      <component
        :is="tag"
        ref="resize$"
        :class="['el-scrollbar__view', viewClass]"
        :style="viewStyle"
      >
        <slot />
      </component>
    </div>
    <template v-if="!native">
      <bar :move="moveX" :ratio="ratioX" :size="sizeWidth" :always="always" />
      <bar
        :move="moveY"
        :ratio="ratioY"
        :size="sizeHeight"
        vertical
        :always="always"
      />
    </template>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  provide,
  ref,
  watch,
  reactive,
} from 'vue'
import { useResizeObserver, useEventListener } from '@vueuse/core'
import { addUnit, isNumber } from '@element-plus/utils/util'
import { debugWarn } from '@element-plus/utils/error'
import { scrollbarContextKey } from '@element-plus/tokens'
import Bar from './bar.vue'

import { scrollbarProps, scrollbarEmits } from './scrollbar'
import type { StyleValue, CSSProperties } from 'vue'

export default defineComponent({
  name: 'ElScrollbar',
  components: {
    Bar,
  },
  props: scrollbarProps,
  emits: scrollbarEmits,

  setup(props, { emit }) {
    let stopResizeObserver: (() => void) | undefined = undefined
    let stopResizeListener: (() => void) | undefined = undefined

    const scrollbar$ = ref<HTMLDivElement>()
    const wrap$ = ref<HTMLDivElement>()
    const resize$ = ref<HTMLElement>()

    const sizeWidth = ref('0')
    const sizeHeight = ref('0')
    const moveX = ref(0)
    const moveY = ref(0)
    const ratioY = ref(1)
    const ratioX = ref(1)
    const SCOPE = 'ElScrollbar'
    const GAP = 4 // top 2 + bottom 2 of bar instance

    const style = computed<StyleValue>(() => {
      const style: CSSProperties = {}
      if (props.height) style.height = addUnit(props.height)
      if (props.maxHeight) style.maxHeight = addUnit(props.maxHeight)
      return [props.wrapStyle, style]
    })

    const handleScroll = () => {
      if (wrap$.value) {
        const offsetHeight = wrap$.value.offsetHeight - GAP
        const offsetWidth = wrap$.value.offsetWidth - GAP

        moveY.value =
          ((wrap$.value.scrollTop * 100) / offsetHeight) * ratioY.value
        moveX.value =
          ((wrap$.value.scrollLeft * 100) / offsetWidth) * ratioX.value

        emit('scroll', {
          scrollTop: wrap$.value.scrollTop,
          scrollLeft: wrap$.value.scrollLeft,
        })
      }
    }

    const setScrollTop = (value: number) => {
      if (!isNumber(value)) {
        debugWarn(SCOPE, 'value must be a number')
        return
      }
      wrap$.value!.scrollTop = value
    }

    const setScrollLeft = (value: number) => {
      if (!isNumber(value)) {
        debugWarn(SCOPE, 'value must be a number')
        return
      }
      wrap$.value!.scrollLeft = value
    }

    const update = () => {
      if (!wrap$.value) return

      const offsetHeight = wrap$.value.offsetHeight - GAP
      const offsetWidth = wrap$.value.offsetWidth - GAP

      const originalHeight = offsetHeight ** 2 / wrap$.value.scrollHeight
      const originalWidth = offsetWidth ** 2 / wrap$.value.scrollWidth
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
          ;({ stop: stopResizeObserver } = useResizeObserver(resize$, update))
          stopResizeListener = useEventListener('resize', update)
        }
      },
      { immediate: true }
    )

    provide(
      scrollbarContextKey,
      reactive({
        scrollbarElement: scrollbar$,
        wrapElement: wrap$,
      })
    )

    onMounted(() => {
      if (!props.native) nextTick(() => update())
    })

    return {
      scrollbar$,
      wrap$,
      resize$,

      moveX,
      moveY,
      ratioX,
      ratioY,
      sizeWidth,
      sizeHeight,
      style,
      update,
      handleScroll,
      setScrollTop,
      setScrollLeft,
    }
  },
})
</script>
