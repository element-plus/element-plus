<template>
  <div ref="root" class="el-affix" :style="rootStyle">
    <div :class="{'el-affix--fixed': state.fixed}" :style="affixStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, onMounted, PropType, reactive, ref, watch } from 'vue'
import { getScrollContainer, off, on } from '@element-plus/utils/dom'
import { addResizeListener, removeResizeListener } from '@element-plus/utils/resize-event'

type Position = 'top' | 'bottom'

export default defineComponent({
  name: 'ElAffix',
  props: {
    zIndex: {
      type: Number,
      default: 100,
    },
    target: {
      type: String,
      default: '',
    },
    offset: {
      type: Number,
      default: 0,
    },
    position: {
      type: String as PropType<Position>,
      default: 'top',
    },
  },
  emits: ['scroll', 'change'],
  setup(props, { emit }) {
    const target = ref(null)
    const root = ref(null)
    const scrollContainer = ref(null)

    const state = reactive({
      fixed: false,
      height: 0, // height of root
      width: 0, // width of root
      scrollTop: 0, // scrollTop of documentElement
      clientHeight: 0, // clientHeight of documentElement
      transform: 0,
    })

    const rootStyle = computed(() => {
      return {
        height: state.fixed ? `${state.height}px` : '',
        width: state.fixed ? `${state.width}px` : '',
      }
    })

    const affixStyle = computed(() => {
      if (!state.fixed) {
        return
      }
      const offset = props.offset ? `${props.offset}px` : 0
      const transform = state.transform ? `translateY(${state.transform}px)` : ''

      return {
        height: `${state.height}px`,
        width: `${state.width}px`,
        top: props.position === 'top' ? offset : '',
        bottom: props.position === 'bottom' ? offset : '',
        transform: transform,
        zIndex: props.zIndex,
      }
    })

    const update = () => {
      const rootRect = root.value.getBoundingClientRect()
      const targetRect = target.value.getBoundingClientRect()
      state.height = rootRect.height
      state.width = rootRect.width
      state.scrollTop = scrollContainer.value === window ? document.documentElement.scrollTop : scrollContainer.value.scrollTop
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
          const difference = state.clientHeight - targetRect.top - props.offset - state.height
          state.fixed = state.clientHeight - props.offset < rootRect.bottom && state.clientHeight > targetRect.top
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

    watch(() => state.fixed, () => {
      emit('change', state.fixed)
    })

    onMounted(() => {
      if (props.target) {
        target.value = document.querySelector(props.target)
        if (!target.value) {
          throw new Error(`target is not existed: ${props.target}`)
        }
      } else {
        target.value = document.documentElement
      }
      scrollContainer.value = getScrollContainer(root.value)
      on(scrollContainer.value, 'scroll', onScroll)
      addResizeListener(root.value, update)
    })

    onBeforeUnmount(() => {
      off(scrollContainer.value, 'scroll', onScroll)
      removeResizeListener(root.value, update)
    })

    return {
      root,
      state,
      rootStyle,
      affixStyle,
      update,
    }
  },
})
</script>
