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
import { throttle } from 'lodash-es'

interface IElBacktopProps {
  visibilityHeight: number
  target: string
  right: number
  bottom: number
}

const cubic = value => Math.pow(value, 3)
const easeInOutCubic = value => value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2

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
    let el, container
    const visible = ref(false)
    const styleBottom = computed(() => `${props.bottom}px`)
    const styleRight = computed(() => `${props.right}px`)

    const init = () => {
      container = document
      el = document.documentElement
      if (props.target) {
        el = document.querySelector(props.target)
        if (!el) {
          throw new Error(`target is not existed: ${props.target}`)
        }
        container = el
      }
    }
    const scrollToTop = () => {
      const beginTime = Date.now()
      const beginValue = el.scrollTop
      const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16))
      const frameFunc = () => {
        const progress = (Date.now() - beginTime) / 500
        if (progress < 1) {
          el.scrollTop = beginValue * (1 - easeInOutCubic(progress))
          rAF(frameFunc)
        } else {
          el.scrollTop = 0
        }
      }
      rAF(frameFunc)
    }
    const onScroll = () => {
      const scrollTop = el.scrollTop
      visible.value = scrollTop >= props.visibilityHeight
    }
    const handleClick = (event) => {
      scrollToTop()
      ctx.emit('click', event)
    }

    const throttledScrollHandler = throttle(onScroll, 300)

    onMounted(() => {
      init()
      container.addEventListener('scroll', throttledScrollHandler)
    })
    onBeforeUnmount(() => {
      container.removeEventListener('scroll', throttledScrollHandler)
    })

    return {
      visible,
      styleBottom,
      styleRight,
      handleClick,
    }
  },
})
</script>
