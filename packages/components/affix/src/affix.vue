<template>
  <div ref="root" class="el-affix" :style="rootStyle">
    <div :class="{ 'el-affix--fixed': state.fixed }" :style="affixStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  shallowRef,
  watch,
} from 'vue'
import { useEventListener, useResizeObserver } from '@vueuse/core'
import { getScrollContainer } from '@element-plus/utils/dom'
import { affixEmits, affixProps } from './affix'

import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'ElAffix',

  props: affixProps,
  emits: affixEmits,

  setup(props, { emit }) {
    const target = shallowRef<HTMLElement>()
    const root = shallowRef<HTMLDivElement>()
    const scrollContainer = shallowRef<HTMLElement | Window>()

    const state = reactive({
      fixed: false,
      height: 0, // height of root
      width: 0, // width of root
      scrollTop: 0, // scrollTop of documentElement
      clientHeight: 0, // clientHeight of documentElement
      transform: 0,
    })

    const rootStyle = computed<CSSProperties>(() => {
      return {
        height: state.fixed ? `${state.height}px` : '',
        width: state.fixed ? `${state.width}px` : '',
      }
    })

    const affixStyle = computed<CSSProperties | undefined>(() => {
      if (!state.fixed) return

      const offset = props.offset ? `${props.offset}px` : 0
      const transform = state.transform
        ? `translateY(${state.transform}px)`
        : ''

      return {
        height: `${state.height}px`,
        width: `${state.width}px`,
        top: props.position === 'top' ? offset : '',
        bottom: props.position === 'bottom' ? offset : '',
        transform,
        zIndex: props.zIndex,
      }
    })

    const update = () => {
      if (!root.value || !target.value || !scrollContainer.value) return

      const rootRect = root.value.getBoundingClientRect()
      const targetRect = target.value.getBoundingClientRect()
      state.height = rootRect.height
      state.width = rootRect.width
      state.scrollTop =
        scrollContainer.value instanceof Window
          ? document.documentElement.scrollTop
          : scrollContainer.value.scrollTop
      state.clientHeight = document.documentElement.clientHeight

      if (props.position === 'top') {
        if (props.target) {
          const difference = targetRect.bottom - props.offset - state.height
          state.fixed = props.offset > rootRect.top && targetRect.bottom > 0
          state.transform = difference < 0 ? difference : 0
        } else {
          state.fixed = props.offset > rootRect.top
        }
      } else {
        if (props.target) {
          const difference =
            state.clientHeight - targetRect.top - props.offset - state.height
          state.fixed =
            state.clientHeight - props.offset < rootRect.bottom &&
            state.clientHeight > targetRect.top
          state.transform = difference < 0 ? -difference : 0
        } else {
          state.fixed = state.clientHeight - props.offset < rootRect.bottom
        }
      }
    }

    const onScroll = () => {
      update()

      emit('scroll', {
        scrollTop: state.scrollTop,
        fixed: state.fixed,
      })
    }

    watch(
      () => state.fixed,
      () => {
        emit('change', state.fixed)
      }
    )

    onMounted(() => {
      if (props.target) {
        target.value =
          document.querySelector<HTMLElement>(props.target) ?? undefined
        if (!target.value) {
          throw new Error(`target is not existed: ${props.target}`)
        }
      } else {
        target.value = document.documentElement
      }
      scrollContainer.value = getScrollContainer(root.value!)
    })

    useEventListener(scrollContainer, 'scroll', onScroll)
    useResizeObserver(root, () => update())

    return {
      root,
      state,
      rootStyle,
      affixStyle,
    }
  },
})
</script>
