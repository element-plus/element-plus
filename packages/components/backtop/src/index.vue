<template>
  <transition name="el-fade-in">
    <div
      v-if="visible"
      :style="{
        'right': styleRight,
        'bottom': styleBottom
      }"
      class="el-backtop"
      @click.stop="handleClick"
    >
      <slot>
        <i class="el-icon-caret-top"></i>
      </slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeUnmount } from 'vue'
import throttle from 'lodash/throttle'
import { on, off } from '@element-plus/utils/dom'
import { easeInOutCubic } from '@element-plus/utils/animation'
import throwError from '@element-plus/utils/error'

interface IElBacktopProps {
  visibilityHeight: number
  target: string
  right: number
  bottom: number
}

export default defineComponent({
  name: 'ElBacktop',
  props: {
    visibilityHeight: {
      type: Number,
      default: 200,
    },
    target: {
      type: String,
      default: '',
    },
    right: {
      type: Number,
      default: 40,
    },
    bottom: {
      type: Number,
      default: 40,
    },
  },
  emits: ['click'],
  setup(props: IElBacktopProps, ctx) {
    const el = ref(null)
    const container = ref(null)
    const visible = ref(false)
    const styleBottom = computed(() => `${props.bottom}px`)
    const styleRight = computed(() => `${props.right}px`)
    const scope = 'ElBackTop'

    const scrollToTop = () => {
      const beginTime = Date.now()
      const beginValue = el.value.scrollTop
      const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16))
      const frameFunc = () => {
        const progress = (Date.now() - beginTime) / 500
        if (progress < 1) {
          el.value.scrollTop = beginValue * (1 - easeInOutCubic(progress))
          rAF(frameFunc)
        } else {
          el.value.scrollTop = 0
        }
      }
      rAF(frameFunc)
    }
    const onScroll = () => {
      visible.value = el.value.scrollTop >= props.visibilityHeight
    }
    const handleClick = event => {
      scrollToTop()
      ctx.emit('click', event)
    }

    const throttledScrollHandler = throttle(onScroll, 300)

    onMounted(() => {
      container.value = document
      el.value = document.documentElement
      if (props.target) {
        el.value = document.querySelector(props.target)
        if (!el.value) {
          throwError(scope, `target is not existed: ${props.target}`)
        }
        container.value = el.value
      }
      on(container.value, 'scroll', throttledScrollHandler)
    })
    onBeforeUnmount(() => {
      off(container.value, 'scroll', throttledScrollHandler)
    })

    return {
      el,
      container,
      visible,
      styleBottom,
      styleRight,
      handleClick,
    }
  },
})
</script>
